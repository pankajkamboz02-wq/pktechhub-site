PK TECH HUB — MINIMAL ADMIN FIX
===================================
Purpose: Fix blank /admin by pinning stable Decap CMS + valid config.yml.

How to use:
1) In your repo 'pktechhub-site', create/replace the folder:
   /admin

2) Upload BOTH files from this ZIP:
   - admin/index.html
   - admin/config.yml

3) Commit changes.
4) Open: https://pktechhub.netlify.app/admin/index.html?nocache=1

If you still see blank:
- Visit https://pktechhub.netlify.app/admin/config.yml and ensure you can see YAML.
- On GitHub, remove old OAuth app authorizations (Settings → Applications) for Netlify/Decap, then retry.
