import type { ResumeRole } from "./types";

/**
 * Taken from the LinkedIn profile. The highlights are where a CV earns its keep —
 * TODO (Bili): replace the bracketed prompts with what you actually did, keeping
 * it at a level you are free to share.
 */
export const roles: ResumeRole[] = [
  {
    company: "CoinFello",
    title: "Front-end Developer",
    period: "Aug 2025 — Oct 2026",
    location: "Remote — United States",
    summary:
      "Front-end development on a distributed US team, with ownership of the design system.",
    highlights: [
      "Owned the design system from inside engineering — tokens, component library and the conventions that keep an interface coherent across contributors.",
      "Built product interface in typed React and Tailwind CSS.",
      "Introduced AI tooling into my daily workflow deliberately, reviewing everything it produced and keeping the design judgement human.",
      "TODO (Bili): one concrete, non-confidential thing you shipped or improved.",
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
      "Implemented the interface I had previously designed, in TypeScript and React.",
      "Carried design-system ownership across the design/engineering boundary.",
      "TODO (Bili): one thing you shipped that you are free to describe.",
    ],
    stack: ["TypeScript", "React", "Design tokens"],
  },
  {
    company: "HyperPlay",
    title: "Product Designer",
    period: "Sep 2022 — Jan 2025",
    location: "Remote — Texas, United States",
    summary:
      "Product design for a web3 game launcher, with ownership of the design system.",
    highlights: [
      "Owned the design system: token architecture, component library and documented states.",
      "Designed launcher flows and interface alongside product and engineering.",
      "Also ran content and player support for over a year — testing games and troubleshooting with players and game developers, which fed directly back into the design.",
      "TODO (Bili): one outcome you can describe without internal numbers.",
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
