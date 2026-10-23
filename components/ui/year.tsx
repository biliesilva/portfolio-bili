"use client";

import { useSyncExternalStore } from "react";
import { getNullSnapshot, getYear, subscribeToNothing } from "@/lib/clock";

/**
 * Copyright year, resolved on the client.
 * Cache Components refuses `new Date()` during prerender — correctly, since a
 * prerendered year would silently go stale on 1 January.
 */
export function Year() {
  const year = useSyncExternalStore(
    subscribeToNothing,
    getYear,
    getNullSnapshot
  );

  return <span suppressHydrationWarning>{year ?? ""}</span>;
}
