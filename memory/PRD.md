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
- All 6 images accessible via HTTP 200; all 9 frontend tests passed

## Prioritized Backlog

### P0 (Critical)
- [ ] Populate Pearl Nest page with real content (About, Pricing, Location, FAQ, Contact — all placeholder)

### P1 (High)
- [ ] Fix duplicate JSON-LD schema markup in `public/index.html` (may have 3 separate schema blocks)
- [ ] Update Pearl Nest About section with real property description
- [ ] Update Pearl Nest Pricing with real rates
- [ ] Add Pearl Nest Location / Map

### P2 (Nice to have)
- [ ] Refactor duplicated Thushara/PearlNest components into shared reusable components with props
- [ ] Remove hidden SEO keyword div in footer; integrate keywords naturally into visible content
- [ ] Add Pearl Nest real testimonials

## Constraints
- DO NOT modify `.github/`, `.github/workflows/`, `deploy.yml`, `CNAME`
- DO NOT modify Thushara Homestay implementation
- Deploy continues via existing GitHub Actions workflow
- Build command: `npm run build`
