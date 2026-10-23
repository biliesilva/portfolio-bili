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
}: {
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden="true"
        className="holo-surface blob absolute -inset-3 opacity-45 blur-2xl"
      />
      <div className="blob relative overflow-hidden">
        <Image
          src={about.portrait.src}
          alt={about.portrait.alt}
          width={1450}
          height={1800}
          priority={priority}
          sizes={sizes}
          className="aspect-[4/5] h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}
