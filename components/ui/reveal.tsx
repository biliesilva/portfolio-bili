"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/cn";

/**
 * Reduced motion is handled globally by <MotionConfig reducedMotion="user">,
 * so nothing in here branches on a client-only value — server and client
 * render identical markup.
 */

type RevealProps = {
  children: ReactNode;
  /** Seconds of delay, used to stagger siblings. */
  delay?: number;
  as?: ElementType;
  className?: string;
  /** Vertical travel in pixels. */
  y?: number;
};

export function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
  y = 20,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px -8% 0px" });
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ y }}
      animate={inView ? { y: 0 } : undefined}
      transition={{ duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealWords({
  text,
  className,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  as?: ElementType;
}) {
  return <Tag className={cn("rise", className)}>{text}</Tag>;
}
