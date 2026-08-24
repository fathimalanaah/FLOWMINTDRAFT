# FLOW MINT — Phase 1 asset record

Palette: Option A "Mint on Ink". Signal colour `#3BE0A0` (hue 156.7°, sat 73.7%). Ground `#080B0A`.

All generated stills are colour-graded through `tools/grade.py`, which pulls mint-family pixels toward
the target hue and corrects saturation while leaving metal, backdrop and shadow untouched. Generative
models landed the hue reliably and missed the saturation every time, so grading in post was cheaper and
more predictable than regenerating.

## Approved — written to `public/`

| File | Source job | Model | Settings | Grade | Measured mint |
|---|---|---|---|---|---|
| `art/hero-conduit.webp` 5323×2281 | `a0f324fe-4378-49d0-a705-12942fb63713` | `nano_banana_pro` (server routed to `nano_banana_2`) | 4k · 21:9 | boost 1.15, crop `1013,407,6336,2688` to remove a softbox edge and restore 21:9 | `#32D28B` 153.4° 76.2% |
| `art/section-conduit.webp` 6336×2688 | `15398dc4-653c-4aed-8486-a8639c647a53` | `nano_banana_pro` (routed to `nano_banana_2`) | 4k · 21:9 | boost 0.66 | `#2CD190` 156.4° 78.9% |
| `art/before-after.webp` 5504×3072 | `83ca46e1-745a-446a-8ad5-68b77d5e3d18` | `nano_banana_pro` (routed to `nano_banana_2`) | 4k · 16:9 | boost 0.17 | `#33D999` 156.9° 76.5% |
| `art/og-base.webp` 2752×1536 | `a384afc5-8cbc-454a-a967-8d6e4ddb4a06` | `nano_banana_pro` (routed to `nano_banana_2`) | 2k · 16:9 | boost 0.78 | `#27D892` 156.3° 81.9% |

`og-base.webp` carries no text by design — the OG card's title and URL are composited as live text in Phase 2.

## Rejected at the QA gate

| Job | Model | Reason |
|---|---|---|
| `302d2e60-2e6d-45a3-8728-d2e21ea78829` | `seedream_v4_5` | Mint drifted to hue 174.4° (18° toward cyan), off-palette; reads rendered rather than photographed |
| `1613867f-d83b-4345-be37-9cb777aab9f5` | `seedream_v4_5` | Mint hue 171.4°; background rendered dark teal instead of `#080B0A` |
| `acf8c934-898e-4350-aa2c-5b0f06a1420f` | `cinematic_studio_2_5` | Visible third-party brand logos on monitor and speakers (§1.1 and a trademark risk); skyline is not Dubai; reads as a personal desk setup, not a business workspace; white scan-border artifact |

**Finding: `seedream_v4_5` is unusable for palette-critical work in this build.** Given identical prompts and
hex values it pulled mint 15–18° toward cyan both times — a model bias, not a prompt failure. Use
`nano_banana_pro` for all palette-bearing art.

**Finding: the "Dubai office" still is dropped, not regenerated.** A generated stock-style office photo is a
placeholder for real photography by another name, and it violates the no-placeholder rule in §3.5. The About
page runs typographic until real photography of the team and office exists.

## Generated, retained as design reference only

| Job | Purpose |
|---|---|
| `950767b5-1f91-4dd3-8a70-f9a2eebf730f` | Module concept — intake (face slot) |
| `3ef2e9e8-a3fb-4c66-8fe5-daeee7e250fe` | Module concept — routing (port row) |
| `a8db226f-05e1-44ea-b425-5672c1ba75b4` | Module concept — agent (central aperture) |
| `f7447e1d-f07a-4817-a587-6f580e25a3f4` | Module concept — handoff (side coupling) |

These four failed §4 item 5 (set coherence): backgrounds landed on four different greys (`#181617`,
`#171619`, `#1E1C20`, `#363137`), mint scattered across 17° of hue, and framing mixed straight-on with
three-quarter views at inconsistent scale. They are **not** shipped as 2D page assets. They are kept as the
form-language reference the Phase 2 procedural geometry follows — rounded ceramic body, brushed steel face
plate, single mint indicator.

## Scene geometry — procedural, not generated

Approved 2026-08-20. The conduit and the four modules are authored as Three.js geometry in Phase 2 rather
than generated as GLBs. `image_to_3d` priced at 20 credits per mesh untextured and 30 textured — 100–150 for
the set, a third to half the remaining balance — to produce single-photo reconstructions that guess back
faces, carry unpredictable scale, and bake lighting into the texture that then fights the scene's own rig.
The forms are rounded boxes with a slot, a port row, an aperture ring and a side coupling: cheaper, lighter
and more controllable as code, and coherent by construction.

## Motion loops — recommended for removal

Assets 11 and 12 (hero loop, two section loops; 22 credits) are **not yet generated** and should be dropped:

- The conduit now exists as procedural geometry. A generated video of the same object would introduce a
  second visual language for one subject — the same set-coherence failure that disqualified the module
  stills. In-engine motion is palette-exact and consistent by construction.
- In-engine motion costs nothing and weighs nothing, where an MP4 hero backdrop works directly against the
  LCP < 2.0s budget in §3.7.

Awaiting confirmation.

## Spend

| Batch | Credits |
|---|---:|
| Hero candidates (2× `nano_banana_pro` 4k, 2× `seedream_v4_5`) | 10 |
| Module concepts (4× `recraft_v4_1` utility 1k) | 5 |
| Diptych, Dubai still, OG base | 8 |
| **Total** | **23** |
