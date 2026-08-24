import type { Metadata } from "next";
import { site, mailto, tel } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Talk to Flow Mint about automating a task in your business. WhatsApp ${site.phoneDisplay} or email ${site.email}.`,
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="shell grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <div>
          <p className="label">Contact</p>
          <h1 className="mt-5 text-[length:var(--text-title)]">
            WhatsApp is fastest. The form works too.
          </h1>
          <p className="mt-6 max-w-md text-muted">
            Tell us the task that keeps not getting done. If automation is the wrong answer, we will
            say so — that reply is free and takes about a day.
          </p>

          <div className="mt-12 space-y-px border border-line bg-line">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline justify-between gap-6 bg-ink p-6 transition-colors hover:bg-surface"
            >
              <div>
                <p className="label">WhatsApp</p>
                <p className="mt-1.5 font-mono text-[1.0625rem] text-fg transition-colors group-hover:text-mint">
                  {site.phoneDisplay}
                </p>
              </div>
              <span className="label group-hover:text-mint">Fastest</span>
            </a>

            <a
              href={mailto}
              className="group block bg-ink p-6 transition-colors hover:bg-surface"
            >
              <p className="label">Email</p>
              <p className="mt-1.5 font-mono text-[1.0625rem] text-fg transition-colors group-hover:text-mint">
                {site.email}
              </p>
            </a>

            <a href={tel} className="group block bg-ink p-6 transition-colors hover:bg-surface">
              <p className="label">Phone</p>
              <p className="mt-1.5 font-mono text-[1.0625rem] text-fg transition-colors group-hover:text-mint">
                {site.phoneDisplay}
              </p>
            </a>
          </div>

          <p className="aside-note mt-8 max-w-md">
            Based in {site.city}. We work with businesses across the UAE, in Arabic and English.
          </p>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
