import type { MetadataRoute } from "next";

// Static export needs these emitted as files rather than served per request.
export const dynamic = "force-static";
import { site } from "@/content/site";

/**
 * Everything is open, including to the AI crawlers. Several of them read
 * `Disallow` conservatively when a site only ever says `User-agent: *`, and a
 * portfolio that assistants cannot quote is a portfolio that loses the referral.
 */
const aiCrawlers = [
  "GPTBot", // OpenAI — training and ChatGPT browsing
  "OAI-SearchBot", // OpenAI — ChatGPT search index
  "ChatGPT-User", // OpenAI — user-initiated fetches
  "ClaudeBot", // Anthropic
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended", // Gemini grounding
  "Applebot-Extended",
  "Bingbot", // powers Copilot
  "CCBot", // Common Crawl, which most models are trained on
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
