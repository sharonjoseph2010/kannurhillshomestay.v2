import { useEffect } from "react";
import { getPageMeta } from "../../seo/meta";

/* Keeps <head> in sync on client-side navigation. The same tags are written
   into each page's static HTML at build time by scripts/prerender.js. */
function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo({ pathname }) {
  useEffect(() => {
    const m = getPageMeta(pathname);
    document.title = m.title;
    setMeta("name", "description", m.description);
    setMeta("property", "og:title", m.title);
    setMeta("property", "og:description", m.description);
    setMeta("property", "og:url", m.canonical);
    setMeta("property", "og:image", m.image);
    setMeta("property", "og:type", m.type);
    setMeta("name", "twitter:title", m.title);
    setMeta("name", "twitter:description", m.description);
    setMeta("name", "twitter:image", m.image);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = m.canonical;
    let ld = document.getElementById("ld-json");
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = "ld-json";
      document.head.appendChild(ld);
    }
    ld.textContent = m.jsonLd;
  }, [pathname]);
  return null;
}
