/**
 * Serves out/ the way Firebase Hosting does — cleanUrls, no trailing slash,
 * 404.html fallback — so the export can be checked before deploying.
 *
 *   pnpm build && pnpm preview
 */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const ROOT = "out";
const TYPES = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript",
  ".json": "application/json", ".webp": "image/webp", ".jpg": "image/jpeg",
  ".png": "image/png", ".svg": "image/svg+xml", ".woff2": "font/woff2",
  ".pdf": "application/pdf", ".txt": "text/plain", ".xml": "application/xml", ".ico": "image/x-icon" };

const exists = async (p) => { try { return (await stat(p)).isFile(); } catch { return false; } };

createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (p.endsWith("/") && p !== "/") p = p.slice(0, -1);       // trailingSlash: false
  const candidates = p === "/" ? ["index.html"] : [p.slice(1), p.slice(1) + ".html", join(p.slice(1), "index.html")];
  for (const c of candidates) {
    const f = join(ROOT, c);
    if (await exists(f)) {
      const body = await readFile(f);
      res.writeHead(200, {
        "content-type": TYPES[extname(f)] ?? "application/octet-stream",
        "content-length": body.length,
      });
      // HEAD must not carry a body, or the client aborts the request.
      return res.end(req.method === "HEAD" ? undefined : body);
    }
  }
  const nf = await readFile(join(ROOT, "404.html")).catch(() => Buffer.from("404"));
  res.writeHead(404, { "content-type": "text/html", "content-length": nf.length });
  res.end(req.method === "HEAD" ? undefined : nf);
}).listen(4600, () => console.log("firebase-like em :4600"));
