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
and the circle inset.

### Carousel slides

The cover is slide 1. **+ Add slide** appends the next slide of the post; each slide has
its own template, photo, text and settings, and the strip above the preview lets you
select, duplicate, reorder and delete them. Three inner-slide layouts come built in:

| Template | Use |
| --- | --- |
| Pubity · Text page | Black page, P + rule, body copy in Poppins that shrinks to fit |
| Pubity · Title + text | Vanguard title with the body copy flowing underneath |
| Pubity · Photo + caption | Full-bleed photo, the black fade and a short caption |

The SWIPE tag on the cover only draws once the post has two or more slides (the designer
can mark a SWIPE element as always on). **Save all** exports every slide at 1080×1350 as
`<headline>-1.jpg`, `-2.jpg`, …; on iPhone it opens the share sheet so all the images go to
Photos in one go, and falls back to one tap per slide where that isn't available. The
draft (all slides, photos included) is kept in the browser's local storage, so reloading
brings it back; **New post** clears it.

### Designing your own templates

Press **Design a template** in the Post maker. It copies the current template so you can
lay it out exactly how it should look: tap an element to select it, drag it on the preview,
and tune font, size, line height, spacing, alignment, box and colour below. Add text boxes,
fades, the P + rule, the P logo, SWIPE, pills, handles, circle insets, or an **overlay PNG**
(a Canva page exported with the photo and text removed, transparent background) for a
pixel-exact copy. Elements can be marked as always on or as a toggle in the post tool; a
text box can follow the headline instead of sitting at a fixed position, and each box has
a line budget before the auto-fit shrinks it.

**Save template** keeps it on your device. **Save + download file** also gives you a
`template-<id>.json`. To share it with everyone, add it to `templates/custom.json` in the
repo (see `templates/README.md`); the app loads that file on start. Built-in layouts live in
`PM_BUILTIN` in `index.html`.

**Font licences.** Vanguard CF and Impact LT Std are commercial faces pulled from the
brand's Canva kit. Check that the licence covers web embedding before the site is public,
or swap the files in `fonts/`.
