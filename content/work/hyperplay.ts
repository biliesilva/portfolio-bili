import type { WorkEntry } from "../types";

export const hyperplay: WorkEntry = {
  slug: "hyperplay",
  kind: "role",
  title: "HyperPlay",
  client: "HyperPlay — Texas, United States",
  year: "2022 — 2026",
  summary:
    "Three and a half years on a web3 game launcher. Product design and research in the design team, then front-end work on the same interface in the engineering team.",
  disciplines: ["Product Design", "Design Systems", "Front-end", "UI/UX"],
  featured: true,
  order: 1,

  disclosure:
    "Employed work, done inside teams. This is my part, not the whole project. The screens below are from the publicly released launcher.",

  role: "Product Designer (2022—2025) → Front-end Developer (2024—2026)",
  team: "Design team, then engineering team — distributed across the US, Europe and LATAM",
  timeline: "3 years 8 months",
  platforms: ["Desktop game launcher", "Web"],
  stack: ["Figma", "TypeScript", "React", "Design tokens"],

  cover: {
    src: "/work/hyperplay/discover.jpg",
    alt: "HyperPlay discover page: featured hero carousel, a ranked most-popular list, quests and new releases",
    caption: "The discover page",
    aspect: "4/5",
  },

  context: [
    "HyperPlay is a game launcher for web3 games, built by a team spread across the US, Europe and Latin America. I joined the design team in 2022 and stayed almost four years.",
    "In late 2024 I moved to the engineering team as a front-end developer on the same product, working in TypeScript and React. I wrote all of it by hand — this was before I used AI for any of my work.",
  ],

  responsibilities: [
    {
      title: "Research and interviews",
      body: "Ran user research and interviews, and turned the findings into flows and prototypes the team could review before anything was built.",
    },
    {
      title: "Product design for the launcher",
      body: "Flows, screens and interactive prototypes — the store, the game pages, quests and the library.",
      media: {
        src: "/work/hyperplay/game-page.jpg",
        alt: "A HyperPlay game page: gallery, metadata, quests, on-chain assets, system requirements and changelog",
        caption: "A game page end to end",
        aspect: "9/16",
      },
    },
    {
      title: "The design system",
      body: "Within the design team I was responsible for the design system: token architecture, component library and documented states, kept usable by the engineers consuming it.",
      media: {
        src: "/work/hyperplay/combobox.jpg",
        alt: "The HyperPlay Combobox component in Figma, with every combination of type, state, open, valid and required",
        caption: "Combobox — single and multiple, every state, open and closed, valid and not",
        aspect: "4/3",
      },
    },
    {
      title: "Front-end in the engineering team",
      body: "TypeScript and React on the launcher interface, alongside the rest of the engineering team. No AI in any of it.",
    },
    {
      title: "Content and player support",
      body: "For over a year I also tested games and troubleshot with players and game developers.",
    },
  ],

  system: {
    title: "One header, five platform states",
    body: [
      "The launcher runs as a desktop client and as a website, signed in and signed out, on desktop and on mobile. The navigation header covers all of it as one component, with the platform as a property.",
    ],
    media: {
      src: "/work/hyperplay/navigation.jpg",
      alt: "The HyperPlay navigation header in Figma, with variants for desktop client, website, and mobile signed in, signed out and open",
      caption: "Navigation header — all platform variants",
      aspect: "16/9",
    },
  },

  build: {
    body: [
      "The same craft is public in my open-source work on Heroic Games Launcher, where every pull request and review conversation can be read on GitHub.",
    ],
    notes: [
      { value: "3y 8m", label: "On the same product" },
      { value: "2", label: "Teams — design, then engineering" },
      { value: "0", label: "AI in the code I wrote here" },
    ],
  },
};
