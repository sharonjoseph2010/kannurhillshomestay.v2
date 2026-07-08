/**
 * Post-build prerender script.
 * Creates a static HTML snapshot for every route so search engines and
 * other crawlers see real content without executing JavaScript.
 * Runs automatically after `npm run build` (see "postbuild" in package.json).
 */
const fs = require("fs");
const path = require("path");

const BUILD = path.join(__dirname, "..", "build");
const SITE = "https://kannurhillshomestay.com";

const WHATSAPP = "https://wa.me/918330094302";

const routes = [
  {
    dir: "", // homepage
    canonical: `${SITE}/`,
    title: "Kannur Hills Homestays | Thushara & Pearl Nest, Kannur Kerala",
    description:
      "Two family-run homestays in the Kannur hills: Thushara Homestay in Velladu, Alakode (near Palakkayam Thattu & Paithalmala) and Pearl Nest in Sreekandapuram. AC rooms, parking, Kerala meals.",
    html: `
      <h1>Kannur Hills Homestays — Thushara & Pearl Nest</h1>
      <p>Family-run homestays in the hills of Kannur district, Kerala. Choose your stay:</p>
      <h2><a href="/thushara">Thushara Homestay — Velladu, Alakode</a></h2>
      <p>Independent 1BHK AC cottage on the Karuvanchal–Velladu road. 8 km from Palakkayam Thattu, 15 km from Paithalmala. Free parking, kitchenette, traditional Kerala meals. From ₹2000/night. Ideal for visitors to Alakode, Karuvanchal, Naduvil and Vayattuparamb.</p>
      <h2><a href="/pearlnest">Pearl Nest Homestay — Kottoor, Sreekandapuram</a></h2>
      <p>Peaceful hill stay in Sreekandapuram, Kannur, Kerala 670631, with easy road access and essential amenities nearby.</p>
      <h2>Nearby attractions</h2>
      <p><a href="/palakkayam-thattu">Palakkayam Thattu visitor guide</a> · <a href="/paithalmala">Paithalmala trekking guide</a></p>
      <p>Bookings: WhatsApp <a href="${WHATSAPP}">+91 83300 94302</a> · Email info@kannurhillshomestay.com</p>
    `,
  },
  {
    dir: "thushara",
    canonical: `${SITE}/thushara`,
    title: "Thushara Homestay | Stay near Palakkayam Thattu & Paithalmala",
    description:
      "Independent 1BHK AC cottage in Velladu, Alakode, Kannur — 8 km from Palakkayam Thattu, 15 km from Paithalmala. Free parking, kitchenette, Kerala meals. From ₹2000/night. Book on WhatsApp.",
    html: `
      <h1>Thushara Homestay — Velladu, Alakode, Kannur</h1>
      <p>An independent 1BHK cottage in the Kannur hills, perfect for visiting Palakkayam Thattu (8 km), Kuttippullu (8 km) and Paithalmala (15 km). Serving guests travelling to Alakode, Karuvanchal, Naduvil and Vayattuparamb.</p>
      <h2>The cottage</h2>
      <p>Air-conditioned bedroom, living room, kitchenette, private bathroom and comfortable beds for up to 3 guests. Free private parking. Traditional Kerala meals available from the attached Vanitha Hotel.</p>
      <h2>Tariff</h2>
      <p>₹2000 per night on weekdays and ₹2200 on weekends for 2 guests. Extra bed ₹500 per night. Advance payment confirms your booking.</p>
      <h2>Location</h2>
      <p>Karuvanchal – Velladu Road, Velladu, Alakode, Kannur, Kerala 670571. <a href="https://maps.app.goo.gl/j38StCFFRSDCJRVy6">Open in Google Maps</a>.</p>
      <h2>Nearby attractions</h2>
      <p><a href="/palakkayam-thattu">Palakkayam Thattu — 8 km (guide)</a> · <a href="/paithalmala">Paithalmala — 15 km (guide)</a></p>
      <h2>Book your stay</h2>
      <p>WhatsApp <a href="${WHATSAPP}">+91 83300 94302</a> · Email info@kannurhillshomestay.com</p>
    `,
  },
  {
    dir: "pearlnest",
    canonical: `${SITE}/pearlnest`,
    title: "Pearl Nest Homestay | Kottoor, Sreekandapuram, Kannur",
    description:
      "Pearl Nest Homestay in Kottoor, Sreekandapuram — a peaceful hill stay in Kannur district, Kerala 670631, with comfortable rooms, easy road access and amenities nearby.",
    html: `
      <h1>Pearl Nest Homestay — Kottoor, Sreekandapuram, Kannur</h1>
      <p>A peaceful homestay in the Kannur hills at Kottoor, Sreekandapuram, Kerala 670631. Comfortable rooms, a calm green setting, easy road access and all essential amenities nearby.</p>
      <p>Bookings: WhatsApp <a href="${WHATSAPP}">+91 83300 94302</a> · Email info@kannurhillshomestay.com</p>
      <p><a href="/">See all Kannur Hills homestays</a></p>
    `,
  },
  {
    dir: "palakkayam-thattu",
    canonical: `${SITE}/palakkayam-thattu`,
    title: "Palakkayam Thattu Guide | Stay 8 km Away — Thushara Homestay",
    description:
      "Palakkayam Thattu visitor guide: best time to visit, how to reach, and the closest comfortable stay — Thushara Homestay, an AC cottage just 8 km away in Velladu, Alakode.",
    html: `
      <h1>Palakkayam Thattu: Visitor Guide & Where to Stay Nearby</h1>
      <p>Palakkayam Thattu is one of North Kerala's most loved hill destinations — a misty tabletop viewpoint in the Western Ghats near Alakode and Naduvil in Kannur district. Thushara Homestay is just 8 km away, one of the closest comfortable stays to the viewpoint.</p>
      <h2>Why visit</h2>
      <p>Sweeping valley views, rolling mist, dramatic sunrises, a cool climate year-round, off-road jeep rides to the top and seasonal adventure activities.</p>
      <h2>Best time to visit</h2>
      <p>October to February for clear mornings and misty evenings. Early morning is best for sunrise and mist-filled valleys.</p>
      <h2>How to reach</h2>
      <p>Via the Naduvil–Alakode region of Kannur district. From Thushara Homestay in Velladu it is a short 8 km drive; jeeps run from the base to the hilltop.</p>
      <h2>Stay 8 km away</h2>
      <p><a href="/thushara">Thushara Homestay</a> — independent 1BHK AC cottage with parking and Kerala meals, from ₹2000/night. Also nearby: Kuttippullu (8 km) and <a href="/paithalmala">Paithalmala (15 km)</a>.</p>
      <p>Book on WhatsApp: <a href="${WHATSAPP}">+91 83300 94302</a></p>
    `,
  },
  {
    dir: "paithalmala",
    canonical: `${SITE}/paithalmala`,
    title: "Paithalmala Trekking Guide | Stay 15 km Away — Thushara Homestay",
    description:
      "Paithalmala guide: the trek, best time to visit, how to reach Kannur's highest hill station — and the closest cottage stay, Thushara Homestay, 15 km away in Velladu, Alakode.",
    html: `
      <h1>Paithalmala: Trekking Guide & Where to Stay Nearby</h1>
      <p>Paithalmala is the highest hill station in Kannur district, around 1,370 m above sea level near the Kerala–Karnataka border, famous for its forest trek and summit watchtower. Thushara Homestay is 15 km away — an easy base for an early start.</p>
      <h2>The trek</h2>
      <p>From the entry near Pottenplave, a moderate trail climbs through forest and grassland to the watchtower, with valley views and mist along the way.</p>
      <h2>Best time to visit</h2>
      <p>October to February for the clearest views and most comfortable trekking weather. Start early in the morning.</p>
      <h2>How to reach</h2>
      <p>Via Taliparamba–Alakode roads to the Pottenplave area. Roughly 15 km from Thushara Homestay in Velladu.</p>
      <h2>Stay 15 km away</h2>
      <p><a href="/thushara">Thushara Homestay</a> — independent 1BHK AC cottage with parking and Kerala meals, from ₹2000/night. Combine with <a href="/palakkayam-thattu">Palakkayam Thattu (8 km)</a> for a full hill weekend.</p>
      <p>Book on WhatsApp: <a href="${WHATSAPP}">+91 83300 94302</a></p>
    `,
  },
];

