/* eslint-disable @next/next/no-img-element -- static export has no image
   optimiser; the WebP ladder is built by scripts/build-images.mjs instead. */
import manifest from "@/content/image-manifest.json";
import { cn } from "@/lib/cn";

type Entry = { widths: number[]; width: number; height: number };
const images = manifest as Record<string, Entry>;

/**
 * Static export turns off Next's image optimiser, so this does the same job
 * from files generated at build time: a WebP size ladder in srcset, with the
 * original as the fallback src. Browsers pick the smallest file that still
 * covers the slot at their pixel density.
 */
export function ResponsiveImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
  mobileSrc,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  mobileSrc?: string;
}) {
  const entry = images[src];

  if (!entry) {
    // Unknown file: still render something rather than nothing.
    return (
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        className={className}
      />
    );
  }

  const base = src.replace(/\.(jpe?g|png)$/i, "");
  const srcSet = entry.widths.map((w) => `${base}-${w}.webp ${w}w`).join(", ");

  const mobile = mobileSrc ? images[mobileSrc] : undefined;
  const mobileBase = mobileSrc?.replace(/\.(jpe?g|png)$/i, "");

  const image = (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={entry.width}
      height={entry.height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : undefined}
      className={cn(className)}
    />
  );

  if (!mobile) return image;

  return (
    <picture>
      <source
        media="(max-width: 767px)"
        srcSet={mobile.widths.map((w) => `${mobileBase}-${w}.webp ${w}w`).join(", ")}
        sizes="54vw"
      />
      {image}
    </picture>
  );
}
