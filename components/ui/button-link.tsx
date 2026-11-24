import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "ink";

const base =
  "group inline-flex items-center gap-2.5 rounded-sm px-6 py-3 font-display text-lg font-medium tracking-[0.01em] transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary:
    "bg-bone text-ink hover:bg-accent",
  ink: "bg-ink text-bone hover:bg-ink-line",
  ghost: "border border-bone-faint text-bone hover:border-bone hover:bg-bone hover:text-ink",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const download = href.endsWith(".pdf");
  const isExternal = external || href.startsWith("http") || href.startsWith("mailto:");

  const content = (
    <>
      {children}
      <span
        aria-hidden="true"
        className="text-xl leading-none transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
      >
        {download ? "\u2193" : isExternal ? "\u2197" : "\u2192"}
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel="noopener noreferrer"
        className={cn(base, variants[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {content}
    </Link>
  );
}
