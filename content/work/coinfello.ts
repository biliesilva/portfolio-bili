import type { WorkEntry } from "../types";

export const coinfello: WorkEntry = {
  slug: "coinfello",
  kind: "role",
  tone: "coinfello",
  title: "CoinFello",
  client: "CoinFello, United States",
  year: "2025 to 2026",
  summary:
    "I built the design system for a DeFi agent, wrote it in code, and set it up so other developers and AI tools built on it without redoing components.",
  disciplines: ["Design Systems", "Front-end", "UI/UX"],
  featured: true,
  order: 2,

  disclosure:
    "Confidential contract work. I can show design system components with placeholder content and the publicly released app. Results and internal material are confidential.",

  role: "Front-end Developer & Design System Owner",
  team: "Mostly in the US, with a few people in Europe. I worked remotely as a full-time contractor",
  timeline: "1 year 3 months",
  platforms: ["Web"],
  stack: ["TypeScript", "React", "SCSS", "Mantine", "Design tokens", "Figma MCP"],

  cover: {
    src: "/work/coinfello/app-main.jpg",
    alt: "The CoinFello app: an Ask Fello prompt field with a yellow primary button, above strategy template cards showing fee APR, risk level and TVL",
    caption: "The public app, built from the system",
    aspect: "2250/1400",
  },

  brief: {
    problem:
      "Features shipped every day, on every screen size. At that pace nobody can keep an interface consistent by reviewing screens.",
    contribution:
      "I designed the system in Figma, coded a good part of its first atomic components myself, and later wrote the rules AI tools follow in the codebase.",
    outcome:
      "With the rules set in code and in Figma, the other developers did not need to create components or correct them.",
  },

  blocks: [
    {
      type: "text",
      body: [
        "CoinFello answers questions about assets and protocols, executes swaps and staking, and runs recurring strategies inside limits the user sets. I came straight from HyperPlay: same group, new product.",
        "I joined as a front-end developer and built the system from zero: tokens, components and conventions. Then I implemented it in code.",
      ],
    },
    {
      type: "gallery",
      title: "55 components, in Figma and in code",
      intro:
        "Each component carries its own states and its own breakpoints. A screen assembled from them is responsive before anyone thinks about it.",
      media: [
        {
          src: "/work/coinfello/button-states.jpg",
          alt: "The CoinFello button in brand, secondary, tertiary and danger variants, across default, hover, pressed, focus and disabled states",
          caption: "Button: variant by state",
          aspect: "1020/1000",
        },
        {
          src: "/work/coinfello/alert-tones.jpg",
          alt: "CoinFello alert cards in error, warning, success, info and brand tones, each with its own icon",
          caption: "Alert: tone is a property, not five components",
          aspect: "1070/1370",
        },
      ],
    },
    {
      type: "text",
      title: "The system as context for AI",
      body: [
        "I designed the first atomic components and added a good part of them to the code myself. Only after about three months did we start testing AI for this work.",
        "By then the system existed, so I wrote it down for the machine as well as for people. A CLAUDE.md file in the repository described the tokens, the naming, the component structure and the responsive rules. Through the Figma MCP, the agent read a component from the design file instead of guessing from a screenshot.",
        "From there, I kept designing each component and its states in Figma, and the agent generated the React component from them, with that file as the rulebook. I reviewed what came back as I would review a junior developer's pull request.",
        "When I set the rules up, I estimated that 70 to 85% of a generated component matched the system on the first pass. It is my estimate from that work, not an instrumented metric. The result I could see was in the team: the other developers did not have to create components or fix them, because the rules were already in the code and in Figma.",
      ],
    },
    {
      type: "list",
      title: "Three choices that held it together",
      items: [
        {
          title: "The component is the fastest way to build",
          body: "When using the system is less work than going around it, consistency stops depending on anyone remembering.",
        },
        {
          title: "Responsive in the component, not in the page",
          body: "Breakpoints are solved once, where the component lives, instead of on every screen that uses it.",
        },
        {
          title: "Design and code by the same person",
          body: "A system in a file and a system in a codebase drift apart. Here there was no specification to interpret differently.",
        },
      ],
    },
  ],
};
