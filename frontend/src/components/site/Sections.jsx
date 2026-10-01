import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PROPERTIES, THUSHARA, PEARLNEST } from "../../data/site";
import Picture from "../kit/Picture";
import { Arrow, FeatureIcon, Stars, WhatsApp } from "../kit/Icons";

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const inr = (n) => "₹" + n.toLocaleString("en-IN");

/* Cross-fading photo stack: advances on hover (desktop) or on a timer. */
export function useCycle(count, { auto = 0 } = {}) {
  const [i, setI] = useState(0);
  const timer = useRef();
  const next = () => setI((v) => (v + 1) % count);
  const start = (ms = 1400) => {
    next();
    clearInterval(timer.current);
    timer.current = setInterval(next, ms);
  };
  const stop = () => clearInterval(timer.current);
  useEffect(() => {
    if (!auto || reduced()) return undefined;
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (auto === "touch" && !isTouch) return undefined;
    const t = setInterval(next, typeof auto === "number" ? auto : 3600);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auto, count]);
  useEffect(() => () => clearInterval(timer.current), []);
  return { i, start, stop, setI };
}

/* Becomes true a moment after load, so secondary slideshow photos don't
   compete with the first one (keeps Largest Contentful Paint fast). */
export function useDeferred(ms = 2500) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const go = () => setTimeout(() => setReady(true), ms);
    let t;
    if (document.readyState === "complete") t = go();
    else window.addEventListener("load", () => (t = go()), { once: true });
    return () => clearTimeout(t);
  }, [ms]);
  return ready;
}