function setTag(html, regex, replacement, label) {
  if (!regex.test(html)) {
    console.warn(`  ! could not find ${label} — skipped`);
    return html;
  }
  return html.replace(regex, replacement);
}

function buildSnapshot(template, route) {
  let html = template;
  const esc = (s) => s.replace(/"/g, "&quot;");

  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`, "title");
  html = setTag(
    html,
    /<meta name="description" content="[\s\S]*?"\s*\/>/,
    `<meta name="description" content="${esc(route.description)}" />`,
    "meta description"
  );
  html = setTag(
    html,
    /<link rel="canonical" href="[\s\S]*?"\s*\/>/,
    `<link rel="canonical" href="${route.canonical}" />`,
    "canonical"
  );
  html = setTag(
    html,
    /<meta property="og:title" content="[\s\S]*?"\s*\/>/,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    "og:title"
  );
  html = setTag(
    html,
    /<meta property="og:description" content="[\s\S]*?"\s*\/>/,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    "og:description"
  );
  html = setTag(
    html,
    /<meta property="og:url" content="[\s\S]*?"\s*\/>/,
    `<meta property="og:url" content="${route.canonical}" />`,
    "og:url"
  );

  // Inject crawler-visible static content inside the root div.
  // React replaces it as soon as the app mounts, so users see the full app.
  const staticBlock = `<div id="root"><div data-prerender="true">${route.html}</div></div>`;
  html = setTag(html, /<div id="root"><\/div>/, staticBlock, "root div");

  return html;
}

function main() {
  const templatePath = path.join(BUILD, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error("build/index.html not found — run this after `npm run build`.");
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, "utf8");

  for (const route of routes) {
    console.log(`Prerendering /${route.dir}`);
    const out = buildSnapshot(template, route);
    const dir = route.dir ? path.join(BUILD, route.dir) : BUILD;
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), out);
  }

  // SPA fallback for unknown URLs on GitHub Pages
  fs.copyFileSync(path.join(BUILD, "index.html"), path.join(BUILD, "404.html"));
  console.log("Done. Snapshots written for", routes.length, "routes + 404.html");
}

main();
