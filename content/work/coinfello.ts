import type { WorkEntry } from "../types";

export const coinfello: WorkEntry = {
  slug: "coinfello",
  kind: "role",
  title: "CoinFello",
  client: "CoinFello — United States",
  year: "2025 — 2026",
  summary:
    "Built the design system and implemented it in code. A DeFi product with an AI agent at the centre of it.",
  disciplines: ["Design Systems", "Front-end", "UI/UX"],
  featured: true,
  order: 1,

  disclosure:
    "Employed work under NDA. What I can show is the design system itself — components with placeholder content — and the public site. No product screens, no customer data, no internal numbers.",

  role: "Front-end Developer — design system owner",
  team: "Distributed team — US and Europe",
  timeline: "1 year 3 months",
  platforms: ["Web"],
  stack: ["TypeScript", "React", "SCSS", "Design tokens", "AI tooling"],

  cover: {
    src: "/work/coinfello/button.jpg",
    alt: "The CoinFello button component in Figma: brand, secondary, tertiary, danger and gradient variants across every state",
    caption: "Button — every variant and state",
    aspect: "16/10",
  },

  goal:
    "Keep a product that ships features every day consistent — in its components, its behaviour and its layout at every screen size.",
  constraints: [
    "Features shipped daily",
    "Tablet and mobile had to work on everything, not just desktop",
    "I designed the components and implemented them, so there was no hand-off to catch mistakes",
  ],

  decisions: [
    {
      title: "Consistency had to be structural, not reviewed",
      problem:
        "We released features every day. At that pace an interface cannot be kept consistent by reviewing screens — something always ships before anyone looks at it.",
      decision:
        "I built the design system so the component is the fastest way to build a screen, and implemented every component myself.",
      why: "When using the system is less work than going around it, consistency stops depending on anyone remembering.",
    },
    {
      title: "Responsiveness in the component, not the page",
      problem:
        "Every feature had to work on tablet and mobile, and features arrived faster than anyone could retrofit layouts.",
      decision:
        "Each component handles its own breakpoints, so a screen assembled from components is responsive before anyone thinks about it.",
      why: "It moves the work to the place it is done once instead of the place it is done every time.",
    },
    {
      title: "I implemented what I designed",
      problem:
        "A design system described in a file and a design system in the codebase drift apart, and nobody notices until a screen looks wrong.",
      decision:
        "I owned both ends: the components in the file and the components in the app were the same work.",
      why: "There was no specification to interpret, so there was nothing to interpret differently.",
    },
  ],

  context: [
    "CoinFello is a DeFi agent: it answers questions about assets and protocols, executes swaps and staking, and runs recurring strategies inside limits the user sets.",
    "I joined as a front-end developer and built the design system: tokens, components and conventions. There was nothing to inherit. Then I implemented it in code.",
    "This is also where I started using AI daily, after the system existed and I already knew what good looked like in the codebase.",
  ],

  responsibilities: [
    {
      title: "Built the design system",
      body: "Token architecture, component library and the conventions that keep an interface coherent while several people change it at once.",
      media: {
        src: "/work/coinfello/chip.jpg",
        alt: "The CoinFello chip component in Figma, with selected, size and state variants laid out as a matrix",
        caption: "Chip — selected, size and state",
        aspect: "3/2",
      },
    },
    {
      title: "Implemented it in code",
      body: "I wrote the system rather than specifying it. 55 components, built in React and SCSS on top of Mantine.",
      media: {
        src: "/work/coinfello/alert-cards.jpg",
        alt: "CoinFello alert cards in Figma: error, warning, success, info and brand tones, each with its own icon",
        caption: "Alert cards — tone as a property, not five components",
        aspect: "3/2",
      },
    },
    {
      title: "Used AI deliberately",
      body: "I use AI daily and review everything it produces the way I would review a junior's pull request. It handles scaffolding, migrations and repetitive variants.",
    },
  ],

  system: {
    title: "The system in production",
    body: [
      "The product is public. The yellow on the Launch app button is the same token as the yellow on the chip and the button in the files above.",
    ],
    media: {
      src: "/work/coinfello/site.jpg",
      alt: "The CoinFello website: Your Always On DeFi Super Agent, with the yellow primary button from the design system",
      caption: "coinfello.com — the same tokens, shipped",
      aspect: "16/10",
    },
  },

  build: {
    title: "Design system as AI context",
    body: [
      "Most teams use AI to write code faster. I used it to keep a product that ships daily consistent with itself.",
      "Once the design system existed, I wrote it down for the machine as well as for people. A CLAUDE.md file in the repository described the tokens, the naming rules, the component structure and the responsive conventions. Through the Figma MCP the agent could read a component straight from the design file, rather than guessing from a screenshot.",
      "The loop: I design the component and its states in Figma, on the system's tokens. The agent reads it through the MCP, with CLAUDE.md as the rulebook, and generates the React component and its variants. I review what comes back the way I would review a junior developer's pull request, and fix what it missed. Around 90 to 95% of a generated component matched the system on the first pass.",
      "That moved my time from typing variants to reviewing decisions. AI is fast, but it does not know what is right for this product — the design system is what told it what right meant, and the review is what made sure it got there. I wrote production front-end by hand for a year at HyperPlay before any of this, which is exactly why I can judge what it hands back.",
    ],
    notes: [
      { value: "90–95%", label: "Generated components matching the system first pass" },
      { value: "55", label: "Components designed, built and documented" },
      { value: "1y 3m", label: "Duration" },
    ],
  },
};
