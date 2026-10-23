import type { ResumeRole } from "./types";

/**
 * TODO: this is the one file you must fill in by hand.
 * Copy the roles, dates and bullets straight from your LinkedIn profile.
 * Keep bullets outcome-first: what changed because you were there.
 */
export const roles: ResumeRole[] = [
  {
    company: "Heroic Games Launcher",
    title: "Open-source contributor — product design & front-end",
    period: "2025 — present",
    location: "Remote",
    summary:
      "Design and ship interface and design-system work for an open-source desktop games launcher with 12,500+ GitHub stars.",
    highlights: [
      "Introduced surface-aware colour tokens and a semantic type scale that keep text legible across all 15 bundled themes.",
      "Built an atomic Modal and Button system and migrated every modal in the app to it — 1,250 lines added, 1,127 deleted across 60 files.",
      "Rebuilt the game page and settings on shared layout primitives (Panel, SettingsCard, SettingRow, Alert, Tabs, SpecCard) across 266 files.",
      "Contributed ~14,000 lines of TypeScript and SCSS across four public pull requests, each defended in open review.",
    ],
    stack: ["TypeScript", "React", "SCSS", "Electron"],
  },
  {
    company: "TODO — Company name",
    title: "TODO — e.g. Senior Product Designer",
    period: "TODO — 20XX — 20XX",
    location: "TODO — Remote / City",
    summary: "TODO — one line on the product, the team and your scope.",
    highlights: [
      "TODO — an outcome with a number in it.",
      "TODO — a design-system or process change you owned.",
      "TODO — something you shipped with engineers, ideally code you wrote.",
    ],
    stack: ["Figma", "React", "TypeScript"],
  },
  {
    company: "TODO — Company name",
    title: "TODO — e.g. UI/UX Designer",
    period: "TODO — 20XX — 20XX",
    location: "TODO — Remote / City",
    summary: "TODO — one line on the product, the team and your scope.",
    highlights: ["TODO", "TODO"],
  },
];

/** TODO: verify titles, institutions and years. */
export const education = [
  {
    title: "Postgraduate — Front-end Development (Dev Start)",
    institution: "Rocketseat",
    period: "2025 — 2026",
  },
  {
    title: "Digital Design Fundamentals",
    institution: "Hyper Island",
    period: "2021",
  },
  {
    title: "TODO — Bachelor's degree",
    institution: "TODO — Institution",
    period: "TODO",
  },
];

export const skills = [
  {
    group: "Product & UX",
    items: [
      "Discovery & problem framing",
      "User flows & information architecture",
      "Prototyping",
      "Usability testing",
      "Heuristic evaluation",
      "Design critique & facilitation",
    ],
  },
  {
    group: "UI & Systems",
    items: [
      "Interface design",
      "Design tokens",
      "Component libraries",
      "Figma architecture & variables",
      "WCAG 2.2 AA",
      "Motion & interaction design",
    ],
  },
  {
    group: "Engineering",
    items: [
      "TypeScript",
      "React & Next.js",
      "Tailwind CSS & SCSS",
      "GSAP & Motion",
      "Git & code review",
      "Core Web Vitals",
    ],
  },
];
