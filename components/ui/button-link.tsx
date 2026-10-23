import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost";

const base =
  "group inline-flex items-center gap-2.5 rounded-full px-7 py-3 font-display text-lg font-medium tracking-[0.01em] transition-[color,background-color,border-color,box-shadow] duration-300";

const variants: Record<Variant, string> = {
  primary:
    "holo-surface text-ink shadow-[0_0_24px_-8px_var(--color-holo-pink),0_0_32px_-10px_var(--color-holo-cyan)] hover:shadow-[0_0_34px_-6px_var(--color-holo-violet),0_0_46px_-8px_var(--color-holo-mint)]",
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
        className="text-xl leading-none transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
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
