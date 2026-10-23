import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 0.5,
            color: "#a3a09a",
          }}
        >
          <span>{site.name}</span>
          <span>{site.location}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1,
              letterSpacing: -3,
              maxWidth: 940,
              display: "flex",
            }}
          >
            I design products and ship the code.
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#a3a09a" }}>
            {site.role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            color: "#ff4a1c",
            letterSpacing: 0.5,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              backgroundColor: "#ff4a1c",
            }}
          />
          {site.availability.label}
        </div>
      </div>
    ),
    size
  );
}
