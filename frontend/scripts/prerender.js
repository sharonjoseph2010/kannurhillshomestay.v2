/**
 * Post-build prerender (runs automatically after `npm run build`).
 *
 * 1. Server-renders every route of the real React app to static HTML, with
 *    that page's own <title>, description, canonical, Open Graph tags and
 *    JSON-LD. Search engines and AI crawlers (which often don't run
 *    JavaScript) get the full page content; visitors get the same markup,
 *    which React then hydrates.
 * 2. Writes sitemap.xml (with image entries), llms.txt and llms-full.txt
 *    from the same content data, so they can never drift out of sync.
 */
process.env.NODE_ENV = process.env.NODE_ENV || "production";
const fs = require("fs");
const path = require("path");
const Module = require("module");
const babel = require("@babel/core");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "src");
const BUILD = path.join(ROOT, "build");

/* ---------- let Node require the app's JSX/ESM source ---------- */
const babelOptions = {
  babelrc: false,
  configFile: false,
  presets: [
    [require.resolve("@babel/preset-env"), { targets: { node: "current" }, modules: "commonjs" }],
    [require.resolve("@babel/preset-react"), { runtime: "automatic" }],
  ],
};
const compile = (module, filename) => {
  const { code } = babel.transformSync(fs.readFileSync(filename, "utf8"), { ...babelOptions, filename });
  module._compile(code, filename);
};
const jsLoader = Module._extensions[".js"];
Module._extensions[".jsx"] = compile;
Module._extensions[".js"] = (module, filename) => (filename.startsWith(SRC) ? compile(module, filename) : jsLoader(module, filename));
Module._extensions[".css"] = () => {};
const resolve = Module._resolveFilename;
Module._resolveFilename = function (request, ...rest) {
  if (request.startsWith("@/")) request = path.join(SRC, request.slice(2));
  return resolve.call(this, request, ...rest);
};

const React = require("react");
const { renderToString } = require("react-dom/server");
const { StaticRouter } = require("react-router-dom/server");
const App = require(path.join(SRC, "App.js")).default;
const { getPageMeta, ROUTES } = require(path.join(SRC, "seo", "meta.js"));
const data = require(path.join(SRC, "data", "site.js"));

