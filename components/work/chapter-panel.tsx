import { ViewTransition } from "react";
import Link from "next/link";
import { MediaFrame } from "@/components/ui/media-frame";
import { cn } from "@/lib/cn";
import type { WorkEntry } from "@/content/types";

export function ChapterPanel({
  study,
  priority = false,
  flip = false,
}: {
  study: WorkEntry;
  priority?: boolean;
  flip?: boolean;
}) {
  return (
    <article data-chapter={study.tone} className="chapter">
      <Link
        href={`/work/${study.slug}`}
        className="group container-edge grid items-center gap-10 py-16 md:grid-cols-12 md:py-24"
      >
        <div className={cn("md:col-span-5", flip && "md:order-last md:col-start-8")}>
          <p className="chapter-dim text-base">
            {study.client}
            <span className="block">{study.year}</span>
          </p>
          <ViewTransition name={`title-${study.slug}`} share="morph" default="none">
            <h3 className="mt-5 text-headline decoration-2 underline-offset-8 group-hover:underline group-focus-visible:underline">{study.title}</h3>
          </ViewTransition>
          <p className="mt-6 max-w-[44ch] text-lead">{study.summary}</p>
          <p className="chapter-dim mt-6 text-base">{study.role}</p>
          <span className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-current font-display text-xl">
            Read the case
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-x-0.5 group-focus-visible:-translate-x-0.5"
            >
              &rarr;
            </span>
          </span>
        </div>
        <div className={cn("md:col-span-7", !flip && "md:col-start-6")}>
          <ViewTransition name={`cover-${study.slug}`} share="morph" default="none">
          <div className="overflow-hidden rounded-sm">
            <MediaFrame
              media={{ ...(study.panel ?? study.cover), caption: undefined }}
              priority={priority}
              sizes="(min-width: 768px) 56vw, 100vw"
              className="transition-transform duration-500 group-hover:scale-[1.02] group-focus-visible:scale-[1.02]"
            />
          </div>
          </ViewTransition>
        </div>
      </Link>
    </article>
  );
}
