import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The share card is the first thing a recruiter sees in a LinkedIn message,
 * so it uses the site's own typeface and accent rather than a system sans.
 */
export default async function OpengraphImage() {
  const [semibold, regular] = await Promise.all([
    readFile(join(process.cwd(), "assets/BarlowCondensed-SemiBold.ttf")),
    readFile(join(process.cwd(), "assets/BarlowCondensed-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0b",
          color: "#f2f0ea",
          padding: "64px 72px",
          fontFamily: "Barlow Condensed",
          position: "relative",
        }}
      >
        {/* The holographic rule, so the card and the site share a mark. */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            backgroundImage:
              "linear-gradient(100deg, #ff6ec7 0%, #a78bfa 28%, #60a5fa 52%, #22d3ee 76%, #fde68a 100%)",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#a3a09a",
          }}
        >
          <span>{site.name}</span>
          <span>{site.location}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 104,
              lineHeight: 1,
              letterSpacing: -2,
              maxWidth: 960,
              display: "flex",
              fontWeight: 600,
            }}
          >
            I design products and ship the code.
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#a3a09a" }}>
            {site.role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 26,
            color: "#a78bfa",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#a78bfa",
            }}
          />
          {site.availability.label}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Barlow Condensed", data: semibold, weight: 600, style: "normal" },
        { name: "Barlow Condensed", data: regular, weight: 400, style: "normal" },
      ],
    }
  );
}
