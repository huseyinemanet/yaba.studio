# yaba.studio

Static website for `yaba.studio`.

The site is intentionally small: plain HTML, CSS, JavaScript, and image assets. There is no framework, package manager, build step, or generated output directory.

## Local Preview

Run a local static server from the project root:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173/
```

Avoid opening `index.html` directly with `file://`; browser security rules can block some local asset behavior.

## Files

- `index.html` contains the page markup, metadata, structured data, and accessibility landmarks.
- `styles.css` contains the visual design, responsive layout, accessibility states, and logo glitch treatment.
- `script.js` handles the subtle mouse-reactive logo glitch.
- `assets/` contains the logo, favicons, app icons, and social preview images.
- `DEPLOYMENT_NOTES.md` contains deployment and DNS notes.

## Deployment

Deploy as a plain static site. For Cloudflare Pages direct upload, upload the folder contents as-is and leave the build command empty.

## Checks

Useful local checks:

```sh
npx --yes html-validate index.html
node --check script.js
npx --yes pa11y http://127.0.0.1:4173/
```
