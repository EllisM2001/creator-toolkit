# Creator Toolkit

An installable PWA with 15 on-device tools for social content — a Pubity post maker, image compression,
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
| `fonts/` | Headline and body faces used by the Post maker (Barlow Condensed / Semi Condensed under the SIL OFL, General Sans under the Fontshare free licence) |
| `pubity-p.png` | The Pubity P monogram used on posts |
| `manifest.json` | Web app manifest (name, icons, standalone display) |
| `sw.js` | Service worker — caches the app shell for offline use |
| `vercel.json` | Cache headers so updates reach installed copies |

Bump `CACHE` in `sw.js` when you change the app so installed copies pick it up.

## Post maker

The Post maker tool holds the Pubity daily-post layouts: Headline, Carousel cover (SWIPE tag),
Headline + quote, Screenshot inset, Title + name (movie / TV slides), Explainer slide, Reel cover
and Follow end card. Pick a template, drop in the photo, write the headline, then adjust text size,
position, spacing and photo zoom. Exports at full size (1080×1350, Reels at 1080×1920).

Templates live in the `PM_TEMPLATES` array and the `pmDraw` function in `index.html`; add a new
entry there to add a layout.
