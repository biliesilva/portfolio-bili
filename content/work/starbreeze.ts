import type { WorkEntry } from "../types";

/**
 * NDA-safe by construction.
 * TODO (Bili): Payday 2 is a shipped, public game — if any of the UI you worked
 * on is in the released build, a screenshot of it is usually fine to show.
 * Confirm with Starbreeze if you are unsure, then add it to the cover.
 */
export const starbreeze: WorkEntry = {
  slug: "starbreeze",
  kind: "role",
  title: "Starbreeze — Payday 2",
  client: "Starbreeze Entertainment — Stockholm, Sweden",
  year: "2021 — 2022",
  summary:
    "UI/UX design on Payday 2, a shipped AAA game with a decade of players and a decade of accumulated interface decisions.",
  disciplines: ["UI/UX", "Product Design"],
  featured: false,
  order: 4,

  disclosure:
    "Studio work. I can describe my scope and how a game UI team operates; specific unreleased work stays with Starbreeze.",

  role: "UI/UX Designer",
  team: "Game UI team, Stockholm",
  timeline: "1 year 2 months",
  platforms: ["PC", "Console"],
  stack: ["Figma", "Adobe CC", "Game UI"],

  cover: {
    src: "",
    alt: "Payday 2 — game interface design work",
    aspect: "16/10",
  },

  context: [
    "Payday 2 shipped in 2013 and was still being actively developed when I joined — a live game with a long memory. Designing interface for it meant working inside conventions that players had learned over years, where a change that reads as an improvement in isolation can break muscle memory for people with hundreds of hours in the game.",
    "TODO (Bili): add two or three sentences about what this taught you. Game UI is a strong differentiator for product roles — constraint-heavy, performance-sensitive, and judged by an audience that notices everything.",
  ],

  responsibilities: [
    {
      title: "UI/UX design for a live game",
      body: "Interface design within an established visual language and an existing player base, working with the game UI team in Stockholm.",
    },
  ],
};
