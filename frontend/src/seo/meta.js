/**
 * Per-page <head> data and schema.org JSON-LD.
 *
 * Used in two places:
 *  - scripts/prerender.js writes these tags into each page's static HTML
 *    (what Google, Bing and AI crawlers read without running JavaScript)
 *  - <Seo /> updates document.title etc. on client-side navigation
 */
import { SITE, THUSHARA, PEARLNEST, PROPERTIES, HOME_FAQS, GUIDES, LANDSCAPE } from "../data/site";

const abs = (p) => (p.startsWith("http") ? p : SITE.url + p);
const ORG_ID = `${SITE.url}/#organization`;
const SITE_ID = `${SITE.url}/#website`;

const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE.name,
  url: SITE.url + "/",
  logo: abs(SITE.logo),
  email: SITE.email,
  areaServed: SITE.areas.map((name) => ({ "@type": "Place", name })),
  contactPoint: PROPERTIES.map((p) => ({
    "@type": "ContactPoint",
    contactType: "reservations",
    name: p.name,
    telephone: p.phone,
    availableLanguage: ["English", "Malayalam"],
  })),
};

const website = {
  "@type": "WebSite",
  "@id": SITE_ID,
  url: SITE.url + "/",
  name: SITE.name,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-IN",
};

function lodging(p) {
  const lo = Math.min(...p.rates.map((r) => r.price));
  const hi = Math.max(...p.rates.map((r) => r.price));
  const node = {
    "@type": "LodgingBusiness",
    "@id": `${SITE.url}${p.path}#lodging`,
    name: p.name,
    description: p.summary,
    url: SITE.url + p.path,
    image: p.gallery.slice(0, 6).map((g) => abs(g.src)),
    logo: abs(p.logo),
    telephone: p.phone,
    email: SITE.email,
    priceRange: lo === hi ? `₹${lo}` : `₹${lo}–₹${hi}`,
    currenciesAccepted: "INR",
    checkinTime: p.checkInTime,
    checkoutTime: p.checkOutTime,
    numberOfRooms: 1,
    occupancy: { "@type": "QuantitativeValue", minValue: 1, maxValue: p.maxGuests },
    address: {
      "@type": "PostalAddress",
      streetAddress: p.address.street,
      addressLocality: p.address.locality,
      addressRegion: p.address.region,
      postalCode: p.address.postalCode,
      addressCountry: p.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: p.geo.lat, longitude: p.geo.lng },
    hasMap: p.mapsUrl,
    containedInPlace: { "@type": "AdministrativeArea", name: "Kannur district, Kerala, India" },
    amenityFeature: p.amenities.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    makesOffer: p.rates.map((r) => ({
      "@type": "Offer",
      name: `${p.name} – ${r.label}`,
      description: r.note,
      price: r.price,
      priceCurrency: "INR",
      unitText: "per night",
    })),
    parentOrganization: { "@id": ORG_ID },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };
  if (p.mapsUrl.includes("goo.gl")) node.sameAs = [p.mapsUrl];
  if (p.rating) {
    node.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: p.rating.value,
      reviewCount: p.rating.count,
      bestRating: 5,
      worstRating: 1,
    };
    node.review = p.reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
      publisher: { "@type": "Organization", name: "Google" },
    }));
  }
  return node;
}

