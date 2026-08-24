"""Mint colour grade for FLOW MINT assets.

Nudges mint-family pixels toward the locked palette signal colour (#3BE0A0)
and lifts their saturation, leaving metal, backdrop and shadow untouched.
Generative models reliably land the hue and miss the saturation, so this
corrects in post instead of burning credits on regeneration.

Usage:
    python grade.py SRC DST [--boost 1.15] [--crop L,T,R,B] [--max 0]
"""

import argparse
import colorsys

import numpy as np
from PIL import Image

TARGET_H = 156.7 / 360.0  # hue of #3BE0A0
HUE_WINDOW = 42.0  # degrees either side of target that count as "mint family"
SAT_FLOOR = 0.10  # below this the pixel is neutral, leave it alone
HUE_PULL = 0.85  # how far to drag hue toward target at full weight

Image.MAX_IMAGE_PIXELS = None


def rgb_to_hsv(a):
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    mx = a.max(-1)
    d = mx - a.min(-1)
    h = np.zeros_like(mx)
    m = d > 1e-6
    i = m & (mx == r)
    h[i] = ((g - b)[i] / d[i]) % 6
    i = m & (mx == g)
    h[i] = ((b - r)[i] / d[i]) + 2
    i = m & (mx == b)
    h[i] = ((r - g)[i] / d[i]) + 4
    return (h / 6.0) % 1.0, np.where(mx > 0, d / np.maximum(mx, 1e-6), 0), mx


def hsv_to_rgb(h, s, v):
    i = np.floor(h * 6.0)
    f = h * 6.0 - i
    i = i.astype(np.int8) % 6
    p, q, t = v * (1 - s), v * (1 - s * f), v * (1 - s * (1 - f))
    out = np.empty(h.shape + (3,), np.float32)
    for k, chans in enumerate([(v, t, p), (q, v, p), (p, v, t), (p, q, v), (t, p, v), (v, p, q)]):
        m = i == k
        if m.any():
            out[m] = np.stack(chans, -1)[m]
    return out


def grade_chunk(a, boost):
    h, s, v = rgb_to_hsv(a)
    hd = np.abs(((h - TARGET_H + 0.5) % 1.0) - 0.5) * 360
    w = np.clip(1 - hd / HUE_WINDOW, 0, 1) * np.clip((s - SAT_FLOOR) / 0.25, 0, 1)
    w = np.where((hd < HUE_WINDOW) & (s > SAT_FLOOR), w, 0)
    h = h * (1 - w * HUE_PULL) + TARGET_H * (w * HUE_PULL)
    s = np.clip(s * (1 + w * boost), 0, 1)
    return hsv_to_rgb(h, s, v)


def measure(path):
    px = np.asarray(Image.open(path).convert("RGB")).reshape(-1, 3).astype(int)
    m = (px[:, 1] > px[:, 0] + 25) & (px[:, 1] > px[:, 2] + 5)
    g = px[m]
    if not len(g):
        return "no mint found"
    order = np.argsort(-(g[:, 1] - g[:, [0, 2]].max(1)))
    top = g[order[: max(1, len(g) // 50)]]
    avg = tuple(int(c) for c in top.mean(0))
    hh, ss, _ = colorsys.rgb_to_hsv(*[c / 255 for c in avg])
    return f"#{avg[0]:02X}{avg[1]:02X}{avg[2]:02X}  hue={hh * 360:.1f}deg  sat={ss * 100:.1f}%"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("dst")
    ap.add_argument("--boost", type=float, default=1.15)
    ap.add_argument("--crop", default=None, help="L,T,R,B in pixels")
    ap.add_argument("--max", type=int, default=0, help="longest edge, 0 = full res")
    args = ap.parse_args()

    im = Image.open(args.src).convert("RGB")
    if args.crop:
        im = im.crop(tuple(int(x) for x in args.crop.split(",")))
    if args.max:
        im.thumbnail((args.max, args.max))

    a = np.asarray(im).astype(np.float32) / 255.0
    rows = max(1, 12_000_000 // max(1, a.shape[1]))  # cap working set per chunk
    for y in range(0, a.shape[0], rows):
        a[y : y + rows] = grade_chunk(a[y : y + rows], args.boost)

    out = Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8))
    if args.dst.lower().endswith((".jpg", ".jpeg")):
        out.save(args.dst, quality=95, subsampling=0)
    elif args.dst.lower().endswith(".webp"):
        out.save(args.dst, quality=92, method=6)
    else:
        out.save(args.dst)
    print(f"{args.dst}  {out.size[0]}x{out.size[1]}  mint={measure(args.dst)}")


if __name__ == "__main__":
    main()
