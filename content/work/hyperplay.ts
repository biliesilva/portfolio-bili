import type { WorkEntry } from "../types";

export const hyperplay: WorkEntry = {
  slug: "hyperplay",
  kind: "role",
  tone: "hyperplay",
  title: "HyperPlay",
  client: "HyperPlay, Texas, United States",
  year: "2022 to 2025",
  summary:
    "One of the first designers on a web3 game launcher, there from the start. I worked on it in design, front-end and player support, and saw the whole product.",
  disciplines: ["Product Design", "Design Systems", "Front-end", "UI/UX"],
  featured: true,
  order: 3,

  disclosure:
    "Contract work, done inside teams. The screens come from the released launcher and from its design system. Other results and internal material are confidential.",

  role: "One of the first designers (2022), then design team, front-end (2024 to 2025) and player support",
  team: "Mostly in the US, with a few people in Europe. I worked remotely as a full-time contractor",
  timeline: "2 years 11 months",
  platforms: ["Desktop game launcher", "Web"],
  stack: ["Figma", "TypeScript", "React", "SCSS", "Design tokens"],

  cover: {
    src: "/work/hyperplay/store.jpg",
    alt: "The HyperPlay store: a ranked list of the most popular games with genre tags, and a row of new quests",
    caption: "The store: ranked games and quests",
    aspect: "826/700",
  },

  brief: {
    problem:
      "Developers wanted players who came for the game, not people who were there only to make money. Players did not trust what they saw.",
    contribution:
      "I was one of the first designers. I ran interviews, designed flows and screens, was responsible for the design system in the design team, and later implemented part of it in code.",
    outcome:
      "The team redesigned the entire store, with more description and information for each game and a more attractive presentation.",
  },

  blocks: [
    {
      type: "text",
      title: "From the start, and from every side",
      body: [
        "I was at HyperPlay from the beginning, as one of its first designers. Then I was part of the design team, and later a front-end developer on the same interface.",
        "I also did player support. Between designing the product, building it and helping the people who used it, I came to understand it as a whole, and not only the part in my own file.",
      ],
    },
    {
      type: "quote",
      text: "Game developers told us the problem was attracting players who wanted to play.",
      body: [
        "The design team interviewed game creators as well as players. A launcher with no games is worth nothing, so their side had to be designed for as deliberately as the player side.",
        "What they complained about was specific. They needed people who would come to play their games, not people who were there only to make money. Players, meanwhile, were being asked to trust a category most of them associated with risk.",
      ],
    },
    {
      type: "text",
      title: "So we redesigned the store",
      body: [
        "The answer was not a new screen. We redid the entire design of the store. Games got more description and more information, so a player could decide with confidence, and the pages became more attractive, so there was a reason to look.",
        "A game page now carries the gallery, what the game is about, where it runs, its quests, its on-chain assets, the system requirements and the latest updates.",
      ],
      media: {
        src: "/work/hyperplay/game-detail.jpg",
        alt: "A HyperPlay game page: gallery, description, genres and tags, supported platforms, quests with rewards and on-chain assets",
        caption: "A game page, from gallery to on-chain assets",
        aspect: "496/1040",
      },
    },
    {
      type: "gallery",
      title: "The system under it",
      intro:
        "I was responsible for the design system inside the design team: tokens, library and documented states, usable by the engineers who consumed it.",
      media: [
        {
          src: "/work/hyperplay/combobox-states.jpg",
          alt: "The HyperPlay combobox in every combination of type, state, open, valid and required",
          caption: "Combobox: single and multiple, every state",
          aspect: "820/1290",
        },
        {
          src: "/work/hyperplay/header-variants.jpg",
          alt: "The HyperPlay navigation header for the desktop client, the website and mobile, signed in and signed out",
          caption: "One header, with the platform as a property",
          aspect: "775/1184",
        },
      ],
    },
    {
      type: "text",
      title: "Then I moved to engineering",
      body: [
        "In late 2024 I joined the engineering team and worked in TypeScript and React on the interface I had helped design, including part of the design system. I wrote it by hand, before I used AI in any of my work.",
      ],
    },
    {
      type: "text",
      title: "What support taught me about the product",
      body: [
        "For over a year I did content and player support, testing games and troubleshooting with players and game developers. I saw where people got stuck, and that fed straight back into the design.",
      ],
    },
  ],
};
