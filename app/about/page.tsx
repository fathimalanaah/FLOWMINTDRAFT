import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import BookCta from "@/components/BookCta";

export const metadata: Metadata = {
  title: "About",
  description: `${site.founder.name} builds workflow automation and AI agents for small and medium businesses in Dubai. Fixed scopes, published prices, and workflows that run in your own accounts.`,
  alternates: { canonical: "/about" },
};

/* Typographic by design. No stock team photography and no generated office
   imagery: a picture of a workspace that isn't mine would undercut the one
   thing this page is for. */

const positions = [
  {
    heading: "I publish prices",
    body: "Every agency in this market answers “how much?” with “book a discovery call”. That isn't caution, it's a negotiating position, and it costs you a week. My numbers are on the pricing page. They're starting prices, and I'll tell you plainly when your job sits above them.",
  },
  {
    heading: "I build in your accounts",
    body: "Your n8n, your CRM, your WhatsApp Business number, your credentials in your vault. Not a platform you rent from me. If you stop working with Flow Mint tomorrow, everything I built keeps running and you can hire anyone to change it.",
  },
  {
    heading: "I scope before I start",
    body: "A written scope and a fixed price before anything gets built. If halfway through we find your CRM has no usable API, you hear about it that day, with options. Not in an invoice at the end.",
  },
  {
    heading: "I say no",
    body: "Some things shouldn't be automated. A process nobody understands should be fixed before it's made faster, and a task done twice a month rarely earns the build cost. I'd rather lose the job than sell you an automation that doesn't pay for itself.",
  },
];

/** Initials stand in until a real headshot exists at site.founder.photo. */
function FounderPortrait() {
  const initials = site.founder.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // Drop a square headshot at public/art/founder.webp and point site.founder.photo
  // at it; this swaps from initials to the real photograph with no other change.
  if (site.founder.photo) {
    return (
      <div className="relative aspect-square w-full max-w-[15rem] overflow-hidden border border-line bg-surface">
        <Image
          src={site.founder.photo}
          alt={`${site.founder.name}, ${site.founder.role} of Flow Mint`}
          fill
          sizes="240px"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="grid aspect-square w-full max-w-[15rem] place-items-center border border-line bg-surface">
      <span
        aria-hidden="true"
        className="font-mono text-[3rem] tracking-[0.1em] text-muted"
      >
        {initials}
      </span>
      <span className="sr-only">{`${site.founder.name}, ${site.founder.role} of Flow Mint`}</span>
    </div>
  );
}

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
            UAE. The companies big consultancies quote enterprise numbers at and then never call back.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* The person. Previously the site said "we" throughout and contained  */}
      {/* no human being on any page, while asking for AED 18,000.            */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-b border-line py-20">
        <div className="shell grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
          <FounderPortrait />

          <div className="max-w-2xl">
            <p className="label text-mint">Who you&rsquo;re hiring</p>
            <h2 className="mt-4 text-[length:var(--text-title)]">{site.founder.name}</h2>
            <p className="mt-2 font-mono text-[0.8125rem] tracking-[0.14em] uppercase text-muted">
              {site.founder.role} · {site.city}
            </p>

            {/* TODO(fathima): rewrite these two paragraphs in your own words.
                What you did before this, and the specific moment that made you
                start it. Specifics beat polish here: the name of the tool you
                were using, the job you were doing, the thing that annoyed you. */}
            <div className="mt-6 space-y-4 text-muted">
              <p>
                I started Flow Mint after watching the same thing happen in business after business
                here: good people spending their week retyping numbers between two systems that could
                have talked to each other in an afternoon.
              </p>
              <p>
                I work on one build at a time, which is why the scopes are small and the prices are
                fixed. You deal with me directly from the first call to the handover. There&rsquo;s no
                account manager in between, because there&rsquo;s nobody else here.
              </p>
            </div>

            <p className="aside-note mt-6 border-l border-line pl-6">
              Flow Mint is new, and I&rsquo;d rather tell you that than show you a logo wall I
              borrowed. What I can show you is exactly how a build works before you pay for one.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="label">What I hold to</p>
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
              The tools got cheap. The advice didn&rsquo;t.
            </h2>
          </div>
          <div className="space-y-5 border-l border-line pl-8 text-muted lg:pl-12">
            <p>
              What used to be a six-figure integration project is now a few weeks of careful work on
              tools that cost less per month than a phone plan. The technology stopped being the
              barrier a while ago.
            </p>
            <p>
              What didn&rsquo;t change is who gets served. Automation firms here are largely built
              around enterprise budgets and enterprise sales cycles, so a fifteen-person trading company
              or a clinic with three branches gets quoted a number meant for a bank.
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
            Tell me what keeps not getting done.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
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
