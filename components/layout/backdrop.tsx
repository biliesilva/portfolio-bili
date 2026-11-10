/**
 * Ambient background. Four drifting clusters built from the primitives the two
 * halves of this job share: a bezier with its handles out (the pen tool), an
 * orbit, a component graph, and a wireframe.
 *
 * Deliberately almost invisible — it should register as texture, not as a
 * second thing to read. Pure markup and CSS: no JavaScript, no scroll
 * listeners, and `prefers-reduced-motion` is handled by the global switch in
 * globals.css, which stops every animation on the page at once.
 */
export function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true" data-print-hide>
      <div className="backdrop-grid" />

      {/* Bezier with its control handles showing */}
      <div className="backdrop-item backdrop-item--bezier">
        <svg viewBox="0 0 220 140" fill="none" stroke="currentColor">
          <path d="M10 110 C 60 10, 160 130, 210 30" strokeWidth="1.25" />
          <path d="M10 110 L 60 10 M 210 30 L 160 130" strokeWidth="0.75" strokeDasharray="4 4" />
          <rect x="5" y="105" width="10" height="10" strokeWidth="1.25" />
          <rect x="205" y="25" width="10" height="10" strokeWidth="1.25" />
          <circle cx="60" cy="10" r="4" strokeWidth="1.25" />
          <circle cx="160" cy="130" r="4" strokeWidth="1.25" />
        </svg>
      </div>

      {/* Orbit */}
      <div className="backdrop-item backdrop-item--orbit">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="92" strokeWidth="0.75" />
          <circle cx="100" cy="100" r="64" strokeWidth="0.75" strokeDasharray="2 6" />
          <circle cx="100" cy="100" r="34" strokeWidth="1" />
          <circle cx="100" cy="8" r="3.5" strokeWidth="1.25" />
          <circle cx="164" cy="100" r="2.5" strokeWidth="1" />
        </svg>
      </div>

      {/* Component graph — nodes and the edges between them */}
      <div className="backdrop-item backdrop-item--graph">
        <svg viewBox="0 0 200 160" fill="none" stroke="currentColor">
          <path
            d="M30 30 L 100 70 L 170 26 M100 70 L 70 140 M100 70 L 160 132"
            strokeWidth="0.75"
          />
          <circle cx="30" cy="30" r="5" strokeWidth="1.25" />
          <circle cx="170" cy="26" r="5" strokeWidth="1.25" />
          <circle cx="100" cy="70" r="7" strokeWidth="1.25" />
          <circle cx="70" cy="140" r="4" strokeWidth="1.25" />
          <circle cx="160" cy="132" r="4" strokeWidth="1.25" />
        </svg>
      </div>

      {/* Wireframe */}
      <div className="backdrop-item backdrop-item--frame">
        <svg viewBox="0 0 180 180" fill="none" stroke="currentColor">
          <path d="M90 6 L 168 51 L 168 141 L 90 186 L 12 141 L 12 51 Z" strokeWidth="1" />
          <path d="M90 6 L 90 186 M12 51 L 168 141 M168 51 L 12 141" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  );
}
