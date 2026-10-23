import type { WorkEntry } from "../types";

/**
 * Payday 2 is a shipped, public game — if any of the UI or icons you made are
 * in the released build, a screenshot is usually fine to show.
 * TODO (Bili): confirm with Starbreeze if unsure, then add it to the cover.
 */
export const starbreeze: WorkEntry = {
  slug: "starbreeze",
  kind: "role",
  title: "Starbreeze — Payday 2",
  client: "Starbreeze Entertainment — Stockholm, Sweden",
  year: "2021 — 2022",
  summary:
    "UI/UX on a live AAA game with a decade of players — and the first time I shipped my own design into the build myself. Not in React. In Lua.",
  disciplines: ["UI/UX", "Product Design"],
  featured: false,
  order: 4,

  disclosure:
    "Studio work. I can describe my scope and how a game UI team operates; anything unreleased stays with Starbreeze.",

  role: "UI/UX Designer",
  team: "Game UI team, Stockholm",
  timeline: "1 year 2 months",
  platforms: ["PC", "Console"],
  stack: ["Figma", "Adobe CC", "Lua", "In-house game engine"],

  cover: {
    src: "",
    alt: "Payday 2 — menu and icon work",
    aspect: "16/10",
  },

  context: [
    "Payday 2 shipped in 2013 and was still being actively developed when I joined. A live game with a long memory is a specific kind of design problem: players had learned these menus over hundreds of hours, so a change that reads as an improvement in isolation can break muscle memory for the people who care most.",
    "My work was quality of life. I played the game to find the friction rather than inferring it from a spec, studied menu improvements against how people actually move through them, and designed the 2D icons the interface needed.",
    "Then I put them in the game myself — writing Lua in the studio's in-house engine. This is where the pattern on the rest of my CV starts. Years before I shipped React at HyperPlay, I had already learned that a design is not finished when the file is approved; it is finished when it is in the build.",
  ],

  responsibilities: [
    {
      title: "Played the game to find the problems",
      body: "Testing Payday 2 as a player, not as a reviewer of screens — which is the only way to notice the friction that lives in repetition rather than in a single interaction.",
    },
    {
      title: "Quality-of-life and menu design",
      body: "Studied and designed improvements to the menus and the everyday interactions, inside an established visual language and against a player base with a decade of habits.",
    },
    {
      title: "Designed the 2D icons",
      body: "Created the 2D icon work the interface needed, consistent with a visual language that predated me by eight years.",
    },
    {
      title: "Implemented them in Lua",
      body: "Added the assets into the game myself, in Lua, in the studio's in-house engine. Nobody asked me to — it was simply faster than handing it over, and it is how I have worked ever since.",
    },
  ],

  build: {
    body: [
      "Game UI is a useful thing to have done before product work. The constraints are harder — performance budgets, controller and keyboard parity, a visual language you cannot renegotiate — and the audience notices everything.",
    ],
    notes: [
      { value: "2013", label: "The game I was changing shipped in" },
      { value: "Lua", label: "First language I shipped a design in" },
      { value: "AAA", label: "Live title, active development" },
    ],
  },
};
