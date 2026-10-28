import type { MetadataRoute } from "next";

// Static export needs these emitted as files rather than served per request.
export const dynamic = "force-static";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
