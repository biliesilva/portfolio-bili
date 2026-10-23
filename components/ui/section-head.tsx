import { cn } from "@/lib/cn";
import { RevealWords } from "./reveal";

/**
 * Numbered section header on a hairline — the editorial spine of every page.
 * The index is set large enough to act as a wayfinding marker rather than a
 * footnote, with the holographic accent carrying it.
 */
export function SectionHead({
  index,
  label,
  title,
  className,
  as = "h2",
}: {
  index: string;
  label: string;
  title?: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("hairline pt-6", className)}>
      <div className="flex items-baseline gap-5">
        <span className="holo-text font-display text-3xl font-medium leading-none tabular-nums md:text-4xl">
          {index}
        </span>
        <span className="font-display text-xl text-bone-dim md:text-2xl">
          {label}
        </span>
      </div>
      {title ? (
        <RevealWords
          as={as}
          text={title}
          className="mt-8 max-w-[24ch] text-headline"
        />
      ) : null}
    </div>
  );
}
