# FLOW MINT — Claude Design master prompt

Paste everything below the line into Claude Design as the first message.
Attach these files from this repo alongside it so the design is drawn against the real art,
not an imagined version of it:

- `_review/hero-A-graded.jpg` — the hero conduit still (21:9)
- `_review/diptych-sm.jpg` — the chaos → order diptych (16:9)
- `_review/ogbase-sm.jpg` — OG card base plate (16:9)
- `_review/modules-contact-sheet.jpg` — form language for the four scene modules

---

You are designing the complete visual system and page designs for **FLOW MINT**, an AI automation
agency in Dubai. The brand foundations below are **locked and already implemented in code** — a
Next.js build exists with these exact tokens, fonts and routes. Your job is the design layer on top:
layout, composition, hierarchy, component design, states, responsive behaviour and motion
specification. Your output goes back into Claude Code to be implemented, so it must be precise
enough to build from without guessing.

Design the whole thing as one system. Do not produce five unrelated pages.

---

## 1. The output I need back

Produce these, in this order. Each must be self-contained and copy-pasteable.

**1. `design/tokens.css`** — the full token layer as CSS custom properties. Start from the locked
values in §3 and extend: spacing scale, type scale with real steps, border radii, shadow/elevation
(if any), z-index layers, container widths, breakpoints, motion durations and easings. Use the exact
existing variable names where they already exist. Any token you add gets a one-line comment saying
what it is for. Any locked value you want to change goes in a separate "proposed changes" block at
the bottom with the reason — never silently altered.

**2. `design/components.html`** — a single component sheet page showing every reusable element at
every state. Default, hover, focus-visible, active, disabled, error, loading where applicable.
Include: primary button, secondary button, text link, nav (desktop + mobile), footer, section label,
eyebrow, price block, service row, package card, form field (text, textarea, select), form
validation state, blockquote/aside note, table, list, and any divider or rule treatment you invent.
Plain HTML + CSS, no framework, no build step.

**3. `design/home.html`, `services.html`, `pricing.html`, `about.html`, `contact.html`** — one static
HTML file per route, semantic markup, using the tokens from `tokens.css`. Real copy from §7, not
lorem ipsum. Desktop layout, with the responsive rules expressed as real CSS media queries so the
files can be resized and checked.

**4. `design/SPEC.md`** — the written spec. For each page, section by section:
purpose · grid and column behaviour · vertical rhythm and spacing values · type sizes used ·
asset slot (exact file path) · breakpoint behaviour at 390 / 768 / 1280 / 1600 · interaction and
motion notes · anything a developer would otherwise have to invent.
Finish with a **Deviations** section listing everything you changed or added versus §3, and why.

Do not write React, Next.js, or Tailwind. Static HTML and CSS only — the implementation stack is
handled downstream.

---

## 2. The business, in one screen

| Field | Value |
|---|---|
| Name | FLOW MINT |
| What it is | AI automation agency — workflow automation, AI agents and chatbots, no-code integrations (n8n / Make / Zapier, CRM, WhatsApp Business), AI consulting |
| Market | Dubai / UAE |
| Buyer | SME and startup owners, roughly 5–150 staff, sceptical, has been quoted enterprise numbers and could not get a straight answer |
| Routes | `/` · `/services` · `/pricing` · `/about` · `/contact` |

**Positioning line:** FLOW MINT builds the boring automations that pay for themselves, and tells you
the price before you call.

**Three pillars, each answering a real gap in this market:**

1. **Priced in the open.** Real starting numbers in AED on a public pricing page. Every competitor in
   Dubai says "book a discovery call". This is the single sharpest differentiator and the design must
   treat price as a hero element, not fine print.
2. **Shipped in weeks, owned by you.** Fixed scope, running in the client's own accounts, no lock-in.
3. **Built for how Dubai SMEs actually work.** WhatsApp-first, Arabic + English, the tools local
   businesses really run.

**Why the design matters more than usual:** the Dubai competitive set (Korvax, Konvergense,
Competenza, GCC Marketing, Apptunix) has converged on one identical page template — centred hero →
"efficiency gap" → about → four icon cards → why-choose-us → process steps → testimonial carousel →
FAQ → CTA. Blue and white B2B SaaS, big neutral sans, glass cards. Placed side by side with those
sites, FLOW MINT must obviously be a different studio's work. That is an explicit acceptance
criterion, not a nice-to-have.

---

## 3. Locked foundations — do not change without flagging

### Palette — "Mint on Ink"

