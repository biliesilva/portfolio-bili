"use client";

import { useId, useState, type CSSProperties } from "react";
import type { ThemeSurface } from "@/content/types";
import { cn } from "@/lib/cn";

export function ThemeDemo({ themes }: { themes: ThemeSurface[] }) {
  const [active, setActive] = useState(0);
  const name = useId();
  const theme = themes[active];

  return (
    <div
      className="theme-surface flex h-full flex-col justify-between gap-10 border border-ink-line p-6 transition-colors duration-300 md:p-8"
      style={{ "--panel-base": theme.surface } as CSSProperties}
    >
      <div aria-live="polite">
        <p className="theme-ink font-display text-title">{theme.name}</p>
        <p className="theme-ink mt-3 max-w-[40ch]">
          The text reads its own background and moves to the readable side.
        </p>
        <p className="theme-ink-muted mt-2 max-w-[40ch]">
          Secondary text follows the same rule.
        </p>
      </div>
      <fieldset>
        <legend className="theme-ink-muted text-base">Try a Heroic theme</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {themes.map((item, i) => (
            <label
              key={item.name}
              className={cn(
                "theme-chip inline-flex min-h-11 cursor-pointer items-center border px-4 font-display text-lg",
                i === active && "theme-chip-active"
              )}
            >
              <input
                type="radio"
                name={name}
                checked={i === active}
                onChange={() => setActive(i)}
                className="sr-only"
              />
              {item.name}
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
