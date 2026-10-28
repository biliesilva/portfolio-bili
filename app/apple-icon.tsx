import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon — same written mark, at the size iOS asks for. */
export default async function AppleIcon() {
  const serif = await readFile(
    join(process.cwd(), "assets/InstrumentSerif-Italic.ttf")
  );

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
          fontFamily: "Instrument Serif",
          fontSize: 140,
          fontStyle: "italic",
          paddingBottom: 12,
        }}
      >
        B
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: serif, weight: 400, style: "italic" },
      ],
    }
  );
}
