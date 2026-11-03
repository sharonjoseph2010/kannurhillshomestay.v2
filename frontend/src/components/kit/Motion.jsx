/* Small motion helpers. Everything renders as plain, visible text on the
   server; animations only start once the `.js` class and effects are live. */

/** Splits a heading into word spans that rise in on mount. */
export function SplitWords({ parts, as: Tag = "h1", className = "h1", id }) {
  let i = 0;
  const words = (text) =>
    text.split(/(\s+)/).map((t, k) => {
      if (!t) return null;
      if (/^\s+$/.test(t)) return t;
      const d = 0.05 + i++ * 0.045;
      const span = (
        <span key={k} className="w" style={{ animationDelay: `${d}s` }}>
          {t}
        </span>
      );
      return span;
    });
  return (
    <Tag className={className} id={id} data-split="">
      {parts.map((p, k) => (
        <span key={k}>{words(p)}</span>
      ))}
    </Tag>
  );
}
