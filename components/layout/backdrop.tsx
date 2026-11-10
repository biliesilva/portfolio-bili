/**
 * Ambient background. Four drifting clusters built from the primitives the two
 * halves of this job share: a bezier with its handles out (the pen tool), an
 * orbit, a component graph, and a wireframe.
 *
 * Strokes are painted with the holographic gradient rather than a flat colour,
 * so each shape runs through the spectrum the way the headline does. Pure
 * markup and CSS: no JavaScript, no scroll listeners, and the global
 * `prefers-reduced-motion` switch in globals.css stops every drift at once.
 */

/** The site gradient, as SVG stops. Angled per shape so no two read alike. */
function HoloStops() {
  return (
    <>
      <stop offset="0%" stopColor="#ff6ec7" />
      <stop offset="26%" stopColor="#a78bfa" />
      <stop offset="50%" stopColor="#60a5fa" />
      <stop offset="63%" stopColor="#22d3ee" />
      <stop offset="76%" stopColor="#5eead4" />
      <stop offset="88%" stopColor="#fde68a" />
      <stop offset="100%" stopColor="#ff6ec7" />
    </>
  );
}

export function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true" data-print-hide>
      <div className="backdrop-grid animate-backdrop-pan" />

      {/* Bezier with its control handles showing */}
      <div className="backdrop-item backdrop-item--bezier animate-backdrop-drift-a">
        <svg viewBox="0 0 220 140" fill="none" stroke="url(#holo-a)">
          <defs>
            <linearGradient id="holo-a" x1="0" y1="1" x2="1" y2="0">
              <HoloStops />
            </linearGradient>
          </defs>
          <path d="M10 110 C 60 10, 160 130, 210 30" strokeWidth="1.5" />
          <path d="M10 110 L 60 10 M 210 30 L 160 130" strokeWidth="1" strokeDasharray="4 4" />
          <rect x="5" y="105" width="10" height="10" strokeWidth="1.5" />
          <rect x="205" y="25" width="10" height="10" strokeWidth="1.5" />
          <circle cx="60" cy="10" r="4" strokeWidth="1.5" />
          <circle cx="160" cy="130" r="4" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Orbit */}
      <div className="backdrop-item backdrop-item--orbit animate-backdrop-spin">
        <svg viewBox="0 0 200 200" fill="none" stroke="url(#holo-b)">
          <defs>
            <linearGradient id="holo-b" x1="0" y1="0" x2="1" y2="1">
              <HoloStops />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="92" strokeWidth="1" />
          <circle cx="100" cy="100" r="64" strokeWidth="1" strokeDasharray="2 6" />
          <circle cx="100" cy="100" r="34" strokeWidth="1.25" />
          <circle cx="100" cy="8" r="3.5" strokeWidth="1.5" />
          <circle cx="164" cy="100" r="2.5" strokeWidth="1.25" />
        </svg>
      </div>

      {/* Component graph — nodes and the edges between them */}
      <div className="backdrop-item backdrop-item--graph animate-backdrop-drift-b">
        <svg viewBox="0 0 200 160" fill="none" stroke="url(#holo-c)">
          <defs>
            <linearGradient id="holo-c" x1="1" y1="0" x2="0" y2="1">
              <HoloStops />
            </linearGradient>
          </defs>
          <path
            d="M30 30 L 100 70 L 170 26 M100 70 L 70 140 M100 70 L 160 132"
            strokeWidth="1"
          />
          <circle cx="30" cy="30" r="5" strokeWidth="1.5" />
          <circle cx="170" cy="26" r="5" strokeWidth="1.5" />
          <circle cx="100" cy="70" r="7" strokeWidth="1.5" />
          <circle cx="70" cy="140" r="4" strokeWidth="1.5" />
          <circle cx="160" cy="132" r="4" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Wireframe */}
      <div className="backdrop-item backdrop-item--frame animate-backdrop-spin-slow">
        <svg viewBox="0 0 180 180" fill="none" stroke="url(#holo-d)">
          <defs>
            <linearGradient id="holo-d" x1="0" y1="1" x2="1" y2="1">
              <HoloStops />
            </linearGradient>
          </defs>
          <path d="M90 6 L 168 51 L 168 141 L 90 186 L 12 141 L 12 51 Z" strokeWidth="1.25" />
          <path d="M90 6 L 90 186 M12 51 L 168 141 M168 51 L 12 141" strokeWidth="0.75" />
        </svg>
      </div>
    </div>
  );
}
