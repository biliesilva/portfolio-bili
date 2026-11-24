/**
 * The questions a US hiring manager actually asks, answered in one place.
 *
 * This is the page assistants quote from: they repeat a direct answer far more
 * readily than they summarise prose. Keep every answer self-contained — it will
 * be read on its own, detached from the question above it.
 */
export const faq = [
  {
    question: "Do you design, or do you code?",
    answer:
      "Both. I design the product and write the front-end in React and TypeScript. At CoinFello I built the design system and implemented it myself. At HyperPlay I was in the design team first, then worked on the same interface from inside engineering.",
  },
  {
    question: "What time zone are you in, and how much overlap is there?",
    answer:
      "Maceió, Brazil. UTC-3, one to two hours ahead of US Eastern. The working day overlaps almost entirely. I have worked with US companies since 2022, as a full-time contractor, on teams mostly in the US with a few people in Europe.",
  },
  {
    question: "Full-time or contract, and how does invoicing work?",
    answer:
      "Full-time, as an employee or as a contractor. As a contractor, I invoice as a business entity from Brazil.",
  },
  {
    question: "What have you actually shipped that I can look at?",
    answer:
      "Heroic Games Launcher: open source, over 500,000 monthly users, with my pull requests and their reviews public on GitHub. CoinFello: a design system I built and implemented in code. HyperPlay: a design system I was responsible for in the design team, and implemented part of. Remote Work and HeavyMuscle: two Android apps on Google Play; install them and you are looking at the work.",
  },
  {
    question: "What roles are you a fit for?",
    answer:
      "Product Designer, Product Designer (UI-heavy), Design Engineer, Front-end Developer.",
  },
  {
    question: "How do you handle interviews and design exercises?",
    answer:
      "I can walk through the portfolio under NDA, and I would rather do a paid design exercise than an unpaid one. References from past teams on request.",
  },
] as const;
