# Biliane Silva — Portfolio

Product designer & front-end developer portfolio. Next.js 16 (App Router, Cache
Components), React 19, Tailwind CSS v4, Motion, GSAP ScrollTrigger and Lenis.

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm build   # production build — every route prerenders
pnpm lint
```

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

1. **`content/resume.ts`** — your real roles, dates and bullets from LinkedIn.
2. **`content/site.ts`** — your city, the live domain, the scheduling link.
3. **Images** — drop screenshots in `public/work/<slug>/` and fill the `src`
   fields. Until then every image renders as a labelled placeholder frame whose
   caption doubles as a shot list.
4. **`public/biliane-silva-resume.pdf`** — the downloadable résumé.
5. **Case-study metrics** — the three case studies seeded as drafts
   (`tradebook`, `juriswed`, `antagning`) need real numbers in `outcome.metrics`.

## Notes on the build

- **Accessibility**: reduced motion is handled once, at the root, by
  `<MotionConfig reducedMotion="user">` plus a CSS fallback — no component
  branches its markup on it, so there are no hydration mismatches.
- **Smooth scroll**: Lenis runs on the GSAP ticker so ScrollTrigger and Lenis
  read the same frame, and is switched off entirely under reduced motion.
- **Images**: `MediaFrame` renders a placeholder instead of a broken image when
  `src` is empty.
- **SEO**: per-page metadata, Person JSON-LD, generated sitemap and OG image.
