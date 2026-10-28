import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon — same written mark, at the size iOS asks for. */
export default async function AppleIcon() {
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
          fontSize: 126,
          fontStyle: "italic",
          paddingBottom: 8,
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
