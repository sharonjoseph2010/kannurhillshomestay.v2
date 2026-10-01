import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { SITE, THUSHARA, PEARLNEST, HOME_FAQS, LANDSCAPE } from "../data/site";
import Layout from "../components/site/Layout";
import Picture from "../components/kit/Picture";
import { Arrow } from "../components/kit/Icons";
import { SplitWords, Stamp, Marquee } from "../components/kit/Motion";
import { StayCards, Features, TrailRadar, FilmStrip, Reviews, BookSection, Faq } from "../components/site/Sections";

const STRIP = [
  { ...THUSHARA.gallery[2], where: "Thushara" },
  { ...PEARLNEST.gallery[3], where: "Pearl Nest" },
  { ...THUSHARA.gallery[3], where: "Thushara" },
  { ...THUSHARA.gallery[15], where: "Thushara" },
  { ...PEARLNEST.gallery[0], where: "Pearl Nest" },
  { ...THUSHARA.gallery[11], where: "Thushara" },
  { ...THUSHARA.gallery[7], where: "Thushara" },
  { ...PEARLNEST.gallery[4], where: "Pearl Nest" },
  { ...THUSHARA.gallery[13], where: "Thushara" },
  { ...PEARLNEST.gallery[5], where: "Pearl Nest" },
];

const STORY = [
  "Tucked into the green folds of the ",
  { hl: "Western Ghats" },
  ", our two family-run homestays put you minutes from ",
  { hl: "misty tabletops" },
  ", forest treks and valley sunrises, with a ",
  { hl: "home-cooked Kerala meal" },
  " waiting when you return.",
];

function useHeroMotion() {
  const bg = useRef(null);
  const mist = useRef(null);
  const story = useRef(null);
  const clock = useRef(null);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const words = story.current ? Array.from(story.current.querySelectorAll(".word")) : [];
    const light = () => {
      if (!story.current) return;
      const r = story.current.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (window.innerHeight * 0.85 - r.top) / (r.height + window.innerHeight * 0.35)));
      const n = Math.round(p * words.length);
      words.forEach((w, i) => w.classList.toggle("lit", i < n));
    };
    const onScroll = () => {
      const y = window.scrollY;
      if (!reduce && bg.current && y < window.innerHeight * 1.2) {
        bg.current.style.transform = `translate3d(0, ${y * 0.35}px, 0) scale(${1 + (y / window.innerHeight) * 0.08})`;
        bg.current.style.filter = `blur(${(y / window.innerHeight) * 4}px)`;
      }
      light();
    };
    const onMove = (e) => {
      if (!mist.current) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const yy = e.clientY / window.innerHeight - 0.5;
      mist.current.style.translate = `${x * -30}px ${yy * -14}px`;
    };
    const tick = () => {
      if (!clock.current) return;
      const t = new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour: "numeric", minute: "2-digit", hour12: true });
      clock.current.textContent = `Alakode · ${t.toUpperCase()} IST`;
    };
    tick();
    const ct = setInterval(tick, 20000);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    if (!reduce) window.addEventListener("mousemove", onMove, { passive: true });
    // count-up for the hero stats
    const counters = reduce ? [] : Array.from(document.querySelectorAll("[data-count]"));
    const timers = counters.map((el) => {
      const n = +el.dataset.count;
      el.textContent = "0";
      let t0;
      let raf;
      const step = (t) => {
        t0 = t0 || t;
        const p = Math.min((t - t0) / 1800, 1);
        const v = Math.round(n * (1 - Math.pow(1 - p, 4)));
        el.textContent = n > 999 ? v.toLocaleString("en-IN") : String(v);
        if (p < 1) raf = requestAnimationFrame(step);
      };
      const to = setTimeout(() => (raf = requestAnimationFrame(step)), 1000);
      return () => {
        clearTimeout(to);
        cancelAnimationFrame(raf);
        el.textContent = n > 999 ? n.toLocaleString("en-IN") : String(n);
      };
    });
    return () => {
      clearInterval(ct);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      timers.forEach((f) => f());
    };
  }, []);
  return { bg, mist, story, clock };
}

