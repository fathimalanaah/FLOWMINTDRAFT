# Flow Mint — Conversion Fix Brief

Paste this whole file to Claude Code in the `flowmint` repo.

---

You are working on **Flow Mint**, an AI automation studio in Dubai selling to
SME owners. Live draft: https://flowmintdraft.vercel.app/ · Repo: this one.

The site is beautiful and converts nothing. Your job is to fix that without
throwing away the craft. Work through the tasks in priority order below. After
each PRIORITY block, stop and show me what changed before continuing.

## Ground rules

- **Do not restyle the brand.** Keep the "Mint on Ink" palette in
  `app/globals.css` (`--color-ink #080b0a`, `--color-mint #3be0a0`,
  `--color-sand #e4d5b7`), the Bricolage/Instrument/Geist type stack, and the
  flat editorial layout. This is the one thing about the site that is working.
- **Do not delete the 3D world.** Shorten and relocate it (P2). It is a real
  differentiator, it is just currently mounted in the position of a tollbooth.
- **Voice:** first person singular. A named human runs this business. Not "we
  build the unglamorous things" from a company with one person in it.
- **Em dashes are banned.** There are 65 across the site. Use a full stop, a
  colon, or a comma. Rewrite the sentence if it resists.
- **No invented proof.** No fake logos, testimonials, client names, or metrics.
  Where proof does not exist, say what is true instead (see P4).
- Verify every change in a real browser at 1440px and at iPhone width before
  reporting it done.

---

## PRIORITY 1 — The site is unusable on a phone and cannot capture a lead

These are bugs, not opinions. Do these first.

### 1.1 Mobile navigation does not exist

`components/Header.tsx` hides `Services`, `Pricing`, and `About` below the
mobile breakpoint and renders no menu control in their place. There are zero
`<button>` elements in the header. A phone visitor can reach the WhatsApp link
and nothing else. Every other page on the site is unreachable.

Build a real mobile menu: a hamburger button (44px minimum touch target,
`aria-expanded`, `aria-controls`, labelled "Menu"), a panel containing
Services / Pricing / About / Contact plus the primary CTA, focus trapped while
open, closing on Escape and on route change. Test it by actually opening it at
iPhone width.

### 1.2 There is no way to book anything

`components/ContactForm.tsx` builds a `mailto:` string and sets
`window.location.href`. For anyone on Gmail web, Outlook web, or a phone
without a configured mail client, that silently does nothing. Combined with the
absence of any calendar link, the site currently has **no reliable path from
interested visitor to booked conversation**.

Fix in two parts:

**(a) Add a real booking flow.** Create `/book` with an embedded scheduler
(Cal.com is free and self-hostable; TidyCal or Calendly also fine). One meeting
type: **"20-minute automation audit"**. Not "consultation", not "discovery
call". Name the outcome. On the booking page state what happens on the call and
what they leave with, in three bullets.

**(b) Make the form actually send.** Wire it to a real handler (Resend, or a
Next.js route handler posting to Formspree). Show a genuine success state and a
genuine error state with the email address as fallback. Keep the honest comment
convention already in that file, but the comment should stop apologising for a
mailto because there should no longer be a mailto.

### 1.3 Pricing contradicts itself

Three separate problems in `lib/site.ts`:

- The hero promises "Starter from AED 6,000" but the cheapest thing in
  `services` is Lead capture and routing at AED 8,000. A visitor who reads the
  hero and then the services list catches you in an inconsistency in under ten
  seconds.
- The tier ladder reads Starter 6,000 → Growth 18,000 → Embedded 9,000. The
  third number is lower than the second because one is a monthly retainer and
  the other is a setup fee, but nothing on the card makes that legible at a
  glance. It looks like a mistake.
- `packages` and `services` are two price lists for the same work with no
  stated relationship. Is a Starter build one of the five services, or
  something else?

Resolve it. Either Starter genuinely starts at the price of the cheapest
service, or the hero line changes. Then add one sentence above the tier grid
explaining how packages relate to services. Make the setup-versus-monthly
distinction typographically obvious, not just present in the text.

