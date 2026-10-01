import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SITE, THUSHARA, PEARLNEST, GUIDES } from "../../data/site";
import { Arrow, WhatsApp } from "../kit/Icons";
import Seo from "./Seo";

const NAV = [
  { to: THUSHARA.path, label: "Thushara", hint: "Velladu, Alakode" },
  { to: PEARLNEST.path, label: "Pearl Nest", hint: "Sreekandapuram" },
  { to: GUIDES["palakkayam-thattu"].path, label: "Palakkayam Thattu", hint: "Guide" },
  { to: GUIDES.paithalmala.path, label: "Paithalmala", hint: "Trek guide" },
];

/* Page-wide behaviour: scroll reveal, solid nav, mobile book bar, headline words. */
function useSiteEffects(pathname, hash) {
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 60);
    } else {
      window.scrollTo(0, 0);
    }

    requestAnimationFrame(() =>
      requestAnimationFrame(() => document.querySelectorAll("[data-split]").forEach((h) => h.classList.add("go")))
    );

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".rv:not(.in), .f:not(.in)").forEach((el) => io.observe(el));

    const nav = document.querySelector(".nav");
    const bar = document.querySelector(".mbar");
    const onScroll = () => {
      const y = window.scrollY;
      nav && nav.classList.toggle("solid", y > 60);
      bar && bar.classList.toggle("show", y > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname, hash]);
}

export default function Layout({ children, book = "#book", property = THUSHARA }) {
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);
  useSiteEffects(pathname, hash);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const wa = `https://wa.me/${property.whatsapp}?text=${encodeURIComponent(`Hi! I'd like to book a stay at ${property.name}.`)}`;

  return (
    <>
      <Seo pathname={pathname} />
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav">
        <div className="wrap">
          <Link className="brand" to="/" aria-label={`${SITE.name}, home`}>
            <img src={SITE.logo} alt="Kannur Hills Homestays logo" width="67" height="36" />
            <span>
              <b>Kannur Hills</b>
              <small>Homestays</small>
            </span>
          </Link>
          <nav className="links" aria-label="Main">
            {NAV.map((n) => (
              <Link key={n.to} className="l" to={n.to} aria-current={pathname === n.to ? "page" : undefined}>
                {n.label}
              </Link>
            ))}
            <a className="btn btn-cream" href={book}>
              Plan your stay
            </a>
            <button className="burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
              <span />
              <span />
              <span />
            </button>
          </nav>
        </div>
      </header>
      <div className="sheet" aria-hidden={!open}>
        <Link className="big" to="/" tabIndex={open ? 0 : -1}>
          Home <small>Both homestays</small>
        </Link>
        {NAV.map((n) => (
          <Link key={n.to} className="big" to={n.to} tabIndex={open ? 0 : -1}>
            {n.label} <small>{n.hint}</small>
          </Link>
        ))}
        <a className="btn btn-wa" href={wa} tabIndex={open ? 0 : -1} target="_blank" rel="noopener noreferrer">
          <WhatsApp /> Book on WhatsApp
        </a>
      </div>

      <main id="main">{children}</main>

      <Footer />
      <div className="mbar">
        <a href={`tel:${property.phone}`}>Call</a>
        <a className="wa" href={book}>
          Book on WhatsApp
        </a>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="cols">
          <div>
            <h2>{SITE.name}</h2>
            <p style={{ lineHeight: 1.7 }}>
              Family-run homestays in the hills of Kannur district, Kerala: independent AC cottages near Palakkayam Thattu, Kuttippullu and
              Paithalmala.
            </p>
            <p style={{ marginTop: 14 }}>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </div>
          <div>
            <h2>Stays</h2>
            <ul>
              {[THUSHARA, PEARLNEST].map((p) => (
                <li key={p.slug}>
                  <Link to={p.path}>{p.name}</Link>
                  <br />
                  <small>
                    {p.address.locality} · <a href={`tel:${p.phone}`}>{p.phoneDisplay}</a>
                  </small>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Guides</h2>
            <ul>
              <li>
                <Link to="/palakkayam-thattu">Palakkayam Thattu guide</Link>
              </li>
              <li>
                <Link to="/paithalmala">Paithalmala trekking guide</Link>
              </li>
              <li>
                <a href={THUSHARA.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Thushara on Google Maps <Arrow size={12} className="" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Serving</h2>
            <p style={{ lineHeight: 1.8 }}>{SITE.areas.join(" · ")}, Kannur district, Kerala</p>
          </div>
        </div>
        <div className="big" aria-hidden="true">
          Kannur Hills
        </div>
        <div className="base">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <span>Made with care in Kerala</span>
        </div>
      </div>
    </footer>
  );
}
