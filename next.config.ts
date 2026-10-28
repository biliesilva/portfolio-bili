import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the whole site is prerendered HTML, which is what Firebase
  // Hosting serves. Nothing here needs a server at request time.
  output: "export",

  images: {
    // The optimiser is a server feature. Responsive WebP variants are built
    // ahead of time by scripts/build-images.mjs instead.
    unoptimized: true,
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
