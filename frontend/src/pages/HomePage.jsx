import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { THUSHARA, PEARLNEST, HOME_FAQS, LANDSCAPE } from "../data/site";
import Layout from "../components/site/Layout";
import Picture from "../components/kit/Picture";
import { SplitWords } from "../components/kit/Motion";
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

/* Gentle parallax on the hero photo; skipped when the visitor prefers reduced motion. */
function useHeroParallax() {
  const bg = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const onScroll = () => {
      const y = window.scrollY;
      if (bg.current && y < window.innerHeight * 1.2) {
        bg.current.style.transform = `translate3d(0, ${y * 0.35}px, 0) scale(${1 + (y / window.innerHeight) * 0.08})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return bg;
}

export default function HomePage() {
  const bg = useHeroParallax();
  return (
    <Layout book="#book">
      <section className="hero" aria-labelledby="hero-title">
        <div className="bg" ref={bg}>
          <Picture src={LANDSCAPE.src} alt={LANDSCAPE.alt} eager sizes="100vw" width={LANDSCAPE.w} height={LANDSCAPE.h} />
        </div>
        <div className="shade" />
        <div className="content">
          <div className="wrap">
            <SplitWords id="hero-title" parts={["Homestays in the Kannur hills, your base camp for the Western Ghats"]} />
            <p className="lede rise" style={{ "--d": "0.45s" }}>
              Two family-run homestays in Kannur, Kerala: <strong>Thushara Homestay</strong> in Karuvanchal, Alakode, 8 km from Palakkayam
              Thattu, and <strong>Pearl Nest</strong> in Sreekandapuram. Independent AC cottages, home-cooked Kerala meals and free parking.
            </p>
            <div className="ctas rise" style={{ "--d": "0.6s" }}>
              <a className="btn btn-cream" href="#stays">
                Choose your stay
              </a>
              <a className="btn btn-ghost" href="#trails">
                Explore nearby trails
              </a>
            </div>
            <div className="stats rise" style={{ "--d": "0.75s" }}>
              <div>
                <b>8 km</b>
                <span>to Palakkayam Thattu</span>
              </div>
              <div>
                <b>15 km</b>
                <span>to Paithalmala</span>
              </div>
              <div>
                <b>{THUSHARA.rating.value}</b>
                <span>Google rating, {THUSHARA.rating.count} reviews</span>
              </div>
              <div>
                <b>₹2,000</b>
                <span>per night, from</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="story" aria-label="About Kannur Hills Homestays">
        <div className="wrap side">
          <div>
            <p className="big">
              Tucked into the green folds of the Western Ghats, our two family-run homestays put you minutes from misty tabletops, forest
              treks and valley sunrises, with a home-cooked Kerala meal waiting when you return.
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
              <h2 className="display">Our homestays</h2>
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
              <h2 className="display">Why guests return</h2>
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
            <h2 className="display" id="strip-title">
              Look inside
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
