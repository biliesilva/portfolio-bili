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
    document.documentElement.classList.toggle("lenis-stopped", open);
    return () => document.documentElement.classList.remove("lenis-stopped");
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-edge flex items-center justify-between py-5 mix-blend-difference">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-[0.12em] text-bone"
        >
          {site.name}
          <span className="sr-only"> — home</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "link-wipe font-mono text-[0.6875rem] uppercase tracking-[0.12em]",
                  active ? "text-bone" : "text-bone-dim hover:text-bone"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {site.availability.open ? (
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative size-2 rounded-full bg-accent" />
            </span>
          ) : null}
          <LocalTime className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-bone-dim" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-bone md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-(--spacing-gutter) pt-24 pb-10 md:hidden"
          >
            <nav aria-label="Primary mobile" className="flex flex-col gap-2">
              {site.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.06, duration: 0.6 }}
                >
                  <Link href={item.href} className="block text-headline">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
              <span className="label">{site.availability.label}</span>
              <a href={`mailto:${site.email}`} className="link-wipe text-lead">
                {site.email}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
