import type { MetadataRoute } from "next";
import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Static export needs these emitted as files rather than served per request.
export const dynamic = "force-static";
import { site } from "@/content/site";
import { caseStudies } from "@/content/work";

/** Used when git is unavailable — a fresh tarball, or a build outside the repo. */
const FALLBACK = "2026-11-02";

/**
 * Ask git when each source file last changed, at build time. A hardcoded date
 * goes stale the moment anyone edits the copy, and a `lastmod` that lies is
 * worse for crawling than no `lastmod` at all.
 */
function lastModified(...paths: string[]): string {
  try {
    const dates = paths
      .map((path) =>
        execFileSync("git", ["log", "-1", "--format=%cs", "--", path], {
          encoding: "utf8",
          stdio: ["ignore", "pipe", "ignore"],
        }).trim()
      )
      .filter(Boolean);
    return dates.sort().at(-1) ?? FALLBACK;
  } catch {
    return FALLBACK;
  }
}

/**
 * Slugs do not match filenames — `heroic-games-launcher` lives in `heroic.ts` —
 * so find the file that declares each slug rather than guessing from the name.
 */
function sourceFileFor(slug: string): string {
  const dir = "content/work";
  try {
    const file = readdirSync(dir).find(
      (name) =>
        name.endsWith(".ts") &&
        name !== "index.ts" &&
        readFileSync(join(dir, name), "utf8").includes(`slug: "${slug}"`)
    );
    return file ? join(dir, file) : dir;
  } catch {
    return dir;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", sources: ["app/page.tsx", "components/sections", "content/site.ts"] },
    { path: "/work", sources: ["app/work/page.tsx", "content/work"] },
    { path: "/about", sources: ["app/about/page.tsx", "content/about.ts"] },
    { path: "/resume", sources: ["app/resume/page.tsx", "content/resume.ts"] },
    { path: "/contact", sources: ["app/contact/page.tsx", "content/site.ts"] },
  ];

  const staticRoutes = pages.map(({ path, sources }) => ({
    url: `${site.url}${path}`,
    lastModified: lastModified(...sources),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const workRoutes = caseStudies.map((study) => ({
    url: `${site.url}/work/${study.slug}`,
    lastModified: lastModified(sourceFileFor(study.slug), "app/work/[slug]/page.tsx"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...workRoutes];
}
