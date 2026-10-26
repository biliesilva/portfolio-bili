import type { WorkEntry } from "../types";

/** NDA-safe by construction: scope and practice, no product internals. */
export const coinfello: WorkEntry = {
  slug: "coinfello",
  kind: "role",
  title: "CoinFello",
  client: "CoinFello — United States",
  year: "2025 — 2026",
  summary:
    "Built the design system from scratch and implemented it in code myself — then rebuilt my own workflow around AI without handing over the judgement.",
  disciplines: ["Design Systems", "Front-end", "UI/UX"],
  featured: true,
  order: 2,

  disclosure:
    "Employed work under NDA. What I can show is the design system itself — components with placeholder content, which say how the system is built without saying anything about the business — plus the public marketing site. No product screens, no customer data, no internal numbers.",

  role: "Front-end Developer — design system owner",
  team: "Distributed team — US, Europe and LATAM",
  timeline: "1 year 3 months",
  platforms: ["Web"],
  stack: ["TypeScript", "React", "Tailwind CSS", "Design tokens", "AI tooling"],

  cover: {
    src: "/work/coinfello/button.jpg",
    alt: "The CoinFello button component in Figma: brand, secondary, tertiary, danger and gradient variants across every state",
    caption: "The button, in every variant and state it ships with",
    aspect: "16/10",
  },

  context: [
    "I joined CoinFello, working with a distributed team, as a front-end developer, and built the design system from scratch — not inherited, not extended. Tokens, components, conventions, the lot. Then I implemented it in code myself.",
    "That combination is the whole point of how I work. There was no spec to hand over and no interpretation gap to argue about later, because the person deciding what a component should do was the person writing it.",
    "This is also where I started using AI seriously — after the system already existed and I already knew what good looked like in this codebase. That order matters to me.",
  ],

  responsibilities: [
    {
      title: "Built the design system from zero",
      body: "Token architecture, component library, and the conventions that keep an interface coherent while several people change it at once. Starting from nothing is a different job from maintaining something: every decision is load-bearing, and the ones you get wrong early are the ones you pay for all year.",
      media: {
        src: "/work/coinfello/chip.jpg",
        alt: "The CoinFello chip component in Figma, with selected, size and state variants laid out as a matrix",
        caption: "Chip — selected, size and state, as a matrix rather than a list of examples",
        aspect: "3/2",
      },
    },
    {
      title: "Implemented it myself, in code",
      body: "I wrote the system rather than specifying it. Design-system ownership from inside engineering means the component settles the question — there is no document for anyone to interpret differently six months later.",
      media: {
        src: "/work/coinfello/alert-cards.jpg",
        alt: "CoinFello alert cards in Figma: error, warning, success, info and brand tones, each with its own icon",
        caption: "Alert cards. The tone is a property, not five separate components",
        aspect: "3/2",
      },
    },
    {
      title: "Brought AI into the loop, deliberately",
      body: "Once the system was established I started using AI daily, and I review everything it produces the way I would review a junior's pull request. It moves the slow parts — scaffolding, migrations, the fourth variant of a component. What to build, what the component should actually do, and what to refuse stays mine.",
    },
  ],

  system: {
    title: "The system, shipped",
    body: [
      "The product is public. The yellow on the Launch app button is the same token as the yellow on the chip and the button in the files above — which is the only proof a design system really works: the thing in the file and the thing in production are the same thing.",
    ],
    media: {
      src: "/work/coinfello/site.jpg",
      alt: "The CoinFello website: Your Always On DeFi Super Agent, with the yellow primary button from the design system",
      caption: "coinfello.com — the same tokens, in production",
      aspect: "16/10",
    },
  },

  build: {
    body: [
      "Worth saying plainly, because it comes up in interviews: I wrote production front-end for over a year before I used AI for any of it, at HyperPlay, by hand. I adopted AI because it was faster for specific things, not because I needed it to work.",
      "The order is the argument. You cannot review what an assistant writes if you have never built the thing yourself.",
    ],
    notes: [
      { value: "1", label: "Design system built from scratch" },
      { value: "100%", label: "Of it implemented by me" },
      { value: "1y 3m", label: "Duration" },
    ],
  },
};
