# Creator Toolkit

An installable PWA with 14 on-device tools for social content — image compression,
social-size resizing, cropping, format conversion, watermarking, borders, video frame
grabs, caption counting, hashtag cleaning, case conversion, text cleaning, bio fonts,
colour palettes and platform safe-zone previews.

Everything runs locally in the browser. No uploads, no accounts, no server.

## Install

- **iPhone** — open the site in Safari, tap Share, then Add to Home Screen.
- **Mac** — open in Chrome or Edge and use the install button in the address bar,
  or the "Install as an app" button on the page.

Once installed it runs full screen with its own icon and works offline.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | The whole app — markup, styles and tools in one file |
| `manifest.json` | Web app manifest (name, icons, standalone display) |
| `sw.js` | Service worker — caches the app shell for offline use |
| `vercel.json` | Cache headers so updates reach installed copies |

Bump `CACHE` in `sw.js` when you change the app so installed copies pick it up.
