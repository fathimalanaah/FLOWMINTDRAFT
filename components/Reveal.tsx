"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Scroll reveal, scoped to its own container so ScrollTrigger never rescans the
 * page. Staggers are kept short — past about eight children the tail feels laggy.
 */
export default function Reveal({
  children,
  className,
  stagger = 0.07,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const el = scope.current;
      if (!el) return;

      gsap.from(Array.from(el.children), {
        opacity: 0,
        y: 22,
        duration: 0.55,
        stagger,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      });
    },
    { scope },
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
