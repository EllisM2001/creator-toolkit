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
| `fonts/` | The faces the Canva brand template uses: Vanguard CF Bold (commercial, Connary Fagen), Impact LT Std (commercial, Linotype), Poppins (SIL OFL), Arimo (Apache 2.0), General Sans (Fontshare free licence) |
| `pubity-p.png` | The Pubity P monogram used on posts |
| `manifest.json` | Web app manifest (name, icons, standalone display) |
| `sw.js` | Service worker — caches the app shell for offline use |
| `vercel.json` | Cache headers so updates reach installed copies |

Bump `CACHE` in `sw.js` when you change the app so installed copies pick it up.

## Post maker

The Post maker reproduces the layouts in the **Pubity Headline** Canva brand template
(https://canva.link/n50qpwjnrzplqr6), measured page by page from the published design:
the same fonts, text sizes, line heights, letter spacing, text-box positions, fade curves
and badges, at 1080×1350.

| Template | Canva page |
| --- | --- |
| Pubity · Headline / Headline + circle | 13–16, 18, 20 and the bulk of the file |
| Pubity · Quote + name | 106 |
| Pubity · Intro copy + headline | 80 |
| Pubity · Impact, left | 53 |
| Pubity · Screenshot card | 17 |
| @dads · Left + TRENDING / Centred + TRENDING / Centred + @DADS pill | 2–3 / 5 / 7 |
| @dads · Centred, black fade / Vanguard left / Vanguard centred | 8–9 / 10–11 / 12 |
| @dads · Impact + keyword / Poppins black band / Two photos | 1 / 6 / 4 |

Drop in the photo, write the headline, and adjust size, position, keywords, photo zoom
and the circle inset. Layouts live in the `PM_TEMPLATES` array in `index.html`.

**Font licences.** Vanguard CF and Impact LT Std are commercial faces pulled from the
brand's Canva kit. Check that the licence covers web embedding before the site is public,
or swap the files in `fonts/`.
