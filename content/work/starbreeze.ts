import type { WorkEntry } from "../types";

export const starbreeze: WorkEntry = {
  slug: "starbreeze",
  kind: "role",
  tone: "starbreeze",
  title: "Starbreeze, Payday 2",
  client: "Starbreeze Entertainment, Stockholm, Sweden",
  year: "2021 to 2022",
  summary:
    "Two features I suggested after reading what players were asking for, shipped in a live AAA game: a motion sickness dot and a down counter.",
  disciplines: ["UI/UX", "Product Design"],
  featured: true,
  order: 4,

  disclosure:
    "Studio work, done with the design and development teams. The images come from the released game and from the studio's public announcement. Unreleased work stays with Starbreeze.",
  links: [
    {
      label: "PAYDAY 2: Update 217, official announcement",
      href: "https://www.paydaythegame.com/news/payday2/2022/01/payday-2-update-217/",
    },
  ],

  role: "UI/UX Designer",
  team: "Employee, on site in Stockholm, with the design team and the developers",
  timeline: "1 year 2 months",
  platforms: ["PC", "Console"],
  stack: ["Photoshop", "Illustrator", "Figma", "In-house game engine"],

  cover: {
    src: "/work/starbreeze/update-217.jpg",
    alt: "Payday 2 gameplay after Update 217: a small yellow dot fixed at the centre of the screen, and a 3x down counter next to the player name at the bottom right",
    caption:
      "Update 217 in the game: the dot at the centre and the down counter at the bottom right. Image: OVERKILL, a Starbreeze Studio.",
    aspect: "2048/1152",
  },

  panel: {
    src: "/work/starbreeze/motion-dot.jpg",
    alt: "Payday 2: the yellow motion dot fixed at the centre of the view",
    aspect: "16/10",
  },

  brief: {
    problem:
      "Payday 2 shipped in 2013. Players knew it by heart, and their comments said what was still missing.",
    contribution:
      "I read most of the comments and requests players made, suggested the dot and the counter, and worked with the design team and the developers to implement them.",
    outcome:
      "Both shipped in Update 217, in January 2022, announced by the studio as quality-of-life features.",
  },

  blocks: [
    {
      type: "quote",
      text: "Some players wanted to play, and motion sickness would not let them.",
      body: [
        "I get motion sickness from first-person games, and I kept finding the same problem in what players wrote. I suggested a single static point at the centre of the screen, a still reference while everything else moves.",
        "I worked with the developers to bring it into the game. It shipped as the motion dot, an option players can turn on, with different sizes and colours to suit them.",
      ],
    },
    {
      type: "gallery",
      title: "Two suggestions, both in the game",
      intro:
        "They came from reading most of the comments and requests players made, and I worked with the developers to implement them. The down counter was something players had long asked for, and knew from a popular mod.",
      media: [
        {
          src: "/work/starbreeze/motion-dot.jpg",
          alt: "Detail of the game screen: the yellow motion dot at the centre of the view",
          caption: "Motion dot: a fixed point at the centre, optional, with sizes and colours",
          aspect: "16/9",
        },
        {
          src: "/work/starbreeze/down-counter.jpg",
          alt: "Detail of the game HUD: 3x next to the player name, showing the downs left",
          caption: "Down counter: how many times you can go down before custody",
          aspect: "16/9",
        },
      ],
    },
    {
      type: "text",
      title: "Not just one update",
      body: [
        "Update 217 is one example. I worked on most of it together with the design team, and kept working on icons and 2D illustrations of items across Payday 2.",
        "One of those illustrations is in this update: the achievement CAR vs. Car, which unlocks the Longbore exclusive weapon set.",
      ],
      media: {
        src: "/work/starbreeze/exclusive-set.jpg",
        alt: "Payday 2 weapon screen with the Longbore exclusive set selected for the CAR-4 rifle",
        caption: "Longbore exclusive set. Image: OVERKILL, a Starbreeze Studio.",
        aspect: "16/9",
      },
    },
    {
      type: "figure",
      media: {
        src: "/work/starbreeze/achievements.jpg",
        alt: "The Payday 2 achievement CAR vs. Car on SteamDB, added January 2022, with the illustration I made",
        caption: "CAR vs. Car on SteamDB, dated January 2022. Illustration made at Starbreeze for Payday 2.",
        aspect: "4/1",
      },
    },
    {
      type: "text",
      title: "Play it before drawing it",
      body: [
        "An achievement illustration has to say what the player did, at icon size, to someone who has not read the description. For each one I played the DLC it belonged to and drew the specific action it rewards.",
        "I drew them in Illustrator and Photoshop, in a visual language that was eight years old, and added them to the game through the in-house engine, which runs on Lua.",
      ],
    },
  ],
};
