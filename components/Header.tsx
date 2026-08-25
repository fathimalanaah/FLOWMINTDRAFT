"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panel = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  // Close on route change. Without this the panel survives navigation and the
  // visitor lands on the new page with the menu still covering it.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape closes and returns focus to the button that opened it; focus is
  // trapped inside the panel while it is open so keyboard and screen-reader
  // users cannot tab into the page behind it.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panel.current) return;

      const focusable = panel.current.querySelectorAll<HTMLElement>("a, button");
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    // The page behind a full-screen panel must not scroll under it.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("a, button")?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* The page spine. A machined channel whose mint fill reports how far
          through the page you are, the same idea as the hero at page scale. */}
      <div className="channel h-[5px] w-full border-t-0">
        <div id="spine-fill" className="channel-fill w-full scale-x-0" />
      </div>

      {/* Opaque, not translucent. At 85% the body copy read straight through
          the nav; a translucent bar over a dark page buys nothing and costs
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

            <Link
              href="/book"
              className="hidden min-h-11 items-center bg-mint px-4 font-mono text-[0.75rem] tracking-[0.12em] uppercase text-ink transition-colors hover:bg-fg sm:inline-flex"
            >
              Book a call
            </Link>

            {/* Below the small breakpoint the links above are hidden, so this
                button is the only route to every other page on the site. */}
            <button
              ref={toggle}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center border border-line-strong text-fg transition-colors hover:border-mint hover:text-mint sm:hidden"
            >
              <span aria-hidden="true" className="relative block h-[10px] w-[18px]">
                <span
                  className={`absolute left-0 block h-[1.5px] w-full bg-current transition-transform duration-200 ${
                    open ? "top-[4px] rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-[1.5px] w-full bg-current transition-transform duration-200 ${
                    open ? "top-[4px] -rotate-45" : "top-[8px]"
                  }`}
                />
              </span>
            </button>
          </nav>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          ref={panel}
          className="fixed inset-x-0 bottom-0 top-[69px] z-40 overflow-y-auto border-t border-line bg-ink sm:hidden"
        >
          <div className="shell flex flex-col py-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-line py-5 text-[1.375rem] text-fg transition-colors hover:text-mint"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/book"
              className="mt-8 inline-flex min-h-12 items-center justify-center bg-mint px-6 font-mono text-[0.8125rem] tracking-[0.12em] uppercase text-ink"
            >
              Book a 20-minute audit
            </Link>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-12 items-center justify-center border border-line-strong px-6 font-mono text-[0.8125rem] tracking-[0.12em] uppercase text-fg"
            >
              WhatsApp us
            </a>

            <p className="mt-8 font-mono text-[0.8125rem] tracking-[0.06em] text-muted">
              {site.phoneDisplay}
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
