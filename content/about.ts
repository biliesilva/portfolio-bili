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
    "I'm a product designer and front-end developer from Maceió, Brazil. I've designed for a decade and I spent the last four years on game launchers — first as a product designer, then as the developer shipping the same interface.",
    "At HyperPlay I worked in the design team — research, interviews, prototypes, components, and responsibility for the design system — then joined the engineering team and worked on the same interface in React. At CoinFello I built the design system from scratch and implemented it myself. The through-line is the hand-off: I kept ending up on the other side of it, so eventually I stopped crossing back.",
    "I wrote production front-end for a year before I used AI for any of it. I use it daily now and review everything it produces, but that order matters — you can't review what an assistant writes if you've never built the thing yourself.",
    "The work I can show you in full is open source. In 2020 I led the validation research — desk research and interviews with Linux users — that established Heroic Games Launcher was worth building. It now has over 500,000 monthly users, and I've designed for it ever since, and written its front-end since 2025. Every decision I made there is a public pull request you can read, argue with, and check against what I say here.",
    "I also hold a law degree, and passed the Brazilian bar exam in 2018 while I was still finishing it. I interned in small claims courts, the regional labour court and the public prosecutor's office. Legal training taught me to read something dense and badly organised, work out what it actually commits you to, and argue a position in writing to someone who starts out disagreeing — which turns out to be most of product design.",
    "I am taking that into digital law: data protection, AI and blockchain. Those are the rules the products I design already run on, so the two halves answer to each other rather than compete. It is the reason a fintech and a web3 launcher felt like familiar ground rather than a compliance minefield — and the reason I am the person on a team who will actually read the data processing agreement.",
    "Before that I did quality-of-life UI on Payday 2 at Starbreeze in Stockholm, making the game's 2D assets in Photoshop and Illustrator and bringing them into the build myself. And before that, years of freelance in Brazil building client sites on WordPress and Joomla — designing them and shipping them. That is where the habit started, and I have not managed to shake it.",
    "I lived in Europe until 2026 — Stockholm among other places — and work from Maceió now. English, Portuguese and Spanish, remote since 2022 with teams spread across the US, Europe and Latin America.",
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
    { year: "2025 — 2026", event: "Front-end Developer, CoinFello (US) — owned the design system" },
    { year: "2024 — 2026", event: "Front-end Developer, HyperPlay (Texas, US)" },
    { year: "2022 — 2025", event: "Product Designer, HyperPlay — owned the design system" },
    { year: "2021 — 2022", event: "UI/UX Designer, Starbreeze Entertainment — Payday 2, on-site in Stockholm" },
    { year: "2020 — now", event: "Validation research, design & front-end, Heroic Games Launcher — 500k+ monthly users" },
    { year: "2016 — 2018", event: "Freelance UI Designer, Alagoas — alongside law school" },
    { year: "2012 — 2014", event: "Career break — full-time parenting, and the start of law school" },
    { year: "2018", event: "Law degree and Brazilian bar exam, passed in my final year" },
    { year: "2010 — 2012", event: "Graphic and web design, Brazil — where it started" },
  ],
} as const;
