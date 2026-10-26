import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Next 16 only serves qualities on this list, and defaults to [75].
    // UI screenshots have fine text that 75 visibly smears.
    qualities: [75, 92],
    // Images here get replaced in place, keeping the same path. With a long
    // max-age the browser never asks whether the bytes changed. A short TTL
    // means it revalidates and gets a cheap 304 when nothing moved.
    minimumCacheTTL: 60,
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
