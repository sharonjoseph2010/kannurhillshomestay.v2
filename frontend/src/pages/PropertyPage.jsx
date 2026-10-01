import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SITE } from "../data/site";
import Layout from "../components/site/Layout";
import Picture from "../components/kit/Picture";
import { Arrow, Pin, Stars } from "../components/kit/Icons";
import { SplitWords, Stamp } from "../components/kit/Motion";
import { Features, TrailRadar, Reviews, BookSection, Faq, useCycle, useDeferred } from "../components/site/Sections";

const inr = (n) => "₹" + n.toLocaleString("en-IN");

function PropertyHero({ p }) {
  const { i } = useCycle(p.hero.length, { auto: 4200 });
  const ready = useDeferred(1500);
  const first = p.name.split(" ")[0];
  const rest = p.name.slice(first.length).trim();
  return (
    <section className="phero" aria-labelledby="p-title">
      <svg className="topo-bg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5, 6].map((k) => (
          <path key={k} d={`M-50 ${160 + k * 110} C 300 ${80 + k * 110}, 520 ${260 + k * 110}, 820 ${150 + k * 110} S 1300 ${60 + k * 120}, 1500 ${180 + k * 105}`} />
        ))}
      </svg>
      <div className="mist" />
      <div className="wrap grid">
        <div>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Kannur Hills Homestays</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{p.name}</span>
          </nav>
          <p className="eyebrow">
            <span>
              {p.address.locality} · {p.address.district}, Kerala
            </span>
          </p>
          <SplitWords id="p-title" parts={rest ? [first + " ", { em: rest }] : [{ em: p.name }]} />
          <p className="sub rise" style={{ "--d": "0.35s" }}>{p.tagline}. Sleeps up to {p.maxGuests}, from {inr(p.priceFrom)} a night.</p>
          <div className="chips rise" style={{ "--d": "0.45s" }}>
            {(p.nearby[0].km ? p.nearby.slice(0, 3).map((n) => `${n.name} ${n.km} km`) : ["1BHK AC cottage", "Parking for 2 cars", "Home-cooked meals"]).map(
              (c) => (
                <span key={c}>
                  <Pin /> {c}
                </span>
              )
            )}
          </div>
          <div className="ctas rise" style={{ "--d": "0.55s" }}>
            <a className="btn btn-cream" href="#book">
              Check availability <Arrow />
            </a>
            <a className="btn btn-ghost" href="#gallery">
              See all {p.gallery.length} photos
            </a>
          </div>
          {p.rating && (
            <a className="rating rise" style={{ "--d": "0.65s" }} href={p.mapsUrl} target="_blank" rel="noopener noreferrer">
              <b>{p.rating.value}</b>
              <span>
                <Stars />
                <br />
                {p.rating.count} reviews on Google
              </span>
            </a>
          )}
        </div>
        <div className="pframe rise" style={{ "--d": "0.2s" }}>
          <div className="frame cycle">
            {p.hero.map((h, k) =>
              k === 0 || ready ? (
                <Picture key={h.src} className={k === i ? "on" : ""} src={h.src} alt={h.alt} pos={h.pos} eager={k === 0} sizes="(max-width: 1080px) 100vw, 45vw" />
              ) : null
            )}
          </div>
          <Stamp className="dark-logo" text={`${p.shortName.toUpperCase()} · ${p.address.locality.toUpperCase()} · `} logo={p.logo.replace(".png", ".webp")} />
          <span className="cap">{p.hero[i].alt}</span>
        </div>
      </div>
    </section>
  );
}

