import type { CaseStudy } from "../types";

/**
 * DRAFT — the structure is final, the narrative is a scaffold.
 * Replace the copy, metrics and quotes with the real ones before publishing.
 */
export const tradebook: CaseStudy = {
  slug: "tradebook",
  title: "TradeBook",
  client: "Self-initiated product",
  year: "2024",
  summary:
    "A marketplace for donating, earning and swapping used books — taken from a messy WhatsApp habit to a product with a working economy.",
  disciplines: ["Product Design", "UI/UX", "Front-end"],
  featured: true,
  order: 1,

  role: "Product designer & front-end developer",
  team: "Solo, with 2 developers on the back end",
  timeline: "14 weeks",
  platforms: ["Responsive web", "iOS (PWA)"],
  stack: ["Figma", "React", "TypeScript", "Tailwind CSS"],

  cover: {
    src: "",
    alt: "TradeBook listing and exchange flow shown across mobile and desktop",
    aspect: "16/10",
  },

  context: [
    "Book swapping in Brazil mostly happens in group chats: someone posts a photo, twelve people reply, and the person who answers fastest wins. Nobody tracks what was promised, shipping is improvised, and the person who gives away five books gets nothing back.",
    "TradeBook started as my own frustration with that. The question was not “can we build a marketplace” — it was whether a swap economy could work without money changing hands most of the time.",
  ],
  goal:
    "Let someone list a book in under a minute and complete a fair exchange without a single direct-message negotiation.",
  constraints: [
    "No payment processing in v1 — the economy had to run on credits",
    "Mobile-first: 80% of early testers browsed on a phone, standing in a bookshop",
    "Two back-end developers, eight weeks of build time",
  ],

  research: [
    {
      insight: "People trust the book, not the platform",
      detail:
        "In 9 of 12 interviews, the first question about a listing was about condition. Photos of the spine mattered more than any seller rating.",
    },
    {
      insight: "Negotiation is the cost, not the fun",
      detail:
        "Every participant described the back-and-forth as the worst part. They wanted a price, not a conversation.",
    },
    {
      insight: "Giving needs an immediate reward",
      detail:
        "Donors stopped donating when nothing visible happened. The credit had to land the moment the book was handed over.",
    },
  ],

  decisions: [
    {
      title: "Credits instead of chat",
      problem:
        "Direct negotiation was the single biggest drop-off point in the paper prototype — people opened a thread and never came back.",
      decision:
        "Every book is priced in credits by condition and demand, set at listing time. Accepting a swap is one tap, no messaging.",
      why:
        "Removing the conversation removed the drop-off. In testing, time from “interested” to “agreed” fell from days to seconds.",
      media: { src: "", alt: "Credit pricing component with condition selector", aspect: "4/3" },
    },
    {
      title: "Listing by camera, not by form",
      problem:
        "The first listing flow was a seven-field form. Four of twelve testers abandoned it halfway.",
      decision:
        "The flow starts at the camera: shoot the cover, confirm the auto-detected title, pick a condition chip. Everything else is optional.",
      why:
        "The hard part of listing is typing on a phone. Making the photo the entry point cut the required fields from seven to two.",
      media: { src: "", alt: "Three-step camera-first listing flow", aspect: "4/3" },
    },
    {
      title: "Condition as a visual vocabulary",
      problem:
        "“Good” meant something different to every tester, which made credit pricing feel arbitrary and unfair.",
      decision:
        "Five condition tiers, each illustrated with a real photo reference and a plain-language definition shown at the moment of choosing.",
      why:
        "Shared vocabulary is what makes a credit price feel earned rather than imposed. Disputes in the pilot dropped to near zero.",
      media: { src: "", alt: "Condition tier scale with photographic references", aspect: "16/9" },
    },
  ],

  system: {
    title: "A small system, documented enough to hand over",
    body: [
      "TradeBook ships with 34 components built on a three-tier token set — primitives, semantic aliases, and component-level overrides. Every interactive component documents its hover, focus-visible, loading, empty, error and disabled states.",
      "Because two developers were consuming the library, the Figma structure mirrors the React one exactly: same names, same props, same variant order. Hand-off meetings became code reviews.",
    ],
    media: { src: "", alt: "Token architecture and component library overview", aspect: "16/9" },
  },

  build: {
    body: [
      "I built the front end myself: React with TypeScript, Tailwind for the token layer, and optimistic UI on every swap action so the interaction feels instant on a slow mobile connection.",
      "Images are the whole product, so they got the whole budget: responsive sources, blurred placeholders, and lazy loading below the fold.",
    ],
    notes: [
      { value: "98", label: "Lighthouse performance" },
      { value: "1.1s", label: "Largest Contentful Paint (4G)" },
      { value: "AA", label: "WCAG 2.2 conformance" },
    ],
  },

  outcome: {
    metrics: [
      { value: "-72%", label: "Time from interest to agreed swap" },
      { value: "2.3", label: "Swaps per active user, first month" },
      { value: "61%", label: "Listings completed in under 60s" },
    ],
    body: [
      "The credit economy held. In a 6-week pilot with 140 users, books circulated without a single payment, and the donors who received credits immediately were the ones who came back.",
    ],
    quote: {
      text: "Placeholder — replace with a real quote from a pilot user or stakeholder.",
      author: "Pilot participant",
      role: "TODO",
    },
  },

  reflection: [
    "I priced credits with a formula when I should have let the market do it. A simple supply signal would have handled rare books better than my table of condition tiers.",
    "I would also test the camera-first flow earlier. It was the change with the biggest effect and I built it in week nine.",
  ],
};
