"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/content/site";
import { getLocalTime, getNullSnapshot, subscribeToClock } from "@/lib/clock";

/**
 * Local clock for the header and footer.
 * Renders location-only on the server so the markup cannot disagree with the
 * client's first paint.
 */
export function LocalTime({ className }: { className?: string }) {
  const time = useSyncExternalStore(
    subscribeToClock,
    getLocalTime,
    getNullSnapshot
  );

  return (
    <span className={className} suppressHydrationWarning>
      {time ? `${time} ${site.location}` : site.location}
    </span>
  );
}
