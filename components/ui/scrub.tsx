"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Scroll-scrubbed parallax. GSAP earns its place here: ScrollTrigger gives
 * frame-accurate scrubbing tied to the same ticker Lenis runs on.
 */
export function Scrub({
  children,
  y = -120,
  fade = false,
  className,
}: {
  children: ReactNode;
  /** Pixels of travel across the scroll range. */
  y?: number;
  fade?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.to(element, {
        y,
        opacity: fade ? 0.15 : 1,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => context.revert();
  }, [y, fade]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
