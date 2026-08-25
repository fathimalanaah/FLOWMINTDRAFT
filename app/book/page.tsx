import type { Metadata } from "next";
import { site } from "@/lib/site";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Book a 20-minute audit",
  description:
    "Twenty minutes on a call. Tell me the task eating the most time and I will tell you whether automation fixes it, roughly what it costs, and how long it takes.",
  alternates: { canonical: "/book" },
};

const expectations = [
  {
    title: "You describe the task",
    body: "The one that keeps not getting done, or the one someone does by hand every week. No prep needed.",
  },
  {
    title: "I tell you if automation helps",
    body: "Sometimes it does not, and I will say so on the call rather than sell you something that will not pay for itself.",
  },
  {
    title: "You leave with a number",
    body: "A rough price and a rough timeline, on the call. If you want it in writing, a fixed scope follows within two days.",
  },
];

export default function BookPage() {
  const hasCalendly = Boolean(site.booking.calendly);

  return (
    <div className="pt-28">
      <section className="border-b border-line py-16">
        <div className="shell max-w-3xl">
          <p className="label text-mint">Book a call</p>
          <h1 className="mt-5 text-[length:var(--text-title)]">
            Twenty minutes. Tell me the task eating the most time.
          </h1>
          <p className="mt-6 max-w-2xl text-[1.0625rem] text-muted">
            No pitch deck, no discovery framework. You describe what keeps not getting done, I tell you
            whether I can fix it and what it costs. If I cannot help, I will point you at whoever can.
          </p>

          <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-3">
            {expectations.map((item, index) => (
              <li key={item.title} className="bg-ink p-6">
                <p className="font-mono text-[0.75rem] tracking-[0.14em] uppercase text-mint">
                  0{index + 1}
                </p>
                <h2 className="mt-3 text-[1.0625rem]">{item.title}</h2>
                <p className="mt-2 text-[0.9375rem] text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="shell max-w-4xl">
          {hasCalendly ? (
            <CalendlyEmbed url={site.booking.calendly} />
          ) : (
            /* Rather than render a broken embed, say plainly that the calendar
               is not connected and give every working route to a conversation. */
            <div className="border border-line bg-surface p-8">
              <p className="font-mono text-[0.8125rem] tracking-[0.14em] uppercase text-sand">
                Calendar not connected yet
              </p>
              <h2 className="mt-4 text-[1.375rem]">Message me and we will find a time.</h2>
              <p className="mt-3 max-w-xl text-[0.9375rem] text-muted">
                The booking calendar goes live shortly. In the meantime WhatsApp is the fastest way to
                reach me, and I reply the same day.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center bg-mint px-6 font-mono text-[0.8125rem] tracking-[0.12em] uppercase text-ink transition-colors hover:bg-fg"
                >
                  Message me on WhatsApp
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex min-h-11 items-center border border-line-strong px-6 font-mono text-[0.8125rem] tracking-[0.12em] uppercase text-fg transition-colors hover:border-mint hover:text-mint"
                >
                  Email instead
                </a>
              </div>

              <p className="mt-6 font-mono text-[0.8125rem] tracking-[0.06em] text-muted">
                {site.phoneDisplay} · {site.email}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
