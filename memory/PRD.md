# PRD — Kannur Hills Homestays website

Live at https://kannurhillshomestay.com (GitHub Pages, deployed by `.github/workflows/deploy.yml` on push to `main`).

## What it is
Marketing + booking site for two family-run homestays in Kannur district, Kerala:
- **Thushara Homestay** — Velladu, Alakode (Karuvanchal–Velladu Road). 8 km from Palakkayam Thattu & Kuttippullu, 15 km from Paithalmala. ₹2,000 weekday / ₹2,200 weekend, extra bed ₹500. WhatsApp +91 83300 94302. Host: Mr. Joseph. Google 4.9★ (32 reviews, Oct 2026).
- **Pearl Nest Homestay** — Kottoor, Sreekandapuram 670631. ₹2,500/night, extra person ₹500. WhatsApp +91 98457 68698.

Bookings are direct via WhatsApp (no backend).

## Routes
`/` home · `/thushara` · `/pearlnest` · `/palakkayam-thattu` (guide) · `/paithalmala` (guide)

## Architecture (Oct 2026 "Trailhead" redesign)
- React 18 + react-router, built with CRA/craco. Plain CSS design system in `frontend/src/styles/site.css` (Fraunces + Inter, self-hosted in `public/fonts`). Only react, react-dom, react-router-dom and react-scripts are runtime dependencies.
- **All content lives in `frontend/src/data/site.js`** — prices, phones, distances, FAQs, reviews, photo lists. Edit facts there only.
- `frontend/src/seo/meta.js` — per-page title/description/canonical/OG + schema.org JSON-LD (Organization, LodgingBusiness ×2, FAQPage, BreadcrumbList, Article).
- `frontend/scripts/prerender.js` (postbuild) server-renders every route to static HTML with its own head tags, writes `thushara.html`-style clean-URL copies, `404.html` (noindex), `sitemap.xml` (with images), `llms.txt` and `llms-full.txt` for AI assistants.
- Images: originals in `public/images/{thushara,pearlnest,logos,og}`; run `python3 frontend/scripts/optimize-images.py` after adding photos to create the WebP variants used by `<Picture>`.
- Motion is progressive (works without JS, honours prefers-reduced-motion).

## Constraints
- DO NOT modify `.github/`, `.github/workflows/`, `deploy.yml`, `CNAME`.
- Keep URLs stable (SEO).

## Backlog
- Add Pearl Nest Google Maps listing + reviews once available (then set `PEARLNEST.rating` and `reviews`).
- Submit sitemap in Google Search Console / Bing Webmaster Tools.
- Add Booking.com / MakeMyTrip / Airbnb profile URLs to `sameAs` in `seo/meta.js` when available.
