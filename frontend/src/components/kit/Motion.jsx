/* Small motion helpers. Everything renders as plain, visible text on the
   server; animations only start once the `.js` class and effects are live. */

/** Splits a heading into word spans that rise in on mount. `em` marks italic words. */
export function SplitWords({ parts, as: Tag = "h1", className = "h1", id }) {
  let i = 0;
  const words = (text, em) =>
    text.split(/(\s+)/).map((t, k) => {
      if (!t) return null;
      if (/^\s+$/.test(t)) return t;
      const d = 0.05 + i++ * 0.045;
      const span = (
        <span key={`${em}-${k}`} className="w" style={{ animationDelay: `${d}s` }}>
          {t}
        </span>
      );
      return span;
    });
  return (
    <Tag className={className} id={id} data-split="">
      {parts.map((p, k) =>
        typeof p === "string" ? (
          <span key={k}>{words(p, false)}</span>
        ) : (
          <em key={k}>{words(p.em, true)}</em>
        )
      )}
    </Tag>
  );
}

/** Rotating circular badge with a logo in the middle. */
export function Stamp({ text, logo, alt = "Kannur Hills Homestays logo", className = "" }) {
  return (
    <div className={`stamp ${className}`} aria-hidden="true">
      <svg viewBox="0 0 150 150">
        <defs>
          <path id="stamp-circle" d="M75 75 m-58 0 a58 58 0 1 1 116 0 a58 58 0 1 1 -116 0" />
        </defs>
        <text fill="#f3eee2" fontFamily="Inter, sans-serif" fontSize="11.5" letterSpacing="4.2" fontWeight="500">
          <textPath href="#stamp-circle">{text}</textPath>
        </text>
      </svg>
      <img src={logo} alt={alt} width="70" height="70" />
    </div>
  );
}

/** Marquee of place names (duplicated once for a seamless loop). */
export function Marquee({ items }) {
  const row = items.flatMap((t, i) => [<span key={`t${i}`}>{t}</span>, <b key={`b${i}`}>✦</b>]);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {row}
        {row.map((el, i) => ({ ...el, key: `d${i}` }))}
      </div>
    </div>
  );
}
