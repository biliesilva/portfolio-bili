import type { WorkEntry } from "../types";

/** NDA-safe by construction: scope and practice, no product internals. */
export const hyperplay: WorkEntry = {
  slug: "hyperplay",
  kind: "role",
  title: "HyperPlay",
  client: "HyperPlay — Texas, United States",
  year: "2022 — 2026",
  summary:
    "Three and a half years on a web3 game launcher: product design and research inside a design team, then the same interface shipped in React by me, by hand.",
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
    alt: "HyperPlay — product design, research and launcher interface work",
    aspect: "16/10",
  },

  context: [
    "HyperPlay is a game launcher for web3 games, built by a distributed US team. I joined the design team in 2022 as a product designer and stayed almost four years — long enough to see the same decisions come back around, which is the difference between working on a product and working on a deliverable.",
    "The design side was the full practice, not just screens: user research, interviews, prototypes, and the component library the rest of the team built from.",
    "In late 2024 I moved into the engineering team as a front-end developer on the same product — and wrote all of it by hand, before I used AI for any of my work. Same interface, same system, different side of the hand-off. It is the clearest thing on my CV about how I like to work: I would rather own a decision all the way into the build than specify it and hope.",
  ],

  responsibilities: [
    {
      title: "Research and interviews",
      body: "I ran user research and interviews rather than designing from assumptions — the part of product design that decides whether anything after it is worth building.",
    },
    {
      title: "Prototypes and flows",
      body: "Flows and interactive prototypes used to settle questions before they became engineering cost, and to give the team something concrete to disagree with.",
    },
    {
      title: "Components and the design system",
      body: "I built components and was responsible for the design system — token architecture, library and documented states — keeping it usable by the engineers consuming it, which was the actual job rather than a side effect of it.",
    },
    {
      title: "Then shipped it in React, by hand",
      body: "As a front-end developer I refined the launcher interface in TypeScript and React. No AI — this was the year I learned what my own code looks like under review, which is why I can review an assistant's today.",
    },
    {
      title: "Supported the people using it",
      body: "For over a year I also did content and player support — testing games, troubleshooting with players and game developers. Unglamorous, and the fastest feedback loop I have ever had on my own design decisions.",
    },
  ],

  build: {
    body: [
      "The craft here is the same craft you can inspect in full in my open-source work on Heroic Games Launcher, where every pull request, review conversation and decision is public on GitHub.",
    ],
    notes: [
      { value: "3y 8m", label: "On the same product" },
      { value: "2", label: "Teams — design, then engineering" },
      { value: "0", label: "AI in the code I wrote here" },
    ],
  },
};
