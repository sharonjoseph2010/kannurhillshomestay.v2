# Kannur Hills Homestays website: notes for Claude

Read `memory/PRD.md` first (what the site is, routes, architecture). This file covers how to work on it.

## The owner
Sharon (GitHub `sharonjoseph2010`) runs the site for the family homestays and is not a developer.
- Explain things in plain words, step by step. Give exact clicks and paste-ready text.
- **Never state anything you haven't checked.** Mark guesses as guesses. Don't invent facts about places, prices, fees, timings or Google features. If a fact isn't known, leave it out and ask.

## How changes go live
1. Branch from the latest `main`, make the change, then check it builds: `cd frontend && npm ci && CI=true npm run build`. CI treats warnings as errors.
2. Open **one** pull request for the batch, and tell Sharon only when it's complete. She merges it on GitHub. If more commits land after she has merged, open a new PR rather than adding to the merged one.
3. On merge, GitHub Actions deploys to GitHub Pages in about 3 minutes. Browsers may show the old version for about 10 minutes; a hard refresh (⌘ Shift R) fixes that.

**Never** edit `.github/`, `deploy.yml` or `CNAME`. Keep page URLs stable.

## Where things are
- **All facts and wording:** `frontend/src/data/site.js` (`SITE`, `THUSHARA`, `PEARLNEST`, `HOME_FAQS`, `GUIDES`).
- **Page titles, descriptions and structured data:** `frontend/src/seo/meta.js`. Guide titles and descriptions are `seoTitle` and `seoDescription` in `GUIDES`.
- **New guide page:** add an entry to `GUIDES`. The route, sitemap and `llms.txt` follow automatically, apart from the hand-written page list in `scripts/prerender.js`. Link it from the footer (`components/site/Layout.jsx`).
- **Photos:** after adding originals, run `python3 frontend/scripts/optimize-images.py`.

## SEO rules we've settled
- **Titles:** 60 characters or fewer. **Meta descriptions:** 120–160 characters. Bing flags anything outside these.
- **Thushara's details must match its Google Business Profile exactly:**
  - Address: "Pallikkavala, Karuvanchal, Kerala 670571".
  - Map pin: 12.1661362, 75.4751729.
  - Phone: +91 83300 94302.
  - Times: check-in 1:00 PM (earlier on request), check-out 11:00 AM.
  - Profile link: https://www.google.com/maps?cid=260962843211607096
- **No `aggregateRating` or `review` markup.** The 4.9★ and the reviews come from Google. Google's rules forbid marking up ratings taken from other sites, and a business's own page can't get stars anyway. Keep them visible on the page only.
- **Drive times from the homestay:** Palakkayam Thattu 8 km, about 30 minutes. Kuttippullu 8 km. Paithalmala 15 km to the base, about 45 minutes. Kappimala about 30 minutes and Ezharakund about 45 minutes (Google Maps estimates). Alakode to Sreekandapuram about 30 minutes.
- **Unknown:** entry fees and jeep fares. Don't publish numbers for them.
- **Hosting:** GitHub Pages can't do 301 redirects. `/page/` and `/page` both serve the page, with a canonical tag pointing to `/page`; that's fine.

## Google Search Console data
- A service account (named `gsc-reader`, in the Google Cloud project `kannur-hills-seo`, with Full permission) can read Search Console. It cannot press "Request indexing".
- On Sharon's Mac:
  - **Claude desktop chat:** has it as the `gsc` connector (`uvx mcp-search-console`, key at `~/Documents/kannur-hills-seo-key.json`).
  - **Local Claude Code session:** add it with:
    `claude mcp add gsc --scope user -e GSC_CREDENTIALS_PATH=/Users/sharonjoseph/Documents/kannur-hills-seo-key.json -e GSC_SKIP_OAUTH=true -- /Users/sharonjoseph/.local/bin/uvx mcp-search-console`
    Check it with `claude mcp list`.
- **In cloud sessions:** use it only if the `GSC_SA_B64` environment variable exists (the base64 of that key). Decode it to a temp file; never print it.
- **Baseline (Jul 13 – Oct 13, 2026):**
  - The homepage gets most clicks, mainly for "thushara homestay" at about position 4.
  - `/palakkayam-thattu` has 119 impressions at about position 8.5, with 0 clicks.
  - Paithalmala searches sit at positions 10–14.
  - Guides were expanded on Oct 13; compare later data against this.

## Open items (as of Nov 2026)
- **Google profile (Sharon):**
  - Set parking to free.
  - Confirm the website link is `https://kannurhillshomestay.com/thushara`.
  - Ask every guest for a review after checkout, by WhatsApp, with no incentives and no requested wording.
  - Add photos every month or two.
- **Booking.com:** lists the property as an "Apartment", so Google shows it as a separate holiday rental instead of linking it to the Google profile. Sharon decided not to pursue changing it for now.
- **Pearl Nest:** Google Business Profile verification is stuck; on hold. Its page is website-only.
- **Possible next pages:** only with facts Sharon confirms.
