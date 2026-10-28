# Biliane Silva — Portfolio

Product designer & front-end developer portfolio. Next.js 16 (App Router, Cache
Components), React 19, Tailwind CSS v4, Motion, GSAP ScrollTrigger and Lenis.

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm build   # static export into out/
pnpm images  # regenerate the WebP ladder after adding or replacing an image
pnpm lint
```

## Hosting

The site is a static export (`output: "export"`), so `pnpm build` writes plain
HTML, CSS, JS and images into `out/`. Firebase Hosting serves that directory
directly — `firebase.json` sets `cleanUrls`, so `/about` resolves to
`about.html`, and `404.html` is picked up automatically.

```bash
firebase deploy --only hosting
```

### Images

Static export has no image optimiser, so the work happens at build time
instead. `scripts/build-images.mjs` reads every JPEG and PNG in `public/`,
writes a WebP ladder beside it (640 / 1024 / 1600 / 2400 and the native
width), and records what exists in `content/image-manifest.json`.
`ResponsiveImage` reads that manifest and emits a `srcset`, so the browser
still downloads only the size it needs.

**After adding or replacing any image, run `pnpm images` and commit the
variants.** They are checked in so the deploy does not depend on sharp.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Hero, proof numbers, featured work, capabilities, remote-work block, CTA |
| `/work` | Filterable index of every case study |
| `/work/[slug]` | Case study: context → decisions → system → build → outcome → reflection |
| `/about` | Bio, principles, tools, timeline |
| `/playground` | Components and experiments, with links to the real code |
| `/resume` | Résumé, print-ready, plus PDF download |
| `/contact` | Email, calendar, "for hiring teams" block |
| `/404`, `/sitemap.xml`, `/robots.txt`, `/opengraph-image` | Generated automatically |

## Three kinds of entry

Not every piece of work can be told the same way, so `content/types.ts` has a
`kind` field and the page template shows only the sections an entry fills in:

- **`case-study`** — public work, told in full: problem, decisions, outcome.
  Heroic Games Launcher, where every claim is a public pull request.
- **`role`** — employed work under NDA. Scope, ownership and practice; no client
  internals, no invented metrics. Each one opens with a "what I can show" note,
  because saying so is more credible than quietly having nothing to show.
- **`project`** — personal work, free to show.

## Where the content lives

All copy is typed data — no CMS, no MDX to debug. Edit these and the pages follow:

```
content/
  site.ts          profile, availability, languages, capabilities, nav, socials
  about.ts         bio, principles, tools, timeline
  resume.ts        roles, education, skills
  playground.ts    experiments
  work/
    index.ts       registry — add new case studies here
    heroic.ts      one file per case study
    …
  types.ts         the shape every case study has to fill
```

`content/types.ts` is the contract: if a case study is missing a section,
TypeScript says so at build time.

## Still to do

Search the repo for `TODO` — every placeholder is marked. The ones that matter:

1. **`TODO (Bili)` markers** — each one is a sentence only you can write:
   one concrete, non-confidential thing you shipped per role.
2. **Images** — `public/work/<slug>/`, then fill the `src` fields. Until then
   every image renders as a labelled placeholder whose caption is the shot list.
   - **Heroic** is open source: capture anything.
   - **Payday 2** is a shipped, public game. You do not need the source files —
     launch it and screenshot the released build (Steam: F12). Everything in the
     retail build is already public.
   - **HyperPlay and CoinFello** need no images: the role format does not
     promise any.
3. **`public/biliane-silva-resume.pdf`** — the downloadable résumé.
4. **`content/site.ts`** — the scheduling link (`calendar`).
5. **A portrait** at `public/about/portrait.jpg`.

## Notes on the build

- **Accessibility**: reduced motion is handled once, at the root, by
  `<MotionConfig reducedMotion="user">` plus a CSS fallback — no component
  branches its markup on it, so there are no hydration mismatches.
- **Smooth scroll**: Lenis runs on the GSAP ticker so ScrollTrigger and Lenis
  read the same frame, and is switched off entirely under reduced motion.
- **Images**: `MediaFrame` renders a placeholder instead of a broken image when
  `src` is empty.
- **SEO**: per-page metadata, Person JSON-LD, generated sitemap and OG image.
