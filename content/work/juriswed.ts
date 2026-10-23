import type { CaseStudy } from "../types";

/** DRAFT — structure is final, narrative is a scaffold. Replace before publishing. */
export const juriswed: CaseStudy = {
  slug: "juriswed",
  title: "Juriswed",
  client: "Juriswed",
  year: "2023",
  summary:
    "A professional network for the legal field, designed around the one thing lawyers actually trade: referrals.",
  disciplines: ["Product Design", "UI/UX"],
  featured: true,
  order: 2,

  role: "Product designer",
  team: "Founder, 1 back-end developer, 1 front-end developer",
  timeline: "10 weeks",
  platforms: ["iOS", "Android", "Responsive web"],
  stack: ["Figma", "Maze", "Design tokens"],

  cover: { src: "", alt: "Juriswed feed, profile and referral flows", aspect: "16/10" },

  context: [
    "The brief was “LinkedIn for lawyers”. That framing had already produced two abandoned prototypes, because a generic social feed gives a lawyer nothing they cannot get elsewhere.",
    "Interviews pointed somewhere narrower: the valuable, badly-served behaviour was passing a case to someone in another jurisdiction or specialism and trusting it would be handled.",
  ],
  goal:
    "Make a referral between two lawyers who have never met take less than two minutes and leave a record both sides can rely on.",
  constraints: [
    "Professional-conduct rules differ by jurisdiction — the product cannot imply fee-splitting",
    "Users are time-poor and distrust consumer-style social patterns",
    "Mobile-first, with a web client for document-heavy work",
  ],

  research: [
    {
      insight: "Credentials beat follower counts",
      detail: "Every interviewee verified bar registration and specialism before anything else. Social proof in the consumer sense was actively off-putting.",
    },
    {
      insight: "The feed was a distraction",
      detail: "Nobody asked for a timeline. They asked to find the right person in a specific city, fast.",
    },
  ],

  decisions: [
    {
      title: "Search-first, not feed-first",
      problem: "A social feed was the default assumption and it buried the one job users came to do.",
      decision: "The home screen is a structured search — jurisdiction, specialism, availability — with the feed demoted to a secondary tab.",
      why: "Matching the information architecture to the actual job removed three taps from the core task.",
      media: { src: "", alt: "Search-first home screen with jurisdiction and specialism filters", aspect: "4/3" },
    },
    {
      title: "Verification as a visible layer",
      problem: "Trust between strangers was the blocker, and a self-written bio does not create it.",
      decision: "Bar registration, specialism and languages became verified fields with distinct visual treatment, separated from self-authored content.",
      why: "Users could tell at a glance what the platform had checked and what the person simply claimed.",
      media: { src: "", alt: "Profile with verified credential block", aspect: "4/3" },
    },
    {
      title: "Referral as a first-class object",
      problem: "Handing over a case was happening in chat, leaving no record of scope or acceptance.",
      decision: "A referral is a structured object with scope, deadline, status and an accept/decline action — not a message.",
      why: "Both sides get an auditable trail, and the product stays clear of implying a fee arrangement.",
      media: { src: "", alt: "Referral object with scope, status and accept action", aspect: "16/9" },
    },
  ],

  outcome: {
    metrics: [
      { value: "TODO", label: "Task success in usability testing" },
      { value: "TODO", label: "Referrals completed in pilot" },
      { value: "-3", label: "Taps to the core task" },
    ],
    body: [
      "TODO — replace with the real result: validation findings, pilot numbers, or what the team shipped from the spec.",
    ],
  },

  reflection: [
    "Pushing back on “LinkedIn for lawyers” in week one was the highest-value thing I did, and I almost did not do it.",
    "I would have tested the referral object as a paper form before designing screens for it.",
  ],
};
