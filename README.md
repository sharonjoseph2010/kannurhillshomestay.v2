# Kannur Hills Homestays

Website for **[kannurhillshomestay.com](https://kannurhillshomestay.com)**: two family-run homestays in the Kannur hills, Kerala.

| Homestay | Where | Page |
|---|---|---|
| Thushara Homestay | Velladu, Alakode (Karuvanchal–Velladu Road) | `/thushara` |
| Pearl Nest Homestay | Kottoor, Sreekandapuram | `/pearlnest` |

Guides: `/palakkayam-thattu` and `/paithalmala`.

## How the site goes live

1. Changes are made on a branch and opened as a **pull request**.
2. When the pull request is **merged into `main`**, GitHub Actions builds the site and publishes it to GitHub Pages automatically (about 2 minutes). Progress shows under the **Actions** tab.
3. Nothing on a branch is live until it is merged.

> Do not edit `.github/workflows/deploy.yml` or `CNAME`. They control publishing and the custom domain.

## Updating content

**Almost everything lives in one file: [`frontend/src/data/site.js`](frontend/src/data/site.js).**
The pages, Google's structured data, the sitemap and the AI summary (`llms.txt`) are all generated from it, so change a fact there once and it updates everywhere.

| To change… | Edit in `site.js` |
|---|---|
| Prices | `rates` and `extra` for `THUSHARA` / `PEARLNEST` (also the `facts` table and the `faqs` that mention prices) |
| Phone / WhatsApp | `phone`, `phoneDisplay`, `whatsapp` |
| Google rating | `rating: { value, count }` |
| Guest reviews | `reviews` (name, rating, text) |
| FAQs | `faqs` (each property), `HOME_FAQS` (home page) |
| Nearby places & distances | `nearby` and `alsoNearby` |
| Check-in / out times | `checkIn`, `checkOut` (and `checkInTime`, `checkOutTime` in 24h format) |
| Guide text | `GUIDES` |

Page titles and Google descriptions are in [`frontend/src/seo/meta.js`](frontend/src/seo/meta.js).

### Adding or replacing photos

1. Put the photo (JPG, ideally under 2 MB) in `frontend/public/images/thushara/` or `frontend/public/images/pearlnest/`, with a descriptive lowercase name, e.g. `thushara-homestay-vellad-alakode-garden-01.jpg`.
2. Create the fast-loading versions: `cd frontend && python3 scripts/optimize-images.py` (needs Python with Pillow).
3. Add it to that property's `gallery` list in `site.js`, with an `alt` description (what's in the photo, plus the place name; this helps Google).

Logos are in `frontend/public/images/logos/`; social-share images (1200×630) are in `frontend/public/images/og/`.

## For developers

- React 18 + React Router, built with Create React App (via craco). Styles: `frontend/src/styles/site.css`. Fonts are self-hosted in `frontend/public/fonts/`.
- `npm run build` creates the site, then `scripts/prerender.js` server-renders every page to static HTML (full content + per-page meta tags and JSON-LD for search engines and AI crawlers), and writes `sitemap.xml`, `llms.txt`, `llms-full.txt` and `404.html`.
- Local preview: `cd frontend && npm install --legacy-peer-deps && npm start`.
- Animations respect "reduce motion", and all content is readable without JavaScript. Keep it that way for SEO.
