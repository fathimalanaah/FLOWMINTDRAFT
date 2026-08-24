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

    const config = {
      // No brand mark and no section nav from the engine: the site header already
      // provides both, and rendering the engine's on top produced two Flow Mint
      // wordmarks and two navs stacked on each other. Journey position is still
      // legible from the route rail, the NN / 04 counter and each section eyebrow.
      diveScroll: 1.3,
      connScroll: 0.9,
      hint: "scroll to fly in",
      nav: false,
      atmosphere: false, // the clips carry the atmosphere; particles would fight them
      sections: [
        {
          id: "intake",
          label: "Intake",
          still: "/world/01-shop.webp",
          clip: "/world/dive-01.mp4",
          accent: "#3BE0A0",
          eyebrow: "Intake",
          title: "The message that arrives at 11pm.",
          body: "A customer asks what you charge. The assistant answers — in Arabic or English — and the lead is in your CRM before you wake up.",
          tags: ["WhatsApp", "Always on"],
          scroll: 1.5,
          linger: 0.4,
        },
        {
          id: "route",
          label: "Route",
          still: "/world/02-clinic.webp",
          clip: "/world/dive-02.mp4",
          accent: "#3BE0A0",
          eyebrow: "Route",
          title: "The enquiry that finds the right desk.",
          body: "Rules decide where each request goes. The urgent ones jump the queue. Nothing sits waiting for someone to notice it.",
          tags: ["Routing", "Triage"],
        },
        {
          id: "agent",
          label: "Agent",
          still: "/world/03-warehouse.webp",
          clip: "/world/dive-03.mp4",
          accent: "#3BE0A0",
          eyebrow: "Agent",
          title: "The invoice nobody retypes.",
          body: "Documents get read, checked against the order, and queued for approval. The judgement calls run on a model with your data behind it.",
          tags: ["Documents", "Checks"],
        },
        {
          id: "handoff",
          label: "Handoff",
          still: "/world/04-office.webp",
          clip: "/world/dive-04.mp4",
          accent: "#3BE0A0",
          eyebrow: "Handoff",
          title: "Everything lands where you already work.",
          body: "Your CRM, your inbox, your sheet. No new app to learn — and if you stop working with us, all of it keeps running.",
          tags: ["Your accounts", "No lock-in"],
          scroll: 1.6,
          linger: 0.45,
          cta: {
            primary: { label: "See pricing", href: "/pricing" },
            secondary: { label: "WhatsApp us", href: "https://wa.me/971585620044" },
          },
        },
      ],
      connectors: ["/world/conn-01.mp4", "/world/conn-02.mp4", "/world/conn-03.mp4"],
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
  );
}