### 1.4 Social previews are blank

`app/layout.tsx` sets `og:title`, `og:description`, `og:locale`, `og:type`, and
nothing else. There is no `og:image`, no `twitter:card`, no `canonical`. Every
time this URL is pasted into WhatsApp, LinkedIn, or Slack it renders as a naked
grey rectangle. You already have `public/art/og-base.webp` sitting in the repo.

Add a 1200×630 `og:image` with the URL absolute, `twitter:card:
summary_large_image`, and a canonical URL. Use Next's `metadata` export.

---

## PRIORITY 2 — Value is buried behind decoration

### 2.1 Quantify the problem before fixing it

The homepage is 13,652px tall at a 900px viewport. That is 15.2 screens. The
scroll-world section is roughly 8,400px of that, about **62% of the entire
page**, and it sits between the hero and the first mention of what you sell. A
visitor scrolls ten screens before reaching "What we build".

Worse: the world's four beats (Intake, Route, Agent, Handoff) describe the same
four things as the services list immediately below it. The most expensive
element on the site is a slower, prettier restatement of the section that
follows it.

### 2.2 The fix

Do not delete it. Restructure:

1. **Cut the world from four scenes to two.** Keep Intake (the 11pm WhatsApp
   message, which is your sharpest hook) and Handoff (runs in your accounts,
   no lock-in, which is your strongest differentiator). Drop Route and Agent
   entirely, and drop the connector clips between the removed scenes.
2. **Reduce scroll cost per scene.** In `components/world/ScrollWorld.tsx`, cut
   `scroll` per section to roughly `0.9` and `diveScroll` to `1.0`. Target: the
   whole world section occupies no more than three viewport heights.
3. **Move it below the services and process sections.** New homepage order:
   Hero → Three situations → **What we build** → How a build works → World →
   Pricing → Booking CTA. The world becomes a reward for interested readers
   rather than a toll gate for everyone.
4. **Give it a skip affordance.** A persistent low-key "Skip to services" link
   while the world is engaged.

### 2.3 Make the world cheap on mobile

A phone currently downloads 31.5 MB across seven MP4s. `public/scrub-engine.js`
already supports `clipMobile` and `connectorsMobile` and the config never sets
them. Either encode 720p variants at `-g 4` and wire them up, or, simpler and
better for a first-time mobile visitor, **serve the still images only on
mobile** and skip the video entirely below 860px. Measure the payload after and
report the number.

---

## PRIORITY 3 — The copy does not sound like a person

### 3.1 Rewrite the hero

Current:

> **Automations that pay for themselves**
> We build the unglamorous things: the assistant that answers WhatsApp at
> midnight, the routing that stops leads going cold, the process that keeps
> invoices off your desk.

"Automations that pay for themselves" is a claim every automation agency makes
and none prove. The subhead is three parallel clauses of near-identical rhythm,
which is the single most recognisable AI-writing tell on the page. And nothing
here says who it is for.

Rewrite to answer, above the fold: **who this is for, what breaks without it,
what it costs.** Lead with the specific customer and the specific loss. Something
in this direction, in your own words:

> **Your customers message at 11pm. Nobody answers until 9am.**
> I build the automations Dubai SMEs actually need: a WhatsApp assistant that
> answers while you sleep, lead routing that stops enquiries going cold,
> invoice processing nobody has to retype. Fixed price, built in your accounts,
> yours to keep.

Then a single primary CTA: **Book a 20-minute audit**.

### 3.2 Kill the AI tells

Specific lines to rewrite, all on the homepage:

- "You do not have an AI problem. You have a thing that keeps not getting
  done." — the negation-then-reframe construction is a tell. It also uses "a
  thing" to avoid naming the thing.
- "Nothing here is new technology. Every one of these is a decision about where
  work goes and who, or what, makes the next move. The AI part is small. The
  plumbing is most of it, and the plumbing is what we are good at." — four
  sentences of escalating aphorism. Cut to one concrete claim.
- "Here is exactly what happens, in order." — then delivers something that is
  not exact.
- "Five things, each with a price attached." — reads as a system describing its
  own output.
