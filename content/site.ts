/**
 * Single source of truth for everything personal.
 * Facts here come from the LinkedIn profile — keep the two in sync.
 */
export const site = {
  name: "Biliane Silva",
  initials: "BS",
  role: "Product Designer & Front-end Developer",
  tagline: "I design products and ship the code.",
  location: "Maceió, Brazil",
  timezone: "America/Maceio",
  /** Maceió is UTC-3 — 1 to 2 hours ahead of US Eastern, so the workday overlaps almost entirely. */
  usOverlap: "UTC-3 — a full workday with US teams",
  yearsOfExperience: "10+",
  email: "bilianemoreira@gmail.com",
  url: "https://bilianesilva.com",

  availability: {
    open: true,
    label: "Available for full-time & contract with US teams",
    detail:
      "I am looking for full-time roles or contractor engagements with US companies. Since 2022 I have worked remotely with US teams whose members sit across the US, Europe and Latin America — the time zones are a problem I have already solved.",
  },

  languages: [
    { name: "English", level: "Full professional" },
    { name: "Portuguese", level: "Native" },
    { name: "Spanish", level: "Professional working" },
  ],

  /** Answers a US hiring manager's unasked questions before they ask them. */
  remote: [
    { label: "Engagement", value: "Full-time · Contractor · PJ/B2B invoicing" },
    { label: "Overlap", value: "UTC-3 — a full shared workday with US Eastern" },
    {
      label: "Track record",
      value:
        "Remote since 2022 with teams spread across the US (Texas, California, San Juan), Europe and Latin America",
    },
    { label: "Languages", value: "English · Portuguese · Spanish" },
    {
      label: "Also",
      value:
        "Qualified lawyer, specialising in digital law — data protection, AI and blockchain",
    },
    { label: "Hand-off", value: "Figma to production React — no translation layer" },
  ],

  capabilities: [
    {
      title: "Product Design",
      body: "Framing the problem before the pixels: user research and interviews, flows, prototypes, and four years of living with the same product rather than handing it off.",
      items: ["User research & interviews", "Discovery & framing", "User flows", "Prototyping", "Game & launcher UI"],
    },
    {
      title: "Design Systems",
      body: "Responsible for the design system at two companies. At CoinFello I built it and implemented it in code myself. Tokens, components, documented states, kept usable by the engineers consuming it.",
      items: ["Design tokens", "Component libraries", "Figma architecture", "Documentation", "WCAG 2.2 AA"],
    },
    {
      title: "Front-end Engineering",
      body: "I build what I design. Typed React, design systems implemented from inside engineering, and animation that respects reduced-motion. I wrote production front-end by hand for a year before I used AI for any of it — I work well either way, and I review what the assistant writes because I know what the work costs without it.",
      items: [
        "React & TypeScript",
        "Next.js",
        "Tailwind CSS",
        "SCSS",
        "Hand-written, no AI",
        "AI-assisted when it earns it",
      ],
    },
  ],

  /** Verifiable numbers only — these are the first thing a recruiter scans. */
  proof: [
    {
      value: "2010",
      label: "Designing since",
      note: "Graphic, then product and front-end",
    },
    {
      value: "500k+",
      label: "People using what I design",
      note: "Heroic Games Launcher, the open-source app I design and build for",
    },
    {
      value: "2",
      label: "Design systems owned and implemented",
      note: "At HyperPlay and CoinFello",
    },
    {
      value: "3",
      label: "Languages I work in",
      note: "English, Portuguese, Spanish",
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
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type Site = typeof site;
