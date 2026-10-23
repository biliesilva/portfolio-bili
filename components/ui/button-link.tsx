import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost";

const base =
  "group inline-flex items-center gap-3 rounded-full px-6 py-3 font-mono text-[0.6875rem] uppercase tracking-[0.12em] transition-colors duration-300";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-ink hover:bg-bone",
  ghost: "border border-ink-line text-bone hover:border-bone hover:bg-bone hover:text-ink",
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
  const content = (
    <>
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
      >
        &#8599;
      </span>
    </>
  );

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel="noreferrer"
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
