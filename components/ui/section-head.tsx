import { cn } from "@/lib/cn";
import { RevealWords } from "./reveal";

export function SectionHead({
  label,
  title,
  className,
  as = "h2",
}: {
  label: string;
  title?: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  const Label = title ? "span" : as;

  return (
    <div className={cn("hairline pt-6", className)}>
      <Label className="block font-display text-xl text-bone md:text-2xl">{label}</Label>
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
