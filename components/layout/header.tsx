"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { LocalTime } from "@/components/ui/local-time";
import { getHasScrolled, getNotScrolled, subscribeToScroll } from "@/lib/scroll";

/**
 * Floating glass bar. It keeps its own backdrop at every scroll position, so
 * the navigation never has to borrow contrast from whatever is underneath it.
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    getHasScrolled,
    getNotScrolled
  );

  // Close the overlay when the route changes. Adjusting state during render is
  // React's own answer here — an effect would cause a second, visible pass.
  const [renderedPath, setRenderedPath] = useState(pathname);
  if (renderedPath !== pathname) {
    setRenderedPath(pathname);
    setOpen(false);
  }

  // Lock the page behind the overlay.
  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open);
    return () => document.documentElement.classList.remove("lenis-stopped");
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-(--spacing-gutter) pt-4">
      <div
        className={cn(
          "mx-auto flex max-w-[82rem] items-center justify-between gap-6 rounded-full border px-5 py-3 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-500",
          scrolled || open
            ? "border-ink-line bg-ink/80 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.9)]"
            : "border-transparent bg-ink/45"
        )}
      >
        <Link href="/" className="shrink-0 font-display text-lg font-medium tracking-[0.01em]">
          {site.name}
          <span className="sr-only"> — home</span>
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
                  active ? "holo-text" : "text-bone-dim hover:text-bone"
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
              <span className="holo-surface absolute inset-0 animate-ping rounded-full opacity-60" />
              <span className="holo-surface relative size-2 rounded-full" />
            </span>
          ) : null}
          <LocalTime className="font-display text-lg tracking-[0.01em] text-bone-dim" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="font-display text-lg font-medium tracking-[0.01em] md:hidden"
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
            className="mt-3 overflow-hidden rounded-3xl border border-ink-line bg-ink/90 p-6 backdrop-blur-xl md:hidden"
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