- Contractions are absent site-wide. "do not", "does not", "cannot" throughout.
  Nobody speaks this way. Use "don't", "doesn't", "can't".

Sweep every page. Remove all 65 em dashes. Vary sentence length deliberately:
the current prose has a uniform medium-length rhythm that is itself the tell.

### 3.3 Name the human

The site says "we" throughout and contains no person: no founder name, no
photo, no LinkedIn, on any page including About. Meanwhile the contact address
is `flowmint@gmail.com`.

Put a real name and a real face on the About page and in the footer. One
paragraph, first person, on why you started this and what you did before.
This is the cheapest credibility available to a new agency and it currently
costs you nothing to add.

---

## PRIORITY 4 — Trust, with nothing invented

You have no clients yet. That is fine and it is survivable. What is not
survivable is having no proof of any kind while asking for AED 18,000.

Add, in rough order of value per unit of effort:

1. **A named founder with a photo** (see 3.3).
2. **One real worked example.** Not a case study with a fake client. Build one
   of these automations for yourself, screenshot the actual n8n canvas and the
   actual WhatsApp thread, and show it. "Here is one I run for my own enquiries"
   is genuine proof.
3. **A short demo video.** 60 seconds, screen recording, message in, CRM record
   out. This converts better than every animation currently on the site.
4. **Concrete guarantees in place of testimonials.** You already have real ones
   buried in body copy: fixed price before work starts, built in your own
   accounts, two rounds of changes, keeps running if you leave. Pull these out
   as a visible four-item guarantee block near the pricing.
5. **A trade licence number and a physical Dubai location** in the footer, if
   you have them. In the UAE market this matters more than it does elsewhere.

Keep the "Flow Mint is new" honesty. It is disarming and it is working. Just
stop letting it be the *only* thing standing in for proof.

---

## PRIORITY 5 — CTAs, domain, performance

### 5.1 One primary action, repeated

Currently every CTA pair is "See pricing" (mint, primary) plus "WhatsApp us"
(ghost). The visually primary action navigates to another page rather than
converting, and the secondary drops the visitor into a chat app where they have
to compose an opening message themselves. There are eight `wa.me` links and zero
calendar links.

New rule: **primary CTA is always "Book a 20-minute audit" pointing at `/book`.**
WhatsApp stays as a genuine secondary, because in this market it is how people
actually talk, but it stops being the only conversion path.

Place the primary CTA at: hero, end of the services section, on each pricing
card, and in the closing section. Four placements, same wording, same styling.
Keep the header WhatsApp button as-is.

### 5.2 Custom domain

`flowmintdraft.vercel.app` and `flowmint@gmail.com` together tell a prospect
considering an AED 18,000 purchase that this is a side project. Buy the domain,
point it at Vercel, set up email on it, and update `lib/site.ts`. Everything
else in this document is worth less until this is done.

### 5.3 Performance

Load is 5.8s. After the P2 video work, re-measure and report Lighthouse
performance, LCP, and total mobile transfer. Add `priority` only to what is
genuinely above the fold and lazy-load the rest.

---

## Ranked: highest impact per unit of effort

1. **Mobile menu** (P1.1). Hours of work. Currently blocking every mobile
   visitor from every page.
2. **Booking link and working form** (P1.2). Half a day. Currently there is no
   dependable way to become a lead.
3. **Reorder the homepage and halve the world** (P2.2). Half a day. Moves the
   offer from screen ten to screen two.
4. **Hero rewrite plus name and face** (P3.1, P3.3). Hours. Turns a generic
   agency claim into a specific person solving a specific problem.
5. **Custom domain** (P5.2). An hour, mostly waiting on DNS. Gates the
   credibility of everything above it.

Then: pricing consistency (P1.3), og:image (P1.4), mobile video weight (P2.3),
the em-dash and contraction sweep (P3.2), the proof block (P4).

---

## What not to touch

The palette, the type stack, the flat editorial grid, the `prefers-reduced-
motion` handling, the skip-to-content link, and the honest "Flow Mint is new"
positioning. These are the parts a good designer would keep.
