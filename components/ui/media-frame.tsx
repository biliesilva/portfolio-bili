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
  const aspect = media.aspect ?? "16/10";

  return (
    <figure className={cn("w-full", className)}>
      <div
        className="relative w-full overflow-hidden rounded-sm bg-ink-raised"
        style={{ aspectRatio: aspect }}
      >
        {media.src ? (
          <Image
            src={media.src}
            alt={media.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        ) : (
          <Placeholder alt={media.alt} aspect={aspect} />
        )}
      </div>
      {media.caption ? (
        <figcaption className="label mt-3">{media.caption}</figcaption>
      ) : null}
    </figure>
  );
}

function Placeholder({ alt, aspect }: { alt: string; aspect: string }) {
  return (
    <div
      className="absolute inset-0 flex flex-col justify-between p-5"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, transparent 0 11px, rgba(242,240,234,0.035) 11px 12px)",
      }}
      aria-hidden="true"
    >
      <span className="label text-bone-faint">Image pending · {aspect}</span>
      <span className="max-w-[48ch] font-mono text-xs leading-relaxed text-bone-faint">
        {alt}
      </span>
    </div>
  );
}
