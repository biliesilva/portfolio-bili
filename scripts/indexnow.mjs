/**
 * Tell IndexNow the pages changed, instead of waiting to be crawled.
 *
 * Bing, Yandex, Seznam and Naver share one endpoint — submitting to any of them
 * reaches all of them. Google does not participate, so this complements Search
 * Console rather than replacing it. Bing matters here because it is the index
 * behind Copilot.
 *
 * Run after deploying: `pnpm indexnow`. The URL list comes from the built
 * sitemap, so it can never list a page that was not actually published.
 */
import { readFileSync, readdirSync } from "node:fs";

const KEY = readdirSync("public")
  .find((name) => /^[0-9a-f]{32}\.txt$/.test(name))
  ?.replace(/\.txt$/, "");

if (!KEY) {
  console.error("No IndexNow key found in public/ — expected a <32-hex>.txt file.");
  process.exit(1);
}

const sitemap = readFileSync("out/sitemap.xml", "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (!urlList.length) {
  console.error("No URLs in out/sitemap.xml — build first.");
  process.exit(1);
}

const host = new URL(urlList[0]).host;
const body = {
  host,
  key: KEY,
  keyLocation: `https://${host}/${KEY}.txt`,
  urlList,
};

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

// 200 accepted, 202 accepted but key still being validated. Both are fine.
const text = await response.text();
console.log(`IndexNow ${response.status} ${response.statusText} — ${urlList.length} URLs`);
if (text.trim()) console.log(text.trim());
if (response.status >= 400) process.exit(1);
