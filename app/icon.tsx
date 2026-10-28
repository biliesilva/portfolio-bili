import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * A written serif B on the holographic tile. Rendered at 64 so the stroke
 * contrast still holds when the browser scales it down to 16.
 */
export default async function Icon() {
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
          fontSize: 66,
          fontStyle: "italic",
          paddingBottom: 6,
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
