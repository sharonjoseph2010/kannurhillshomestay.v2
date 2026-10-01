"""
Create responsive WebP variants for every site photo.

Run from frontend/:  python3 scripts/optimize-images.py
For each JPG in public/images/{thushara,pearlnest} and the landscape, writes
<name>-640/960/1280/1920.webp next to it (smaller
sizes are skipped if the source is narrower). The JPG stays as the fallback
and as the og:image / JSON-LD image. Requires Pillow.
"""
import glob
import os
from PIL import Image

ROOT = os.path.join(os.path.dirname(__file__), "..", "public", "images")
WIDTHS = (640, 960, 1280, 1920)

sources = (
    glob.glob(os.path.join(ROOT, "thushara", "*.jpg"))
    + glob.glob(os.path.join(ROOT, "pearlnest", "*.jpg"))
    + [os.path.join(ROOT, "kannur-hills-western-ghats-landscape.jpg")]
)

for src in sorted(sources):
    im = Image.open(src).convert("RGB")
    base = src[:-4]
    for w in WIDTHS:
        # width = longest side for landscape, shortest side for portrait
        scale = w / max(im.size) if im.width >= im.height else w / im.width
        if scale > 1 and w != WIDTHS[0]:
            continue
        out = im.resize((round(im.width * min(scale, 1)), round(im.height * min(scale, 1))), Image.LANCZOS)
        out.save(f"{base}-{w}.webp", "WEBP", quality=74, method=6)
    print("ok", os.path.basename(src), im.size)

for src in glob.glob(os.path.join(ROOT, "logos", "*.png")):
    im = Image.open(src)
    im.save(src[:-4] + ".webp", "WEBP", quality=85, method=6)
    print("ok", os.path.basename(src))
