import Link from "next/link";
import { site, mailto, tel } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-mono text-[0.8125rem] tracking-[0.22em] uppercase">Flow Mint</p>
          <p className="mt-3 max-w-xs text-[0.9375rem] text-muted">
            AI automation for {site.city} businesses. Built in your accounts, priced in the open.
          </p>
          <p className="mt-4 text-[0.9375rem] text-muted">
            Run by{" "}
            <Link href="/about" className="text-fg transition-colors hover:text-mint">
              {site.founder.name}
            </Link>
            .
          </p>
        </div>

        <div>
          <p className="label">Talk to me</p>
          {/* Targets are sized to 44px rather than spaced apart, so the tap area
              matches the visible row on touch. */}
          <ul className="mt-1 text-[0.9375rem]">
            <li>
              <Link
                href="/book"
                className="inline-flex min-h-11 items-center text-mint transition-colors hover:text-fg"
              >
                Book a call
              </Link>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-fg transition-colors hover:text-mint"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={tel}
                className="inline-flex min-h-11 items-center text-muted transition-colors hover:text-fg"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={mailto}
                className="inline-flex min-h-11 items-center text-muted transition-colors hover:text-fg"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="label">Pages</p>
          <ul className="mt-1 text-[0.9375rem]">
            {[
              { href: "/services", label: "Services" },
              { href: "/pricing", label: "Pricing" },
              { href: "/about", label: "About" },
              { href: "/book", label: "Book a call" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 min-w-11 items-center text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label">Where the work lives</p>
          <p className="mt-3 text-[0.9375rem] text-muted">
            Your accounts, your credentials, your data. If you stop working with me, everything keeps
            running.
          </p>
        </div>
      </div>

      <div className="shell flex flex-col gap-2 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[0.75rem] tracking-[0.1em] text-muted">
          © {new Date().getFullYear()} Flow Mint · {site.city}
        </p>
        <p className="font-mono text-[0.75rem] tracking-[0.1em] text-muted">
          Prices shown are starting prices, not quotes.
        </p>
      </div>
    </footer>
  );
}