```
--color-ink:         #080B0A   /* page ground */
--color-surface:     #101614   /* raised surface */
--color-line:        #1E2A26   /* hairline rule, card edge */
--color-line-strong: #2C3D37   /* emphasised edge, secondary button border */
--color-fg:          #E8F0EC   /* body and heading text */
--color-muted:       #8FA39B   /* secondary text */
--color-mint:        #3BE0A0   /* THE signal colour */
--color-mint-deep:   #12A374   /* mint, pressed / deep state */
--color-sand:        #E4D5B7   /* warm accent — a Gulf note, used sparingly */
```

**Mint is a signal, not a theme.** It marks the one thing that is live, moving, or is the price.
If mint appears more than a handful of times on a screen it has stopped meaning anything. Sand
carries the editorial voice — pull quotes, price captions, the occasional rule. Everything else is
neutral and still.

### Type

- **Display:** Bricolage Grotesque — headings only, tight negative tracking (~-0.035em), real
  character, large size jumps
- **Body:** Instrument Sans
- **Mono:** Geist Mono — a *system* element, not decoration. Everything technical is set in it:
  prices, tool names, workflow stage names, timestamps, labels, eyebrows, button text.
- **Arabic-ready:** design the type scale to accommodate IBM Plex Sans Arabic and full RTL later.
  Do not use tricks that break under RTL (no baked-in directional letter-spacing on mirrored
  elements, no text that depends on left-alignment to read).

**Hard rule: no Inter, and no near-identical neo-grotesque as the display face.**

**Hierarchy rule:** at most four type sizes on any page, with real jumps between them — not
32/28/24/20. Exactly one page-defining display moment per page.

Existing scale, extend it rather than replace it:
```
--text-display: clamp(2.75rem, 7.2vw, 6.75rem)
--text-title:   clamp(1.85rem, 3.4vw, 3rem)
--text-body:    1.0625rem
--text-label:   0.75rem   /* mono, uppercase, ~0.14em tracking */
```

### Assets — real files, exact paths

The site ships four approved photographic assets. They are studio product photography of machined
aluminium and mint-lit conduit — *not* renders, not stock. Reference them by these exact paths:

| Path | What it is | Ratio |
|---|---|---|
| `/art/hero-conduit.webp` | Hero key art — the conduit | 21:9 |
| `/art/section-conduit.webp` | Second conduit take, section use | 21:9 |
| `/art/before-after.webp` | Chaos → order diptych | 16:9 |
| `/art/og-base.webp` | OG / social card base plate (text composited live, never baked) | 16:9 |

In your HTML, use a real `<img>` with the production path inside a wrapper carrying an explicit
`aspect-ratio`, so the box holds its shape even when the file does not resolve in your preview.
Add an HTML comment naming the asset. **Do not invent additional images, illustrations, icons from
an icon font, or logo walls.** Any icon you need is a hand-authored inline SVG: single mint or
neutral stroke, uniform 2px weight, 24×24 grid, no fill, no gradient.

---

## 4. The core visual idea — "flow"

The name is the art direction. **Flow = work moving through a system.**

The visual system is a **conduit**: a continuous physical channel carrying work from a messy input to
a clean output. Mint is the signal moving through the channel. Everything around it is matte,
neutral and still.

Materially: machined aluminium, anodised metal, matte ceramic, brushed steel, cast concrete, frosted
glass. The reference is a **product catalogue or an industrial design portfolio** — real studio
lighting, real depth of field, real surface imperfection. Not a tech landing page.

Translate that into the layout, not just the pictures: hairline rules that behave like machined
edges, structural grids that hold, one deliberate break in the grid per page, generous negative
space, alignment that reads as engineered rather than centred-by-default.

---

## 5. Banned — the "no AI look" constraint

This is the highest quality bar in the brief. Anything here is a rejection, not a note.

- **Inter or any near-identical neo-grotesque as display type**
- Purple/violet → blue gradient headlines, gradient text fills, gradient buttons
- Emoji used as icons, anywhere
- Centred hero → three feature cards with icon-title-blurb → testimonial carousel. This is the
  competitor template. Avoid it **structurally**, not just cosmetically.
- Glassmorphism — `backdrop-filter: blur()` on every surface
- Perfectly even wall-to-wall 12-column symmetry with no asymmetric moment anywhere
- Uniform 8px radius on every element
- Glowing neural networks, node-and-line brain graphics, circuit boards, robot imagery, floating
  translucent 3D UI panels, hexagon grids, particle clouds, chrome blobs, lens flares
