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
    "Quality-of-life and accessibility UI on a live AAA game — including a motion-sickness fix I proposed because I have it myself, and icons I put into the build in Lua.",
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
    // Captured from the shipped game — no source files needed.
    src: "",
    alt: "Payday 2 main menu, captured from the released build. Shot list: main menu, inventory/mask screen, and a crop grid of the 2D icons.",
    aspect: "16/10",
  },

  context: [
    "Payday 2 shipped in 2013 and was still being actively developed when I joined. A live game with a long memory is a specific kind of design problem: players had learned these menus over hundreds of hours, so a change that reads as an improvement in isolation can break muscle memory for the people who care most.",
    "My work was quality of life. I played the game to find the friction rather than inferring it from a spec, studied menu improvements against how people actually move through them, and designed the 2D icons the interface needed.",
    "The change I am proudest of came from my own body. I get motion sickness from first-person movement, so I proposed a fixed dot at the centre of the screen — a stationary reference the inner ear can agree with while the world moves. It is cheap to build and it is the difference between playing for twenty minutes and playing for an evening.",
    "Then I put them in the game myself — writing Lua in the studio's in-house engine. This is where the pattern on the rest of my CV starts. Years before I shipped React at HyperPlay, I had already learned that a design is not finished when the file is approved; it is finished when it is in the build.",
  ],

  decisions: [
    {
      title: "A fixed point at the centre of the screen",
      problem:
        "First-person movement makes a portion of the player base motion sick. They do not file bug reports about it; they just stop playing after twenty minutes and nobody records why.",
      decision:
        "I proposed a fixed dot at the centre of the screen — a stationary reference the inner ear can agree with while the world moves. The standard mitigation, and one the game did not have.",
      why:
        "It costs almost nothing to build and it changes who can play. Nobody assigned it: I get motion sickness from first-person games, which is the only reason the problem was visible to anyone in the room.",
      media: {
        src: "",
        alt: "Payday 2 HUD with the centre dot enabled, captured from the released build",
        aspect: "16/9",
      },
    },
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
      "It is also where accessibility stopped being a checklist item for me and became something I look for first, because I had spent a year being the user who could not play.",
    ],
    notes: [
      { value: "1", label: "Accessibility feature proposed, unprompted" },
      { value: "Lua", label: "First language I shipped a design in" },
      { value: "AAA", label: "Live title, active development" },
    ],
  },
};
