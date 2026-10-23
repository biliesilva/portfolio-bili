import { cn } from "@/lib/cn";
import { RevealWords } from "./reveal";

/**
 * Numbered section header on a hairline — the editorial spine of every page.
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
      <div className="flex items-baseline gap-4">
        <span className="label text-bone-faint">{index}</span>
        <span className="label">{label}</span>
      </div>
      {title ? (
        <RevealWords
          as={as}
          text={title}
          className="mt-8 max-w-[22ch] text-headline"
        />
      ) : null}
    </div>
  );
}
