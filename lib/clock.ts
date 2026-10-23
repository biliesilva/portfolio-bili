import { site } from "@/content/site";

/**
 * A clock is an external system, so it belongs in useSyncExternalStore rather
 * than in state driven by an effect. Snapshots are strings, so an unchanged
 * minute compares equal and never triggers a render.
 */
const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: site.timezone,
});

export function subscribeToClock(onChange: () => void) {
  const id = setInterval(onChange, 15_000);
  return () => clearInterval(id);
}

export function getLocalTime() {
  return formatter.format(new Date());
}

/** Nothing to subscribe to — the year does not change while the tab is open. */
export function subscribeToNothing() {
  return () => {};
}

export function getYear() {
  return new Date().getFullYear();
}

/** The server has no local clock to read, so it renders nothing. */
export function getNullSnapshot() {
  return null;
}