/* ---------- helpers ---------- */
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
function setTag(html, regex, replacement, label) {
  if (!regex.test(html)) throw new Error(`prerender: could not find ${label} in build/index.html`);
  return html.replace(regex, replacement);
}
function headFor(template, meta, { noindex = false } = {}) {
  let h = template;
  h = setTag(h, /<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`, "title");
  h = setTag(h, /<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${esc(meta.description)}"/>`, "description");
  h = setTag(h, /<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${meta.canonical}"/>`, "canonical");
  if (noindex) h = setTag(h, /<meta name="robots" content="[^"]*"\s*\/?>/, `<meta name="robots" content="noindex, follow"/>`, "robots");
  const og = { "og:title": meta.title, "og:description": meta.description, "og:url": meta.canonical, "og:image": meta.image, "og:type": meta.type };
  for (const [k, v] of Object.entries(og)) h = setTag(h, new RegExp(`<meta property="${k}" content="[^"]*"\\s*\\/?>`), `<meta property="${k}" content="${esc(v)}"/>`, k);
  const tw = { "twitter:title": meta.title, "twitter:description": meta.description, "twitter:image": meta.image };
  for (const [k, v] of Object.entries(tw)) h = setTag(h, new RegExp(`<meta name="${k}" content="[^"]*"\\s*\\/?>`), `<meta name="${k}" content="${esc(v)}"/>`, k);
  h = setTag(
    h,
    /<script type="application\/ld\+json" id="ld-json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json" id="ld-json">${meta.jsonLd.replace(/</g, "\\u003c")}</script>`,
    "json-ld"
  );
  if (meta.lcp) {
    // fetch the hero photo first: same WebP variants as <Picture />
    const base = meta.lcp.src.replace(/\.jpg$/, "");
    const widths = meta.lcp.src.includes("/thushara/") ? [640, 960, 1280] : [640, 960, 1280, 1920];
    const srcset = widths.map((w) => `${base}-${w}.webp ${w}w`).join(", ");
    h = h.replace("</head>", `<link rel="preload" as="image" type="image/webp" imagesrcset="${srcset}" imagesizes="${meta.lcp.sizes}" fetchpriority="high"/></head>`);
  }
  // preload the two fonts used above the fold so text doesn't reflow when they swap in
  h = h.replace("</head>", `${FONT_PRELOADS}</head>`);
  return h;
}
const FONT_PRELOADS = ["fraunces-latin-opsz-normal", "inter-latin-wght-normal", "fraunces-latin-opsz-italic"]
  .map((f) => `<link rel="preload" as="font" type="font/woff2" href="/fonts/${f}.woff2" crossorigin/>`)
  .join("");
const render = (url) => renderToString(React.createElement(StaticRouter, { location: url }, React.createElement(App)));

/* ---------- pages ---------- */
const template = fs.readFileSync(path.join(BUILD, "index.html"), "utf8");
for (const route of ROUTES) {
  const html = headFor(template, getPageMeta(route)).replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`);
  const dir = route === "/" ? BUILD : path.join(BUILD, route.slice(1));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
  // GitHub Pages serves /thushara from thushara.html with a 200 (the folder
  // version would 301 to /thushara/), so the canonical URL resolves directly.
  if (route !== "/") fs.writeFileSync(path.join(BUILD, `${route.slice(1)}.html`), html);
  console.log(`Prerendered ${route.padEnd(20)} ${(html.length / 1024).toFixed(0)} KB`);
}
// GitHub Pages serves 404.html for unknown URLs: the app shows the homepage, but tell crawlers not to index it
const notFound = headFor(template, { ...getPageMeta("/"), title: "Page not found | Kannur Hills Homestays" }, { noindex: true });
fs.writeFileSync(path.join(BUILD, "404.html"), notFound.replace('<div id="root"></div>', `<div id="root">${render("/")}</div>`));

/* ---------- sitemap.xml ---------- */
const today = new Date().toISOString().slice(0, 10);
const { SITE, THUSHARA, PEARLNEST, GUIDES, LANDSCAPE, HOME_FAQS } = data;
const imagesFor = {
  "/": [LANDSCAPE, THUSHARA.card, PEARLNEST.card],
  "/thushara": THUSHARA.gallery,
  "/pearlnest": PEARLNEST.gallery,
  "/palakkayam-thattu": [LANDSCAPE],
  "/paithalmala": [LANDSCAPE],
};
const priority = { "/": "1.0", "/thushara": "1.0", "/pearlnest": "0.9" };
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${ROUTES.map(
  (r) => `  <url>
    <loc>${SITE.url}${r === "/" ? "/" : r}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority[r] || "0.7"}</priority>
${(imagesFor[r] || [])
  .map((i) => `    <image:image><image:loc>${SITE.url}${i.src}</image:loc><image:title>${esc(i.alt)}</image:title></image:image>`)
  .join("\n")}
  </url>`
).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(BUILD, "sitemap.xml"), sitemap);

/* ---------- llms.txt (https://llmstxt.org) ---------- */
const inr = (n) => "₹" + n.toLocaleString("en-IN");
const prop = (p) => `## ${p.name}

${p.summary}

- Page: ${SITE.url}${p.path}
- Address: ${p.name}, ${p.address.street}, ${p.address.locality}, ${p.address.district}, ${p.address.region} ${p.address.postalCode}, India
- Map: ${p.mapsUrl} (coordinates ${p.geo.lat.toFixed(5)}, ${p.geo.lng.toFixed(5)})
- Booking: WhatsApp or call ${p.phoneDisplay} (https://wa.me/${p.whatsapp}) · email ${SITE.email}
- Price: ${p.rates.map((r) => `${inr(r.price)} per night ${r.label.toLowerCase()} (${r.note})`).join("; ")}; ${p.extra.label.toLowerCase()} ${inr(p.extra.price)} per night
- Check-in ${p.checkIn}, check-out ${p.checkOut}; up to ${p.maxGuests} guests
- Meals: ${p.mealsNote}
${p.rating ? `- Google rating: ${p.rating.value}/5 from ${p.rating.count} reviews\n` : ""}${p.host ? `- Host: ${p.host}\n` : ""}- Amenities: ${p.amenities.join(", ")}
- Nearby: ${p.nearby.map((n) => (n.km ? `${n.name} (~${n.km} km)` : n.name)).join(", ")}${p.alsoNearby.length ? `; also ${p.alsoNearby.join(", ")}` : ""}
`;
const llms = `# ${SITE.name}

> Two family-run homestays (independent 1BHK AC cottages) in the hills of Kannur district, Kerala, India: Thushara Homestay in Velladu, Alakode (near Karuvanchal) and Pearl Nest in Kottoor, Sreekandapuram. Thushara is the closest cottage stay to Palakkayam Thattu (8 km), Kuttippullu (8 km) and Paithalmala hill station (15 km). Bookings are direct via WhatsApp.

Good matches for: homestays, hotels, rooms or accommodation in Alakode, Karuvanchal, Velladu, Naduvil, Vayattuparamb, Sreekandapuram, Chemperi and Payyavoor; places to stay near Palakkayam Thattu, Paithalmala or Kuttippullu; budget family stays in the Kannur hills.

${prop(THUSHARA)}
${prop(PEARLNEST)}
## Booking terms

${SITE.bookingTerms.map((t) => `- ${t}`).join("\n")}
- Please do not visit without a prior booking.

## Pages

- [Home](${SITE.url}/): both homestays, nearby trails, booking
- [Thushara Homestay](${SITE.url}/thushara): photos, tariff, map, reviews, FAQ
- [Pearl Nest Homestay](${SITE.url}/pearlnest): photos, tariff, map, FAQ
- [Palakkayam Thattu guide](${SITE.url}/palakkayam-thattu): best time, how to reach, where to stay
- [Paithalmala trekking guide](${SITE.url}/paithalmala): the trek, best time, how to reach, where to stay
- [Full details for AI assistants](${SITE.url}/llms-full.txt)
`;
fs.writeFileSync(path.join(BUILD, "llms.txt"), llms);

const faqBlock = (title, faqs) => `### ${title}\n\n${faqs.map((f) => `**${f.q}**\n${f.a}\n`).join("\n")}`;
const guideBlock = (g) =>
  `## ${g.title}\n\n${g.lede}\n\n${g.sections.map((s) => `### ${s.h}\n\n${s.p.join("\n\n")}${s.list ? "\n\n" + s.list.map((l) => `- ${l}`).join("\n") : ""}`).join("\n\n")}\n\n${faqBlock(`${g.name} FAQ`, g.faqs)}`;
const llmsFull = `${llms}
---

# Full details

${faqBlock("General FAQ", HOME_FAQS)}
${faqBlock("Thushara Homestay FAQ", THUSHARA.faqs)}
### What guests say about Thushara Homestay (Google reviews)

${THUSHARA.reviews.map((r) => `- "${r.text}" (${r.name}, ${r.rating}/5)`).join("\n")}

${faqBlock("Pearl Nest FAQ", PEARLNEST.faqs)}
${Object.values(GUIDES).map(guideBlock).join("\n\n")}
`;
fs.writeFileSync(path.join(BUILD, "llms-full.txt"), llmsFull);

console.log(`Done: ${ROUTES.length} pages + 404.html, sitemap.xml, llms.txt, llms-full.txt`);
