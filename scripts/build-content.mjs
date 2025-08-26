import fg from 'fast-glob';
import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

const collections = [
  { name: 'products', src: 'content/products/**/*.md', out: 'static/data/products.json' },
  { name: 'offers',   src: 'content/offers/**/*.md',   out: 'static/data/offers.json' },
  { name: 'gallery',  src: 'content/gallery/**/*.md',  out: 'static/data/gallery.json' },
];

async function readCollection({src}) {
  const files = await fg(src, { dot: false });
  const items = [];
  for (const file of files) {
    const raw = await fs.readFile(file, 'utf8');
    const { data, content } = matter(raw);
    const slug = path.basename(file, path.extname(file));
    items.push({ slug, ...data, body: content.trim() });
  }
  items.sort((a,b) => (new Date(b.date||0)) - (new Date(a.date||0)));
  return items;
}

async function ensureDir(p) { await fs.mkdir(path.dirname(p), { recursive: true }); }

for (const col of collections) {
  const items = await readCollection(col);
  await ensureDir(col.out);
  await fs.writeFile(col.out, JSON.stringify(items, null, 2), 'utf8');
  console.log(`Built ${col.out} (${items.length} items)`);
}
