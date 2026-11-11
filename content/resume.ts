import type { ResumeRole } from "./types";

/**
 * Taken from the LinkedIn profile, with the highlights written from what you
 * described. Everything here stays at a level you are free to share.
 */
export const roles: ResumeRole[] = [
  {
    company: "CoinFello",
    title: "Front-end Developer & Design System Owner",
    period: "Aug 2025 — Oct 2026",
    location: "Remote — United States",
    summary:
      "Owned the design system end to end: designed it and implemented it in code, on a team distributed across the US and Europe. Continued directly from HyperPlay — the same group, starting again on a new product.",
    highlights: [
      "Built the design system — token architecture, component library and the conventions that keep an interface coherent across contributors. 55 components, ready for dev.",
      "Implemented the system myself in typed React and SCSS, rather than specifying it for someone else to interpret.",
      "Turned the design system into context an AI agent could build from — a rulebook committed to the repository, and components read straight from Figma through the MCP rather than guessed from a screenshot. Around 70–85% of a generated component matched the system first pass; I reviewed every one as I would a junior's pull request.",
    ],
    stack: ["TypeScript", "React", "SCSS", "Design tokens"],
  },
  {
    company: "HyperPlay",
    title: "Front-end Developer",
    period: "Nov 2024 — Jul 2025",
    location: "Remote — Texas, United States",
    summary:
      "Moved from the design team into engineering on the same product, working on the HyperPlay Game Launcher interface with the engineering team.",
    highlights: [
      "Worked in TypeScript and React on the interface I had previously helped design — written by hand, with no AI assistance.",
      "Carried design-system knowledge across the design/engineering boundary, which is where most systems quietly break.",
    ],
    stack: ["TypeScript", "React", "Design tokens"],
  },
  {
    company: "HyperPlay",
    title: "Product Designer",
    period: "Sep 2022 — Nov 2024",
    location: "Remote — Texas, United States",
    summary:
      "Product design for a web3 game launcher inside a design team, with responsibility for the design system.",
    highlights: [
      "Ran user research and interviews, and turned the findings into flows and interactive prototypes the team could argue with before anything was built.",
      "Responsible for the design system within the design team — token architecture, library and documented states — and built components for it, keeping it usable by the engineers consuming it.",
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
      "Validation research, design and front-end on an open-source game launcher with 500,000+ monthly users across Linux, Windows, macOS and Steam Deck. Everything here is public.",
    highlights: [
      "Led the validation research in 2020 — desk research plus interviews with Linux users — which established that the product was worth building. It now has 500,000+ monthly users.",
      "Introduced surface-aware colour tokens and a semantic type scale that keep text legible across all 15 bundled themes.",
      "Built an atomic Modal component and restyled every modal in the app on top of it — 1,189 lines added, 1,248 deleted across 58 files.",
      "Rebuilt the game page and settings on shared layout primitives (Panel, SettingsCard, SettingRow, Alert, Tabs, SpecCard) across 266 files.",
      "Shipped the library redesign, the modal system, the Wine Manager, the downloads page, accessibility on the settings cards, and the game page and settings rebuild — each audited against the token system, designed in Figma on existing tokens, implemented in TypeScript and SCSS, and defended in public review.",
    ],
    stack: ["TypeScript", "React", "SCSS", "Electron", "Figma"],
  },
  {
    company: "Remote Work & HeavyMuscle",
    title: "Product Designer & Front-end Developer",
    period: "2025 — present",
    location: "Independent — Google Play",
    summary:
      "Two Android apps on Google Play, both live. Designer and front-end on each since before either existed, including the store graphics, and part of deciding what gets built.",
    highlights: [
      "Remote Work — remote jobs from five boards in one list, with an application tracker and a CV builder inside the app. Past 100,000 installs, eight languages.",
      "HeavyMuscle — a gym app with an AI coach that writes the plan, 873 animated exercises, and an offline-first logging screen designed to be used standing up with no signal.",
      "Designed every screen in Figma first and built the component layer underneath, produced the graphic material for both store listings, and iterate on the product with the team — which features ship and what they do."
    ],
    stack: ["Figma", "TypeScript", "React Native"],
  },
  {
    company: "Starbreeze Entertainment",
    title: "UI/UX Designer",
    period: "Oct 2021 — Nov 2022",
    location: "Stockholm, Sweden",
    summary:
      "Quality-of-life UI/UX on Payday 2, a live AAA title in active development — designed and implemented.",
    highlights: [
      "Proposed an accessibility improvement for players with motion sickness — a fixed centre-screen reference point — identified from my own experience rather than from a brief.",
      "Tested the game as a player to find real friction, and designed quality-of-life and menu improvements against a player base with a decade of habits.",
      "Made the game's 2D assets — icons and in-game items — primarily in Photoshop and Illustrator, consistent with a visual language that predated me by eight years.",
      "Brought the assets into the build myself through the studio's in-house engine, rather than handing them over for someone else to integrate.",
    ],
    stack: ["Photoshop", "Illustrator", "Figma", "In-house game engine"],
  },
  {
    company: "Freelance",
    title: "User Interface Designer",
    period: "Feb 2016 — Nov 2018",
    location: "Alagoas, Brazil",
    summary:
      "Design and build for direct clients — websites, brand marks and image work, end to end.",
    highlights: [
      "Built client websites on WordPress and Joomla, from design through to the live site.",
      "Designed logos and brand marks for small businesses.",
      "Photo retouching and image preparation in Photoshop.",
      "No hand-off to anybody: whatever I designed, I was also the one who shipped it. That habit started here.",
    ],
    stack: ["WordPress", "Joomla", "HTML & CSS", "Adobe CC"],
  },
];

/**
 * Pre-2016 work, one line each. A résumé page earns its keep on the last
 * decade — this is here so the origin story is visible without competing
 * with the roles that matter.
 */
export const earlier = [
  {
    period: "2012 — 2014",
    company: "Career break",
    title: "Full-time parenting",
    note: "Maceió, Brazil. Started law school in the same stretch.",
  },
  {
    period: "2011 — 2012",
    company: "COLET Sistemas de Gestão Empresarial",
    title: "Graphic Designer",
    note: "Company logo, website, direct mail, social channels, Google Ads and Analytics.",
  },
  {
    period: "2010",
    company: "Instituto Federal de Alagoas",
    title: "Graphic Designer",
    note: "Banners, logos and the institute's website.",
  },
  {
    period: "2010",
    company: "O Consolador (NGO)",
    title: "Web Designer",
    note: "Redesigned the website and blog, in HTML and CSS.",
  },
  {
    period: "2009 — 2010",
    company: "Espaço Fotográfico",
    title: "Photo Retoucher",
    note: "Where the pixel-level attention came from.",
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
  {
    title:
      "Bachelor of Laws (LL.B.) — passed the Brazilian bar exam (OAB) in my final year. Licence active; focus on digital law, data protection, AI and blockchain",
    institution: "Brazil",
    period: "2018",
    note: "Internships: small claims courts, Regional Labour Court of Alagoas, Alagoas Public Prosecutor's Office",
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
