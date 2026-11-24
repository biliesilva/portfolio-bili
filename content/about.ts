/**
 * Written from your LinkedIn and your public work.
 * TODO (Bili): read the bio out loud. Anything that does not sound like you,
 * rewrite — this is the page where a hiring manager decides whether to reply.
 */
export const about = {
  headline: "I design the thing, then I build the thing.",
  portrait: {
    src: "/about/portrait.jpg",
    alt: "Biliane Silva at her desk in Maceió, Brazil",
    aspect: "4/5",
  },
  bio: [
    "I'm a product designer and front-end developer from Maceió, Brazil. I have six years in product design, and more than ten if you count my work as a UI and graphic designer. Much of it has been on game launchers, first designing them and then shipping the same interface in code.",
    "I was at HyperPlay from the start, as one of its first designers. I worked in the design team on research, prototypes and the design system, then in front-end on the same interface in React, and I did player support too, which helped me understand the product as a whole. At CoinFello I built the design system and implemented it myself. I kept ending up on the other side of the hand-off, so eventually I stopped crossing back.",
    "The work I can show in full is open source. In 2020 I led the validation research for Heroic Games Launcher, with desk research and interviews with Linux users. It now has over 500,000 monthly users. I did all of its visual design at the beginning. While I worked full time at other companies and startups, much of it was changed by UI contributions I could not control. I have written its front-end since 2025, and led the redesign that rebuilt it around a design system.",
    "In 2021 and 2022 I was at Starbreeze in Stockholm, doing quality-of-life UI on Payday 2. Two features I suggested after reading player comments, the motion sickness dot and the down counter, shipped in Update 217. I also made 2D assets and brought them into the build myself. Before that came years of freelance in Brazil, designing client sites and shipping them.",
    "I use AI daily to reach something reviewable sooner. When AI is the product, I design it as I would any system people have to trust: make its limits legible, and give people feedback and control.",
    "I also hold a law degree and passed the Brazilian bar exam in 2018. Legal training taught me to read something dense, work out what it commits you to, and argue a position in writing to someone who disagrees. I am taking that into digital law: data protection, AI and blockchain, which are the rules the products I design run on.",
    "I lived in Europe from 2019 to 2026. At Starbreeze I was an employee in Stockholm. For HyperPlay and CoinFello I was a full-time contractor, working remotely from Sweden and later Portugal, with teams mostly in the US. I work from Brazil now.",
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
      body: "Contrast, focus order, keyboard paths and reduced-motion are part of the definition of done, not a pass someone does later. I learned this as a user: I get motion sickness from first-person games, and at Starbreeze I proposed the fix I personally needed.",
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
    { year: "2025 to 2026", event: "Front-end Developer, CoinFello (US), built and implemented the design system" },
    { year: "2024 to 2025", event: "Front-end Developer, HyperPlay (Texas, US)" },
    { year: "2022 to 2024", event: "Product Designer, HyperPlay, one of the first designers, responsible for the design system" },
    { year: "2021 to 2022", event: "UI/UX Designer, Starbreeze Entertainment. Payday 2, on-site in Stockholm" },
    { year: "2020 to now", event: "Heroic Games Launcher: validation research and visual design from the start, front-end since 2025" },
    { year: "2019 to 2026", event: "Living in Europe, Stockholm among other places" },
    { year: "2018", event: "Law degree and Brazilian bar exam, passed in my final year" },
    { year: "2016 to 2018", event: "Freelance UI Designer, Alagoas, alongside law school" },
    { year: "2012 to 2014", event: "Career break: full-time parenting, and the start of law school" },
    { year: "2010 to 2012", event: "Graphic and web design, Brazil, where it started" },
  ],
} as const;
