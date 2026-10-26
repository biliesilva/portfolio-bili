import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Media } from "@/content/types";

/**
 * Renders project media, or a deliberate placeholder frame when `src` is empty.
 * This keeps the layout honest while real screenshots are still missing —
 * no broken images, and the alt text doubles as a shot list.
 */
export function MediaFrame({
  media,
  className,
  priority = false,
  sizes = "100vw",
}: {
  media: Media;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  // Nothing to show is better than a labelled empty box.
  if (!media.src) return null;

  const aspect = media.aspect ?? "16/10";

  return (
    <figure className={cn("w-full", className)}>
      <div
        className="relative w-full overflow-hidden rounded-sm bg-ink-raised"
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={92}
          className="object-cover"
        />
      </div>
      {media.caption ? (
        <figcaption className="label mt-3">{media.caption}</figcaption>
      ) : null}
    </figure>
  );
}

