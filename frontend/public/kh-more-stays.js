/*!
 * Kannur Hills Homestay - "More stays we manage" corner chip
 * One self-contained file: styles + markup + behaviour. No dependencies.
 *
 * Behaviour
 *  - First visit: nothing until the visitor scrolls ~35% of the page
 *    (or 8 s on pages too short to scroll), then a chip appears bottom-right:
 *    "+3  Bigger group? More rooms nearby".
 *  - Tap the chip -> panel opens (bottom sheet on phones, small popover on desktop)
 *    listing the 3 managed stays with WhatsApp + Call.
 *  - Close the panel or dismiss the chip -> it shrinks to a small "+3 stays" pill
 *    in the same corner, so it can always be reopened.
 *  - The visitor is remembered for 30 days: on later visits only the small pill
 *    shows (no attention animation, no wait).
 *
 * Install: add a deferred script tag for /kh-more-stays.js just before the closing body tag.
 * Edit the CONFIG block below for numbers, copy, timing and position.
 */
(function () {
  "use strict";
  if (window.__khhMoreStays) return;
  window.__khhMoreStays = true;

  /* ------------------------------------------------------------------ CONFIG */
  var CONFIG = {
    whatsapp: "918330094302",          // country code + number, digits only
    whatsappLabel: "83300 94302",
    call: "+919645243610",
    callLabel: "96452 43610",
    scrollTrigger: 0.35,               // fraction of the page scrolled before the chip appears
    shortPageDelayMs: 8000,            // fallback for pages that barely scroll
    rememberDays: 30,                  // how long a visitor counts as "seen"
    storageKey: "khh_more_stays_v1",
    loadFonts: true,                   // loads Inter Tight + Source Serif 4 from Google Fonts when the chip first appears
    chip: { badge: "+3", label: "Bigger group? More rooms nearby", compact: "more stays" },
    eyebrow: "Kannur Hills Homestay",
    headline: "Coming as a bigger group? We have more room.",
    intro: "Thushara is our own home. We also run these three stays nearby, sleeping up to 9 guests. Message us to check dates and rates.",
    stays: [
      { name: "Anna\u2019s Homestay", place: "Vellad town", detail: "1 BHK and 2 BHK (AC) flats", guests: 6 },
      { name: "Happy Homes", place: "Alakode town", detail: "Executive AC rooms with pantry, non-AC rooms too", guests: 9 },
      { name: "Happy Homes", place: "Karunapuram", detail: "2 BHK (AC) flat", guests: 6 }
    ],
    note: "Extra bed available at every stay.",
    waMessage: "Hi! I saw on your website that you also manage Anna\u2019s Homestay and Happy Homes. Could you share availability and rates? We are __ guests, dates __.",
    owners: {
      show: true,
      lead: "Own a vacant house nearby?",
      text: "We take care of the day-to-day running and upkeep.",
      link: "Talk to us",
      waMessage: "Hi! I have a vacant property and would like to know about your homestay management service."
    },
    continueLabel: "Continue to Thushara"
  };

  /* --------------------------------------------------------------- STORAGE */
  function readSeen() {
    try {
      var t = parseInt(localStorage.getItem(CONFIG.storageKey), 10);
      return t && Date.now() - t < CONFIG.rememberDays * 864e5;
    } catch (e) { return false; }
  }
  function markSeen() {
    try { localStorage.setItem(CONFIG.storageKey, String(Date.now())); } catch (e) {}
  }

  /* ------------------------------------------------------------- ANALYTICS */
  function track(action) {
    try {
      document.dispatchEvent(new CustomEvent("khh:more-stays", { detail: { action: action } }));
      if (typeof window.gtag === "function") window.gtag("event", "more_stays_" + action);
    } catch (e) {}
  }

  /* ------------------------------------------------------------------ CSS */
  var CSS = [
    ".khh{--khh-cream:#f4ecdf;--khh-forest:#13291b;--khh-rust:#c4532e;--khh-line:#dccfb9;--khh-soft:#ebe1cf;",
    "--khh-right:16px;--khh-bottom:16px;--khh-z:2147483000;",
    "--khh-sans:'Inter',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;",
    "--khh-display:'Inter Tight','Inter',system-ui,sans-serif;--khh-serif:'Source Serif 4',Georgia,serif;",
    "font-family:var(--khh-sans);color:var(--khh-forest);-webkit-font-smoothing:antialiased;line-height:1.4}",
    ".khh *,.khh *:before,.khh *:after{box-sizing:border-box}",
    ".khh button{font:inherit;color:inherit;cursor:pointer;margin:0}",
    ".khh a{color:inherit}",

    /* chip */
    ".khh-chip{position:fixed;right:calc(var(--khh-right) + env(safe-area-inset-right,0px));bottom:calc(var(--khh-bottom) + env(safe-area-inset-bottom,0px));z-index:var(--khh-z);",
    "display:flex;align-items:center;gap:10px;border:1px solid var(--khh-line);background:var(--khh-cream);color:var(--khh-forest);",
    "border-radius:999px;padding:7px 16px 7px 7px;box-shadow:0 10px 28px rgba(19,41,27,.22),0 2px 6px rgba(19,41,27,.12);",
    "transition:transform .35s cubic-bezier(.2,.8,.2,1),opacity .35s,padding .3s,box-shadow .2s}",
    ".khh-chip:hover{box-shadow:0 14px 32px rgba(19,41,27,.28),0 2px 6px rgba(19,41,27,.12)}",
    ".khh-chip-btn{display:flex;align-items:center;gap:inherit;border:0;background:transparent;padding:0;border-radius:999px;text-align:left}",
    ".khh-chip-btn:focus-visible{outline:3px solid var(--khh-rust);outline-offset:4px}",
    ".khh-chip[hidden]{display:none}",
    ".khh-chip.khh-in{animation:khhUp .5s cubic-bezier(.2,.8,.2,1) both}",
    ".khh-badge{flex:0 0 auto;width:34px;height:34px;border-radius:50%;background:var(--khh-rust);color:#fff;display:grid;place-items:center;",
    "font-family:var(--khh-serif);font-weight:700;font-size:15px;letter-spacing:-.02em}",
    ".khh-chip-txt{display:flex;flex-direction:column;text-align:left;font-family:var(--khh-display);font-weight:700;font-size:14px;letter-spacing:-.01em;white-space:nowrap}",
    ".khh-chip-txt small{font-family:var(--khh-sans);font-weight:600;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--khh-rust);margin-bottom:1px}",
    ".khh-chip-x{flex:0 0 auto;width:24px;height:24px;margin-left:2px!important;margin-right:-8px!important;border:0;border-radius:50%;background:transparent;",
    "display:grid;place-items:center;opacity:.55;font-size:16px;line-height:1}",
    ".khh-chip-x:hover{opacity:1;background:var(--khh-soft)}",
    ".khh-chip-x:focus-visible{outline:2px solid var(--khh-rust);opacity:1}",
    /* compact pill */
    ".khh-chip.khh-compact{padding:5px 13px 5px 5px;gap:8px}",
    ".khh-chip.khh-compact .khh-badge{width:28px;height:28px;font-size:13px}",
    ".khh-chip.khh-compact .khh-chip-txt{font-size:12.5px}",
    ".khh-chip.khh-compact .khh-chip-txt small,.khh-chip.khh-compact .khh-chip-x{display:none}",
    ".khh-chip.khh-pulse .khh-badge{animation:khhRing 1.6s ease-out 2 .6s}",

    /* scrim + panel */
    ".khh-scrim{position:fixed;inset:0;z-index:calc(var(--khh-z) + 1);background:rgba(10,22,14,.45);opacity:0;transition:opacity .3s}",
    ".khh-scrim.khh-on{opacity:1}",
    ".khh-panel{position:fixed;z-index:calc(var(--khh-z) + 2);background:var(--khh-cream);color:var(--khh-forest);overflow:auto;overscroll-behavior:contain;",
    "-webkit-overflow-scrolling:touch;scrollbar-width:thin;outline:none;opacity:0;transition:transform .4s cubic-bezier(.2,.8,.2,1),opacity .3s}",
    ".khh-panel.khh-on{opacity:1;transform:none}",
    /* phone: bottom sheet */
    "@media (max-width:640px){",
    ".khh-panel{left:0;right:0;bottom:0;max-height:88vh;max-height:88dvh;border-radius:22px 22px 0 0;transform:translateY(40px);",
    "padding-bottom:env(safe-area-inset-bottom,0px);box-shadow:0 -10px 40px rgba(0,0,0,.25)}",
    ".khh-grab{display:block;width:40px;height:4px;border-radius:4px;background:var(--khh-line);margin:10px auto 0}",
    "}",
    /* desktop/tablet: popover above the chip, page stays usable */
    "@media (min-width:641px){",
    ".khh-panel{right:calc(var(--khh-right) + env(safe-area-inset-right,0px));bottom:calc(var(--khh-bottom) + 66px);width:410px;max-height:calc(100vh - 110px);",
    "border-radius:18px;border:1px solid var(--khh-line);transform:translateY(14px) scale(.98);transform-origin:bottom right;",
    "box-shadow:0 24px 60px rgba(19,41,27,.28),0 4px 12px rgba(19,41,27,.12)}",
    ".khh-scrim{display:none}.khh-grab{display:none}.khh-cont{display:none}",
    "}",
    ".khh-in-wrap{padding:24px 24px 16px}",
    ".khh-x{position:sticky;top:12px;float:right;z-index:2;margin:12px 12px -46px 0!important;box-shadow:0 2px 8px rgba(19,41,27,.12);width:34px;height:34px;border:0;border-radius:50%;background:var(--khh-soft);display:grid;place-items:center;font-size:19px;line-height:1}",
    ".khh-x:focus-visible,.khh-cont:focus-visible,.khh-ctas a:focus-visible,.khh-own a:focus-visible{outline:3px solid var(--khh-rust);outline-offset:2px}",
    ".khh-eye{display:flex;align-items:center;gap:10px;font-size:10.5px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--khh-rust);margin:0 0 10px}",
    ".khh-eye:after{content:'';height:1px;width:44px;background:currentColor;opacity:.7}",
    ".khh-h{font-family:var(--khh-display);font-weight:800;font-size:27px;line-height:1.06;letter-spacing:-.025em;margin:0 0 10px;padding-right:34px;color:var(--khh-forest)}",
    ".khh-intro{font-size:14px;line-height:1.5;margin:0 0 16px;color:#2a3a2f}",
    ".khh-rows{list-style:none;margin:0;padding:0}",
    ".khh-rows li{display:grid;grid-template-columns:42px 1fr;gap:12px;padding:12px 0;border-top:1px solid var(--khh-line)}",
    ".khh-rows li:last-child{border-bottom:1px solid var(--khh-line)}",
    ".khh-num{font-family:var(--khh-serif);font-weight:700;font-size:28px;line-height:1;color:var(--khh-rust)}",
    ".khh-nm{font-family:var(--khh-display);font-weight:700;font-size:17px;line-height:1.15;letter-spacing:-.01em}",
    ".khh-pl{font-size:10px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;opacity:.7;margin:4px 0}",
    ".khh-dt{font-size:13px;line-height:1.45;color:#2a3a2f}",
    ".khh-dt b{font-weight:600;color:var(--khh-forest)}",
    ".khh-note{font-family:var(--khh-serif);font-style:italic;font-size:13.5px;opacity:.8;margin:12px 0 14px}",
    ".khh-ctas{display:flex;gap:8px;flex-wrap:wrap}",
    ".khh-ctas a{flex:1 1 160px;display:flex;align-items:center;justify-content:center;gap:8px;min-height:46px;padding:11px 14px;border-radius:999px;",
    "text-decoration:none;font-weight:700;font-size:14px;white-space:nowrap;transition:filter .15s}",
    ".khh-ctas a:hover{filter:brightness(1.1)}",
    ".khh-ctas svg{width:17px;height:17px;flex:0 0 auto}",
    ".khh-wa{background:var(--khh-forest);color:var(--khh-cream)!important}",
    ".khh-call{border:1.5px solid var(--khh-forest);color:var(--khh-forest)!important}",
    ".khh-own{margin-top:16px;padding-top:12px;border-top:1px dashed var(--khh-line);font-size:12.5px;line-height:1.5;color:#2a3a2f}",
    ".khh-own b{color:var(--khh-rust);font-weight:700}",
    ".khh-own a{font-weight:600;text-decoration:underline;text-underline-offset:3px;white-space:nowrap}",
    ".khh-cont{display:block;width:100%;margin-top:10px!important;border:0;background:transparent;padding:10px;font-size:13px;font-weight:600;",
    "text-decoration:underline;text-underline-offset:3px}",
    "@keyframes khhUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}",
    "@keyframes khhRing{0%{box-shadow:0 0 0 0 rgba(196,83,46,.55)}100%{box-shadow:0 0 0 14px rgba(196,83,46,0)}}",
    "@media (prefers-reduced-motion:reduce){.khh *{animation:none!important;transition:none!important}}",
    "@media print{.khh{display:none!important}}"
  ].join("");

  var ICON_WA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z"/></svg>';
  var ICON_CALL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>';

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function waLink(msg) { return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(msg); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }

  /* ---------------------------------------------------------------- BUILD */
  var root, chip, chipBtn, panel, scrim, lastFocus, built = false, open = false;

  function build() {
    if (built) return; built = true;

    if (CONFIG.loadFonts && !document.querySelector('link[data-khh-fonts]')) {
      var f = document.createElement("link");
      f.rel = "stylesheet"; f.setAttribute("data-khh-fonts", "");
      f.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Inter+Tight:wght@700;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,700;1,8..60,400&display=swap";
      document.head.appendChild(f);
    }
    var st = document.createElement("style");
    st.setAttribute("data-khh", ""); st.textContent = CSS;
    document.head.appendChild(st);

    root = document.createElement("div");
    root.className = "khh";

    var n = CONFIG.stays.length;
    chip = document.createElement("div");
    chip.className = "khh-chip";
    chip.hidden = true;
    chip.innerHTML =
      '<button type="button" class="khh-chip-btn" aria-haspopup="dialog" aria-expanded="false" aria-controls="khh-panel" aria-label="See ' + n + ' more homestays we manage nearby">' +
        '<span class="khh-badge" aria-hidden="true">' + esc(CONFIG.chip.badge) + '</span>' +
        '<span class="khh-chip-txt" aria-hidden="true"><small>' + esc(n + " more stays") + '</small><span class="khh-chip-main">' + esc(CONFIG.chip.label) + '</span></span>' +
      '</button>' +
      '<button type="button" class="khh-chip-x" aria-label="Make smaller">\u00d7</button>';
    chipBtn = chip.querySelector(".khh-chip-btn");

    scrim = document.createElement("div");
    scrim.className = "khh-scrim"; scrim.hidden = true;

    var rows = CONFIG.stays.map(function (s, i) {
      return '<li><span class="khh-num" aria-hidden="true">' + pad(i + 1) + '</span><div>' +
        '<div class="khh-nm">' + esc(s.name) + '</div>' +
        '<div class="khh-pl">' + esc(s.place) + '</div>' +
        '<div class="khh-dt">' + esc(s.detail) + ' \u00b7 <b>up to ' + s.guests + ' guests</b></div></div></li>';
    }).join("");

    panel = document.createElement("div");
    panel.id = "khh-panel";
    panel.className = "khh-panel";
    panel.hidden = true;
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "false");
    panel.setAttribute("aria-labelledby", "khh-h");
    panel.tabIndex = -1;
    panel.innerHTML =
      '<span class="khh-grab" aria-hidden="true"></span>' +
      '<button type="button" class="khh-x" data-khh-close aria-label="Close">\u00d7</button>' +
      '<div class="khh-in-wrap">' +
        '<p class="khh-eye">' + esc(CONFIG.eyebrow) + '</p>' +
        '<h2 class="khh-h" id="khh-h">' + esc(CONFIG.headline) + '</h2>' +
        '<p class="khh-intro">' + esc(CONFIG.intro) + '</p>' +
        '<ol class="khh-rows">' + rows + '</ol>' +
        '<p class="khh-note">' + esc(CONFIG.note) + '</p>' +
        '<div class="khh-ctas">' +
          '<a class="khh-wa" data-khh-track="whatsapp" href="' + waLink(CONFIG.waMessage) + '" target="_blank" rel="noopener">' + ICON_WA + 'WhatsApp ' + esc(CONFIG.whatsappLabel) + '</a>' +
          '<a class="khh-call" data-khh-track="call" href="tel:' + esc(CONFIG.call) + '">' + ICON_CALL + 'Call ' + esc(CONFIG.callLabel) + '</a>' +
        '</div>' +
        (CONFIG.owners.show ?
          '<p class="khh-own"><b>' + esc(CONFIG.owners.lead) + '</b> ' + esc(CONFIG.owners.text) + ' <a data-khh-track="owners" href="' + waLink(CONFIG.owners.waMessage) + '" target="_blank" rel="noopener">' + esc(CONFIG.owners.link) + ' \u2192</a></p>' : '') +
        '<button type="button" class="khh-cont" data-khh-close>' + esc(CONFIG.continueLabel) + ' \u2192</button>' +
      '</div>';

    root.appendChild(scrim);
    root.appendChild(panel);
    root.appendChild(chip);
    document.body.appendChild(root);

    chipBtn.addEventListener("click", openPanel);
    chip.querySelector(".khh-chip-x").addEventListener("click", function () { compact(); chipBtn.focus(); track("dismiss_chip"); });
    panel.addEventListener("click", function (e) {
      if (e.target.closest("[data-khh-close]")) { closePanel(); return; }
      var t = e.target.closest("[data-khh-track]");
      if (t) track("click_" + t.getAttribute("data-khh-track"));
    });
    scrim.addEventListener("click", closePanel);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && open) closePanel(); });
    document.addEventListener("click", function (e) {
      if (open && !root.contains(e.target) && window.matchMedia("(min-width:641px)").matches) closePanel();
    });
  }

  /* ------------------------------------------------------------- STATES */
  function showChip(first) {
    build();
    chip.hidden = false;
    if (first) {
      chip.classList.remove("khh-compact");
      chip.classList.add("khh-in", "khh-pulse");
      markSeen();
      track("chip_shown");
    } else {
      compact();
    }
  }
  function compact() {
    chip.classList.add("khh-compact");
    chip.classList.remove("khh-pulse");
    chip.querySelector(".khh-chip-main").textContent = CONFIG.chip.compact;
  }
  function openPanel() {
    if (open) return; open = true;
    lastFocus = document.activeElement;
    var phone = window.matchMedia("(max-width:640px)").matches;
    panel.setAttribute("aria-modal", phone ? "true" : "false");
    panel.hidden = false; scrim.hidden = !phone;
    chipBtn.setAttribute("aria-expanded", "true");
    if (phone) { chip.style.visibility = "hidden"; document.documentElement.style.overflow = "hidden"; }
    requestAnimationFrame(function () { requestAnimationFrame(function () {
      panel.classList.add("khh-on"); scrim.classList.add("khh-on");
      panel.focus({ preventScroll: true });
    }); });
    track("open");
  }
  function closePanel() {
    if (!open) return; open = false;
    panel.classList.remove("khh-on"); scrim.classList.remove("khh-on");
    chipBtn.setAttribute("aria-expanded", "false");
    document.documentElement.style.overflow = "";
    compact();
    setTimeout(function () {
      panel.hidden = true; scrim.hidden = true; chip.style.visibility = "";
      if (lastFocus && lastFocus.focus) { try { lastFocus.focus({ preventScroll: true }); } catch (e) {} }
    }, 320);
    track("close");
  }

  /* ------------------------------------------------------------ TRIGGER */
  function init() {
    if (readSeen()) { showChip(false); return; }
    var fired = false, timer;
    function fire() {
      if (fired) return; fired = true;
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
      showChip(true);
    }
    function scrollable() { return document.documentElement.scrollHeight - window.innerHeight; }
    function onScroll() {
      var max = scrollable();
      if (max > 0 && window.scrollY / max >= CONFIG.scrollTrigger) fire();
    }
    if (scrollable() < window.innerHeight * 0.5) timer = setTimeout(fire, CONFIG.shortPageDelayMs);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // public helpers (handy for testing in the console)
  window.KHHMoreStays = {
    open: function () { showChip(!readSeen()); openPanel(); },
    reset: function () { try { localStorage.removeItem(CONFIG.storageKey); } catch (e) {} },
    config: CONFIG
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
