/**
 * Generates responsive WebP variants beside every source image in public/.
 *
 * Static export turns off Next's image optimiser, so the work it used to do
 * at request time happens here instead: each image gets a size ladder in
 * WebP, and the component picks from it with srcset. The original JPEG stays
 * as the fallback src.
 */
import { readdir, stat, writeFile } from "node:fs/promises";
import { join, extname, dirname, basename } from "node:path";
import sharp from "sharp";

const WIDTHS = [640, 1024, 1600, 2400];
const ROOT = "public";
const SKIP = /\/(icon|apple-icon|opengraph-image)\.png$/;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

let made = 0;
let bytes = 0;
/** src path -> widths available, consumed by the image component. */
const manifest = {};

for await (const file of walk(ROOT)) {
  const ext = extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;
  if (SKIP.test(file)) continue;

  const meta = await sharp(file).metadata();
  const base = join(dirname(file), basename(file, ext));
  const widths = new Set(WIDTHS.filter((w) => w <= meta.width));
  widths.add(meta.width); // keep one at native size for the largest screens

  for (const w of [...widths].sort((a, b) => a - b)) {
    const out = `${base}-${w}.webp`;
    await sharp(file)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(out);
    bytes += (await stat(out)).size;
    made++;
  }
  const url = "/" + file.replace(/^public\//, "");
  manifest[url] = {
    widths: [...widths].sort((a, b) => a - b),
    width: meta.width,
    height: meta.height,
  };
  console.log(`${file.padEnd(46)} ${meta.width}px → ${[...widths].length} variants`);
}

await writeFile(
  "content/image-manifest.json",
  JSON.stringify(manifest, null, 2) + "\n"
);

console.log(`\n${made} variants, ${(bytes / 1024 / 1024).toFixed(1)} MB`);
