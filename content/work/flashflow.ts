import type { CaseStudy } from "../types";

/** Based on the real FlashFlow 2.0 repository — fill in metrics and screenshots. */
export const flashflow: CaseStudy = {
  slug: "flashflow",
  title: "FlashFlow 2.0",
  client: "Self-initiated product",
  year: "2026",
  summary:
    "A full-stack spaced-repetition app, designed and built end to end — the project where I owned the data model and the type scale.",
  disciplines: ["Front-end", "Product Design", "UI/UX"],
  featured: false,
  order: 4,

  role: "Designer & full-stack developer",
  team: "Solo",
  timeline: "Ongoing",
  platforms: ["Responsive web"],
  stack: ["TypeScript", "React", "Node", "Tailwind CSS"],

  cover: { src: "", alt: "FlashFlow deck management and review session", aspect: "16/10" },

  context: [
    "Flashcard apps optimise for creating cards. The hard part is the twentieth review session, when motivation is gone and the deck has grown past the point of comfort.",
    "I built FlashFlow to design for that session instead of the first one, and to own the whole stack while doing it.",
  ],
  goal: "Make a review session something you finish, not something you start.",
  constraints: [
    "Solo project — scope had to stay honest",
    "Offline-tolerant: a review session cannot depend on a good connection",
    "Keyboard-first, because reviewing with a mouse is slow",
  ],

  decisions: [
    {
      title: "Session length over deck size",
      problem: "An open-ended queue of due cards is a wall. Testers quit before the end.",
      decision: "Sessions are time-boxed and show progress against the session, not the backlog.",
      why: "A finishable unit of work beats an accurate one. The backlog is still there — it just stops being the thing you stare at.",
      media: { src: "", alt: "Time-boxed review session with progress", aspect: "4/3" },
    },
    {
      title: "Keyboard as the primary input",
      problem: "Grading a card with a mouse breaks the rhythm of a review session.",
      decision: "Every review action has a key binding, shown inline on first use and discoverable afterwards.",
      why: "Reviewing is a repetitive task. Repetitive tasks belong to the keyboard.",
    },
  ],

  build: {
    body: [
      "Typed end to end: the card, deck and review-schedule models are shared between client and server, so a schema change is a compile error rather than a runtime surprise.",
      "The review session is optimistic and queues its writes, which is what makes it usable on a phone with a bad connection.",
    ],
    notes: [
      { value: "TS", label: "Types shared client to server" },
      { value: "TODO", label: "Lighthouse performance" },
      { value: "TODO", label: "Bundle size" },
    ],
  },

  outcome: {
    metrics: [
      { value: "TODO", label: "Session completion rate" },
      { value: "TODO", label: "Cards reviewed per session" },
      { value: "100%", label: "Review actions keyboard-accessible" },
    ],
    body: ["TODO — add your own usage numbers, even from a handful of testers."],
  },

  reflection: [
    "Designing and building alone is fast and it hides your blind spots. The decisions I defended worst here are the ones nobody reviewed.",
  ],
};
