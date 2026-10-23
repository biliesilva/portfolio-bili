"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { motion, useInView } from "motion/react";

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
  y = 24,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px -12% 0px" });
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Word-by-word mask reveal for display headlines.
 * Each word rides up out of an overflow-hidden box.
 */
export function RevealWords({
  text,
  className,
  delay = 0,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-flex overflow-hidden align-bottom pb-[0.08em]"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : undefined}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.045,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
