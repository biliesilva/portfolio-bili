import type { ProofLink } from "@/content/types";
import { cn } from "@/lib/cn";

export function ProofLinks({
  links,
  className,
}: {
  links?: readonly ProofLink[];
  className?: string;
}) {
  if (!links?.length) return null;

  return (
    <ul className={cn("flex flex-wrap gap-x-6 gap-y-1", className)}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 font-display text-lg underline decoration-1 underline-offset-4 transition-[text-decoration-thickness] duration-200 hover:decoration-2"
          >
            {link.label}
            <span aria-hidden="true">&#8599;</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
