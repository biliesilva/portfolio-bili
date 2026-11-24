"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { LocalTime } from "@/components/ui/local-time";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the overlay when the route changes. Adjusting state during render is
  // React's own answer here — an effect would cause a second, visible pass.
  const [renderedPath, setRenderedPath] = useState(pathname);
  if (renderedPath !== pathname) {
    setRenderedPath(pathname);
    setOpen(false);
  }

  // Lock the page behind the overlay.
  useEffect(() => {
    document.documentElement.classList.toggle("nav-open", open);
    return () => document.documentElement.classList.remove("nav-open");
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-line bg-ink">
      <div
        className="container-edge flex min-h-16 items-center justify-between gap-6"
      >
        <Link href="/" className="link-wipe shrink-0 font-display text-lg font-medium tracking-[0.01em]">
          {site.name}
          <span className="sr-only">, home</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {site.nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "link-wipe font-display text-lg font-medium tracking-[0.01em] transition-colors duration-300",
                  active ? "text-bone underline decoration-2 underline-offset-8" : "text-bone-dim hover:text-bone"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2.5 md:flex">
          {site.availability.open ? (
            <span className="relative flex size-2" title={site.availability.label}>
              <span className="relative size-2 rounded-full bg-holo-mint" />
            </span>
          ) : null}
          <LocalTime className="font-display text-lg tracking-[0.01em] text-bone-dim" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex min-h-11 min-w-11 items-center justify-end font-display text-lg font-medium md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="container-edge border-t border-ink-line bg-ink pb-8 pt-4 md:hidden"
          >
            <nav aria-label="Primary mobile" className="flex flex-col gap-1">
              {site.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.5 }}
                >
                  <Link href={item.href} className="block py-2 text-title">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="hairline mt-6 flex flex-col gap-2 pt-5">
              <span className="label">{site.availability.label}</span>
              <a href={`mailto:${site.email}`} className="link-wipe">
                {site.email}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
