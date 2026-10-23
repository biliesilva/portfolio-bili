/**
 * Single source of truth for everything personal.
 * Fields marked TODO are placeholders — replace them with the real values
 * (most of them live on your LinkedIn profile).
 */
export const site = {
  name: "Biliane Silva",
  initials: "BS",
  role: "Product Designer & Front-end Developer",
  // Used in <title>, OG tags and the résumé header.
  tagline: "Product designer who ships the front-end.",
  // TODO: add your city — country comes from your GitHub profile.
  location: "Brazil",
  timezone: "America/Sao_Paulo",
  /** Brazil (UTC-3) sits 1-2h ahead of US Eastern — effectively a full shared workday. */
  usOverlap: "Full overlap with US business hours",
  yearsOfExperience: "7+",
  email: "bilianemoreira@gmail.com",
  // TODO: add once the domain is live.
  url: "https://bilianesilva.com",

  availability: {
    open: true,
    label: "Available for full-time & contract",
    detail:
      "Open to full-time roles and contractor engagements with US and European teams.",
  },

  languages: [
    { name: "English", level: "Fluent — professional" },
    { name: "Portuguese", level: "Native" },
    { name: "Spanish", level: "Conversational" },
  ],

  /** Shown as the "how I work with distributed teams" block on the homepage. */
  remote: [
    { label: "Engagement", value: "Full-time · Contractor · PJ/B2B invoicing" },
    { label: "Overlap", value: "UTC-3 — a full shared workday with US Eastern" },
    { label: "Languages", value: "English · Portuguese · Spanish" },
    { label: "Hand-off", value: "Figma to production React — no translation layer" },
    { label: "Open source", value: "Contributor to Heroic Games Launcher (12.5k★)" },
  ],

  capabilities: [
    {
      title: "Product Design",
      body: "Framing the problem before the pixels: discovery, user flows, prototypes, validation, and the trade-off conversations that come with shipping.",
      items: ["Discovery & framing", "User flows", "Prototyping", "Usability testing", "Metrics & iteration"],
    },
    {
      title: "UI & Design Systems",
      body: "Interfaces that hold up at scale — token architecture, component libraries, documented states, and accessibility treated as a requirement.",
      items: ["Interface design", "Design tokens", "Component libraries", "WCAG 2.2 AA", "Figma architecture"],
    },
    {
      title: "Front-end Engineering",
      body: "I build what I design. Typed React, server components, animation that respects reduced-motion, and performance budgets that stick.",
      items: ["React & Next.js", "TypeScript", "Tailwind CSS", "GSAP & Motion", "Core Web Vitals"],
    },
  ],

  /** Verifiable numbers only — these are the first thing a recruiter scans. */
  proof: [
    { value: "7+", label: "Years designing products" },
    { value: "12.5k★", label: "Open-source app I redesign & ship" },
    { value: "14k+", label: "Lines of UI code contributed" },
    { value: "3", label: "Languages spoken" },
  ],

  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bilianesilva/" },
    { label: "Behance", href: "https://www.behance.net/bilianemoreira" },
    { label: "X", href: "https://x.com/biliane_silva" },
    { label: "GitHub", href: "https://github.com/biliesilva" },
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
