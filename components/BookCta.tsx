import Link from "next/link";
import { site } from "@/lib/site";

/**
 * The single primary action on the site. It exists as one component so that
 * every placement (hero, end of services, each pricing card, closing section)
 * stays identical in wording and styling. Previously the visually primary
 * button navigated to /pricing, which is a page rather than a conversion.
 */
export default function BookCta({
  label = site.booking.label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <Link
      href="/book"
      className={`inline-flex min-h-11 items-center bg-mint px-6 font-mono text-[0.8125rem] tracking-[0.12em] uppercase text-ink transition-colors hover:bg-fg ${className}`}
    >
      {label}
    </Link>
  );
}
