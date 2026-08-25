import Link from "next/link";
import { site, packages, services } from "@/lib/site";
import ScrollWorld from "@/components/world/ScrollWorld";
import Reveal from "@/components/Reveal";
import BookCta from "@/components/BookCta";

const situations = [
  {
    when: "11:47pm",
    text: "A lead messages your WhatsApp asking what you charge. Nobody replies until 9am. By then they've messaged three other companies.",
  },
  {
    when: "Every Tuesday",
    text: "A supplier emails a PDF invoice. Someone opens it, reads it, and types the same numbers into your accounting system by hand.",
  },
  {
    when: "Forty times a day",
    text: "The same five questions. Do you deliver, what are your hours, is it in stock. Answered from scratch every time by someone who could be selling.",
  },
];

const guarantees = [
  {
    title: "Fixed price before I start",
    body: "In writing. What it does, what it doesn't, what it costs, how long it takes.",
  },
  {
    title: "Built in your accounts",
    body: "Your n8n, your CRM, your WhatsApp number, your credentials. Not a platform you rent from me.",
  },
  {
    title: "Two rounds of changes",
    body: "After handover, included. Most things people want adjusted show up in the first fortnight.",
  },
  {
    title: "No lock-in",
    body: "If you stop working with me it keeps running. You get the runbook either way.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Hero. Who it's for, what breaks without it, what it costs.          */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative border-b border-line pt-28">
        <div className="shell pb-16 lg:pb-24">
          <div className="max-w-[46rem] lg:py-16">
            <p className="label text-mint">AI automation for {site.city} SMEs</p>
            {/* Deliberately not --text-display: that scale was sized for the old
                four-word headline. At nine words it filled the viewport on its
                own and pushed the subhead and the primary CTA below the fold,
                which is the opposite of what a hero is for. */}
            <h1 className="mt-5 text-[clamp(2.25rem,4.8vw,4.25rem)]">
              Your customers message at 11pm. Nobody answers until 9am.
            </h1>
            <p className="mt-6 max-w-[36rem] text-[1.0625rem] text-muted sm:text-[1.15rem]">
              I build the automations Dubai businesses actually need. A WhatsApp assistant that answers
              while you sleep, lead routing that stops enquiries going cold, invoice processing nobody
              has to retype. Fixed price, built in your accounts, yours to keep.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <BookCta />
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center border border-line-strong px-6 font-mono text-[0.8125rem] tracking-[0.12em] uppercase text-fg transition-colors hover:border-mint hover:text-mint"
              >
                WhatsApp us
              </a>
            </div>

            <p className="mt-6 font-mono text-[0.8125rem] tracking-[0.06em] text-sand">
              From AED 6,000 · fixed scope · built in your own accounts
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* The problem, as three recognisable moments.                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-line py-24">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="label">What this usually looks like</p>
            <h2 className="mt-4 text-[length:var(--text-title)]">
              You don&rsquo;t have an AI problem. You have a job nobody gets round to.
            </h2>
          </div>

          <Reveal className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
            {situations.map((s) => (
              <div key={s.when} className="bg-ink p-7">
                <p className="font-mono text-[0.8125rem] tracking-[0.14em] uppercase text-mint">
                  {s.when}
                </p>
                <p className="mt-4 text-[0.9375rem] text-muted">{s.text}</p>
              </div>
            ))}
          </Reveal>

          <p className="aside-note mt-14 max-w-2xl border-l border-line pl-7">
            None of this is new technology. It&rsquo;s plumbing: deciding where work goes and who makes
            the next move. The plumbing is most of the job, and it&rsquo;s the part I&rsquo;m good at.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Services. Moved above the world section: the offer now arrives on   */}
      {/* screen two rather than screen ten.                                  */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-line py-24">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="label">What I build</p>
            <h2 className="mt-4 text-[length:var(--text-title)]">
              Six things, each with a price attached.
            </h2>
          </div>

          <Reveal className="mt-14 border-t border-line">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group grid gap-4 border-b border-line py-8 transition-colors hover:bg-surface/40 md:grid-cols-[1fr_auto] md:items-baseline md:gap-10"
              >
                <div>
                  <h3 className="text-[1.5rem] transition-colors group-hover:text-mint sm:text-[1.75rem]">
                    {service.name}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[0.9375rem] text-muted">{service.what}</p>
                </div>
                <p className="font-mono text-[0.9375rem] whitespace-nowrap text-sand">
                  from {service.from}
                  {"fromUnit" in service && service.fromUnit ? (
                    <span className="text-muted"> {service.fromUnit}</span>
                  ) : null}
                </p>
              </Link>
            ))}
          </Reveal>

          <div className="mt-12">
            <BookCta label="Book a 20-minute audit" />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Proof by mechanism. No case studies, no logo wall, no invented      */}
      {/* numbers.                                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-line py-24">
        <div className="shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="label">Instead of a case study</p>
            <h2 className="mt-4 text-[length:var(--text-title)]">
              Here&rsquo;s what happens, in order.
            </h2>
            <p className="aside-note mt-6 max-w-md">
              Flow Mint is new. Rather than show you someone else&rsquo;s logo wall or a percentage I
              can&rsquo;t prove, here&rsquo;s the actual shape of a build, so you can judge whether I
              know what I&rsquo;m doing before you call.
            </p>
          </div>

          <Reveal className="space-y-px border border-line bg-line">
            {[
              {
                step: "Week 0",
                title: "We find the task, not the tool",
                body: "One call. You describe what keeps not getting done. I work out whether automation actually helps, and say so if it doesn't.",
              },
              {
                step: "Week 0",
                title: "You get a scope and a fixed price",
                body: "In writing, before anything is built. What it does, what it doesn't, what it costs, how long it takes.",
              },
              {
                step: "Weeks 1–3",
                title: "It gets built in your accounts",
                body: "Your n8n, your CRM, your WhatsApp number, your credentials. I work inside your systems, not on top of a platform you rent from me.",
              },
              {
                step: "Handover",
                title: "You get the runbook",
                body: "Written documentation of how it works and how to change it. Two rounds of adjustments included. If you never call me again, it keeps running.",
              },
            ].map((row) => (
              <div key={row.title} className="grid gap-3 bg-ink p-7 sm:grid-cols-[7rem_1fr] sm:gap-6">
                <p className="font-mono text-[0.75rem] tracking-[0.14em] uppercase text-mint">
                  {row.step}
                </p>
                <div>
                  <h3 className="text-[1.125rem]">{row.title}</h3>
                  <p className="mt-2 text-[0.9375rem] text-muted">{row.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* The scroll-scrubbed flight through two Dubai businesses. Moved below
          the offer and cut from four scenes to two: it's now a reward for
          interested readers rather than a toll gate in front of the pricing. */}
      <ScrollWorld />

      {/* ------------------------------------------------------------------ */}
      {/* What you get regardless of tier. Real guarantees standing in for    */}
      {/* the testimonials a new business doesn't have yet.                   */}
      {/* ------------------------------------------------------------------ */}
      <section id="after-world" className="border-t border-line py-24">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="label">What you get either way</p>
            <h2 className="mt-4 text-[length:var(--text-title)]">
              Four promises that hold on every build.
            </h2>
          </div>

          <Reveal className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((item) => (
              <div key={item.title} className="bg-ink p-7">
                <h3 className="text-[1.0625rem] text-mint">{item.title}</h3>
                <p className="mt-3 text-[0.9375rem] text-muted">{item.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Pricing, visible without a click. The differentiator.               */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-line py-24">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="label">Pricing</p>
            <h2 className="mt-4 text-[length:var(--text-title)]">
              Every other agency in Dubai says &ldquo;contact us for a quote&rdquo;.
            </h2>
            <p className="mt-5 max-w-xl text-muted">
              Here are the numbers. They&rsquo;re starting prices, not quotes. What moves them is listed
              on the pricing page in plain language.
            </p>
            <p className="mt-4 max-w-xl text-[0.9375rem] text-muted">
              A service is one thing I build. A package is how you buy one or several of them. Starter is
              exactly the &ldquo;one workflow, one job&rdquo; service above.
            </p>
          </div>

          <Reveal className="mt-14 grid gap-px border border-line bg-line lg:grid-cols-3">
            {packages.map((tier) => (
              <div key={tier.name} className="flex flex-col bg-ink p-8">
                <p className="font-mono text-[0.8125rem] tracking-[0.16em] uppercase text-muted">
                  {tier.name}
                </p>
                <p className="mt-5 font-mono text-[2rem] leading-none text-fg">{tier.price}</p>
                {/* The unit is load-bearing: AED 18,000 setup and AED 9,000 per
                    month aren't comparable numbers, and a visitor scanning three
                    cards will assume they are unless this is loud. */}
                <p className="mt-3 inline-flex w-fit border border-line-strong px-2.5 py-1 font-mono text-[0.75rem] tracking-[0.12em] uppercase text-sand">
                  {tier.unit}
                </p>
                {tier.retainer ? (
                  <p className="mt-2 font-mono text-[0.8125rem] text-muted">then {tier.retainer}</p>
                ) : null}
                <p className="mt-6 text-[0.9375rem] text-muted">{tier.summary}</p>
                <div className="mt-8 pt-2">
                  <BookCta label="Book a call" className="w-full justify-center" />
                </div>
              </div>
            ))}
          </Reveal>

          <div className="mt-10">
            <Link
              href="/pricing"
              className="inline-block border border-line-strong px-6 py-3 font-mono text-[0.8125rem] tracking-[0.12em] uppercase transition-colors hover:border-mint hover:text-mint"
            >
              What changes the price
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Close. Booking first, WhatsApp as the genuine secondary.            */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-line py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="max-w-xl text-[length:var(--text-title)]">
              Tell me the task eating the most time. I&rsquo;ll tell you if I can fix it.
            </h2>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <BookCta />
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center border border-line-strong px-6 font-mono text-[0.8125rem] tracking-[0.12em] uppercase text-fg transition-colors hover:border-mint hover:text-mint"
              >
                Message on WhatsApp
              </a>
            </div>
            <p className="mt-6 font-mono text-[0.8125rem] tracking-[0.06em] text-muted">
              {site.phoneDisplay} · {site.email}
            </p>
          </div>

          <ul className="space-y-4 border-l border-line pl-7">
            {[
              `Based in ${site.city}, working with UAE businesses.`,
              "Everything runs in your accounts, under your credentials.",
              "Arabic and English, because your customers use both.",
              "No lock-in. Stop working with me and it all keeps running.",
            ].map((line) => (
              <li key={line} className="text-[0.9375rem] text-muted">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