export default function HomePage() {
  const { bg, mist, story, clock } = useHeroMotion();
  return (
    <Layout book="#book">
      <section className="hero" aria-labelledby="hero-title">
        <div className="bg" ref={bg}>
          <Picture src={LANDSCAPE.src} alt={LANDSCAPE.alt} eager sizes="100vw" width={LANDSCAPE.w} height={LANDSCAPE.h} />
        </div>
        <div className="mist" ref={mist} />
        <div className="mist m2" />
        <div className="shade" />
        <div className="content">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <p className="eyebrow">
                  <span>Alakode · Sreekandapuram · Kannur, Kerala</span>
                  <span className="clock" ref={clock}>
                    Alakode · IST
                  </span>
                </p>
                <SplitWords id="hero-title" parts={["Homestays in the Kannur hills, your base camp for the ", { em: "Western Ghats" }]} />
                <p className="lede rise" style={{ "--d": "0.45s" }}>
                  Two family-run homestays in Kannur, Kerala: <strong>Thushara Homestay</strong> in Velladu, Alakode, 8 km from Palakkayam
                  Thattu, and <strong>Pearl Nest</strong> in Sreekandapuram. Independent AC cottages, home-cooked Kerala meals and free parking.
                </p>
                <div className="ctas rise" style={{ "--d": "0.6s" }}>
                  <a className="btn btn-cream" href="#stays">
                    Choose your stay <Arrow />
                  </a>
                  <a className="btn btn-ghost" href="#trails">
                    Explore nearby trails
                  </a>
                </div>
              </div>
              <Stamp text="KANNUR HILLS · HOMESTAYS · KERALA · " logo={SITE.logo} />
            </div>
            <div className="stats rise" style={{ "--d": "0.75s" }}>
              <div>
                <b>
                  <i data-count="8">8</i> km
                </b>
                <span>to Palakkayam Thattu</span>
              </div>
              <div>
                <b>
                  <i data-count="15">15</i> km
                </b>
                <span>to Paithalmala</span>
              </div>
              <div>
                <b>{THUSHARA.rating.value} ★</b>
                <span>{THUSHARA.rating.count} Google reviews</span>
              </div>
              <div>
                <b>
                  ₹<i data-count="2000">2,000</i>
                </b>
                <span>per night, from</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={["Alakode", "Karuvanchal", "Velladu", "Naduvil", "Vayattuparamb", "Palakkayam Thattu", "Paithalmala", "Kuttippullu", "Sreekandapuram", "Chemperi", "Payyavoor"]} />

      <section className="story" aria-label="About Kannur Hills Homestays">
        <div className="wrap side">
          <div>
            <div className="kicker">Welcome to the hills</div>
            <p className="big" ref={story}>
              {STORY.flatMap((part, k) =>
                (typeof part === "string" ? part : part.hl).split(/(\s+)/).map((t, j) =>
                  /^\s*$/.test(t) ? (
                    t
                  ) : (
                    <span key={`${k}-${j}`} className={`word${typeof part === "string" ? "" : " hl"}`}>
                      {t}
                    </span>
                  )
                )
              )}
            </p>
          </div>
          <p className="sig rv">
            Looking for a homestay, hotel or rooms in Alakode, Karuvanchal, Velladu, Naduvil, Vayattuparamb or Sreekandapuram? Both our cottages are
            independent 1BHK units for up to 3 guests, booked directly with the family.
          </p>
        </div>
      </section>

      <section id="stays" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="head rv">
            <div>
              <div className="kicker">Our homestays</div>
              <h2 className="display">
                Two cottages,
                <br />
                <em>one warm welcome</em>
              </h2>
            </div>
            <p>Both are independent 1BHK AC cottages for up to 3 guests, with parking and home-style food. Hover or tap to look inside.</p>
          </div>
          <StayCards />
        </div>
      </section>

      <section className="cream">
        <div className="wrap">
          <div className="head rv">
            <div>
              <div className="kicker">Why guests return</div>
              <h2 className="display">
                Everything you need,
                <br />
                <em>nothing you don't</em>
              </h2>
            </div>
            <p>Simple, spotless and cared for, run by a local family who know every trail around.</p>
          </div>
          <Features
            items={[
              { icon: "home", title: "Independent cottage", text: "A private 1BHK with AC bedroom, living room, kitchen and bathroom. The whole unit is yours." },
              { icon: "meal", title: "Kerala meals", text: "Vanitha Hotel downstairs at Thushara; a home cook at Pearl Nest. Simple, delicious and affordable." },
              { icon: "car", title: "Free parking", text: "Secure parking at both homestays, with room for 2 cars at Pearl Nest." },
              { icon: "hills", title: "Hills on your doorstep", text: "Palakkayam Thattu and Kuttippullu 8 km, Paithalmala 15 km from Thushara." },
              { icon: "map", title: "Trips arranged", text: "Our host Mr. Joseph helps with 4x4 jeeps, local sightseeing and transport." },
              { icon: "air", title: "Fresh hill air", text: "Misty mornings, cool breezes and quiet nights, far from the city." },
            ]}
          />
        </div>
      </section>

      <TrailRadar />

      <section className="strip" aria-labelledby="strip-title">
        <div className="wrap head rv" style={{ marginBottom: 36 }}>
          <div>
            <div className="kicker">Look inside</div>
            <h2 className="display" id="strip-title">
              Rooms made for <em>slow mornings</em>
            </h2>
          </div>
          <p>
            Drag or swipe through both homestays, or see the full galleries for <Link to="/thushara#gallery">Thushara</Link> and{" "}
            <Link to="/pearlnest#gallery">Pearl Nest</Link>.
          </p>
        </div>
        <FilmStrip items={STRIP} />
      </section>

      <section id="reviews" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <Reviews />
        </div>
      </section>

      <BookSection />

      <Faq faqs={HOME_FAQS} title="Questions, answered" intro="Everything travellers usually ask before booking a homestay in the Kannur hills." />
    </Layout>
  );
}
