import { Link } from "react-router-dom";
import { THUSHARA, GUIDES, LANDSCAPE } from "../data/site";
import Layout from "../components/site/Layout";
import Picture from "../components/kit/Picture";
import { Arrow, WhatsApp } from "../components/kit/Icons";
import { SplitWords } from "../components/kit/Motion";
import { Faq } from "../components/site/Sections";

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function GuidePage({ g }) {
  const related = GUIDES[g.related];
  const [head, tail] = g.title.split(": ");
  const wa = `https://wa.me/${THUSHARA.whatsapp}?text=${encodeURIComponent(`Hi! I'm planning to visit ${g.name} and would like to stay at Thushara Homestay.`)}`;
  return (
    <Layout book="/thushara#book">
      <header className="ghero">
        <div className="bg">
          <Picture
            src={LANDSCAPE.src}
            alt={`Western Ghats hills of Kannur, on the way to ${g.name}`}
            eager
            sizes="100vw"
            pos={g.slug === "paithalmala" ? "center 30%" : "center 65%"}
          />
        </div>
        <div className="mist" />
        <div className="shade" />
        <div className="wrap" style={{ position: "relative" }}>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/thushara">Thushara Homestay</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{g.name} guide</span>
          </nav>
          <SplitWords parts={[head + ": ", { em: tail }]} />
          <div className="gstats rise" style={{ "--d": "0.5s" }}>
            {g.stats.map(([b, s]) => (
              <div key={s}>
                <b>{b}</b>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section>
        <div className="wrap article">
          <aside className="toc" aria-label="On this page">
            <b>On this page</b>
            {g.sections.map((s) => (
              <a key={s.h} href={`#${slugify(s.h)}`}>
                {s.h}
              </a>
            ))}
            <a href="#faq">FAQ</a>
          </aside>
          <article className="prose">
            <p className="lede">{g.lede}</p>
            {g.sections.map((s) => (
              <div key={s.h} className="rv">
                <h2 id={slugify(s.h)}>{s.h}</h2>
                {s.p.map((t) => (
                  <p key={t.slice(0, 24)}>{t}</p>
                ))}
                {s.list && (
                  <ul>
                    {s.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="stay-card rv">
              <div className="ph">
                <Picture src={THUSHARA.card.src} alt={THUSHARA.card.alt} pos={THUSHARA.card.pos} sizes="200px" />
              </div>
              <div>
                <h3>Stay {g.km} km away at Thushara Homestay</h3>
                <p>
                  Independent 1BHK AC cottage in Velladu, Alakode · {THUSHARA.rating.value}★ from {THUSHARA.rating.count} Google reviews · from ₹2,000/night
                </p>
                <div className="ctas">
                  <Link className="btn btn-cream" to="/thushara">
                    View the cottage <Arrow />
                  </Link>
                  <a className="btn btn-wa" href={wa} target="_blank" rel="noopener noreferrer">
                    <WhatsApp /> Book on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Faq faqs={g.faqs} title={`${g.name}: FAQ`} />

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Link className="related rv" to={related.path}>
            <span>
              <span className="kicker" style={{ marginBottom: 8 }}>
                Also read
              </span>
              <b>{related.title}</b>
            </span>
            <span className="arrow" aria-hidden="true">
              <Arrow size={20} className="" />
            </span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
