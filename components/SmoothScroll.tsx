"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Smooth scroll, plus the page-spine channel fill.
 *
 * Both are motion, so both are skipped entirely when the visitor has asked for
 * reduced motion — native scrolling is left alone and the channel simply sits at
 * zero rather than animating.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    let frame = 0;

    const fill = document.getElementById("spine-fill");

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onScroll = ({ progress }: { progress: number }) => {
      if (fill) fill.style.transform = `scaleX(${Math.max(progress, 0.004)})`;
    };
    lenis.on("scroll", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
