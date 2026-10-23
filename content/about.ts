/**
 * DRAFT copy — written in your voice from what is public about you.
 * Read it out loud and rewrite anything that does not sound like you,
 * especially the second paragraph.
 */
export const about = {
  headline: "I design the thing, then I build the thing.",
  portrait: {
    src: "", // TODO: add a portrait to /public/about/portrait.jpg
    alt: "Portrait of Biliane Silva",
    aspect: "4/5",
  },
  bio: [
    "I'm a product designer and front-end developer. For seven years I've worked on the part of the job most people split in two: understanding what a product should do, and then writing the code that makes it real.",
    "I started in UI design and kept running into the same wall — the hand-off. A design would be specified, approved, and then quietly simplified in implementation, and nobody in the room could say exactly where it went wrong. So I learned to build. Now I design in Figma and ship in TypeScript, which means the conversation with engineers is about trade-offs instead of translation.",
    "The clearest example of how I work is public: I contribute design and front-end work to Heroic Games Launcher, an open-source games launcher with 12,500+ stars. No brief, no client — I opened a redesign as a sequence of reviewable pull requests and defended every decision in the open, including the ones I lost.",
    "I'm based in Brazil and work with teams in the US and Europe, in English, Portuguese and Spanish.",
  ],
  principles: [
    {
      title: "The problem before the pixels",
      body: "Most design debates are really unstated disagreements about the problem. I'd rather spend the first week on framing than the last month on revisions.",
    },
    {
      title: "Ship it or it didn't happen",
      body: "A design that never survives implementation is a document, not a product. I measure my work by what is in production, not what is in the file.",
    },
    {
      title: "Systems over screens",
      body: "Screens are instances. Tokens, components and documented states are what keep the twentieth screen as good as the first.",
    },
    {
      title: "Accessibility is a requirement",
      body: "Contrast, focus order, keyboard paths and reduced-motion are part of the definition of done — not a pass someone does later.",
    },
    {
      title: "Write the rationale down",
      body: "Working remotely across time zones means the argument has to survive without me in the room. Every decision gets a written why.",
    },
  ],
  tools: [
    { group: "Design", items: ["Figma", "Figma variables", "Prototyping", "Maze", "FigJam"] },
    { group: "Code", items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "SCSS", "GSAP", "Motion"] },
    { group: "Process", items: ["Git & code review", "Storybook", "Linear / Jira", "Notion", "Analytics"] },
  ],
  // TODO: verify and extend — this is what recruiters cross-check against LinkedIn.
  timeline: [
    { year: "2025 — now", event: "Open-source design & front-end contributor, Heroic Games Launcher" },
    { year: "2025 — 2026", event: "Postgraduate studies in front-end development, Rocketseat" },
    { year: "TODO", event: "TODO — your most recent role" },
    { year: "2021", event: "Digital design fundamentals, Hyper Island" },
    { year: "TODO", event: "TODO — where it started" },
  ],
} as const;