const faqPage = (faqs, url) => ({
  "@type": "FAQPage",
  "@id": `${url}#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

const breadcrumbs = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: SITE.url + path,
  })),
});

const graph = (...nodes) => ({ "@context": "https://schema.org", "@graph": nodes });

/* ------------------------------------------------------------------ */

const PAGES = {
  "/": {
    title: "Kannur Hills Homestays | Alakode & Sreekandapuram, Kerala",
    description:
      "Family-run homestays in Kannur, Kerala: Thushara in Alakode near Palakkayam Thattu, and Pearl Nest in Sreekandapuram. AC cottages from ₹2,000.",
    image: "/images/og/og-kannur-hills-homestays.jpg",
    lcp: { src: LANDSCAPE.src, sizes: "100vw" },
    jsonLd: () =>
      graph(
        organization,
        website,
        {
          "@type": "WebPage",
          "@id": `${SITE.url}/#webpage`,
          url: SITE.url + "/",
          name: "Kannur Hills Homestays",
          isPartOf: { "@id": SITE_ID },
          about: { "@id": ORG_ID },
          primaryImageOfPage: abs(LANDSCAPE.src),
        },
        {
          "@type": "ItemList",
          name: "Homestays by Kannur Hills Homestays",
          itemListElement: PROPERTIES.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: SITE.url + p.path,
            name: p.name,
          })),
        },
        lodging(THUSHARA),
        lodging(PEARLNEST),
        faqPage(HOME_FAQS, SITE.url + "/")
      ),
  },
  "/thushara": {
    title: "Thushara Homestay, Alakode | Stay near Palakkayam Thattu",
    description:
      "AC 1BHK cottage in Velladu, Alakode: 8 km from Palakkayam Thattu, 15 km from Paithalmala. Rated 4.9 on Google. From ₹2,000 a night.",
    image: THUSHARA.og,
    lcp: { src: THUSHARA.hero[0].src, sizes: "(max-width: 1080px) 100vw, 45vw" },
    jsonLd: () =>
      graph(
        organization,
        website,
        lodging(THUSHARA),
        faqPage(THUSHARA.faqs, SITE.url + THUSHARA.path),
        breadcrumbs([["Home", "/"], [THUSHARA.name, THUSHARA.path]])
      ),
  },
  "/pearlnest": {
    title: "Pearl Nest Homestay | AC Cottage in Sreekandapuram, Kannur",
    description:
      "Independent 1BHK AC cottage in Kottoor, Sreekandapuram, Kannur. Sleeps 3, parking for 2 cars, home-cooked meals. From ₹2,500 a night.",
    image: PEARLNEST.og,
    lcp: { src: PEARLNEST.hero[0].src, sizes: "(max-width: 1080px) 100vw, 45vw" },
    jsonLd: () =>
      graph(
        organization,
        website,
        lodging(PEARLNEST),
        faqPage(PEARLNEST.faqs, SITE.url + PEARLNEST.path),
        breadcrumbs([["Home", "/"], [PEARLNEST.name, PEARLNEST.path]])
      ),
  },
};

Object.values(GUIDES).forEach((g) => {
  const url = SITE.url + g.path;
  PAGES[g.path] = {
    title:
      g.slug === "paithalmala"
        ? "Paithalmala Trek Guide & Stay 15 km Away | Thushara"
        : "Palakkayam Thattu Guide & Stay 8 km Away | Thushara",
    description:
      g.slug === "paithalmala"
        ? "Paithalmala trek guide: the route, best time and how to reach Kannur's highest hill station, plus Thushara Homestay, an AC cottage 15 km away."
        : "Palakkayam Thattu guide: best time, how to reach and jeep rides, plus the closest stay: Thushara Homestay, an AC cottage 8 km away in Alakode.",
    image: g.og,
    type: "article",
    lcp: { src: LANDSCAPE.src, sizes: "100vw" },
    jsonLd: () =>
      graph(
        organization,
        website,
        {
          "@type": "Article",
          "@id": `${url}#article`,
          headline: g.title,
          description: g.lede,
          image: abs(g.og),
          inLanguage: "en-IN",
          author: { "@id": ORG_ID },
          publisher: { "@id": ORG_ID },
          mainEntityOfPage: url,
          dateModified: "2026-10-01",
          about: {
            "@type": "TouristAttraction",
            name: g.name,
            containedInPlace: { "@type": "AdministrativeArea", name: "Kannur district, Kerala, India" },
          },
          mentions: { "@id": `${SITE.url}${THUSHARA.path}#lodging` },
        },
        { ...lodging(THUSHARA), review: undefined },
        faqPage(g.faqs, url),
        breadcrumbs([["Home", "/"], [THUSHARA.name, THUSHARA.path], [`${g.name} guide`, g.path]])
      ),
  };
});

export const ROUTES = Object.keys(PAGES);

export function getPageMeta(pathname) {
  const key = pathname.replace(/\/+$/, "") || "/";
  const page = PAGES[key] || PAGES["/"];
  const canonical = SITE.url + (key === "/" ? "/" : key);
  return {
    title: page.title,
    description: page.description,
    canonical,
    image: abs(page.image),
    type: page.type || "website",
    lcp: page.lcp,
    jsonLd: JSON.stringify(page.jsonLd()),
  };
}
