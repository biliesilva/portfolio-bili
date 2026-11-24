/**
 * Single source of truth for everything personal.
 * Facts here come from the LinkedIn profile — keep the two in sync.
 */
export const site = {
  name: "Biliane Silva",
  initials: "BS",
  role: "Product Designer & Front-end Developer",
  /**
   * Shown above the hero headline. Kept separate from `role`, which carries the
   * page title and the schema jobTitle — those need the plain job names people
   * actually search for, not a positioning line.
   */
  positioning: "Product Designer · Design Systems · AI-native workflow",
  tagline: "I design products and ship the code.",
  location: "Maceió, Brazil",
  timezone: "America/Maceio",
  /** Maceió is UTC-3 — 1 to 2 hours ahead of US Eastern, so the workday overlaps almost entirely. */
  usOverlap: "UTC-3, a full workday with US teams",
  experience:
    "six years in product design, and more than ten including UI and graphic design",
  email: "bilianemoreira@gmail.com",
  url: "https://bilianesilva.com",

  availability: {
    open: true,
    label: "Available full-time with US teams, as an employee or contractor",
    detail:
      "I am looking for full-time work with US companies, as an employee or as a contractor. Since 2022 I have worked remotely with US teams as a full-time contractor, from Sweden and later Portugal, and now from Brazil.",
  },

  languages: [
    { name: "English", level: "Full professional" },
    { name: "Portuguese", level: "Native" },
    { name: "Spanish", level: "Intermediate" },
  ],

  /** Answers a US hiring manager's unasked questions before they ask them. */
  remote: [
    { label: "Engagement", value: "Full-time, as an employee or as a contractor. As a contractor, I invoice as a business entity from Brazil." },
    { label: "Overlap", value: "UTC-3, a full shared workday with US Eastern" },
    {
      label: "Track record",
      value:
        "Full-time remote contractor for US companies since 2022, with teams mostly in the US and a few people in Europe. Employee on site in Sweden before that",
    },
    {
      label: "Also",
      value:
        "Qualified lawyer, specialising in digital law: data protection, AI and blockchain",
    },
    { label: "Hand-off", value: "Figma to production React, by the same person" },
  ],

  capabilities: [
    {
      title: "Product Design",
      body: "Research, interviews, flows and prototypes, framing the problem before the pixels, and staying with the product after it ships.",
      items: ["User research & interviews", "Discovery & framing", "User flows", "Prototyping", "Game & launcher UI"],
    },
    {
      title: "Design Systems",
      body: "Tokens, components, documented states and the rules that let other people build on them. I built one at CoinFello, was responsible for one at HyperPlay, and lead the one in Heroic.",
      items: ["Design tokens", "Component libraries", "Figma architecture", "Documentation", "WCAG 2.2 AA"],
    },
    {
      title: "Front-end Engineering",
      body: "I build what I design, in React and TypeScript. I wrote production front-end by hand before AI tools were in my workflow, which is why I can review what they produce.",
      items: [
        "React & TypeScript",
        "Next.js",
        "SCSS",
        "Tailwind CSS",
        "AI-assisted, human-reviewed",
        "Figma MCP",
      ],
    },
  ],

  /** Verifiable numbers only — these are the first thing a recruiter scans. */
  proof: [
    {
      value: "6 years",
      label: "In product design",
      note: "More than 10 including UI and graphic design",
    },
    {
      value: "500k+",
      label: "People using what I design",
      note: "Heroic Games Launcher, which I validated in 2020 and have designed from the start",
    },
    {
      value: "3",
      label: "Design systems",
      note: "Built at CoinFello, responsible for at HyperPlay, leading the one in Heroic",
    },
    {
      value: "100k+",
      label: "Installs on the Remote Work listing",
      note: "Includes the app replaced by the 2025 rebuild I design and code",
    },
  ],

  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bilianesilva/" },
    { label: "GitHub", href: "https://github.com/biliesilva" },
    { label: "Behance", href: "https://www.behance.net/bilianemoreira" },
    { label: "X", href: "https://x.com/bili_mds" },
    { label: "Email", href: "mailto:bilianemoreira@gmail.com" },
  ],

  nav: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "CV", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type Site = typeof site;
