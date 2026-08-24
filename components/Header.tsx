import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* The page spine. A machined channel whose mint fill reports how far
          through the page you are — the same idea as the hero, at page scale. */}
      <div className="channel h-[5px] w-full border-t-0">
        <div id="spine-fill" className="channel-fill w-full scale-x-0" />
      </div>

      {/* Opaque, not translucent. At 85% the body copy read straight through
          the nav — a translucent bar over a dark page buys nothing and costs
          legibility. */}
      <div className="border-b border-line bg-ink">
        <div className="shell flex h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center font-mono text-[0.8125rem] font-medium tracking-[0.22em] uppercase text-fg"
          >
            Flow Mint
          </Link>

          <nav aria-label="Main" className="flex items-center gap-6 sm:gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hidden min-h-11 min-w-11 items-center justify-center px-2 text-[0.9375rem] text-muted transition-colors hover:text-fg sm:inline-flex"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center border border-line-strong px-4 font-mono text-[0.75rem] tracking-[0.12em] uppercase text-fg transition-colors hover:border-mint hover:text-mint"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
