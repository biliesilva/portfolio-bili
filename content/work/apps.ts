import type { WorkEntry } from "../types";

/**
 * Two shipped Android apps, built with her husband: she did the design and the
 * front end. Public on Google Play, so everything here is verifiable.
 */
export const apps: WorkEntry = {
  slug: "android-apps",
  kind: "project",
  title: "Remote Work & HeavyMuscle",
  client: "Independent — with my husband",
  year: "2025 — 2026",
  summary:
    "Two Android apps built as a pair: I did the design and the front end. Remote Work is past 100,000 installs.",
  disciplines: ["Product Design", "Front-end", "UI/UX"],
  featured: true,
  order: 5,

  disclosure:
    "Ours, start to finish. Both are live on Google Play — install them and you are looking at the work.",

  role: "Product design & front-end",
  team: "Two people — my husband on the back end, me on design and front end",
  timeline: "Ongoing",
  platforms: ["Android"],
  stack: ["Figma", "TypeScript", "React Native"],

  cover: {
    src: "",
    alt: "Remote Work and HeavyMuscle — Play Store listings and app screens. Shot list: one hero screen from each app, side by side.",
    aspect: "16/10",
  },

  context: [
    "Two products, built with my husband, where I owned the design and the front end and he owned the back end. Small team, no brief, no stakeholders — which means every interface decision was mine to make and mine to answer for when the reviews came in.",
    "Remote Work aggregates remote job listings from Remote OK, We Work Remotely, Remotive, Remote.co and Web3.career into one app across 30+ categories, with a CV builder inside it. It is past 100,000 installs.",
    "HeavyMuscle is a gym app with an AI coach that builds a plan from a single sentence and reshapes each session around your injuries, equipment and recovery. It shows the plates to load before you touch the bar, generates warm-up sets, pre-fills every set with your last numbers, and detects PRs automatically. 873 animated exercises, six languages, fully offline.",
  ],

  responsibilities: [
    {
      title: "Designed both products",
      body: "Flows, interface and the visual language for two apps with nothing in common except the person designing them — a job board and a training log pull in opposite directions, and neither could borrow the other's patterns.",
    },
    {
      title: "Built the front end",
      body: "Implemented the interfaces myself. On HeavyMuscle that meant an offline-first app that stays usable in a gym with no signal, which is a constraint that changes almost every screen.",
    },
    {
      title: "Shipped to real users, and read the reviews",
      body: "Store listings, screenshots and release notes included. Public ratings are the least forgiving usability test there is, and the only one that never stops running.",
    },
  ],

  outcome: {
    metrics: [
      { value: "100k+", label: "Installs, Remote Work" },
      { value: "873", label: "Animated exercises in HeavyMuscle" },
      { value: "6", label: "Languages supported" },
    ],
    body: [
      "Both are live on Google Play. Remote Work has passed 100,000 installs; HeavyMuscle is newer and currently rated 5.0.",
    ],
  },
};
