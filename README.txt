HOW TO USE (pktechhub.netlify.app)
----------------------------------
1) In your repo 'pktechhub-site', upload the 'admin' folder from this ZIP.
   Files:
     - admin/index.html
     - admin/config.yml

2) Commit changes and let Netlify deploy.

3) Open:
   https://pktechhub.netlify.app/admin/index.html?nocache=1

If you still see OAuth error:
- In Netlify → Site settings → Domain management → Change site name to a temporary name,
  save, then change it back to 'pktechhub'. Re-deploy and try again.
- Make sure https://pktechhub.netlify.app/admin/config.yml loads in the browser.
