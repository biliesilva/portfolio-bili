/**
 * Scroll position as an external store, so components can read it without an
 * effect that sets state on mount.
 */
export function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

export function getHasScrolled() {
  return window.scrollY > 24;
}

/** The server has no scroll position; the header starts in its resting state. */
export function getNotScrolled() {
  return false;
}
