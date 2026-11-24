"use client";

import Link from "next/link";
import { useState, ViewTransition } from "react";
import type { WorkEntry, Discipline } from "@/content/types";
import { disciplines, kindLabel } from "@/content/work";
import { MediaFrame } from "@/components/ui/media-frame";
import { cn } from "@/lib/cn";

export function WorkIndex({ items }: { items: WorkEntry[] }) {
  const [filter, setFilter] = useState<Discipline | "All">("All");

  const visible =
    filter === "All"
      ? items
      : items.filter((item) => item.disciplines.includes(filter));

  return (
    <div>
      <div role="group" aria-label="Filter by discipline" className="hairline flex flex-wrap gap-2 pt-6">
        {(["All", ...disciplines] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFilter(option)}
            aria-pressed={filter === option}
            className={cn(
              "min-h-11 rounded-sm border px-4 font-display text-lg transition-colors duration-200",
              filter === option
                ? "border-bone bg-bone text-ink"
                : "border-bone-faint text-bone hover:bg-ink-line"
            )}
          >
            {option}
            <span className="sr-only"> projects</span>
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} projects shown
      </p>

      <ul className="mt-8 space-y-3">
        {visible.map((item, i) => (
          <li key={item.slug}>
            <Link
              href={`/work/${item.slug}`}
              data-chapter={item.tone}
              className="chapter group grid items-center gap-6 p-6 transition-[padding] duration-300 hover:pl-10 focus-visible:pl-10 md:grid-cols-12 md:p-10 md:hover:pl-14 md:focus-visible:pl-14"
            >
              <ViewTransition name={`cover-${item.slug}`} share="morph" default="none">
              <div className="overflow-hidden rounded-sm md:col-span-4">
                <MediaFrame
                  media={{ ...(item.panel ?? item.cover), alt: "", caption: undefined, aspect: "16/10" }}
                  priority={i === 0}
                  sizes="(min-width: 768px) 30vw, 54vw"
                  className="transition-transform duration-500 group-hover:scale-[1.02] group-focus-visible:scale-[1.02]"
                />
              </div>
              </ViewTransition>
              <div className="md:col-span-8 md:pl-6">
                <ViewTransition name={`title-${item.slug}`} share="morph" default="none">
                  <h2 className="text-headline decoration-2 underline-offset-8 group-hover:underline group-focus-visible:underline">
                  {item.title}
                </h2>
                </ViewTransition>
                <p className="chapter-dim mt-3 text-base">
                  {kindLabel[item.kind]}, {item.year}. {item.disciplines.map((discipline, i) => (
                    <span key={discipline} className="whitespace-nowrap">
                      {discipline}
                      {i < item.disciplines.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <p className="mt-4 max-w-[60ch] text-lead">{item.summary}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {visible.length === 0 ? (
        <p className="py-12 text-lead text-bone-dim">
          Nothing under that filter yet.
        </p>
      ) : null}
    </div>
  );
}
