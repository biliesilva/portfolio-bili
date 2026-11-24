import type { WorkEntry } from "../types";

export const heavyMuscle: WorkEntry = {
  slug: "heavy-muscle",
  kind: "project",
  tone: "heavy-muscle",
  title: "HeavyMuscle",
  client: "Independent, Google Play",
  year: "2025 to 2026",
  summary:
    "A gym app with an AI coach that writes the plan and a logging screen built to be used standing up, with no signal.",
  disciplines: ["Product Design", "Front-end", "UI/UX"],
  featured: false,
  order: 6,

  disclosure: "Live on Google Play. Install it and you are looking at the work.",
  links: [
    {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.heavymuscle",
    },
  ],

  role: "Design and front-end, from the first screen",
  team: "Small team",
  timeline: "Ongoing",
  platforms: ["Android", "Wear OS"],
  stack: ["Figma", "TypeScript", "React Native"],

  cover: {
    src: "/work/heavy-muscle/cover.jpg",
    alt: "HeavyMuscle: a five-day split with muscle recovery above the exercise list, and a live session logging weight by reps",
    caption: "The plan, and the screen you use in the gym",
    aspect: "16/10",
  },

  panel: {
    src: "/work/heavy-muscle/panel.jpg",
    alt: "HeavyMuscle training plan and live session",
    aspect: "16/10",
  },

  brief: {
    problem:
      "Logging a set happens constantly, standing up, often with no signal.",
    contribution:
      "Designer and front-end from the start: the interface, the component layer, the store graphics, and part of deciding what the product does.",
    outcome:
      "Live on Google Play in six languages, with 873 animated exercises and a Wear OS app.",
  },

  blocks: [
    {
      type: "text",
      title: "The screen that runs all session",
      body: [
        "Every control is thumb-sized and pre-filled with your last numbers, so the common case is two taps. Time elapsed, sets left and estimated calories stay pinned while you scroll.",
      ],
      media: {
        src: "/work/heavy-muscle/session.jpg",
        alt: "HeavyMuscle live session: time, sets and calories pinned at the top, each set logged as weight by reps with a confirm circle",
        caption: "Weight by reps, one tap to confirm",
        aspect: "513/1151",
      },
    },
    {
      type: "gallery",
      title: "What to train, and who decides",
      intro:
        "Recovery sits above the exercises it explains. The coach has two modes, so a chat never rewrites your week without you reviewing the plan.",
      media: [
        {
          src: "/work/heavy-muscle/day.jpg",
          alt: "HeavyMuscle training day: a five-day split with muscle recovery per group above the exercises",
          caption: "Today",
          aspect: "513/1151",
        },
        {
          src: "/work/heavy-muscle/coach.jpg",
          alt: "HeavyMuscle AI coach in builder mode, with a generated plan waiting to be saved",
          caption: "Builder mode",
          aspect: "513/1151",
        },
        {
          src: "/work/heavy-muscle/library.jpg",
          alt: "HeavyMuscle exercise library, searchable and grouped by difficulty",
          caption: "Library",
          aspect: "513/1151",
        },
      ],
    },
    {
      type: "figure",
      media: {
        src: "/work/heavy-muscle/design.jpg",
        alt: "Figma frames for HeavyMuscle: home, the empty state, both coach modes and the exercise library",
        caption: "Home, empty state, both coach modes and library, drawn as one set",
        aspect: "1954/806",
      },
    },
  ],
};
