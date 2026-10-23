"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import type { CaseStudy, Discipline } from "@/content/types";
import { disciplines } from "@/content/work";
import { cn } from "@/lib/cn";

/**
 * The project index: a type-led list of rows with a cursor-following preview.
 * The preview is pointer-only decoration — every row is a plain link, so the
 * list works identically with a keyboard, a screen reader or no JavaScript.
 */
export function WorkIndex({ items }: { items: CaseStudy[] }) {
  const [filter, setFilter] = useState<Discipline | "All">("All");
  const [hovered, setHovered] = useState<CaseStudy | null>(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 160, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 160, damping: 20, mass: 0.5 });

  const visible =
    filter === "All"
      ? items
      : items.filter((item) => item.disciplines.includes(filter));

  return (
    <div
      onPointerMove={(event) => {
        if (reduced || event.pointerType !== "mouse") return;
        x.set(event.clientX + 24);
        y.set(event.clientY - 120);
      }}
    >
      <div className="hairline flex flex-wrap items-center gap-2 pt-6">
        {(["All", ...disciplines] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFilter(option)}
            aria-pressed={filter === option}
            className={cn(
              "rounded-full border px-4 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em] transition-colors duration-300",
              filter === option
                ? "border-bone bg-bone text-ink"
                : "border-ink-line text-bone-dim hover:border-bone hover:text-bone"
            )}
          >
            {option}
            <span className="sr-only"> projects</span>
          </button>
        ))}
      </div>

      <ul className="mt-4">
        {visible.map((item, i) => (
          <li key={item.slug}>
            <Link
              href={`/work/${item.slug}`}
              onPointerEnter={() => setHovered(item)}
              onPointerLeave={() => setHovered(null)}
              onFocus={() => setHovered(null)}
              className="group hairline grid grid-cols-12 items-baseline gap-4 py-7 transition-colors duration-500 hover:border-bone"
            >
              <span className="label col-span-2 md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-10 text-title transition-colors duration-500 group-hover:text-accent md:col-span-5">
                {item.title}
              </span>
              <span className="col-span-10 col-start-3 text-sm text-bone-dim md:col-span-4 md:col-start-auto">
                {item.disciplines.join(" · ")}
              </span>
              <span className="label col-span-2 md:col-span-2 md:text-right">
                {item.year}
              </span>
              <span className="col-span-10 col-start-3 max-w-[60ch] text-sm text-bone-faint md:col-span-6 md:col-start-7">
                {item.summary}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {visible.length === 0 ? (
        <p className="py-12 text-lead text-bone-dim">
          Nothing under that filter yet.
        </p>
      ) : null}

      {/* Pointer preview */}
      <AnimatePresence>
        {hovered && !reduced ? (
          <motion.div
            key={hovered.slug}
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ x: sx, y: sy }}
            className="pointer-events-none fixed left-0 top-0 z-40 hidden w-[22rem] overflow-hidden rounded-sm bg-ink-raised md:block"
          >
            <div className="relative aspect-[16/10]">
              {hovered.cover.src ? (
                <Image
                  src={hovered.cover.src}
                  alt=""
                  fill
                  sizes="352px"
                  className="object-cover"
                />
              ) : (
                <div
                  className="absolute inset-0 flex items-end p-4"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, transparent 0 11px, rgba(242,240,234,0.05) 11px 12px)",
                  }}
                >
                  <span className="label text-bone-faint">
                    {hovered.title} — image pending
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
