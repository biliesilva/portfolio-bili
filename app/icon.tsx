import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * A written serif B on the site's ink. Lora's italic has even stroke weight,
 * which is what survives the browser scaling this to 16px — a high-contrast
 * serif loses its hairlines at that size.
 */
export default async function Icon() {
  const serif = await readFile(
    join(process.cwd(), "assets/Lora-SemiBoldItalic.ttf")
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
          background: "#0a0a0b",
          color: "#f2f0ea",
          fontFamily: "Lora",
          fontSize: 46,
          fontStyle: "italic",
          paddingBottom: 3,
        }}
      >
        B
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Lora", data: serif, weight: 600, style: "italic" },
      ],
    }
  );
}
