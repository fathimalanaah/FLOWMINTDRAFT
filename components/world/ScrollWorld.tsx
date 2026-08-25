"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    mountScrollWorld?: (el: HTMLElement, config: unknown) => void;
  }
}

/**
 * Mounts the scroll-world scrub engine — a scroll-scrubbed camera flight through
 * four miniature Dubai businesses. Scroll drives `currentTime` on pre-rendered
 * clips; nothing plays on a timer, so the visitor is always in control and can
 * scrub backwards as freely as forwards.
 *
 * The engine is vanilla JS and builds its own DOM, so it is loaded from /public
 * rather than bundled, and mounted once into a ref.
 */
export default function ScrollWorld() {
  const host = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current || !host.current) return;

    // Phones get the stills and no video at all. Seven clips came to 31.5MB on
    // a mobile connection, which is a real cost to a real visitor for
    // decoration. Below 860px the engine cross-dissolves the posters instead,
    // which reads fine and costs about 200KB.
    const smallScreen = window.matchMedia("(max-width: 860px)").matches;
    const clip = (src: string) => (smallScreen ? undefined : src);

    const config = {
      // No brand mark and no section nav from the engine: the site header already
      // provides both, and rendering the engine's on top produced two Flow Mint
      // wordmarks and two navs stacked on each other. Journey position is still
      // legible from the route rail, the NN / 02 counter and each section eyebrow.
      //
      // Three scenes, not the original four. Route (the clinic) was the one that
      // genuinely restated the services list above, so it stayed cut. Intake is
      // the sharpest hook, Logistics carries the warehouse flight and the real
      // connector, and Handoff is the strongest differentiator and holds the CTA.
      //
      // Two numbers control how the flight feels.
      //
      // `scroll` is distance: how much page travel one clip is spread across. Too
      // little and the camera snaps rather than flies. At 0.9 an eight-second clip
      // burned through in about eight wheel notches.
      //
      // `linger` is where that distance is spent. It is a monotone remap of
      // scroll to time, so the camera covers the approach quickly and then settles
      // once it is inside the building, which is the moment the copy lands. That
      // dwell is what reads as "opening the shop and showing you inside" rather
      // than flying past it. The engine caps useful values around 0.6.
      //
      // The world is long again, close to the original. That is affordable now in
      // a way it was not before, because the services and process sections were
      // moved above it: a visitor reaches this having already seen the offer, so
      // the flight is a reward rather than a toll gate.
      diveScroll: 1.5,
      connScroll: 0.9,
      hint: "scroll to fly in",
      nav: false,
      atmosphere: false, // the clips carry the atmosphere; particles would fight them
      sections: [
        {
          id: "intake",
          label: "Intake",
          still: "/world/01-shop.webp",
          clip: clip("/world/dive-01.mp4"),
          accent: "#3BE0A0",
          eyebrow: "Intake",
          title: "The message that arrives at 11pm.",
          body: "A customer asks what you charge. The assistant answers, in Arabic or English, and the lead is in your CRM before you wake up.",
          tags: ["WhatsApp", "Always on"],
          scroll: 1.65,
          linger: 0.55,
        },
        {
          id: "logistics",
          label: "Logistics",
          still: "/world/03-warehouse.webp",
          clip: clip("/world/dive-03.mp4"),
          accent: "#3BE0A0",
          eyebrow: "Logistics",
          title: "The invoice nobody retypes.",
          body: "Delivery notes and invoices get read, checked against the order, and queued for approval. Nobody keys them in twice.",
          tags: ["Documents", "Checks"],
          scroll: 1.6,
          linger: 0.55,
        },
        {
          id: "handoff",
          label: "Handoff",
          still: "/world/04-office.webp",
          clip: clip("/world/dive-04.mp4"),
          accent: "#3BE0A0",
          eyebrow: "Handoff",
          title: "Everything lands where you already work.",
          body: "Your CRM, your inbox, your sheet. No new app to learn, and if you stop working with me all of it keeps running.",
          tags: ["Your accounts", "No lock-in"],
          scroll: 1.7,
          linger: 0.55,
          cta: {
            primary: { label: "Book a 20-minute audit", href: "/book" },
            secondary: { label: "WhatsApp us", href: "https://wa.me/971585620044" },
          },
        },
      ],
      // Connectors are the fly-out-of-one-building-and-into-the-next motion, so
      // dropping them removed exactly the "moves in and out" quality this section
      // is for. Both are real flights now, and both seam on actual frames:
      //
      // [0] shop to warehouse: no clip existed for this pair, because the original
      //     chain went shop to clinic (conn-01) and the clinic is cut. This one was
      //     generated against the two real endpoint frames, dive-01's last and
      //     dive-03's first, so the camera retreats out of the shop, holds it as a
      //     complete miniature in the void, then descends into the warehouse.
      //     Measured seam accuracy 37.5dB and 36.0dB PSNR against those frames.
      // [1] warehouse to office: conn-03, from the original render set.
      connectors: [clip("/world/conn-shop-warehouse.mp4"), clip("/world/conn-03.mp4")],
    };

    const mount = () => {
      if (mounted.current || !host.current || !window.mountScrollWorld) return;
      window.mountScrollWorld(host.current, config);
      mounted.current = true;
    };

    if (window.mountScrollWorld) {
      mount();
      return;
    }

    const script = document.createElement("script");
    script.src = "/scrub-engine.js";
    script.async = true;
    script.onload = mount;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="relative">
      <div
        ref={host}
        className="sw-root"
        style={
          {
            "--sw-bg": "#080B0A",
            "--sw-ink": "#E8F0EC",
            "--sw-ink-soft": "#8FA39B",
            "--sw-accent": "#3BE0A0",
            "--sw-font-display": "var(--font-bricolage), sans-serif",
            "--sw-font-body": "var(--font-instrument), sans-serif",
          } as React.CSSProperties
        }
      />
      {/* Anyone who doesn't want the flight can leave it. Sits above the
          engine's own fixed layers (z-40 on the route rail) and only while
          the world is on screen, since it scrolls away with the container. */}
      <a
        href="#after-world"
        className="pointer-events-auto absolute bottom-8 right-6 z-50 hidden font-mono text-[0.75rem] tracking-[0.12em] uppercase text-muted underline underline-offset-4 transition-colors hover:text-mint sm:inline-block"
      >
        Skip to pricing
      </a>
    </div>
  );
}
