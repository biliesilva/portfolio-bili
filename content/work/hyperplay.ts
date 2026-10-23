import type { WorkEntry } from "../types";

/**
 * NDA-safe by construction: scope, ownership and practice — no internal
 * metrics, no unreleased screens, no proprietary code.
 * TODO (Bili): check the bracketed prompts and replace them with your words.
 */
export const hyperplay: WorkEntry = {
  slug: "hyperplay",
  kind: "role",
  title: "HyperPlay",
  client: "HyperPlay — Texas, United States",
  year: "2022 — 2026",
  summary:
    "Three and a half years on a web3 game launcher: owned the design system as a product designer, then joined the engineering team and shipped the interface myself.",
  disciplines: ["Product Design", "Design Systems", "Front-end", "UI/UX"],
  featured: true,
  order: 2,

  disclosure:
    "Employed work. I can talk about what I owned and how I worked, but not about unreleased designs, internal metrics or proprietary code. Ask me in an interview and I'll walk you through the detail that is mine to share.",

  role: "Product Designer (2022—2025) → Front-end Developer (2024—2026)",
  team: "Design team, then engineering team — fully remote, US hours",
  timeline: "3 years 8 months",
  platforms: ["Desktop game launcher", "Web"],
  stack: ["Figma", "TypeScript", "React", "Design tokens"],

  cover: {
    src: "",
    alt: "HyperPlay — design system and launcher interface work",
    aspect: "16/10",
  },

  context: [
    "HyperPlay is a game launcher for web3 games, built by a distributed US team. I joined the design team in 2022 as a product designer and stayed almost four years, which meant I saw the same decisions come back around — the mark of a product you actually live with rather than hand off.",
    "In late 2024 I moved into the engineering team as a front-end developer on the same product. Same interface, same design system, different side of the hand-off. It is the clearest thing on my CV about how I like to work: I would rather own a decision all the way into the build than specify it and hope.",
  ],

  responsibilities: [
    {
      title: "Owned the design system",
      body: "I was responsible for the design system — token architecture, component library, documented states, and the rules that keep a growing product from drifting. Keeping it usable by engineers was the job, not a side effect of it.",
    },
    {
      title: "Designed the launcher interface",
      body: "Product design on the launcher itself: flows, interface, and the trade-off conversations with engineering and product about what was worth building now.",
    },
    {
      title: "Then shipped it in React",
      body: "As a front-end developer I refined the launcher interface in TypeScript and React — implementing the system I had designed, and finding out in public which parts of it did not survive contact with the codebase.",
    },
    {
      title: "Supported the people using it",
      body: "For over a year I also did content and player support — testing games, troubleshooting with players and game developers. Unglamorous, and the fastest feedback loop I have ever had on my own design decisions.",
    },
  ],

  build: {
    body: [
      "The part of this role I can show you is adjacent and public: much of the same craft went into my open-source contributions to Heroic Games Launcher, where every pull request, review conversation and line of code is on GitHub.",
    ],
    notes: [
      { value: "3y 8m", label: "On the same product" },
      { value: "2", label: "Teams — design, then engineering" },
      { value: "1", label: "Design system owned" },
    ],
  },
};
