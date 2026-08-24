# FLOW MINT — Website Master Prompt

**Two-phase build brief.** Phase 1 generates the visual assets (Higgsfield). Phase 2 builds the site (Claude Code + installed design skills).

Do not start Phase 2 until Phase 1 assets exist on disk and pass the Phase 1 QA gate. Phase 2 references real files; it does not invent placeholders.

---

## 0. Shared context — read before either phase

### 0.1 The business

| Field | Value |
|---|---|
| Name | FLOW MINT |
| Category | AI automation agency |
| Market | Dubai / UAE |
| Primary client | SMEs and startups (roughly 5–150 employees) |
| Services | AI workflow automation · custom AI agents & chatbots · AI + no-code integrations (n8n / Make / Zapier, CRM, WhatsApp Business) · AI consulting & enablement |
| Site pages | Home · Services · Pricing · About · Contact |

### 0.2 What the Dubai market actually looks like (researched Aug 2026)

Findings that shape the positioning. Sources at the end of this section.

**The competitive set is crowded and undifferentiated.** Dubai has a dense field of AI automation agencies — Korvax, Konvergense, Competenza, GCC Marketing, Bird Marketing, Apptunix, Udjat, plus enterprise integrators (LeewayHertz, Infosys, Simform). Most compete on the same page template and the same claims.

**Almost every competitor site converges on the same structure and the same look.** Korvax, taken as representative: hero → "efficiency gap" → about → 4 solution cards → why-choose-us → industries → 4-step process → case studies → testimonial carousel → FAQ → CTA → footer. Blue/white B2B SaaS palette, large sans-serif type, icon cards, carousels. *This sameness is the opportunity.* A site that looks materially different from this template wins attention before a single word is read.

**Nobody publishes prices.** The standard is "book a free discovery call" / "get a free quote". Meanwhile published market rates exist: monthly retainers roughly AED 3,000–15,000; entry agentic solutions from ~AED 1,200/month; typical UAE SME projects AED 5,000–50,000; WhatsApp chatbots ~AED 12K–40K plus retainer; lead routing ~AED 8K–25K plus retainer. **Publishing honest starting prices is FLOW MINT's single sharpest differentiator against every competitor listed above** — it directly serves the SME buyer who has been quoted enterprise numbers and cannot get a straight answer.

**Claimed ROI numbers in this market are unverifiable marketing.** "540% average ROI", "70% of UAE working population uses AI daily", "cut costs 40%" — these are vendor self-reports on vendor blogs. **FLOW MINT must not copy, mirror, or invent numbers of this kind.** Every number on the site must trace to a FLOW MINT project the user can defend in a sales call. Where no number exists yet, describe the mechanism instead of faking a metric. This is a hard constraint, repeated in both phases.

**Bilingual (Arabic + English) is table stakes at the top end and a gap in the middle.** The better-funded competitors ship an Arabic toggle; the SME-focused ones often do not. Design the type system for Arabic from the start even if Arabic content ships later.

**Local trust signals matter more than global ones in this market.** UAE trade licence, Dubai-based team, data residency and PDPL/UAE data-protection posture, WhatsApp as a primary contact channel, and named local clients outrank generic "trusted by 500+ businesses" badges.

