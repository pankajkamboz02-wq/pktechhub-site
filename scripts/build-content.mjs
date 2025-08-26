import fg from 'fast-glob';
import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

const collections = [
  { src: 'content/products/**/*.md', out: 'static/data/products.json' },
  { src: 'content/offers/**/*.md',   out: 'static/data/offers.json' },
  { src: 'content/gallery/**/*.md',  out: 'static/data/gallery.json' },
];

async function readItems(pattern) {
  const files = await fg(pattern);
  const items = [];
  for (const f of files) {
    const raw = await fs.readFile(f, 'utf8');
    const { data, content } = matter(raw);
    const slug = path.basename(f, path.extname(f));
    items.push({ slug, ...data, body: content.trim() });
  }
  items.sort((a, b) => (new Date(b.date||0) - new Date(a.date||0)));
  return items;
}

async function ensureDir(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

for (const {src, out} of collections) {
  const items = await readItems(src);
  await ensureDir(out);
  await fs.writeFile(out, JSON.stringify(items, null, 2), 'utf8');
  console.log(`Built ${out} (${items.length})`);
}
