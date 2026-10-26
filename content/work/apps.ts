import type { WorkEntry } from "../types";

export const apps: WorkEntry = {
  slug: "android-apps",
  kind: "project",
  title: "Remote Work & HeavyMuscle",
  client: "Independent — with my husband",
  year: "2025 — 2026",
  summary:
    "Two Android apps my husband started. I came in to rework the UI and UX and build the components they did not have. Remote Work is past 100,000 installs.",
  disciplines: ["Product Design", "Front-end", "UI/UX"],
  featured: true,
  order: 5,

  disclosure: "Ours. Both are live on Google Play.",

  role: "UI/UX and front-end — joined after the apps existed",
  team: "Two people — he started them, I took over the interface",
  timeline: "Ongoing",
  platforms: ["Android"],
  stack: ["Figma", "TypeScript", "React Native"],

  cover: {
    src: "/work/apps/both-apps.jpg",
    alt: "Remote Work and HeavyMuscle side by side: a filtered job list with applied status on each card, and a training day with muscle-recovery state above the exercise list",
    caption: "Both live on Google Play",
    aspect: "16/10",
  },

  context: [
    "My husband built both apps and I joined once they were running, to fix the parts that were holding them back: the interface, and the fact that there were no shared components to build screens from.",
    "Remote Work pulls remote job listings from Remote OK, We Work Remotely, Remotive, Remote.co and Web3.career into one app, across 30+ categories, with a CV builder inside it. It is past 100,000 installs.",
    "HeavyMuscle is a gym app. An AI coach builds a plan from one sentence and adjusts each session to your injuries, equipment and recovery. It shows the plates to load, generates warm-up sets, pre-fills every set with your last numbers and detects PRs. 873 animated exercises, six languages, fully offline.",
  ],

  responsibilities: [
    {
      title: "Reworked the UI and UX",
      body: "Both apps worked before I joined. I took the interface apart and rebuilt it — flows, layout and visual language for a job board and a training log, two products with no patterns in common.",
      media: {
        src: "/work/apps/remotework-jobs.jpg",
        alt: "Remote Work job list: each card carries the role, company and date, with a save action, an overflow menu, and an Applied marker once you have applied",
        caption: "The job list. Applied state sits on the card, so you never apply twice",
        aspect: "9/16",
      },
    },
    {
      title: "Built the components that did not exist",
      body: "Neither app had a component layer, so every screen had been built on its own. I designed the components, implemented them, and rebuilt the screens on top of them. HeavyMuscle is offline-first, so it stays usable in a gym with no signal.",
      media: {
        src: "/work/apps/heavymuscle-day.jpg",
        alt: "HeavyMuscle training day: a five-day split with the current day expanded, muscle-recovery state per muscle group, and each exercise carrying its sets, reps, rest and a coaching note",
        caption: "A training day, with recovery state above the work",
        aspect: "9/16",
      },
    },
    {
      title: "Shipped and maintained them",
      body: "Store listings, screenshots and release notes included. Public ratings are the feedback loop.",
    },
  ],

  system: {
    title: "The screen that runs forty times a session",
    body: [
      "Logging a set happens constantly, standing up, often with no signal. Every control is thumb-sized and pre-filled with your last numbers, so the common case is two taps.",
      "Time elapsed, sets left and estimated calories stay pinned while you scroll.",
    ],
    media: {
      src: "/work/apps/heavymuscle-session.jpg",
      alt: "HeavyMuscle live session: elapsed and remaining time, sets completed and calories pinned at the top, each set logged as weight by reps with a confirm circle, and swap, skip, rest and notes controls under the exercise",
      caption: "Mid-session — weight by reps, one tap to confirm",
      aspect: "9/16",
    },
  },

  outcome: {
    metrics: [
      { value: "100k+", label: "Installs, Remote Work" },
      { value: "873", label: "Animated exercises in HeavyMuscle" },
      { value: "6", label: "Languages supported" },
    ],
    body: [
      "Remote Work has passed 100,000 installs. HeavyMuscle is newer and currently rated 5.0.",
    ],
  },
};
