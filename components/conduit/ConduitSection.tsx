"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { stages } from "@/lib/site";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

/**
 * The assembly. Scroll drives it and nothing else does — it never runs ahead of
 * the reader, and it never loops on a timer.
 *
 * Two fallbacks, both real rather than degraded-and-hoped-for:
 *   • reduced motion → the approved still, stages listed in full
 *   • narrow viewports → same, because WebGL on a phone buys nothing here
 */
export default function ConduitSection() {
  const section = useRef<HTMLElement>(null);
  const progress = useRef(0);
  const [active, setActive] = useState(-1);
  const [interactive, setInteractive] = useState<boolean | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 767px)");

    // Re-evaluated on change, not just at mount: resizing a window or rotating a
    // tablet used to leave WebGL running on a phone-width viewport, or never
    // start it after growing past the breakpoint.
    const evaluate = () => setInteractive(!reduced.matches && !narrow.matches);
    evaluate();

    reduced.addEventListener("change", evaluate);
    narrow.addEventListener("change", evaluate);
    return () => {
      reduced.removeEventListener("change", evaluate);
      narrow.removeEventListener("change", evaluate);
    };
  }, []);

  useEffect(() => {
    if (!interactive) return;
    let frame = 0;

    const measure = () => {
      const el = section.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const travel = rect.height - window.innerHeight;
        const p = travel > 0 ? (-rect.top) / travel : 0;
        progress.current = Math.min(Math.max(p, 0), 1);

        const idx = Math.floor(progress.current / 0.25);
        setActive(progress.current <= 0.02 ? -1 : Math.min(idx, stages.length - 1));
      }
      frame = requestAnimationFrame(measure);
    };
    frame = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(frame);
  }, [interactive]);

  const stageList = (
    <ol className="space-y-5">
      {stages.map((stage, i) => {
        const on = !interactive || i <= active;
        return (
          <li key={stage.key} className="flex gap-4">
            <span
              aria-hidden="true"
              className={`mt-[0.6rem] h-px w-8 shrink-0 transition-colors duration-500 ${
                on ? "bg-mint" : "bg-line-strong"
              }`}
            />
            <div>
              <p
                className={`font-mono text-[0.8125rem] tracking-[0.16em] uppercase transition-colors duration-500 ${
                  on ? "text-fg" : "text-muted"
                }`}
              >
                {stage.name}
              </p>
              {/* Body copy stays at full muted in both states. The mint rule and
                  the brightened heading already carry the active signal twice over;
                  dimming the prose as well added nothing and dropped it to 2.4:1. */}
              <p className="mt-1.5 max-w-sm text-[0.9375rem] text-muted">{stage.line}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );

  if (interactive === null || interactive === false) {
    return (
      <section className="border-t border-line py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="label">How a Flow Mint build works</p>
            <h2 className="mt-4 text-[length:var(--text-title)]">
              Four parts, connected once, running every day after that.
            </h2>
            <div className="mt-9">{stageList}</div>
          </div>
          <Image
            src="/art/section-conduit.webp"
            alt="A machined aluminium channel with a mint ribbon running along its length."
            width={1584}
            height={672}
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="w-full"
          />
        </div>
      </section>
    );
  }

  return (
    <section ref={section} className="relative border-t border-line" style={{ height: "340vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="shell grid h-full items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative z-10 pt-20">
            <p className="label">How a Flow Mint build works</p>
            <h2 className="mt-4 text-[length:var(--text-title)]">
              Four parts, connected once, running every day after that.
            </h2>
            <div className="mt-9">{stageList}</div>
          </div>

          <div className="absolute inset-0 lg:relative lg:h-full">
            <Scene progress={progress} />
          </div>
        </div>
      </div>
    </section>
  );
}
