/**
 * Written from your LinkedIn and your public work.
 * TODO (Bili): read the bio out loud. Anything that does not sound like you,
 * rewrite — this is the page where a hiring manager decides whether to reply.
 */
export const about = {
  headline: "I design the thing, then I build the thing.",
  portrait: {
    src: "", // TODO: add a portrait to /public/about/portrait.jpg
    alt: "Portrait of Biliane Silva",
    aspect: "4/5",
  },
  bio: [
    "I'm a product designer and front-end developer from Maceió, Brazil. I've designed for a decade and I spent the last four years on game launchers — first as a product designer, then as the developer shipping the same interface.",
    "At HyperPlay I owned the design system as a product designer for over two years, then joined the engineering team and implemented it myself. At CoinFello I owned the design system again, this time from inside engineering. The through-line is the hand-off: I kept ending up on the other side of it, so eventually I stopped crossing back.",
    "The work I can show you in full is open source. I've contributed design to Heroic Games Launcher since 2020 and front-end code since 2025 — a games launcher with 12,500+ GitHub stars where every decision I made is a public pull request you can read, argue with, and check against what I say here.",
    "Before that I designed game UI for Payday 2 at Starbreeze in Stockholm. Before that, brand and web work in Brazil. I work in English, Portuguese and Spanish, remotely with US teams since 2022.",
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
      body: "Screens are instances. Tokens, components and documented states are what keep the twentieth screen as good as the first — and I've owned that system twice.",
    },
    {
      title: "Accessibility is a requirement",
      body: "Contrast, focus order, keyboard paths and reduced-motion are part of the definition of done — not a pass someone does later.",
    },
    {
      title: "AI moves the slow parts, not the judgement",
      body: "I use AI daily and review everything it produces as if a junior wrote it. What to build, what the component should do, and what to refuse stays mine.",
    },
    {
      title: "Write the rationale down",
      body: "Working remotely across time zones means the argument has to survive without me in the room. Every decision gets a written why.",
    },
  ],
  tools: [
    { group: "Design", items: ["Figma", "Figma variables", "Prototyping", "Adobe CC", "FigJam"] },
    { group: "Code", items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "SCSS", "Electron", "Docker"] },
    { group: "Process", items: ["Git & code review", "AI-assisted workflow", "Design systems", "Analytics", "Async writing"] },
  ],
  timeline: [
    { year: "2025 — 2026", event: "Front-end Developer, CoinFello (US) — owned the design system" },
    { year: "2024 — 2026", event: "Front-end Developer, HyperPlay (Texas, US)" },
    { year: "2022 — 2025", event: "Product Designer, HyperPlay — owned the design system" },
    { year: "2021 — 2022", event: "UI/UX Designer, Starbreeze Entertainment — Payday 2, Stockholm" },
    { year: "2020 — now", event: "Design & front-end contributor, Heroic Games Launcher (open source)" },
    { year: "2016 — 2018", event: "Freelance UI Designer, Alagoas" },
    { year: "2010 — 2012", event: "Graphic and web design, Brazil — where it started" },
  ],
} as const;