- Stock-smiling business people
- Copy tells: "Unlock the power of", "In today's fast-paced world", "Seamlessly", "Revolutionize",
  "Elevate your business", "Harness", "game-changer", "It's not just X — it's Y"
- **Fabricated statistics, fake logo walls, invented testimonials, made-up client counts, "trusted by
  500+ businesses" badges, star ratings.** There are no case studies and no testimonials yet. Do not
  design a slot for them and do not fill one with placeholder text.
- **No placeholder sections at all.** No "coming soon", no greyed-out cards, no empty shells. If a
  section has no real content it does not ship. A site visibly waiting to be filled in costs trust.

Instead: type with a point of view, deliberate asymmetry, photographic and material texture, colour
restraint, motion that reveals mechanism rather than decorating, and copy in plain English with
specific nouns — "AED 4,500/month", "WhatsApp", "n8n", "four weeks", "your own accounts".

---

## 6. Page designs

### Home

Deliberately not the competitor template. Sections, in order:

1. **Hero — the conduit, and the price.** Headline set left, breaking the grid; not centred over the
   image. The hero photograph has a blown-out emissive highlight, so type must not overlay it —
   guarantee contrast by construction (type on flat ink in its own column, image in another), not by
   adding a scrim. Two CTAs: primary **See pricing**, secondary **WhatsApp us** — pricing first,
   because that is the differentiator. Directly under them, a mono line carrying a real number:
   `Starter from AED 6,000 · no retainer · built in your own accounts`.
2. **The problem, stated concretely.** Not "the efficiency gap". Three recognisable SME moments, each
   stamped with a mono time marker (`11:47pm`, `Every Tuesday`, `Forty times a day`). Set against the
   `/art/before-after.webp` diptych with a short aside note beside it.
3. **Scroll scene — the workflow assembles.** *The signature moment.* A WebGL scene where four
   modules fly in and connect along the conduit as the user scrolls, mint flowing through once
   connected; each stage labels itself in live DOM text pinned beside the canvas — Intake → Route →
   Agent → Handoff. **You are not designing the 3D.** You are designing the frame around it: the
   pinned layout, how the four stage labels and their descriptions are typeset and how the active
   one is marked, the scroll progress indicator, the canvas bounds at each breakpoint, and —
   required — the **static fallback design** used for `prefers-reduced-motion` and for mobile, where
   the scene never loads at all.
4. **Services.** Four services as a **stacked editorial list** with generous type and asymmetric
   layout. Explicitly not four icon cards in a row.
5. **Proof by mechanism.** No case studies. An annotated walkthrough of one real automation, end to
   end: what triggers it, what it decides, what it hands off. Design this as a real diagrammatic
   sequence in DOM — rules, mono labels, mint marking the live path.
6. **Pricing teaser.** Actual AED numbers visible without clicking. Links to `/pricing`.
7. **Close.** WhatsApp-first contact, UAE trust signals, one clear form or a single strong CTA.

### Services

One long page, anchored sections per service, with a sticky or in-page anchor nav. Each service:
what it is → what it looks like when it is running → tools involved → typical timeline → starting
price → CTA. Design one section pattern that survives five repetitions without becoming monotonous —
vary through content weight and asymmetry, not through five different card styles.

### Pricing

**The differentiator page.** Design it like the most confident page on the site. Three packages, plus
a per-service starting price table, plus an honest "what changes the price" section. Price typography
is a real design decision here — mono, large, unhedged. Include plainly what is included, what is
not, and what the client owns afterwards. No "contact us" as the answer anywhere.

### About

Founder-led and specific. Why Dubai, why SMEs, what FLOW MINT refuses to do. **No team photos exist
and no stock photography is permitted** — this page runs typographic. That constraint is the
opportunity: make it the most editorial page on the site.

### Contact

WhatsApp primary (matches local behaviour), email second, form third. The form is four fields: name,
company, one honest question — "What's the task eating the most time right now?" — and contact
details. Not an eleven-field enterprise gate. Design the field, label, focus, error and success
states properly; the form is the conversion surface.

### Global

- **Header:** works on both dark full-bleed hero and mid-page. Design scrolled/compact state, mobile
  menu, and the focus path.
- **Footer:** contact block (WhatsApp, phone, email), navigation, trust line. Design it as a real
  closing surface, not a link dump.
- **Trust block:** built only from what is true today — Dubai-based, workflows run in the client's
  own accounts, no lock-in. **There is no trade licence number to display yet.** Do not design a
  licence badge or any regulatory claim.

---

## 7. Real content — use verbatim

