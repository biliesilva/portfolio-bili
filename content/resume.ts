import type { ResumeRole } from "./types";

/**
 * Taken from the LinkedIn profile, with the highlights written from what you
 * described. Everything here stays at a level you are free to share.
 */
export const roles: ResumeRole[] = [
  {
    company: "CoinFello",
    title: "Front-end Developer & Design System Owner",
    period: "Aug 2025 to Oct 2026",
    location: "Full-time contractor, remote, United States",
    summary:
      "Owned the design system end to end: designed it and implemented it in code, on a team mostly in the US, with a few people in Europe. Continued directly from HyperPlay, with the same group on a new product.",
    highlights: [
      "Built the design system: token architecture, a library of 55 components, and the conventions that keep the interface coherent across contributors.",
      "Coded a good part of the first atomic components myself in typed React and SCSS. The team only started testing AI for this after about three months.",
      "Turned the design system into context an AI agent could build from: a rulebook committed to the repository, and components read straight from Figma through the MCP rather than guessed from a screenshot. By my estimate, 70 to 85% of a generated component matched the system on the first pass. Other developers did not need to create components or correct them.",
    ],
    stack: ["TypeScript", "React", "SCSS", "Design tokens"],
  },
  {
    company: "HyperPlay",
    title: "Front-end Developer",
    period: "Nov 2024 to Jul 2025",
    location: "Full-time contractor, remote, Texas, United States",
    summary:
      "Moved from the design team into engineering on the same product, working on the HyperPlay Game Launcher interface with the engineering team.",
    highlights: [
      "Worked in TypeScript and React on the interface I had previously helped design, including part of the design system, written by hand.",
      "Carried design-system knowledge across the design/engineering boundary, which is where most systems quietly break.",
    ],
    stack: ["TypeScript", "React", "Design tokens"],
  },
  {
    company: "HyperPlay",
    title: "Product Designer",
    period: "Sep 2022 to Nov 2024",
    location: "Full-time contractor, remote, Texas, United States",
    summary:
      "One of the first designers on a web3 game launcher, there from the start, then part of its design team with responsibility for the design system.",
    highlights: [
      "Ran user research and interviews, and turned the findings into flows and interactive prototypes the team could argue with before anything was built.",
      "Interviews with game developers led the team to redesign the entire store, with more description and information per game, so players could trust it and come to play.",
      "Responsible for the design system within the design team (token architecture, library and documented states), and built components for it, keeping it usable by the engineers consuming it.",
      "Also ran content and player support for over a year, troubleshooting with players and game developers, which fed straight back into the design and gave me a view of the whole product.",
    ],
    stack: ["Figma", "Design tokens", "Prototyping"],
  },
  {
    company: "Heroic Games Launcher",
    title: "UX/UI Design Contributor → Front-end Contributor",
    period: "Dec 2020 to present",
    location: "Open-source contributor, remote",
    summary:
      "Validation research, design and front-end on an open-source game launcher with 500,000+ monthly users across Linux, Windows, macOS and Steam Deck. The pull requests and their reviews are public.",
    highlights: [
      "Led the validation research in 2020, with desk research and interviews with Linux users, which established that the product was worth building. It now has 500,000+ monthly users.",
      "Did all of the visual design at the start of the project: brand identity, screens and UI components.",
      "Led the redesign that brought the interface back to one language, after years of unmanaged UI contributions, with Storybook and a written design system for contributors.",
      "Review and approve UI pull requests from other contributors, which keeps the interface coherent.",
      "Introduced surface-aware colour tokens and a semantic type scale that keep text at WCAG AA contrast across all 17 bundled themes, tested on every pull request.",
      "Built an atomic Modal component and restyled every modal in the app on top of it, across 58 files.",
      "Rebuilt the game page and settings on shared layout primitives (Panel, SettingsCard, SettingRow, Alert, Tabs, SpecCard) across 255 files.",
      "Shipped the library redesign, the modal system, the Wine Manager, the downloads page, accessibility on the settings cards, and the game page and settings rebuild, followed by Storybook, refreshed themes and a single Stores page.",
    ],
    stack: ["TypeScript", "React", "SCSS", "Electron", "Figma"],
  },
  {
    company: "Remote Work & HeavyMuscle",
    title: "Product Designer & Front-end Developer",
    period: "2025 to present",
    location: "Independent, Google Play",
    summary:
      "Two Android apps on Google Play, both live. Designer and front-end of HeavyMuscle from its first screen and of the 2025 rebuild of Remote Work, including the store graphics, and part of deciding what gets built.",
    highlights: [
      "Remote Work: remote jobs from five boards in one list, with an application tracker and a CV builder inside the app. Rebuilt from scratch in 2025, nine languages. The listing has passed 100,000 installs, counting the app it replaced.",
      "HeavyMuscle: a gym app with an AI coach that writes the plan, 873 animated exercises, and an offline-first logging screen designed to be used standing up with no signal.",
      "Designed every screen in Figma first and built the component layer underneath, produced the graphic material for both store listings, and iterate on the product with the team."
    ],
    stack: ["Figma", "TypeScript", "React Native"],
  },
  {
    company: "Starbreeze Entertainment",
    title: "UI/UX Designer",
    period: "Oct 2021 to Nov 2022",
    location: "Employee, on site, Stockholm, Sweden",
    summary:
      "Quality-of-life UI/UX on Payday 2, a live AAA title in active development.",
    highlights: [
      "Suggested the motion dot, for players with motion sickness, and the down counter, after reading most of the comments and requests players made. Worked with the developers to implement both, shipped in Payday 2 Update 217 (January 2022).",
      "Tested the game as a player to find real friction, and designed quality-of-life and menu improvements against a player base with a decade of habits.",
      "Made the game's 2D assets (icons and illustrations of items), primarily in Photoshop and Illustrator, consistent with a visual language that predated me by eight years.",
      "Brought the assets into the build myself through the studio's in-house engine, rather than handing them over for someone else to integrate.",
    ],
    stack: ["Photoshop", "Illustrator", "Figma", "In-house game engine"],
  },
  {
    company: "Freelance",
    title: "User Interface Designer",
    period: "Feb 2016 to Nov 2018",
    location: "Alagoas, Brazil",
    summary:
      "Design and build for direct clients: websites, brand marks and image work, end to end.",
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
    period: "2012 to 2014",
    company: "Career break",
    title: "Full-time parenting",
    note: "Maceió, Brazil. Started law school in the same stretch.",
  },
  {
    period: "2011 to 2012",
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
    period: "2009 to 2010",
    company: "Espaço Fotográfico",
    title: "Photo Retoucher",
    note: "Where the pixel-level attention came from.",
  },
];

export const education = [
  {
    title: "Postgraduate Degree, Information Technology",
    institution: "Rocketseat",
    period: "2025 to 2026",
  },
  {
    title: "UX Design Upskill",
    institution: "Hyper Island",
    period: "2023 to 2024",
  },
  {
    title: "Product Design Immersion",
    institution: "Aela",
    period: "2023 to 2024",
  },
  {
    title: "Upskill, Business Development, Digitalization & Sustainability",
    institution: "Hyper Island",
    period: "2022 to 2023",
  },
  {
    title: "UX and Product Design",
    institution: "Berghs School of Communication",
    period: "2022",
  },
  {
    title:
      "Bachelor of Laws (LL.B.), passed the Brazilian bar exam (OAB) in my final year. Licence active; focus on digital law, data protection, AI and blockchain",
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
