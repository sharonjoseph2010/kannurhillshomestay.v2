# PRD — Multi-Property Homestay Website

## Original Problem Statement
Redesign a static HTML website for "Thushara Homestay" into a modern, animated React application. Scope expanded to support two properties: "Thushara Homestay" and "Pearl Nest", with a property-selector homepage linking to individual property pages.

## App Architecture
- **Frontend**: React.js + Tailwind CSS + shadcn/ui + Framer Motion + React Router
- **Backend**: None (pure static frontend prototype)
- **Routes**:
  - `/` — Property selector homepage (LandingPage.jsx)
  - `/thushara` — Thushara Homestay full page (ThusharaPage.jsx)
  - `/pearlnest` — Pearl Nest Homestay full page (PearlNestPage.jsx)

## Key Files
- `/app/frontend/src/App.js` — React Router setup
- `/app/frontend/src/pages/LandingPage.jsx` — Property selector
- `/app/frontend/src/pages/ThusharaPage.jsx` — Thushara property
- `/app/frontend/src/pages/PearlNestPage.jsx` — Pearl Nest property
- `/app/frontend/public/index.html` — SEO meta tags + JSON-LD schema
- `/app/frontend/src/index.css` — Design tokens
- `/app/frontend/public/images/pearlnest/` — Real Pearl Nest images (6 local JPGs)
- `/app/frontend/src/components/thushara/` — Thushara-specific components
- `/app/frontend/src/components/pearlnest/` — Pearl Nest-specific components
- `/app/frontend/src/components/sections/` — Shared section components (GallerySection, etc.)
- `/app/frontend/src/components/layout/` — PropertyNavbar, PropertyFooter

## What's Been Implemented

### Session 1 (original)
- Full website redesign from static HTML to React SPA
- shadcn/ui + Tailwind CSS design system
- Framer Motion animations
- Responsive design (mobile + desktop)
- Real Google reviews in testimonials
- Bento grid gallery with lightbox
- SEO overhaul: meta tags, keywords, JSON-LD schema
- FAQ section
- Google Maps iframe integration

### Session 2 (multi-property restructure)
- Converted to multi-page app with React Router
- New property selector homepage (LandingPage.jsx)
- Thushara Homestay moved to /thushara
- Pearl Nest placeholder page created at /pearlnest

### Session 3 (Pearl Nest real images) — 2026-03-02
- Downloaded 6 real images from imgbb URLs
- Stored locally at `/app/frontend/public/images/pearlnest/` with SEO-friendly filenames
- Updated PearlNestPage.jsx: local image paths + SEO alt text
- Updated PearlNestHero.jsx: hero title "Pearl Nest", subtitle "Hill Town Stay in Sreekandapuram, Kannur"
- Updated property cards on landing page with correct images (Thushara: Dining.jpg, Pearl Nest: kerala-stay.jpg)
- All 6 images accessible via HTTP 200; all 9 frontend tests passed

### Session 4 (Pearl Nest content) — 2026-03-02
- Landing page Pearl Nest card: "Western Ghats access" → "From ₹2500/night"
- PearlNestAbout: 6 real feature cards (Independent 1 BHK AC Cottage, Home-Cooked Meals, Easy Access, Hill Town Setting, All Amenities Close By, Peaceful Small-Town Atmosphere)
- PearlNestPricing: ₹2500/night, 2 people, max 3, extra ₹500 rollaway, check-in 12pm, check-out 11am
- New PearlNestReviews: "Guest reviews coming soon." (no fake reviews)
- PearlNestLocation: Address Kottoor, Sreekandapuram, Kannur, Kerala 670631; nearby: Chamberi, Payyavoor, Naduvil, Iritti, Kannur
- Contact phone: +919845768698
- All 12 frontend tests passed; Thushara 100% unchanged

## Prioritized Backlog

### P0 (Critical) — DONE
- [x] Populate Pearl Nest page with real content (About, Pricing, Location, Reviews, Contact)

### P1 (High)
- [ ] Fix duplicate JSON-LD schema markup in `public/index.html` (may have 3 separate schema blocks)
- [ ] Add Pearl Nest real testimonials once guests have stayed

### P2 (Nice to have)
- [ ] Refactor duplicated Thushara/PearlNest components into shared reusable components with props
- [ ] Remove hidden SEO keyword div in footer; integrate keywords naturally into visible content
- [ ] Add proper Google Maps embed URL for Pearl Nest once address confirmed on Maps

## Constraints
- DO NOT modify `.github/`, `.github/workflows/`, `deploy.yml`, `CNAME`
- DO NOT modify Thushara Homestay implementation
- Deploy continues via existing GitHub Actions workflow
- Build command: `npm run build`
