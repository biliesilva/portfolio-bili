import Image from "next/image";
import { about } from "@/content/about";
import { cn } from "@/lib/cn";

/**
 * Organic-cut portrait. One component so the homepage and the About page
 * cannot drift apart.
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
