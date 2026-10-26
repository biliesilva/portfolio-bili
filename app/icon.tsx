import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Generated so the tab icon carries the same holographic accent as the site.
 * A letterform on a bright tile still reads at 16px; a detailed mark does not.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "linear-gradient(135deg, #ff6ec7 0%, #a78bfa 35%, #60a5fa 65%, #22d3ee 100%)",
          color: "#0a0a0b",
          fontSize: 46,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        B
      </div>
    ),
    size
  );
}
