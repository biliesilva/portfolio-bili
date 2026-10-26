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

  goal:
    "Make a web3 game launcher that someone who has never used web3 would trust and find easy to use.",
  constraints: [
    "Players are not only playing — they earn and trade items, so a confusing screen costs more than usual",
    "Most of the audience we wanted had never used a web3 product",
    "The launcher is only worth using if studios choose to host their games on it",
    "Desktop client and website, signed in and signed out, desktop and mobile",
  ],

  research: [
    {
      insight: "We interviewed game developers, not only players",
      detail:
        "The design team ran interviews with game creators about the problems they had — distribution, reaching players, and what they needed from a launcher. The launcher only works if the games are on it, so the developer side had to be designed for as deliberately as the player side.",
    },
    {
      insight: "Trust was the thing we were short of",
      detail:
        "New players were being asked to use a launcher where items have real value, in a category most of them associated with risk. Being easy to use was not enough on its own; the interface had to look like something you could leave your account in.",
    },
  ],

  decisions: [
    {
      title: "Designed for two audiences at once",
      problem:
        "A launcher with no games is worth nothing, and the studios deciding whether to publish on it had their own problems — distribution, visibility, reaching players.",
      decision:
        "We treated game developers as users too, interviewed them about those problems, and designed the launcher around what they needed as well as what players needed.",
      why: "It changed what got built. The developer side was the half nobody else was asking about.",
    },
    {
      title: "Built it for people who had never touched web3",
      problem:
        "The people we most wanted to reach were unfamiliar with web3, and the category's reputation meant a wrong-looking screen would end the session.",
      decision:
        "The launcher had to read as a games launcher first, and earn trust before asking anyone to approve anything.",
      why: "Someone who does not understand what an action is doing will not take it, however good the game library is.",
    },
  ],

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
