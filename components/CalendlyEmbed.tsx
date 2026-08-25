"use client";

import { useEffect, useRef } from "react";

/**
 * Calendly inline widget. The script is loaded from /public rather than
 * Calendly's CDN would be ideal, but the widget genuinely requires their
 * origin, so it is loaded lazily and only on this page.
 */
export default function CalendlyEmbed({ url }: { url: string }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!url) return;

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, [url]);

  if (!url) return null;

  return (
    <div
      ref={host}
      className="calendly-inline-widget min-h-[720px] w-full"
      data-url={`${url}?hide_gdpr_banner=1&background_color=101614&text_color=e8f0ec&primary_color=3be0a0`}
    />
  );
}
