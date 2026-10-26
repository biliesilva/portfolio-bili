import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { caseStudies } from "@/content/work";

/** Bump when the content changes — a prerendered `new Date()` would be a lie anyway. */
const lastModified = "2026-10-23";

export default function sitemap(): MetadataRoute.Sitemap {

  const staticRoutes = ["", "/work", "/about", "/resume", "/contact"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const workRoutes = caseStudies.map((study) => ({
    url: `${site.url}/work/${study.slug}`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...workRoutes];
}
