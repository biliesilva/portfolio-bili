import type { ResumeRole } from "./types";

/**
 * Taken from the LinkedIn profile, with the highlights written from what you
 * described. Everything here stays at a level you are free to share.
 */
export const roles: ResumeRole[] = [
  {
    company: "CoinFello",
    title: "Front-end Developer",
    period: "Aug 2025 — Oct 2026",
    location: "Remote — United States",
    summary:
      "Built the design system from scratch and implemented it in code, on a distributed US team.",
    highlights: [
      "Created the entire design system from zero — token architecture, component library and the conventions that keep an interface coherent across contributors.",
      "Implemented the system myself in typed React and Tailwind CSS, rather than specifying it for someone else to interpret.",
      "Adopted AI tooling into the daily workflow after the system was established, reviewing everything it produced as I would a junior's pull request.",
    ],
    stack: ["TypeScript", "React", "Tailwind CSS", "Design tokens"],
  },
  {
    company: "HyperPlay",
    title: "Front-end Developer",
    period: "Nov 2024 — Apr 2026",
    location: "Remote — Texas, United States",
    summary:
      "Moved from the design team into engineering on the same product, refining the HyperPlay Game Launcher interface.",
    highlights: [
      "Implemented in TypeScript and React the interface I had previously designed — written by hand, with no AI assistance.",
      "Carried design-system ownership across the design/engineering boundary, which is where most systems quietly break.",
    ],
    stack: ["TypeScript", "React", "Design tokens"],
  },
  {
    company: "HyperPlay",
    title: "Product Designer",
    period: "Sep 2022 — Jan 2025",
    location: "Remote — Texas, United States",
    summary:
      "Product design for a web3 game launcher inside a design team, with responsibility for the design system.",
    highlights: [
      "Ran user research and interviews, and turned the findings into flows and interactive prototypes the team could argue with before anything was built.",
      "Built components and was responsible for the design system — token architecture, library and documented states — keeping it usable by the engineers consuming it.",
      "Also ran content and player support for over a year, troubleshooting with players and game developers, which fed straight back into the design.",
    ],
    stack: ["Figma", "Design tokens", "Prototyping"],
  },
  {
    company: "Heroic Games Launcher",
    title: "UX/UI Design Contributor → Front-end Contributor",
    period: "Dec 2020 — present",
    location: "Open source — remote",
    summary:
      "Design and front-end contributions to an open-source game launcher with 12,500+ GitHub stars. Everything here is public.",
    highlights: [
      "Introduced surface-aware colour tokens and a semantic type scale that keep text legible across all 15 bundled themes.",
      "Built an atomic Modal and Button system and migrated every modal in the app to it — 1,250 lines added, 1,127 deleted across 60 files.",
      "Rebuilt the game page and settings on shared layout primitives (Panel, SettingsCard, SettingRow, Alert, Tabs, SpecCard) across 266 files.",
      "Contributed ~14,000 lines of TypeScript and SCSS across four public pull requests, each defended in open review.",
    ],
    stack: ["TypeScript", "React", "SCSS", "Electron", "Figma"],
  },
  {
    company: "Starbreeze Entertainment",
    title: "UI/UX Designer",
    period: "Oct 2021 — Nov 2022",
    location: "Stockholm, Sweden",
    summary: "Game interface design for Payday 2, a shipped and actively developed AAA title.",
    highlights: [
      "UI/UX design within an established visual language and a long-standing player base.",
      "TODO (Bili): one or two specifics you are free to share about your scope.",
    ],
    stack: ["Figma", "Adobe CC"],
  },
  {
    company: "Freelance",
    title: "User Interface Designer",
    period: "Feb 2016 — Nov 2018",
    location: "Alagoas, Brazil",
    summary: "Interface design for direct clients.",
    highlights: ["TODO (Bili): name a client or a type of product, if you can."],
  },
  {
    company: "COLET Sistemas de Gestão Empresarial",
    title: "Graphic Designer",
    period: "Sep 2011 — Dec 2012",
    location: "Novo Hamburgo, Brazil",
    summary:
      "Brand and web work: company logo, website, campaign materials and analytics.",
    highlights: [
      "Designed the company's new logo and built its website.",
      "Ran social channels, Google Ads campaigns and Analytics reporting.",
    ],
  },
];

export const education = [
  {
    title: "Postgraduate Degree — Information Technology",
    institution: "Rocketseat",
    period: "2025 — 2026",
  },
  {
    title: "UX Design Upskill",
    institution: "Hyper Island",
    period: "2023 — 2024",
  },
  {
    title: "Product Design Immersion",
    institution: "Aela",
    period: "2023 — 2024",
  },
  {
    title: "Upskill — Business Development, Digitalization & Sustainability",
    institution: "Hyper Island",
    period: "2022 — 2023",
  },
  {
    title: "UX and Product Design",
    institution: "Berghs School of Communication",
    period: "2022",
  },
];

export const certifications = [
  "UX Design",
  "Web Design",
  "Visual Elements of User Interface Design",
  "JavaScript Algorithms and Data Structures (300h)",
  "4º React Conference Brasil",
];

export const skills = [
  {
    group: "Product & UX",
    items: [
      "Discovery & problem framing",
      "User flows & information architecture",
      "Prototyping",
      "Game & launcher UI",
      "Usability testing",
      "Design critique & facilitation",
    ],
  },
  {
    group: "UI & Systems",
    items: [
      "Design tokens",
      "Component libraries",
      "Figma architecture & variables",
      "Documentation",
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
      "Electron",
      "Docker & databases",
      "AI-assisted workflow",
    ],
  },
];
