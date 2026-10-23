"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * `reducedMotion="user"` makes Motion drop transform animations for anyone who
 * asks for reduced motion, while keeping opacity fades. Handling it here — once,
 * at the root — means individual components never branch their markup on a
 * client-only value, which is what causes hydration mismatches.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
