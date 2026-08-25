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
      // Cut from four scenes to two. Route and Agent described the same things as
      // the services list that now sits above this section, so they were a slower
      // restatement of copy the visitor had already read. Intake is the sharpest
      // hook and Handoff is the strongest differentiator, so those are what stayed.
      diveScroll: 1.0,
      connScroll: 0.7,
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
          scroll: 0.9,
          linger: 0.35,
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
          scroll: 0.9,
          linger: 0.35,
          cta: {
            primary: { label: "Book a 20-minute audit", href: "/book" },
            secondary: { label: "WhatsApp us", href: "https://wa.me/971585620044" },
          },
        },
      ],
      // One connector between the two remaining scenes. conn-03 is the clip that
      // originally ran warehouse to office; with Route and Agent removed the
      // shop to office jump has no rendered connector, so the two dives simply
      // cross-dissolve, which the engine supports by passing a falsy entry.
      connectors: [null],
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
