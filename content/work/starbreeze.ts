import type { WorkEntry } from "../types";

export const starbreeze: WorkEntry = {
  slug: "starbreeze",
  kind: "role",
  title: "Starbreeze — Payday 2",
  client: "Starbreeze Entertainment — Stockholm, Sweden",
  year: "2021 — 2022",
  summary:
    "Quality-of-life and accessibility UI on a live AAA game, plus the 2D assets — achievement icons and in-game items — that I made and put into the build.",
  disciplines: ["UI/UX", "Product Design"],
  featured: true,
  order: 4,

  disclosure:
    "Studio work. The illustrations below are in the shipped game and dated on SteamDB. Unreleased work stays with Starbreeze.",

  role: "UI/UX Designer",
  team: "Game UI team, Stockholm",
  timeline: "1 year 2 months",
  platforms: ["PC", "Console"],
  stack: ["Photoshop", "Illustrator", "Figma", "In-house game engine"],

  cover: {
    src: "/work/starbreeze/achievements.jpg",
    alt: "Two Payday 2 achievements on SteamDB — Captain Heister, added September 2021, and CAR vs. Car, added January 2022 — each with the illustration I made",
    caption:
      "Two of the achievement illustrations, on SteamDB with their release dates. Made at Starbreeze for Payday 2.",
    aspect: "16/6",
  },

  context: [
    "Payday 2 shipped in 2013 and was still in active development when I joined. Players had learned the menus over hundreds of hours, so changes had to work without breaking habits.",
    "My work was quality of life: I played the game to find the friction, then designed menu and interaction improvements against it.",
    "I also worked in the 2D game assets — achievement illustrations and in-game items — in Photoshop and Illustrator, and added them to the build through the studio's in-house engine.",
  ],

  decisions: [
    {
      title: "Played the DLC before drawing the achievement",
      problem:
        "An achievement illustration has to say what the player did, at icon size, to someone who has not read the description.",
      decision:
        "For each one I played the DLC it belonged to, read the achievement description, and built the illustration around the specific action it rewards. Drawn in Illustrator and added straight into the game.",
      why: "An illustration made from the description alone tends to show the subject. Playing it first shows the moment.",
    },
    {
      title: "A fixed point at the centre of the screen",
      problem:
        "First-person movement makes part of the player base motion sick. They do not report it; they stop playing.",
      decision:
        "I proposed a fixed dot at the centre of the screen — a stationary reference while the world moves.",
      why: "It costs almost nothing to build and it changes who can play. I get motion sickness from first-person games, which is why the problem was visible to me.",
    },
  ],

  responsibilities: [
    {
      title: "Played the game to find the problems",
      body: "Testing Payday 2 as a player rather than reviewing screens, which is how the friction in repetition shows up.",
    },
    {
      title: "Quality-of-life and menu design",
      body: "Designed improvements to the menus and everyday interactions, inside a visual language that was eight years old.",
    },
    {
      title: "Worked in the 2D game assets",
      body: "Achievement illustrations and in-game items, drawn in Photoshop and Illustrator to match the existing style.",
    },
    {
      title: "Put them into the build",
      body: "Added the assets to the game through the studio's in-house engine, where the game runs on Lua, instead of handing them over.",
    },
  ],

  build: {
    body: [
      "Game UI has harder constraints than product work: performance budgets, controller and keyboard parity, and a visual language you cannot renegotiate.",
    ],
    notes: [
      { value: "1", label: "Accessibility feature proposed" },
      { value: "2D", label: "Assets made and integrated by me" },
      { value: "AAA", label: "Live title, active development" },
    ],
  },
};
