import Link from "next/link";
import { site, packages, services } from "@/lib/site";
import ScrollWorld from "@/components/world/ScrollWorld";
import Reveal from "@/components/Reveal";

const situations = [
  {
    when: "11:47pm",
    text: "A lead messages your WhatsApp asking what you charge. Nobody replies until 9am. By then they have messaged three other companies.",
  },
  {
    when: "Every Tuesday",
    text: "A supplier emails a PDF invoice. Someone opens it, reads it, and types the same numbers into your accounting system by hand.",
  },
  {
    when: "Forty times a day",
    text: "The same five questions — do you deliver, what are your hours, is it in stock — answered from scratch, every time, by someone who could be selling.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Hero — the conduit, and the price. The price is the point.          */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative border-b border-line pt-28">
        <div className="shell pb-16 lg:pb-24">
          <div className="max-w-[40rem] lg:py-16">
            <p className="label text-mint">AI automation · {site.city}</p>
            <h1 className="mt-5 text-[length:var(--text-display)]">
              Automations that pay for&nbsp;themselves
            </h1>
            <p className="mt-6 max-w-[34rem] text-[1.0625rem] text-muted sm:text-[1.15rem]">
              We build the unglamorous things: the assistant that answers WhatsApp at midnight, the
              routing that stops leads going cold, the process that keeps invoices off your desk.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/pricing"
                className="inline-flex min-h-11 items-center bg-mint px-6 font-mono text-[0.8125rem] tracking-[0.12em] uppercase text-ink transition-colors hover:bg-fg"
              >
                See pricing
              </Link>
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
              Starter from AED 6,000 · no retainer · built in your own accounts
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* The problem, stated as three recognisable moments rather than       */}
      {/* an abstract "efficiency gap".                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-line py-24">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="label">What this usually looks like</p>
            <h2 className="mt-4 text-[length:var(--text-title)]">
              You do not have an AI problem. You have a thing that keeps not getting done.
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

          {/* The cable diptych is gone rather than replaced. It read as obsolete
              hardware — the opposite association for an AI business — and the
              section says more with the copy carrying it alone. */}
          <p className="aside-note mt-14 max-w-2xl border-l border-line pl-7">
            Nothing here is new technology. Every one of these is a decision about where work goes
            and who — or what — makes the next move. The AI part is small. The plumbing is most of
            it, and the plumbing is what we are good at.
          </p>
        </div>
      </section>

      {/* The signature: a scroll-scrubbed camera flight through four miniature
          Dubai businesses. Scroll drives the camera; nothing plays on a timer. */}
      <ScrollWorld />

      {/* ------------------------------------------------------------------ */}
      {/* Services as an editorial list, not a row of icon cards.             */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-line py-24">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="label">What we build</p>
            <h2 className="mt-4 text-[length:var(--text-title)]">
              Five things, each with a price attached.
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
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Proof by mechanism. No case studies, no logo wall, no invented      */}
      {/* numbers — an honest walkthrough of how a build gets scoped.         */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-line py-24">
        <div className="shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="label">Instead of a case study</p>
            <h2 className="mt-4 text-[length:var(--text-title)]">
              Here is exactly what happens, in order.
            </h2>
            <p className="aside-note mt-6 max-w-md">
              Flow Mint is new. Rather than show you someone else&rsquo;s logo wall or a percentage we
              cannot prove, here is the actual shape of a build — so you can judge whether we know
              what we are doing before you call.
            </p>
          </div>

          <Reveal className="space-y-px border border-line bg-line">
            {[
              {
                step: "Week 0",
                title: "We find the task, not the tool",
                body: "One call. You describe what keeps not getting done. We work out whether automation actually helps, and say so if it does not.",
              },
              {
                step: "Week 0",
                title: "You get a scope and a fixed price",
                body: "In writing, before anything is built. What it does, what it does not, what it costs, how long it takes.",
              },
              {
                step: "Weeks 1–3",
                title: "It gets built in your accounts",
                body: "Your n8n, your CRM, your WhatsApp number, your credentials. We work inside your systems, not on top of a platform you have to rent from us.",
              },
              {
                step: "Handover",
                title: "You get the runbook",
                body: "Written documentation of how it works and how to change it. Two rounds of adjustments included. If you never call us again, it keeps running.",
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
              Here are the numbers. They are starting prices, not quotes — what moves them is listed
              on the pricing page, in plain language.
            </p>
          </div>

          <Reveal className="mt-14 grid gap-px border border-line bg-line lg:grid-cols-3">
            {packages.map((tier) => (
              <div key={tier.name} className="flex flex-col bg-ink p-8">
                <p className="font-mono text-[0.8125rem] tracking-[0.16em] uppercase text-muted">
                  {tier.name}
                </p>
                <p className="mt-5 font-mono text-[2rem] leading-none text-fg">{tier.price}</p>
                <p className="mt-2 font-mono text-[0.8125rem] text-muted">
                  {tier.unit}
                  {tier.retainer ? ` · then ${tier.retainer}` : ""}
                </p>
                <p className="mt-6 text-[0.9375rem] text-muted">{tier.summary}</p>
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
      {/* Close — WhatsApp first, because that is how Dubai actually works.   */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-line py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="max-w-xl text-[length:var(--text-title)]">
              Tell us the task eating the most time. We will tell you if we can fix it.
            </h2>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-mint px-6 py-3 font-mono text-[0.8125rem] tracking-[0.12em] uppercase text-ink transition-colors hover:bg-fg"
              >
                Message us on WhatsApp
              </a>
              <Link
                href="/contact"
                className="border border-line-strong px-6 py-3 font-mono text-[0.8125rem] tracking-[0.12em] uppercase transition-colors hover:border-mint hover:text-mint"
              >
                Send a message instead
              </Link>
            </div>
            <p className="mt-6 font-mono text-[0.8125rem] tracking-[0.06em] text-muted">
              {site.phoneDisplay} · {site.email}
            </p>
          </div>

          <ul className="space-y-4 border-l border-line pl-7">
            {[
              "Based in Dubai, working with UAE businesses.",
              "Everything runs in your accounts, under your credentials.",
              "Arabic and English, because your customers use both.",
              "No lock-in. Stop working with us and it all keeps running.",
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
