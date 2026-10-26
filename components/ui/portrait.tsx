import Image from "next/image";
import { about } from "@/content/about";
import { cn } from "@/lib/cn";

/**
 * Organic-cut portrait with a holographic halo behind it.
 * One component so the homepage and the About page cannot drift apart.
 */
export function Portrait({
  className,
  sizes = "(min-width: 768px) 16rem, 10rem",
  priority = false,
  halo = "opacity-40 blur-2xl",
}: {
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Tune the glow per context — a large portrait needs a quieter one. */
  halo?: string;
}) {
  return (
    <div className={cn("relative isolate", className)}>
      <div
        aria-hidden="true"
        className={cn(
          "holo-surface blob absolute inset-[-4%] -z-10",
          halo
        )}
      />
      <div className="blob relative overflow-hidden">
        <Image
          src={about.portrait.src}
          alt={about.portrait.alt}
          width={1450}
          height={1800}
          priority={priority}
          quality={92}
          sizes={sizes}
          className="aspect-[4/5] h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}
