# PK Tech Hub — GitHub + Netlify + Decap CMS (Ready)
Live in one go. Upload these files to the repo root and connect Netlify.

## Quick steps
1) Create repo `pktechhub-site` under `pankajkamboz02-wq` (public).
2) Upload all files in this ZIP **to the repo root** (not the ZIP itself).
3) Netlify → Import from Git → select `pktechhub-site`.
   - Branch: `main`
   - Build command: *(blank)*
   - Publish directory: `.`
4) Open site URL → `/admin` → Login with GitHub.
5) Create some Products/Offers/Gallery and publish.

## Auto-render (already included)
- GitHub Action builds `/static/data/*.json` from `/content/**/*.md` on each push.
- Frontend script in `index.html` auto-renders Products/Offers/Gallery from JSON.

## Customize
- Replace map embed in `index.html` with your exact location.
- Upload a `favicon.png` to `/static/uploads/` (already referenced).
- Style tweaks in the `<style>` block.
