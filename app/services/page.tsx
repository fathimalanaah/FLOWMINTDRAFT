import type { Metadata } from "next";
import Link from "next/link";
import { site, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "WhatsApp AI assistants, lead routing, document processing, custom AI agents and ongoing support for Dubai businesses — each with a published starting price.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line pt-32 pb-16">
        <div className="shell">
          <p className="label">Services</p>
          <h1 className="mt-5 max-w-3xl text-[length:var(--text-title)]">
            Five things we build, and what each one looks like when it is running.
          </h1>
          <p className="mt-6 max-w-xl text-muted">
            Everything below runs in your own accounts on tools you can keep. Prices are starting
            prices — see{" "}
            <Link href="/pricing" className="text-mint underline underline-offset-4">
              what changes them
            </Link>
            .
          </p>
        </div>
      </section>

      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`scroll-mt-24 py-20 ${i > 0 ? "border-t border-line" : ""}`}
        >
          <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-mono text-[0.75rem] tracking-[0.16em] uppercase text-mint">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 text-[length:var(--text-title)]">{service.name}</h2>
              <p className="mt-5 max-w-md text-muted">{service.what}</p>

              <dl className="mt-8 space-y-4 border-t border-line pt-6">
                <div className="flex gap-6">
                  <dt className="label w-28 shrink-0">From</dt>
                  <dd className="font-mono text-[0.9375rem] text-sand">
                    {service.from}
                    {"fromUnit" in service && service.fromUnit ? (
                      <span className="text-muted"> {service.fromUnit}</span>
                    ) : null}
                  </dd>
                </div>
                <div className="flex gap-6">
                  <dt className="label w-28 shrink-0">Timeline</dt>
                  <dd className="font-mono text-[0.9375rem] text-muted">{service.timeline}</dd>
                </div>
                <div className="flex gap-6">
                  <dt className="label w-28 shrink-0">Runs on</dt>
                  <dd className="font-mono text-[0.9375rem] text-muted">
                    {service.tools.join(" · ")}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="border-l border-line pl-8 lg:pl-12">
              <p className="label">What it looks like in practice</p>
              <p className="mt-4 max-w-lg text-[1.0625rem] text-fg">{service.running}</p>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block border border-line-strong px-5 py-3 font-mono text-[0.75rem] tracking-[0.12em] uppercase transition-colors hover:border-mint hover:text-mint"
              >
                Ask about this
              </a>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
