import type { WorkEntry } from "../types";

export const heavyMuscle: WorkEntry = {
  slug: "heavy-muscle",
  kind: "project",
  title: "HeavyMuscle",
  client: "Independent · Google Play",
  year: "2025 — 2026",
  summary:
    "A gym app with an AI coach that writes the plan and a logging screen built to be used standing up, with no signal.",
  disciplines: ["Product Design", "Front-end", "UI/UX"],
  featured: true,
  order: 6,

  disclosure: "Live on Google Play — install it and you are looking at the work.",

  role: "UI/UX and front-end",
  team: "Small team",
  timeline: "Ongoing",
  platforms: ["Android", "Wear OS"],
  stack: ["Figma", "TypeScript", "React Native"],

  cover: {
    src: "/work/heavy-muscle/cover.jpg",
    alt: "HeavyMuscle: a five-day split with muscle recovery above the exercise list, and a live session logging weight by reps set after set",
    caption: "The plan, and the screen you actually use in the gym",
    aspect: "16/10",
  },

  context: [
    "Same arrangement as Remote Work: I came in once it was running, improved the UI and UX, and worked on the front-end.",
    "An AI coach builds a plan from one sentence and adjusts each session to your injuries, equipment and recovery. It shows the plates to load, generates warm-up sets, pre-fills every set with your last numbers and detects PRs. 873 animated exercises, six languages, fully offline.",
  ],

  responsibilities: [
    {
      title: "Designed the screens before building them",
      body: "Home, the empty state, both coach modes and the exercise library were drawn as one set in Figma. The empty state got a frame of its own — the first session is the one most people never start.",
      media: {
        src: "/work/heavy-muscle/design.jpg",
        alt: "Figma frames for HeavyMuscle: the workout home, the empty state offering a quick start, the coach conversation, the coach builder thread, and the exercise library",
        caption: "Home, empty state, both coach modes, library",
        aspect: "1954/806",
      },
    },
    {
      title: "Improved the UI and UX",
      body: "The home screen answers one question — what am I training today — before anything else. Muscle recovery sits above the exercise list, so the plan and the reason for it are read together.",
      media: {
        src: "/work/heavy-muscle/day.jpg",
        alt: "HeavyMuscle training day: a five-day split with the current day expanded, muscle recovery per muscle group, and each exercise carrying its sets, reps, rest and a coaching note",
        caption: "Recovery state sits above the work it explains",
        aspect: "524/1158",
      },
    },
    {
      title: "Gave the AI coach two modes",
      body: "Conversation for questions, Builder for a plan you can review and save. A chat that silently rewrites your training week is not something you want to discover mid-session.",
      media: {
        src: "/work/heavy-muscle/coach.jpg",
        alt: "HeavyMuscle AI coach in builder mode: a request for a knee-friendly session, and the generated plan listed day by day with sets and reps, waiting to be saved",
        caption: "Builder mode — the plan is proposed, then saved",
        aspect: "524/1158",
      },
    },
    {
      title: "Built the components that did not exist",
      body: "No component layer, so every screen had been built on its own. I designed the components, implemented them and rebuilt the screens on top of them. It is offline-first, so it stays usable in a gym with no signal.",
      media: {
        src: "/work/heavy-muscle/library.jpg",
        alt: "HeavyMuscle exercise library: a searchable list grouped by difficulty, each exercise tagged with its muscle group and the equipment it needs",
        caption: "The library, filtered by equipment and level",
        aspect: "524/1158",
      },
    },
  ],

  system: {
    title: "The screen that runs forty times a session",
    body: [
      "Logging a set happens constantly, standing up, often with no signal. Every control is thumb-sized and pre-filled with your last numbers, so the common case is two taps.",
      "Time elapsed, sets left and estimated calories stay pinned while you scroll.",
    ],
    media: {
      src: "/work/heavy-muscle/session.jpg",
      alt: "HeavyMuscle live session: elapsed and remaining time, sets completed and calories pinned at the top, each set logged as weight by reps with a confirm circle, and swap, skip, rest and notes controls under the exercise",
      caption: "Mid-session — weight by reps, one tap to confirm",
      aspect: "524/1158",
    },
  },

  outcome: {
    metrics: [
      { value: "873", label: "Animated exercises" },
      { value: "6", label: "Languages supported" },
      { value: "5.0", label: "Current rating" },
    ],
    body: [
      "Newer than Remote Work and currently rated 5.0. There is a Wear OS app too, so a session can be run from the watch.",
    ],
  },
};