Sources: [Apptunix — Top AI Automation Agencies in Dubai](https://www.apptunix.com/blog/top-ai-automation-agencies-dubai-uae/) · [Korvax](https://korvax.ai/) · [Competenza](https://competenza.ae/blog/ai-automation-agencies-uae/) · [Konvergense](https://konvergense.com/services/ai-automation-services/) · [Innovatrix — AI Automation Cost in Dubai 2026 (AED)](https://www.innovatrixinfotech.com/blog/ai-automation-cost-dubai-2026-aed) · [Chronexa — Top 10 AI Automation Agencies in UAE](https://chronexa.io/blog/blog-top-automation-agencies-uae-dubai) · [Mirchandani — AI for Dubai SMEs](https://mirchandani.ae/blogs/ai-for-dubai-smes/)

### 0.3 Positioning derived from the research

> **FLOW MINT builds the boring automations that pay for themselves, and tells you the price before you call.**

Three pillars, each a direct answer to a market gap:

1. **Priced in the open.** Real starting numbers in AED on a public pricing page. No "contact us for a quote" as the only answer.
2. **Shipped in weeks, owned by you.** Fixed-scope first build, workflows running on the client's own infrastructure and accounts, no lock-in to an agency-hosted black box.
3. **Built for how Dubai SMEs actually work.** WhatsApp-first, Arabic + English, the CRMs and tools local businesses really run.

### 0.4 The core visual idea — "flow"

The name is the art direction. **Flow = work moving through a system.**

The visual system is a **conduit**: a continuous, physical channel that carries work from a messy input to a clean output. Mint is not a background colour — mint is *the signal moving through the channel*. Everything else is matte, neutral, and still, so the mint reads as the only thing alive on the page.

Materially: machined aluminium, anodised metal, matte ceramic, brushed steel, cast concrete, frosted glass. Photographed like a **product catalogue or an industrial design portfolio** — real studio lighting, real depth of field, real surface imperfection. Not rendered like a tech landing page.

This is the whole reason the site will not look like Korvax or Konvergense. Hold the line on it.

---

## 1. NON-NEGOTIABLE: the "no AI look" constraint

This applies to **both phases**. It is the single most important quality bar in this brief. If an asset or a screen trips any tell below, it is rejected and regenerated — not shipped with an apology.

### 1.1 Banned in generated imagery

- Glowing neural networks, node-and-line brain diagrams, circuit-board brains, synapse imagery
- Humanoid robots; robot hands; a hand reaching toward a glowing interface
- Iridescent / chrome / holographic blobs floating in a purple-blue gradient void
- Over-glossy, over-symmetrical 3D renders with rainbow chromatic aberration and lens flares
- Any text, letterform, UI label, or number baked into a generated image (models produce gibberish; all text is live DOM text)
- Stock-smiling business people in a glass-walled meeting room pointing at a screen
- "Digital transformation" abstract swooshes, particle clouds, hexagon grids, binary rain
- Floating translucent glass UI panels arranged in 3D space
- The default AI palette: electric purple → cyan gradient on near-black

### 1.2 Banned in the built UI

- **Inter, or any near-identical neo-grotesque, as the display face.** Inter is the single loudest "an AI made this" signal on the web in 2026.
- Purple/violet → blue gradient headlines, gradient text fills, gradient buttons
- Emoji used as icons anywhere
- Centred hero → three feature cards with icon-title-blurb → identical testimonial carousel. This is the competitor template; avoid it structurally, not just cosmetically.
- Glassmorphism cards with a `backdrop-blur` on every surface
- Perfectly even, wall-to-wall 12-column symmetry with no asymmetric moment anywhere
- Uniform 8px-radius rounded rectangles on every single element
- Copy tells: "Unlock the power of", "In today's fast-paced world", "Seamlessly", "Revolutionize", "Elevate your business", "Harness", "game-changer", "Let's dive in", "It's not just X — it's Y"
- Fabricated statistics, fake logo walls, invented testimonials, made-up client counts

### 1.3 What "real" looks like instead

- Type with a **point of view**: a display face with actual character, tight optical tracking, real hierarchy jumps (not five sizes of the same weight)
- Asymmetry, deliberate negative space, and at least one screen where the layout breaks its own grid on purpose
- Photographic and material texture — grain, dust, machining marks, honest shadows
- Colour restraint: one signal colour doing the work, everything else neutral
- Motion that reveals mechanism (a workflow actually running) rather than motion that decorates
- Copy in plain English with specific nouns: "AED 4,500/month", "WhatsApp", "n8n", "four weeks", "your AWS account"

### 1.4 Enforcement

- **Phase 1:** every asset passes the §4 QA gate before it is written to `/public`.
- **Phase 2:** run `/impeccable critique` and `/impeccable audit` on every page before it is called done, and treat §1.2 as an explicit checklist item in the review.

---

## 2. PHASE 1 — Visual asset generation (Higgsfield)

> **Prompt to run for Phase 1:**
>
> Using the Higgsfield connector, generate the FLOW MINT website asset library exactly as specified in §2 of `MASTER-PROMPT.md`. Follow the art direction in §0.4 and the hard constraints in §1. Preflight cost with `get_cost: true` before any batch and report the total to me for approval before spending credits. Generate assets in the order listed, run the §4 QA gate on each, regenerate anything that trips a §1.1 tell, then write approved files to `public/` using the exact paths in the asset table and produce `public/ASSETS.md` recording model, prompt, and job id for every file.

### 2.1 Palette — LOCKED: Option A "Mint on Ink" (approved 2026-08-20)

Every Phase 1 prompt passes these hex values into the model's `colors` / `background_color` parameters where supported, and Phase 2 uses the same values as design tokens. Options B and C are retained below as rejected alternates — do not use them.

**Option A — "Mint on Ink"** · dark, premium, closest to the conduit idea · **SELECTED**
```
bg      #080B0A   surface #101614   border  #1E2A26
text    #E8F0EC   muted   #8FA39B
mint    #3BE0A0   mint-deep #12A374
accent  #E4D5B7  (warm sand — a Gulf note, keeps it from reading pure-tech)
```

**Option B — "Mint & Bone"** · light, editorial, reads as a design studio not a SaaS
```
bg      #F7F6F2   surface #FFFFFF   border  #E2DFD6
text    #12100E   muted   #6B665C
mint    #0E9E6E   mint-deep #0A6E4D
accent  #C4552F  (burnt clay)
```

**Option C — "Cold Mint"** · dark teal-green, technical, most "engineering" of the three
```
bg      #071012   surface #0D1A1D   border  #17282B
text    #E6F2F0   muted   #7E9A97
mint    #5EEAD4   mint-deep #0D9488
accent  #F0B429  (amber signal)
```

### 2.2 Model selection

| Need | Model | Why |
|---|---|---|
| Hero + section key art (photographic, 4K) | `nano_banana_pro` (`resolution: "4k"`) | Best detail and material realism at print scale |
| Alternate hero takes / material studies | `seedream_v4_5` (`quality: "high"`) | Different aesthetic bias — use to avoid one-model sameness |
| Flat brand marks, icons, diagram glyphs (SVG-like) | `recraft_v4_1` (`model_type: "vector"`, `colors: [palette]`) | True vector output, exact palette control |
| Product-shot style module renders on flat ground | `recraft_v4_1` (`model_type: "utility"`, `background_color:` palette bg) | Clean, front-facing, predictable — ideal for the conduit modules |
| Team / office / Dubai environment stills | `cinematic_studio_2_5` (`resolution: "2k"`) | Real photographic lighting, not render-look |
| Seamless loop motion for hero + section backdrops | `seedance1_5` (`generate_audio: false`) or `kling2_6` from an approved still | Image-to-video keeps motion locked to already-approved art direction |
| 3D meshes for the scroll scene | **None — built procedurally in Three.js during Phase 2** | Priced at 20 credits/mesh untextured, 30 textured — 100–150 for the set. The forms are rounded boxes carrying a slot, a port row, an aperture ring and a side coupling: trivial as code, roughly 50KB against a 2.5MB GLB budget, exact palette materials, animatable connection points, and guaranteed set coherence. Single-photo reconstruction guesses back faces and bakes lighting into the texture that then fights the scene's own light rig. |
| Cleanup | `remove_background`, `upscale_image` | Isolate modules for compositing; upscale hero to 4K |

Rules:
- **Always `get_cost: true` first** on any batch; report the total and wait for approval.
- Do **not** pass `use_unlim: true` unless the user explicitly asks for it.
- Use `generate_image_batch` for independent prompts; use `count` only for variants of one identical prompt.
- Every 3D mesh must originate from an **already-approved still** so geometry matches the art direction.

### 2.3 Asset manifest

Generate in this order. Later assets depend on earlier approvals.

| # | Asset | Path | Model | Ratio |
|---|---|---|---|---|
| 1 | Hero key art — the conduit | `public/art/hero-conduit.webp` | `nano_banana_pro` 4k | 21:9 |
| 2 | Hero alt take (A/B) | `public/art/hero-conduit-alt.webp` | `seedream_v4_5` high | 21:9 |
| 3 | Module: intake | `public/art/module-intake.webp` | `recraft_v4_1` utility | 1:1 |
| 4 | Module: routing | `public/art/module-routing.webp` | `recraft_v4_1` utility | 1:1 |
| 5 | Module: agent | `public/art/module-agent.webp` | `recraft_v4_1` utility | 1:1 |
| 6 | Module: handoff | `public/art/module-handoff.webp` | `recraft_v4_1` utility | 1:1 |
| 7 | Chaos → order diptych (services intro) | `public/art/before-after.webp` | `nano_banana_pro` 4k | 16:9 |
| 8 | ~~Dubai environment still~~ | — | **dropped** | — |
| 10 | ~~Icon set (12 glyphs)~~ | `public/icons/*.svg` | **hand-authored SVG in Phase 2** | 1:1 |
| 11 | Hero motion loop | `public/motion/hero-loop.mp4` | `seedance1_5` from #1 | 21:9 |
| 12 | Section motion loop ×2 | `public/motion/section-{01,02}.mp4` | `kling2_6` from approved stills | 16:9 |
| 13 | ~~3D conduit segment~~ | — | **procedural in Phase 2** | — |
| 14 | ~~3D module mesh ×4~~ | — | **procedural in Phase 2** | — |
| 15 | OG / social card base plate | `public/art/og-base.webp` | `nano_banana_pro` 2k | 16:9 |

Assets 1, 7 and 15 are generated and approved; 2 became `section-conduit.webp` from the second nano take
after the seedream alternates were rejected. Assets 3–6 were generated but are retained as **design reference
only**, not shipped — see `public/ASSETS.md`. Assets 8, 10, 13 and 14 are struck for the reasons recorded there
and in §2.2.

> OG card text is composited as **live text in Phase 2**, never baked into the generated image.

### 2.4 Prompt patterns

Substitute `{MINT}`, `{BG}`, `{ACCENT}` with the chosen palette hex values.

**Hero key art (#1)**
> Studio product photograph of a precision-machined anodised aluminium channel running diagonally across a matte {BG} seamless backdrop. A single continuous ribbon of luminous {MINT} material flows along the inside of the channel, catching the light as it moves. Shot on a medium-format camera, 80mm lens, f/5.6, controlled softbox key from the upper left with a hard rim light along the channel edge. Visible machining marks, fine surface grain, honest contact shadow. Industrial design catalogue aesthetic. Muted, restrained, expensive. No text, no logos, no screens, no user interface, no people. Photographic, not rendered.

**Module render (#3–6)**
> Front-facing product shot of a single compact modular hardware unit, matte ceramic body with a brushed steel face plate and one small {MINT} indicator strip. Isolated on a flat {BG} ground with a soft even shadow. Clean, symmetrical, catalogue-style, no perspective distortion. Physical object photography. No text, no labels, no numbers, no screens.

**Chaos → order diptych (#7)**
> Two-panel composition. Left: a tangled mass of dull grey cables and mismatched connectors, cluttered and chaotic, low contrast, lit flatly. Right: the same material resolved into parallel ordered channels with a single {MINT} line running cleanly through, lit with a crisp directional key. Same camera position and lens in both panels. Editorial still-life photography, physical materials only. No text, no diagrams, no icons, no people.

**Dubai environment (#8)**
> Documentary photograph of a small modern business workspace in Dubai in late afternoon light — warm low sun raking across a concrete and glass interior, a sliver of the city visible through the window, real dust in the air. Shot on 35mm, f/2, natural light only, slightly imperfect framing. Editorial photojournalism, unposed, no people in frame or figures out of focus and unidentifiable. No text, no signage, no logos, no screens showing interfaces.

**Icons (#10)**
> Minimal geometric line icon of {SUBJECT}, single {MINT} stroke on transparent, uniform 2px stroke weight, square 24×24 grid, flat, no gradient, no shadow, no fill, no text. Technical drawing precision.
>
> Subjects: intake tray · branching router · message bubble · calendar block · document stack · database cylinder · plug/connector · clock · checkmark in circle · alert triangle · handshake · upward line chart

**Motion loop (#11)**
> Prompt from the approved still: `Slow continuous flow of the mint ribbon along the channel, subtle parallax drift, camera locked off, no cuts, seamless loop, no text appearing.` — `duration: 8`, `resolution: "1080p"`, `generate_audio: false`.

### 2.5 Universal negative clause

Append to **every** image prompt:

> No text, no letters, no numbers, no logos, no watermarks, no user interfaces, no screens, no robots, no humanoid figures, no neural network graphics, no circuit boards, no glowing nodes, no purple or violet, no cyan-magenta gradients, no chrome blobs, no lens flares, no holographic iridescence, no hexagon grids, no particle clouds.

---

## 3. PHASE 2 — Build the website (Claude Code + skills)

> **Prompt to run for Phase 2:**
>
> Build the FLOW MINT website per §3 of `MASTER-PROMPT.md`, using only the approved assets in `public/` from Phase 1. Enforce §1 throughout — the site must not read as AI-generated. Use the installed design skills in the order given in §3.2: run `/impeccable init` and `/impeccable shape` before writing code, drive all style/palette/type/stack decisions through `ui-ux-pro-max`'s search database rather than defaults, and finish with `/impeccable critique`, `/impeccable audit`, and `/impeccable polish` on every page. Do not invent statistics, testimonials, client names, or case-study results — use only what I supply, and where I have supplied nothing, describe the mechanism instead of fabricating a number. Show me the home page in the browser preview and verify it before calling anything done.

### 3.1 Stack

- **Next.js (App Router) + TypeScript** — static export capable, good SEO, easy Vercel deploy
- **Tailwind CSS** with a hand-authored token layer (palette from §2.1, no default Tailwind blue/purple anywhere)
- **React Three Fiber + drei** — the scroll scene, with **all geometry authored procedurally in code** (no GLB loading). The conduit is an `ExtrudeGeometry` C-channel swept along a curve so the mint ribbon can animate along it; the four modules are rounded boxes carrying a slot, a port row, an aperture ring and a side coupling. Materials come straight from the palette tokens. Follow the form language of the reference renders listed in `public/ASSETS.md`.
- **Lenis** (smooth scroll) + **GSAP ScrollTrigger** — scroll choreography
- **Framer Motion** — 2D transitions and reveals
- **next/font** self-hosted (no render-blocking Google Fonts request)

### 3.2 Skill sequence — follow in order

1. `/impeccable init` → capture FLOW MINT's product context into `PRODUCT.md` (use §0 of this file as source material)
2. `/impeccable shape home` → plan UX/IA before any code is written
3. `ui-ux-pro-max` → query the local database for real decisions, not defaults:
   ```bash
   python3 .claude/skills/ui-ux-pro-max/scripts/search.py "agency landing dark editorial" --domain style --json
   python3 .claude/skills/ui-ux-pro-max/scripts/search.py "mint green dark" --domain color --json
   python3 .claude/skills/ui-ux-pro-max/scripts/search.py "display grotesque editorial" --domain typography --json
   python3 .claude/skills/ui-ux-pro-max/scripts/search.py "Three.js" --domain stack --json
   ```
4. `frontend-design` skill → lock aesthetic direction before implementation
5. Build pages
6. `/impeccable animate home` → scroll choreography
7. `/impeccable typeset` + `/impeccable layout` → type and spacing rhythm
8. `stop-slop` skill → strip AI tells from every line of copy
9. `/impeccable critique` → heuristic UX review, per page
10. `/impeccable audit` → a11y, performance, responsive, per page
11. `/impeccable polish` → final pass
12. Browser-preview verification — screenshot proof, console clean, no layout shift

### 3.3 Typography

**Do not use Inter.** Query `ui-ux-pro-max` for the final pairing; the default to beat:

- **Display:** `Bricolage Grotesque` (variable, real character, opinionated) — tight tracking, large size jumps
- **Body:** `Instrument Sans` or `Geist` — quiet, legible, not Inter
- **Mono:** `Geist Mono` — for prices, workflow names, tool names, code-adjacent labels. The mono is a *system* element, not decoration: everything technical is set in it.
- **Arabic:** `IBM Plex Sans Arabic` — chosen now even if Arabic ships later, so the type scale is built to accommodate it

Hierarchy rule: at most four type sizes on any page, with **real** jumps between them (not 32/28/24/20). One page-defining display moment per page.

### 3.4 Page specifications

#### Home
Deliberately **not** the competitor template from §0.2.

1. **Hero** — the conduit. Full-bleed hero motion loop or the 4K still with subtle parallax. Headline set left, not centred, breaking the grid. Copy: the positioning line from §0.3, in plain language. One primary CTA (`See pricing`) and one secondary (`WhatsApp us`) — pricing first, because that is the differentiator.
2. **The problem, stated concretely** — not "the efficiency gap". Three specific, recognisable SME situations (leads sitting unanswered overnight; invoices re-typed by hand; the same WhatsApp question answered forty times a day). Set against the chaos→order diptych.
3. **Scroll scene — the workflow assembles** *(the signature moment)*. As the user scrolls, the four Phase 1 module meshes fly in and connect along the conduit; mint flows through once connected. Each module labels itself in live DOM text pinned beside the canvas: Intake → Route → Agent → Handoff. This is the section people screenshot.
4. **Services** — four services, but presented as a **stacked editorial list** with generous type and asymmetric layout, *not* four icon cards in a row.
5. **Proof by mechanism** — no case studies in v1, and no placeholder slots reserved for them. Instead: an annotated walkthrough of one real automation, end to end — what triggers it, what it decides, what it hands off. For a sceptical SME buyer this outperforms a logo wall anyway. Past work gets its own page in a later release, built then, not stubbed now.
6. **Pricing teaser** — actual AED starting numbers, visible without clicking. Links to `/pricing`.
7. **Close** — WhatsApp-first contact, UAE trust signals (trade licence, Dubai-based, data stays in your accounts), one clear form.

#### Services
One long page, anchored sections per service. Each: what it is → what it looks like when running → tools involved (n8n, Make, CRM, WhatsApp Business API) → typical timeline → starting price → CTA.

#### Pricing
The differentiator page — the one thing no competitor in §0.2 does. **Approved 2026-08-20: publish the
market-benchmarked figures below.** They sit inside the published Dubai/UAE ranges from the §0.2 research,
positioned at or just under the midpoint, which is where a new SME-focused agency should sit.

**Packages**

| Tier | What it is | Price | Market range it sits in |
|---|---|---|---|
| **Starter** | One workflow, fixed scope, running in your own accounts | from **AED 6,000** setup · no retainer required | UAE SME projects run AED 5,000–50,000 |
| **Growth** | Multiple workflows plus one AI agent, with support | from **AED 18,000** setup · **AED 3,500**/month | Chatbot builds AED 12K–40K; retainers AED 3,000–15,000/mo |
| **Embedded** | Ongoing automation partner, continuous build and maintenance | from **AED 9,000**/month | Retainers AED 3,000–15,000/mo |

**Per-service starting prices** (Services page, one per anchored section)

| Service | From | Market range |
|---|---|---|
| WhatsApp AI assistant | AED 12,000 | AED 12K–40K plus retainer |
| Lead capture and routing | AED 8,000 | AED 8K–25K plus retainer |
| Document and invoice processing | AED 9,000 | within AED 5K–50K project band |
| Custom AI agent | AED 18,000 | AED 12K–40K plus retainer |
| Support and optimisation retainer | AED 1,200/month | entry agentic from AED 1,200/mo |

A typical Dubai SME of ~25 staff is reported to invest around AED 4,500/month plus ~AED 6,000 setup — the
Starter and Growth tiers are deliberately built to straddle that, because that is the buyer.

State plainly what is included, what is not, and what the client owns afterwards. Add a short, honest "what
changes the price" section (number of integrations, whether the CRM has a usable API, data cleanup, Arabic
content, compliance review).

**Standing caveat:** a published price is a commitment. Transparency only beats the competition if FLOW MINT
can honour these numbers on a discovery call. Sanity-check each figure against real delivery capacity before
launch and adjust upward if a tier cannot be delivered profitably — an honest higher number still beats
"contact us for a quote". Never present a range as a fixed quote, and never publish a figure the business
cannot service.

#### About
Founder-led and specific. Why Dubai, why SMEs, what FLOW MINT refuses to do. No stock team photos — use the Phase 1 Dubai environment still until real photography exists.

#### Contact
WhatsApp as the primary channel (matches local behaviour), email second, form third. Form: name, company, one
honest question ("What's the task eating the most time right now?"), contact. No 11-field enterprise gate.

**Confirmed details (approved 2026-08-20):**

| Channel | Value | Implementation |
|---|---|---|
| WhatsApp / phone | **+971 58 562 0044** | `https://wa.me/971585620044` on every WhatsApp CTA; `tel:+971585620044` on the phone link |
| Email | **flowmint@gmail.com** | `mailto:` link, and the form's delivery address |

Display the number in readable UAE grouping (+971 58 562 0044) while keeping the link target unspaced.
Both belong in the footer, the Contact page, and the home close section.

**Trade licence is not supplied.** Per §3.5, do not display a licence number, "licensed in Dubai" badge, or any
regulatory claim until the real details exist. Build the trust block from what is true today — Dubai-based,
workflows run in the client's own accounts, no lock-in — and add the licence line later.

**Flag for the user, not a blocker:** `flowmint@gmail.com` works, but a domain address (`hello@flowmint.ae`)
reads materially more credible to a B2B buyer, and this market weighs local trust signals heavily (§0.2). A
free-mail address on a pricing-transparent agency site is the one detail that pulls against the positioning.
Swap it in whenever the domain exists — the build should read the address from a single config constant so it
is a one-line change.

### 3.5 Content honesty rules

- **Zero fabricated numbers.** No ROI percentages, client counts, hours-saved figures, or "trusted by" logos unless the user supplies them.
- **No invented testimonials.** Ever.
- Where proof does not yet exist, show **mechanism** — a real workflow diagram, a real before/after of a process — which is more persuasive to a sceptical SME buyer than a round number anyway.
- AED figures come from the approved market-benchmarked table in §3.4. They are the only numbers on the site that are not drawn from FLOW MINT's own delivery history, and they are published as **starting prices**, never as quotes. Re-check them against real delivery capacity before launch.
- **No placeholder sections.** Do not build empty shells, "coming soon" blocks, greyed-out cards, or commented-out scaffolding for content that does not exist yet. If a section has no real content, it does not ship at all. Adding a section later is cheap; a site visibly waiting to be filled in reads as unfinished and costs trust.

### 3.6 Motion rules

- Scroll drives the scene; the scene never autoplays past the user
- `prefers-reduced-motion: reduce` → the 3D scene is replaced by the approved static still, all transitions collapse to opacity
- Mobile → no WebGL scene; serve the still plus a lightweight 2D sequence. Never ship the heavy path to a phone.
- Durations 150–350ms for UI motion; scene motion tied to scroll progress, not to a timer
- Animate `transform` and `opacity` only

### 3.7 Performance & accessibility budget

- LCP < 2.0s on 4G; CLS < 0.05; TBT < 200ms
- 3D scene lazy-loads below the fold; geometry is procedural so there is no mesh download at all — keep the scene's own JS chunk under 250KB gzipped
- All imagery WebP/AVIF with explicit width/height
- WCAG AA minimum: 4.5:1 body contrast, visible focus rings (never removed), full keyboard path, 44×44px minimum touch targets
- Semantic landmarks, one `h1` per page, alt text on every meaningful image
- Full `hreflang` / `dir="rtl"` readiness for the Arabic version even before it ships

### 3.8 Acceptance criteria

The site is done when all of the following are true:

- [ ] `/impeccable audit` passes on every page
- [ ] `/impeccable critique` raises no unaddressed high-severity finding
- [ ] §1.2 checklist reviewed line by line, nothing tripped
- [ ] Placed side by side with Korvax, Konvergense, and Competenza, it is **obviously** a different studio's work
- [ ] Every number on the site traces to something the user can defend in a sales call
- [ ] Reduced-motion and mobile fallbacks verified in the browser, not assumed
- [ ] Home page verified in the browser preview with a screenshot, console clean

---

## 4. Phase 1 QA gate

Before any asset is written to `public/`, check every one:

1. **Tell scan** — read §1.1 top to bottom against the asset. Any hit = regenerate, do not ship.
2. **Text check** — zero letterforms, digits, or UI chrome anywhere in the frame.
3. **Palette check** — mint appears as a *signal* against neutrals, not as a wash over the whole image.
4. **Material check** — does it read as a photographed physical object, or as a render? Renders get regenerated.
5. **Set coherence** — laid out together, do all assets look shot by one photographer on one day? Mixed-model output that breaks the set gets replaced.
6. **Resolution** — hero ≥ 4K, section art ≥ 2K, upscale before writing to disk.
7. **Record** — append model, full prompt, parameters, and job id to `public/ASSETS.md`.

---

## 5. Open inputs — needed before the phases can run

| # | Blocks | Needed from user |
|---|---|---|
| 1 | Phase 1 start | **Palette choice** — Option A, B, or C from §2.1 |
| 2 | Phase 1 spend | **Budget approval** after the `get_cost` preflight |
| 5 | Trust block only | **Trade licence details** — supplied when available; until then no licence claim ships (see §3.4 Contact) |
| 6 | Optional | Arabic content — or confirmation that Arabic ships in a later release |
