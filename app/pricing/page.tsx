import type { Metadata } from "next";
import Link from "next/link";
import { site, packages, services, priceFactors } from "@/lib/site";
import Reveal from "@/components/Reveal";
import BookCta from "@/components/BookCta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Flow Mint publishes starting prices in AED for AI automation in Dubai. Packages from AED 6,000, retainers from AED 3,500/month, and an honest list of what changes the number.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-line pt-32 pb-16">
        <div className="shell">
          <p className="label">Pricing</p>
          <h1 className="mt-5 max-w-3xl text-[length:var(--text-title)]">
            The numbers, before you call.
          </h1>
          <p className="mt-6 max-w-xl text-muted">
            These are starting prices in AED, not quotes. They reflect what automation work actually
            costs in the UAE market. If your job is simpler than the description it costs less. If
            it&rsquo;s more tangled, I say so before I start, not after.
          </p>
          <p className="mt-4 max-w-xl text-[0.9375rem] text-muted">
            A service is one thing I build. A package is how you buy one or several of them. Starter is
            exactly the &ldquo;one workflow, one job&rdquo; service.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="shell">
          <Reveal className="grid gap-px border border-line bg-line lg:grid-cols-3" stagger={0.09}>
            {packages.map((tier) => (
              <div key={tier.name} className="flex flex-col bg-ink p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-mono text-[0.8125rem] tracking-[0.16em] uppercase text-muted">
                    {tier.name}
                  </p>
                  {"featured" in tier && tier.featured ? (
                    <span className="font-mono text-[0.6875rem] tracking-[0.12em] uppercase text-mint">
                      Most take this
                    </span>
                  ) : null}
                </div>

                <p className="mt-6 font-mono text-[2.25rem] leading-none text-fg">{tier.price}</p>
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

                <div className="mt-8 border-t border-line pt-6">
                  <p className="label">Included</p>
                  <ul className="mt-3 space-y-2">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.9375rem] text-muted">
                        <span aria-hidden="true" className="mt-[0.7rem] h-px w-3 shrink-0 bg-mint" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="label">Not included</p>
                  <ul className="mt-3 space-y-2">
                    {tier.excludes.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.9375rem] text-muted/60">
                        <span
                          aria-hidden="true"
                          className="mt-[0.7rem] h-px w-3 shrink-0 bg-line-strong"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <BookCta label={`Book a call about ${tier.name}`} className="w-full justify-center" />
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Per-service starting prices */}
      <section className="border-t border-line py-20">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="label">By the job</p>
            <h2 className="mt-4 text-[length:var(--text-title)]">
              Or pay for one specific thing.
            </h2>
          </div>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[38rem] border-collapse text-left">
              <caption className="sr-only">Starting prices by service</caption>
              <thead>
                <tr className="border-b border-line-strong">
                  <th scope="col" className="label pb-3 font-normal">
                    Service
                  </th>
                  <th scope="col" className="label pb-3 font-normal">
                    Typically takes
                  </th>
                  <th scope="col" className="label pb-3 text-right font-normal">
                    From
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.slug} className="border-b border-line">
                    <th scope="row" className="py-5 pr-6 font-normal">
                      <Link
                        href={`/services#${service.slug}`}
                        className="text-[1.0625rem] text-fg transition-colors hover:text-mint"
                      >
                        {service.name}
                      </Link>
                    </th>
                    <td className="py-5 pr-6 font-mono text-[0.875rem] text-muted">
                      {service.timeline}
                    </td>
                    <td className="py-5 text-right font-mono text-[0.9375rem] whitespace-nowrap text-sand">
                      {service.from}
                      {"fromUnit" in service && service.fromUnit ? (
                        <span className="text-muted"> {service.fromUnit}</span>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What moves the number — written for a sceptic */}
      <section className="border-t border-line py-20">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="label">Honestly</p>
            <h2 className="mt-4 text-[length:var(--text-title)]">What changes the price.</h2>
            <p className="aside-note mt-6 max-w-md">
              Four things move a quote, and none of them are a surprise if we look at your setup
              first. That look is free and takes about twenty minutes.
            </p>
          </div>

          <Reveal className="space-y-px border border-line bg-line">
            {priceFactors.map((f) => (
              <div key={f.factor} className="bg-ink p-7">
                <h3 className="text-[1.0625rem]">{f.factor}</h3>
                <p className="mt-2 text-[0.9375rem] text-muted">{f.detail}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-20">
        <div className="shell">
          <h2 className="max-w-2xl text-[length:var(--text-title)]">
            Not sure which one fits? Describe the task and I&rsquo;ll tell you.
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
        </div>
      </section>
    </>
  );
}