/* ------------------------------------------------------------ stays */
function StayCard({ p, photos, tags, delay }) {
  const { i, start, stop } = useCycle(photos.length, { auto: "touch" });
  const ready = useDeferred(2000);
  const [hovered, setHovered] = useState(false);
  const show = ready || hovered;
  return (
    <Link
      className="stay rv"
      to={p.path}
      style={{ transitionDelay: `${delay}s` }}
      onMouseEnter={() => {
        setHovered(true);
        start();
      }}
      onMouseLeave={stop}
    >
      <div className="frame">
        <div className="cycle">
          {photos.map((ph, k) =>
            k === 0 || show ? (
              <Picture key={ph.src} className={k === i ? "on" : ""} src={ph.src} alt={ph.alt} pos={ph.pos} sizes="(max-width: 980px) 100vw, 50vw" />
            ) : null
          )}
        </div>
        <div className="logo">
          <img src={p.logo.replace(".png", ".webp")} alt={`${p.name} logo`} width="64" height="46" loading="lazy" />
        </div>
        <span className="price">From {inr(p.priceFrom)} / night</span>
        <div className="dots" aria-hidden="true">
          {photos.map((ph, k) => (
            <i key={ph.src} className={k === i ? "on" : ""} />
          ))}
        </div>
      </div>
      <div className="meta">
        <h3>{p.name}</h3>
        <div className="arrow" aria-hidden="true">
          <Arrow size={20} className="" />
        </div>
        <div className="loc">
          {p.address.locality}, {p.address.district} · {p.address.street}
        </div>
        <div className="tags">
          {tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function StayCards() {
  return (
    <div className="stays">
      <StayCard
        p={THUSHARA}
        photos={[THUSHARA.card, THUSHARA.gallery[2], THUSHARA.gallery[0], THUSHARA.gallery[3]]}
        tags={["8 km · Palakkayam Thattu", "15 km · Paithalmala", "4.9★ Google", "Kerala meals"]}
        delay={0}
      />
      <StayCard
        p={PEARLNEST}
        photos={[PEARLNEST.card, PEARLNEST.gallery[3], PEARLNEST.gallery[4], PEARLNEST.gallery[1]]}
        tags={["Hill-town stay", "Parking for 2 cars", "Home-cooked meals"]}
        delay={0.15}
      />
    </div>
  );
}

/* ------------------------------------------------------------ features */
export function Features({ items }) {
  return (
    <div className="fgrid">
      {items.map((f, k) => (
        <div className="f" key={f.title} style={{ transitionDelay: `${(k % 3) * 0.12}s` }}>
          <div className="n">{String(k + 1).padStart(2, "0")}</div>
          <FeatureIcon name={f.icon} />
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------ trail radar */
const PIN_POS = { "Palakkayam Thattu": [382, 374], Kuttippullu: [206, 244], Paithalmala: [470, 206], "Kannur Town": [120, 506] };

export function TrailRadar({ id = "trails" }) {
  const spots = THUSHARA.nearby.filter((n) => PIN_POS[n.name]);
  const [sel, setSel] = useState(0);
  const [drawKey, setDrawKey] = useState(0);
  const ref = useRef(null);
  const [x, y] = PIN_POS[spots[sel].name];
  const cx = (300 + x) / 2 + (y - 300) * 0.25;
  const cy = (300 + y) / 2 - (x - 300) * 0.25;

  useEffect(() => {
    if (reduced() || !ref.current) return undefined;
    const host = ref.current;
    const flies = [];
    for (let k = 0; k < 22; k++) {
      const f = document.createElement("span");
      f.className = "fly";
      f.style.left = Math.random() * 100 + "%";
      f.style.top = 10 + Math.random() * 85 + "%";
      f.style.setProperty("--x", Math.random() * 80 - 40 + "px");
      f.style.setProperty("--y", Math.random() * -70 - 10 + "px");
      f.style.setProperty("--d", 6 + Math.random() * 7 + "s");
      f.style.setProperty("--dl", -Math.random() * 9 + "s");
      host.appendChild(f);
      flies.push(f);
    }
    return () => flies.forEach((f) => f.remove());
  }, []);

  const pick = (k) => {
    setSel(k);
    setDrawKey((d) => d + 1);
  };

  return (
    <section className="trails dark" id={id} ref={ref}>
      <div className="wrap">
        <div className="head rv">
          <div>
            <div className="kicker">Trails nearby</div>
            <h2 className="display">
              Wake up close to
              <br />
              <em>North Kerala's best views</em>
            </h2>
          </div>
          <p>Tap a place to see how close it is to Thushara Homestay in Velladu. Distances are approximate, by road.</p>
        </div>
        <div className="tmap">
          <div className="tlist">
            {spots.map((s, k) => (
              <div key={s.name} className="tbtn" data-on={k === sel} onClick={() => pick(k)}>
                <div className="km" aria-hidden="true">
                  {s.km}
                  <small>km</small>
                </div>
                <div>
                  <h3>
                    <button type="button" className="tlink" aria-pressed={k === sel} onClick={() => pick(k)}>
                      {s.name} <span className="sr-only">, {s.km} km from Thushara Homestay</span>
                    </button>
                  </h3>
                  <p>{s.text}</p>
                  {s.guide && (
                    <Link className="more" to={s.guide} onClick={(e) => e.stopPropagation()}>
                      Read the {s.name} guide →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="radar rv" role="img" aria-label="Illustrative distance map from Thushara Homestay to nearby attractions">
            <svg viewBox="0 0 600 600">
              <defs>
                <linearGradient id="sw" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#9cc27d" stopOpacity="0" />
                  <stop offset="1" stopColor="#9cc27d" stopOpacity=".12" />
                </linearGradient>
              </defs>
              <g className="topo">
                <path d="M120 300c0-110 70-190 190-190s180 90 170 190-80 180-190 180-170-70-170-180z" />
                <path d="M160 300c0-80 50-150 150-150s140 70 132 150-60 140-150 140-132-60-132-140z" />
                <path d="M60 300c0-150 100-250 250-250s240 120 226 250-110 240-250 240-226-100-226-240z" />
              </g>
              <circle className="ring" cx="300" cy="300" r="110" />
              <circle className="ring" cx="300" cy="300" r="190" />
              <circle className="ring" cx="300" cy="300" r="280" />
              <text className="ringlbl" x="306" y="186">8 KM</text>
              <text className="ringlbl" x="306" y="106">15 KM</text>
              <text className="ringlbl" x="306" y="16">40 KM</text>
              <g className="sweep">
                <path d="M300 300 L300 20 A280 280 0 0 1 498 102 Z" fill="url(#sw)" />
              </g>
              <path key={drawKey} className="route draw" d={`M300 300 Q${cx} ${cy} ${x} ${y}`} />
              {spots.map((s, k) => {
                const [px, py] = PIN_POS[s.name];
                const left = px < 300 && s.name === "Kuttippullu";
                return (
                  <g key={s.name} className={`pin${k === sel ? " on" : ""}`} onClick={() => pick(k)} style={{ cursor: "pointer" }}>
                    <circle className="pulse" cx={px} cy={py} r="8" />
                    <circle className="core" cx={px} cy={py} r="7" />
                    <text x={left ? px - 94 : px + 14} y={left ? py - 14 : py + (s.name === "Kannur Town" ? 24 : 5)}>
                      {s.name}
                    </text>
                  </g>
                );
              })}
              <g className="home">
                <circle cx="300" cy="300" r="10" />
                <circle cx="300" cy="300" r="20" fill="none" stroke="#9cc27d" strokeOpacity=".4" />
                <text x="328" y="296">THUSHARA</text>
                <text x="328" y="313" style={{ fontWeight: 400, opacity: 0.7 }}>
                  Velladu, Alakode
                </text>
              </g>
            </svg>
            <span className="note">Illustrative, not to scale</span>
          </div>
        </div>
        <p className="also">
          <b>Also nearby:</b> {THUSHARA.alsoNearby.join(" · ")} · Kannur Airport &amp; Railway Station (~42 km)
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ film strip */
export function FilmStrip({ items }) {
  const film = useRef(null);
  const bar = useRef(null);
  useEffect(() => {
    const el = film.current;
    let down = false;
    let sx = 0;
    let sl = 0;
    const pd = (e) => {
      if (e.pointerType !== "mouse") return;
      down = true;
      sx = e.clientX;
      sl = el.scrollLeft;
      el.classList.add("drag");
    };
    const pu = () => {
      down = false;
      el.classList.remove("drag");
    };
    const pm = (e) => {
      if (down) el.scrollLeft = sl - (e.clientX - sx);
    };
    const sc = () => {
      const p = el.scrollLeft / Math.max(1, el.scrollWidth - el.clientWidth);
      if (bar.current) bar.current.style.transform = `translateX(${p * 400}%)`;
    };
    el.addEventListener("pointerdown", pd);
    window.addEventListener("pointerup", pu);
    window.addEventListener("pointermove", pm);
    el.addEventListener("scroll", sc, { passive: true });
    return () => {
      el.removeEventListener("pointerdown", pd);
      window.removeEventListener("pointerup", pu);
      window.removeEventListener("pointermove", pm);
      el.removeEventListener("scroll", sc);
    };
  }, []);
  return (
    <>
      <div className="film" ref={film} tabIndex={0} aria-label="Photos of both homestays, scroll sideways">
        {items.map((it) => (
          <figure key={it.src}>
            <div className="ph">
              <Picture src={it.src} alt={it.alt} pos={it.pos} sizes="(max-width: 600px) 80vw, 34vw" />
            </div>
            <figcaption>
              <b>{it.cap}</b>
              <span>{it.where}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="wrap">
        <div className="progress" aria-hidden="true">
          <i ref={bar} />
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------ reviews */
export function Reviews({ p = THUSHARA }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = p.reviews.length;
  useEffect(() => {
    if (paused || reduced() || !n) return undefined;
    const t = setInterval(() => setI((v) => (v + 1) % n), 6500);
    return () => clearInterval(t);
  }, [paused, n]);
  if (!p.rating) {
    return (
      <div className="soon rv">
        <Stars />
        <h3>Guest reviews coming soon</h3>
        <p>Pearl Nest is our newest homestay. Be among the first to stay and share your experience!</p>
      </div>
    );
  }
  return (
    <div className="revs">
      <div className="score rv">
        {p.rating.value.toFixed(1)}
        <small>
          <Stars />
          <br />
          {p.rating.count} reviews on{" "}
          <a href={p.mapsUrl} target="_blank" rel="noopener noreferrer">
            Google
          </a>
        </small>
      </div>
      <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="kicker">What guests say</div>
        <div className="qwrap" aria-live="polite">
          {p.reviews.map((r, k) => (
            <figure className={`q${k === i ? " on" : ""}`} key={r.name} aria-hidden={k !== i}>
              <blockquote>“{r.text}”</blockquote>
              <cite>
                {r.name} · {r.when} · Google review
              </cite>
            </figure>
          ))}
        </div>
        <div className="qnav">
          {p.reviews.map((r, k) => (
            <button
              key={r.name}
              aria-label={`Show review by ${r.name}`}
              aria-current={k === i}
              onClick={() => {
                setI(k);
                setPaused(true);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ planner */
const iso = (d) => {
  const z = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
  return z.toISOString().slice(0, 10);
};

export function Planner({ initial = "thushara", lock = false }) {
  const [prop, setProp] = useState(initial);
  const [guests, setGuests] = useState(2);
  const [ci, setCi] = useState("");
  const [co, setCo] = useState("");
  const [meals, setMeals] = useState("Please add Kerala meals");
  const [today, setToday] = useState("");
  useEffect(() => {
    const t = new Date();
    const a = new Date(t.getTime() + 7 * 864e5);
    setToday(iso(t));
    setCi(iso(a));
    setCo(iso(new Date(a.getTime() + 2 * 864e5)));
  }, []);
  const p = prop === "pearlnest" ? PEARLNEST : THUSHARA;
  const calc = useMemo(() => {
    if (!ci || !co) return { nights: 2, total: p.rates[0].price * 2 };
    const d1 = new Date(ci + "T00:00:00");
    const nights = Math.max(1, Math.round((new Date(co + "T00:00:00") - d1) / 864e5) || 1);
    let total = 0;
    for (let k = 0; k < nights; k++) {
      const day = new Date(d1.getTime() + k * 864e5).getDay();
      const weekend = day === 5 || day === 6;
      total += (weekend && p.rates[1] ? p.rates[1] : p.rates[0]).price;
    }
    if (guests > 2) total += p.extra.price * nights;
    return { nights, total };
  }, [ci, co, guests, p]);
  const msg = `Hi! I'd like to book ${p.name} from ${ci || "[check-in]"} to ${co || "[check-out]"} (${calc.nights} night${
    calc.nights > 1 ? "s" : ""
  }) for ${guests} guest${guests > 1 ? "s" : ""}. ${meals}. Is it available?`;
  const href = `https://wa.me/${p.whatsapp}?text=${encodeURIComponent(msg)}`;

  return (
    <form className="planner" onSubmit={(e) => e.preventDefault()} aria-label="Plan your stay">
      {!lock && (
        <div className={`seg${prop === "pearlnest" ? " two" : ""}`} role="group" aria-label="Choose homestay">
          <span className="glide" />
          {PROPERTIES.map((x) => (
            <button type="button" key={x.slug} aria-pressed={prop === x.slug} onClick={() => setProp(x.slug)}>
              {x.shortName}
            </button>
          ))}
        </div>
      )}
      <div className="row2 dates">
        <label className="fld">
          <span>Check-in</span>
          <input type="date" value={ci} min={today} onChange={(e) => setCi(e.target.value)} />
        </label>
        <label className="fld">
          <span>Check-out</span>
          <input type="date" value={co} min={ci || today} onChange={(e) => setCo(e.target.value)} />
        </label>
      </div>
      <div className="row2">
        <div className="fld">
          <span id="guests-l">Guests</span>
          <div className="stepper" role="group" aria-labelledby="guests-l">
            <button type="button" aria-label="Fewer guests" onClick={() => setGuests((g) => Math.max(1, g - 1))}>
              −
            </button>
            <b aria-live="polite">{guests}</b>
            <button type="button" aria-label="More guests" onClick={() => setGuests((g) => Math.min(p.maxGuests, g + 1))}>
              +
            </button>
          </div>
        </div>
        <label className="fld">
          <span>Meals</span>
          <select value={meals} onChange={(e) => setMeals(e.target.value)}>
            <option value="Please add Kerala meals">Add Kerala meals</option>
            <option value="No meals needed">No meals</option>
          </select>
        </label>
      </div>
      <div className="est">
        <span>
          {calc.nights} night{calc.nights > 1 ? "s" : ""} · {guests} guest{guests > 1 ? "s" : ""} · {p.shortName}
        </span>
        <b>{inr(calc.total)}</b>
      </div>
      <a className="btn btn-wa" href={href} target="_blank" rel="noopener noreferrer">
        <WhatsApp /> Send on WhatsApp
      </a>
      <div className="fine">Estimate for the room only; meals are extra. We'll confirm availability and the final price.</div>
    </form>
  );
}

export function BookSection({ id = "book", initial = "thushara", lock = false, title, children }) {
  const props = lock ? [initial === "pearlnest" ? PEARLNEST : THUSHARA] : PROPERTIES;
  return (
    <section id={id} style={{ paddingTop: 30 }}>
      <div className="wrap">
        <div className="plan rv">
          <div>
            <div className="kicker">Book direct</div>
            <h2 className="display">
              {title || (
                <>
                  Plan your stay,
                  <br />
                  <em>we'll reply on WhatsApp</em>
                </>
              )}
            </h2>
            <p className="s">
              Pick your dates and we'll open WhatsApp with your message ready to send. Advance payment confirms the booking.
            </p>
            <div className="direct">
              {props.map((x) => (
                <a key={x.slug} href={`tel:${x.phone}`}>
                  <span>
                    <small>{x.shortName} · Call or WhatsApp</small>
                    {x.phoneDisplay}
                  </span>
                  <Arrow className="" />
                </a>
              ))}
              <a href="mailto:info@kannurhillshomestay.com">
                <span>
                  <small>Email</small>
                  info@kannurhillshomestay.com
                </span>
                <Arrow className="" />
              </a>
            </div>
            <p className="note">
              <b>Important:</b> please don't visit without a prior booking, or you may have to return disappointed.
            </p>
            {children}
          </div>
          <Planner initial={initial} lock={lock} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ FAQ */
export function Faq({ faqs, title = "Good to know", intro }) {
  return (
    <section id="faq">
      <div className="wrap faq">
        <div className="rv">
          <div className="kicker">FAQ</div>
          <h2 className="display">{title}</h2>
          {intro && (
            <p className="lead" style={{ marginTop: 20 }}>
              {intro}
            </p>
          )}
        </div>
        <div className="rv">
          {faqs.map((f, k) => (
            <details key={f.q} open={k === 0}>
              <summary>
                {f.q}
                <i aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
