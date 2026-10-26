import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon. Same mark, with the padding iOS expects. */
export default function AppleIcon() {
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
          fontSize: 118,
          fontWeight: 700,
          letterSpacing: -3,
        }}
      >
        B
      </div>
    ),
    size
  );
}
