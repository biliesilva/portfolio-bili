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
    label: "Available for full-time & contract",
    detail:
      "Open to full-time roles and contractor engagements with US and European teams. I have worked remotely for US companies since 2022.",
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
    { label: "Track record", value: "Remote with US teams since 2022 (Texas, US)" },
    { label: "Languages", value: "English · Portuguese · Spanish" },
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
      body: "Responsible for the design system at two companies — and at CoinFello I built it from scratch and implemented it in code myself. Tokens, components, documented states, kept usable by the engineers consuming it.",
      items: ["Design tokens", "Component libraries", "Figma architecture", "Documentation", "WCAG 2.2 AA"],
    },
    {
      title: "Front-end Engineering",
      body: "I build what I design. Typed React, design systems implemented from inside engineering, animation that respects reduced-motion, and AI in the workflow where it earns its place.",
      items: ["React & TypeScript", "Next.js", "Tailwind CSS", "SCSS", "AI-assisted workflow"],
    },
  ],

  /** Verifiable numbers only — these are the first thing a recruiter scans. */
  proof: [
    { value: "2010", label: "Designing since" },
    { value: "1", label: "Design system built from scratch" },
    { value: "12.5k★", label: "Open-source app I design & ship for" },
    { value: "3", label: "Languages spoken" },
  ],

  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bilianesilva/" },
    { label: "GitHub", href: "https://github.com/biliesilva" },
    { label: "Behance", href: "https://www.behance.net/bilianemoreira" },
    { label: "X", href: "https://x.com/biliane_silva" },
    { label: "Email", href: "mailto:bilianemoreira@gmail.com" },
  ],

  /** TODO: swap for a real scheduling link (Cal.com / Google Calendar appointments). */
  calendar: "https://cal.com/",

  nav: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Playground", href: "/playground" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type Site = typeof site;