function Gallery({ p }) {
  const [open, setOpen] = useState(-1);
  const n = p.gallery.length;
  const go = useCallback((d) => setOpen((v) => (v + d + n) % n), [n]);
  useEffect(() => {
    if (open < 0) return undefined;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(-1);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, go]);
  const landscape = !p.gallery[0].src.includes("/thushara/");
  // wide tiles break up the grid: Thushara (portrait) gets 3, Pearl Nest (landscape) 2
  const wide = landscape ? [0, 3] : [0, 6, 11];
  let touch = 0;
  return (
    <section id="gallery">
      <div className="wrap">
        <div className="head rv">
          <div>
            <div className="kicker">Gallery</div>
            <h2 className="display">
              Look around <em>{p.shortName}</em>
            </h2>
          </div>
          <p>Real photos of the cottage, taken by us. Tap any photo to open it full screen.</p>
        </div>
        <div className={`gal${landscape ? " land" : ""}`}>
          {p.gallery.map((g, k) => (
            <button key={g.src} className={`rv${wide.includes(k) ? " wide" : ""}`} style={{ transitionDelay: `${(k % 4) * 0.06}s` }} onClick={() => setOpen(k)} aria-label={`Open photo: ${g.alt}`}>
              <Picture src={g.src} alt={g.alt} pos={g.pos} sizes="(max-width: 600px) 50vw, 25vw" />
              <span>{g.cap}</span>
            </button>
          ))}
        </div>
      </div>
      {open >= 0 && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${p.name} photos`}
          onTouchStart={(e) => (touch = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touch;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          }}
        >
          <header>
            <span>
              {open + 1} / {n} · {p.gallery[open].cap}
            </span>
            <button className="x" onClick={() => setOpen(-1)} aria-label="Close gallery" autoFocus>
              ×
            </button>
          </header>
          <div className="stage">
            <img key={open} src={p.gallery[open].src} alt={p.gallery[open].alt} />
            <button className="nb prev" onClick={() => go(-1)} aria-label="Previous photo">
              <Arrow className="" size={18} />
            </button>
            <button className="nb next" onClick={() => go(1)} aria-label="Next photo">
              <Arrow className="" size={18} />
            </button>
          </div>
          <div className="thumbs">
            {p.gallery.map((g, k) => (
              <button key={g.src} aria-current={k === open} onClick={() => setOpen(k)} aria-label={`Photo ${k + 1}`}>
                <img src={g.src.replace(".jpg", "-640.webp")} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function Rates({ p }) {
  return (
    <section id="rates" className="cream">
      <div className="wrap">
        <div className="head rv">
          <div>
            <div className="kicker">Tariff</div>
            <h2 className="display">
              Simple, <em>honest pricing</em>
            </h2>
          </div>
          <p>Rates are for the whole cottage for 2 guests. No hidden charges. Meals are paid separately at the restaurant or to the cook.</p>
        </div>
        <div className="rates">
          {p.rates.map((r, k) => (
            <div key={r.label} className={`rate rv${k === p.rates.length - 1 && p.rates.length > 1 ? " feature" : ""}`}>
              {k === p.rates.length - 1 && p.rates.length > 1 && <span className="tag">Most popular</span>}
              <h3>{r.label}</h3>
              <div className="amt">
                {inr(r.price)}
                <small>/ night</small>
              </div>
              <p>{r.note}</p>
            </div>
          ))}
          <div className="rate rv">
            <h3>{p.extra.label}</h3>
            <div className="amt">
              +{inr(p.extra.price)}
              <small>/ night</small>
            </div>
            <p>{p.extra.note}</p>
          </div>
        </div>
        <div className="terms">
          <div className="rv">
            <h3>Check-in &amp; out</h3>
            <div className="times">
              <div>
                <b>{p.checkIn}</b>
                <span>Check-in</span>
              </div>
              <div>
                <b>{p.checkOut}</b>
                <span>Check-out</span>
              </div>
            </div>
          </div>
          <div className="rv">
            <h3>Meals</h3>
            <p>{p.mealsNote}</p>
          </div>
          <div className="rv">
            <h3>Booking terms</h3>
            <ul>
              {SITE.bookingTerms.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Location({ p }) {
  const a = p.address;
  return (
    <section id="location">
      <div className="wrap">
        <div className="head rv">
          <div>
            <div className="kicker">Location</div>
            <h2 className="display">
              Find us in <em>{a.locality.split(",").pop().trim()}</em>
            </h2>
          </div>
          <p>
            {p.slug === "thushara"
              ? "On the Karuvanchal–Velladu road in Velladu, with easy access to Alakode, Karuvanchal, Naduvil and Vayattuparamb. Looking for hotels in Alakode or rooms in Karuvanchal? This is the closest cottage stay to Paithalmala, Palakkayam Thattu and Kuttippullu."
              : "In Kottoor, Sreekandapuram: a well-connected, peaceful residential area of Kannur district, with shops, restaurants and essentials within walking distance."}
          </p>
        </div>
        <div className="locgrid">
          <div className="map rv">
            <iframe src={p.mapEmbed} title={`Map showing ${p.name}, ${a.locality}, Kannur`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
          <div className="addr">
            <div className="card rv">
              <h3>Address</h3>
              <address>
                {p.name}
                <br />
                {a.street}
                <br />
                {a.locality}, {a.district}
                <br />
                {a.region} {a.postalCode}, India
              </address>
              <div className="ctas" style={{ marginTop: 18 }}>
                <a className="btn btn-forest" href={p.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Get directions <Arrow />
                </a>
              </div>
            </div>
            <div className="card rv">
              <h3>{p.nearby[0].km ? "Nearby attractions" : "Nearby places"}</h3>
              <ul className="nearlist plain">
                {p.nearby.map((n) => (
                  <li key={n.name}>
                    <b>{n.guide ? <Link to={n.guide}>{n.name}</Link> : n.name}</b>
                    {n.km ? <span>~{n.km} km</span> : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PropertyPage({ p }) {
  return (
    <Layout book="#book" property={p}>
      <PropertyHero p={p} />

      <section id="about">
        <div className="wrap facts">
          <div>
            <div className="kicker rv">Welcome to {p.shortName}</div>
            <h2 className="display rv">
              Your home <em>in the hills</em>
            </h2>
            <div style={{ marginTop: 26 }}>
              {p.intro.map((t) => (
                <p className="lead rv" key={t.slice(0, 20)}>
                  {t}
                </p>
              ))}
            </div>
            {p.host && (
              <div className="host rv">
                <div className="av" aria-hidden="true">
                  J
                </div>
                <div>
                  <b>Hosted by {p.host}</b>
                  <br />
                  Guests in our Google reviews mention his warm hospitality and help with local trips.
                </div>
              </div>
            )}
          </div>
          <div className="rv">
            <div className="kicker">At a glance</div>
            <dl>
              {p.facts.map(([k, v]) => (
                <div key={k} className="fr">
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="cream" style={{ paddingTop: 100 }}>
        <div className="wrap">
          <div className="head rv">
            <div>
              <div className="kicker">What's included</div>
              <h2 className="display">
                Everything you need, <em>nothing you don't</em>
              </h2>
            </div>
          </div>
          <Features items={p.features} />
        </div>
      </section>

      <Gallery p={p} />
      <Rates p={p} />

      <section id="reviews">
        <div className="wrap">
          <Reviews p={p} />
        </div>
      </section>

      <Location p={p} />
      {p.slug === "thushara" && <TrailRadar id="nearby" />}

      <BookSection initial={p.slug} lock title={<>Book {p.shortName}, <em>straight from the family</em></>} />
      <Faq faqs={p.faqs} title={`${p.shortName}: good to know`} />
    </Layout>
  );
}