Design with this copy. Where you need a line that is not here, write it in the brand voice and mark
it `[NEW COPY]` so it can be reviewed. Never invent a number, a client, or a result.

**Contact:** WhatsApp / phone `+971 58 562 0044` (link `https://wa.me/971585620044`, displayed with
UAE spacing) · email `flowmint@gmail.com` · Dubai.

**Hero:** eyebrow `AI automation · Dubai` — H1 `Automations that pay for themselves` — sub: "We build
the unglamorous things: the assistant that answers WhatsApp at midnight, the routing that stops leads
going cold, the process that keeps invoices off your desk."

**Problem section H2:** "You do not have an AI problem. You have a thing that keeps not getting done."

Three moments:
- `11:47pm` — "A lead messages your WhatsApp asking what you charge. Nobody replies until 9am. By
  then they have messaged three other companies."
- `Every Tuesday` — "A supplier emails a PDF invoice. Someone opens it, reads it, and types the same
  numbers into your accounting system by hand."
- `Forty times a day` — "The same five questions — do you deliver, what are your hours, is it in
  stock — answered from scratch, every time, by someone who could be selling."

**Four stages:** Intake · Route · Agent · Handoff.

**Packages:** Starter — from **AED 6,000** one-off, no retainer, one workflow fixed scope running in
your own accounts. Growth — from **AED 18,000** setup + **AED 3,500/month**, several workflows plus
one AI agent, someone on the hook when it breaks. Embedded — from **AED 9,000/month**, continuous
build, all workflows maintained.

**Per-service starting prices:** WhatsApp AI assistant AED 12,000 (2–3 weeks) · Lead capture and
routing AED 8,000 (1–2 weeks) · Document and invoice processing AED 9,000 (3–4 weeks) · Custom AI
agent AED 18,000 (4–6 weeks) · Support and optimisation AED 1,200/month (ongoing).

**What changes the price:** how many systems have to talk · whether your tools have a usable API ·
the state of your data · Arabic content.

**Voice:** plain, concrete, unhedged, quietly confident. Specific nouns and real numbers. Short
sentences. No hype verbs. It should read as though a person who builds these things wrote it.

---

## 8. Responsive, motion, accessibility

**Breakpoints to design and express in CSS:** 390 (phone) · 768 (tablet) · 1280 (laptop) · 1600+
(wide). Say in `SPEC.md` what each section does at each — do not leave it to be inferred.

**Motion:**
- Scroll drives the scene; nothing autoplays past the user
- UI transitions 150–350ms; scene motion tied to scroll progress, not to a timer
- Animate `transform` and `opacity` only
- `prefers-reduced-motion: reduce` → 3D replaced by the approved static still, all transitions
  collapse to opacity. Design this state, do not just mention it.
- Mobile → no WebGL at all. Design the lightweight path.

**Accessibility — WCAG AA minimum:**
- 4.5:1 body contrast; check mint on ink and muted on ink and state the measured ratios in `SPEC.md`
- Visible focus rings on everything interactive, never removed — design the ring
- Full keyboard path including the mobile menu and the scroll scene
- 44×44px minimum touch targets
- Semantic landmarks, one `h1` per page, alt text on every meaningful image
- Layout must survive `dir="rtl"` and Arabic text later

---

## 9. Acceptance checklist

Before you hand anything back, verify each of these and say so explicitly:

- [ ] §5 reviewed line by line, nothing tripped
- [ ] Placed beside Korvax, Konvergense and Competenza, this is obviously a different studio's work
- [ ] Mint appears as a signal, not a wash — countable instances per screen
- [ ] At most four type sizes per page, with real jumps; one display moment per page
- [ ] At least one deliberate, intentional break in the grid
- [ ] Every number on the page traces to §7 — nothing invented
- [ ] No empty, placeholder, "coming soon" or greyed-out section anywhere
- [ ] Reduced-motion and mobile-no-WebGL states designed, not assumed
- [ ] Contrast ratios measured and recorded
- [ ] `SPEC.md` Deviations section lists every change to the locked foundations, with reasons

---

## 10. How to work

Work one screen at a time and show me each before moving on. Suggested order:

1. `tokens.css` + type specimen + the component sheet — the system first
2. Home hero and the problem section — the two screens that decide whether the whole thing works
3. The scroll-scene frame, including both fallback states
4. The rest of home
5. Pricing — the differentiator page
6. Services
7. About and Contact
8. `SPEC.md`, written last, against what was actually designed

Ask me before inventing anything the brief does not cover. Where the brief and good design genuinely
conflict, say so and argue your case — do not silently pick one.
