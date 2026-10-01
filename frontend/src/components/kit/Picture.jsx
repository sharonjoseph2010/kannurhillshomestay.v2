/**
 * Responsive photo: serves the WebP variants made by scripts/optimize-images.py
 * with the original JPG as fallback. Thushara photos are portrait (max 1440px
 * wide), so they only have 640/1280 variants.
 */
export default function Picture({ src, alt, sizes = "100vw", pos, eager = false, className, imgClassName, width, height }) {
  const base = src.replace(/\.jpg$/, "");
  const widths = src.includes("/thushara/") ? [640, 960, 1280] : [640, 960, 1280, 1920];
  const srcSet = widths.map((w) => `${base}-${w}.webp ${w}w`).join(", ");
  return (
    <picture className={className}>
      <source type="image/webp" srcSet={srcSet} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        className={imgClassName}
        loading={eager ? "eager" : "lazy"}
        decoding={eager ? "sync" : "async"}
        fetchpriority={eager ? "high" : undefined}
        width={width}
        height={height}
        style={pos ? { objectPosition: pos } : undefined}
      />
    </picture>
  );
}
