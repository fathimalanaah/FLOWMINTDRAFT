import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Flow Mint is a Dubai AI automation studio for small and medium businesses. Fixed scopes, published prices, and workflows that run in your own accounts.",
};

/* Typographic by design. No stock team photography and no generated office
   imagery — a picture of a workspace that is not ours would undercut the one
   thing this page is for. Real photographs go in when they exist. */

const positions = [
  {
    heading: "We publish prices",
    body: "Every agency in this market answers “how much?” with “book a discovery call”. That is not caution, it is a negotiating position, and it costs you a week. Our numbers are on the pricing page. They are starting prices and we will tell you plainly when your job sits above them.",
  },
  {
    heading: "We build in your accounts",
    body: "Your n8n, your CRM, your WhatsApp Business number, your credentials in your vault. Not a platform you rent from us. If you stop working with Flow Mint tomorrow, everything we built keeps running and you can hire anyone to change it.",
  },
  {
    heading: "We scope before we start",
    body: "A written scope and a fixed price before anything gets built. If halfway through we find your CRM has no usable API, you hear about it that day, with options — not in an invoice at the end.",
  },
  {
    heading: "We say no",
    body: "Some things should not be automated. A process nobody understands should be fixed before it is made faster, and a task done twice a month rarely earns the build cost. We would rather lose the job than sell you an automation that does not pay for itself.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line pt-32 pb-16">
        <div className="shell">
          <p className="label">About</p>
          <h1 className="mt-5 max-w-3xl text-[length:var(--text-title)]">
            A small studio in {site.city} that automates the boring parts of your business.
          </h1>
          <p className="mt-6 max-w-xl text-muted">
            Flow Mint builds workflow automation and AI agents for small and medium businesses in the
            UAE — the companies big consultancies quote enterprise numbers at and then never call
            back.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="label">What we hold to</p>
            <h2 className="mt-4 text-[length:var(--text-title)]">Four positions, plainly stated.</h2>
          </div>

          <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2">
            {positions.map((p) => (
              <div key={p.heading} className="bg-ink p-8">
                <h3 className="text-[1.25rem]">{p.heading}</h3>
                <p className="mt-3 text-[0.9375rem] text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20">
        <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="label">Why Dubai SMEs</p>
            <h2 className="mt-4 text-[length:var(--text-title)]">
              The tools got cheap. The advice did not.
            </h2>
          </div>
          <div className="space-y-5 border-l border-line pl-8 text-muted lg:pl-12">
            <p>
              What used to be a six-figure integration project is now a few weeks of careful work on
              tools that cost less per month than a phone plan. The technology stopped being the
              barrier a while ago.
            </p>
            <p>
              What did not change is who gets served. Automation firms here are largely built around
              enterprise budgets and enterprise sales cycles, so a fifteen-person trading company or
              a clinic with three branches gets quoted a number meant for a bank.
            </p>
            <p className="aside-note">
              Flow Mint exists for that middle. Small enough scopes to be worth doing, priced where a
              real business can say yes in an afternoon.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20">
        <div className="shell">
          <h2 className="max-w-2xl text-[length:var(--text-title)]">
            Tell us what keeps not getting done.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-mint px-6 py-3 font-mono text-[0.8125rem] tracking-[0.12em] uppercase text-ink transition-colors hover:bg-fg"
            >
              Message us on WhatsApp
            </a>
            <Link
              href="/pricing"
              className="border border-line-strong px-6 py-3 font-mono text-[0.8125rem] tracking-[0.12em] uppercase transition-colors hover:border-mint hover:text-mint"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
