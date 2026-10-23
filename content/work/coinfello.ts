import type { WorkEntry } from "../types";

/**
 * NDA-safe by construction.
 * TODO (Bili): add one or two concrete, non-confidential examples of how you
 * used AI in the workflow — that is the part hiring teams will ask about in 2026.
 */
export const coinfello: WorkEntry = {
  slug: "coinfello",
  kind: "role",
  title: "CoinFello",
  client: "CoinFello — United States",
  year: "2025 — 2026",
  summary:
    "Front-end developer on a US fintech team: owned the design system and rebuilt my own workflow around AI tooling without letting quality slip.",
  disciplines: ["Front-end", "Design Systems", "UI/UX"],
  featured: true,
  order: 3,

  disclosure:
    "Employed work under NDA. What follows is my scope and my practice — no product internals, no screens, no numbers.",

  role: "Front-end Developer",
  team: "Distributed US team",
  timeline: "1 year 3 months",
  platforms: ["Web"],
  stack: ["TypeScript", "React", "Tailwind CSS", "Design tokens", "AI tooling"],

  cover: {
    src: "",
    alt: "CoinFello — design system and front-end work",
    aspect: "16/10",
  },

  context: [
    "I joined CoinFello as a front-end developer on a distributed US team. Alongside the build work I took ownership of the design system — the second time I have held that responsibility, and the first time I held it from inside engineering rather than from design.",
    "This is also where I started working with AI seriously, as part of the daily loop rather than as a novelty. Not to produce more code faster, but to move the slow parts — scaffolding, migrations, the fourth variant of a component — out of the way of the parts that need judgement.",
  ],

  responsibilities: [
    {
      title: "Owned the design system",
      body: "Token architecture, component library and the conventions that keep an interface coherent while several people are changing it at once.",
    },
    {
      title: "Built the front end",
      body: "Typed React and Tailwind, working to the system rather than around it — which is a different discipline when you are the one who wrote the system.",
    },
    {
      title: "Put AI into the workflow, deliberately",
      body: "I use AI where it is genuinely faster and review everything it produces as if a junior wrote it. The judgement — what to build, what the component should actually do, what to refuse — stays mine. TODO (Bili): swap in a concrete, non-confidential example here.",
    },
  ],

  build: {
    body: [
      "Design-system ownership from inside engineering changes what you build. You stop writing specs that someone else has to interpret and start writing the component that settles the question.",
    ],
    notes: [
      { value: "1y 3m", label: "Duration" },
      { value: "1", label: "Design system owned" },
      { value: "AI", label: "In the daily workflow" },
    ],
  },
};
