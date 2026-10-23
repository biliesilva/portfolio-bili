import type { CaseStudy } from "../types";

/** DRAFT — structure is final, narrative is a scaffold. Replace before publishing. */
export const antagning: CaseStudy = {
  slug: "university-admissions-redesign",
  title: "University Admissions, Sweden",
  client: "Self-initiated redesign",
  year: "2022",
  summary:
    "An unsolicited redesign of the Swedish university application portal, rebuilt around the question every applicant actually asks: am I going to get in?",
  disciplines: ["UI/UX", "Product Design"],
  featured: true,
  order: 3,

  role: "Product designer",
  team: "Solo",
  timeline: "6 weeks",
  platforms: ["Responsive web"],
  stack: ["Figma", "Design tokens", "WCAG 2.2"],

  cover: { src: "", alt: "Redesigned admissions portal across breakpoints", aspect: "16/10" },

  context: [
    "I applied through the Swedish admissions portal myself as an international applicant. The information was all there and still I could not answer a basic question: with my grades, for this programme, what are my chances?",
    "This was a self-initiated redesign — no client, no brief. I picked it because the constraints are real: public service, multilingual users, legal accuracy, and an audience that cannot simply churn.",
  ],
  goal:
    "Let an applicant understand their standing and their next required action without reading a single help page.",
  constraints: [
    "Public-sector content cannot be simplified into inaccuracy",
    "Users include international applicants reading in a second language",
    "Accessibility is a legal requirement, not a nice-to-have",
  ],

  research: [
    {
      insight: "Selection groups are the comprehension cliff",
      detail: "The portal exposes the mechanism (selection groups, merit ratings) without translating it into a prediction. Applicants compensate with forum rumours.",
    },
    {
      insight: "Deadlines are scattered",
      detail: "The applicant has to reconstruct a timeline from several pages. Missing a document deadline is the most common avoidable failure.",
    },
  ],

  decisions: [
    {
      title: "One status answer, above everything else",
      problem: "The dashboard listed data but never answered “where do I stand”.",
      decision: "A single status block per application: your merit rating, last year's admission threshold, and a plain-language reading of the gap.",
      why: "The same public data, arranged to answer the question instead of describing the system.",
      media: { src: "", alt: "Application status block with merit rating and threshold", aspect: "4/3" },
    },
    {
      title: "A timeline with one next action",
      problem: "Deadlines lived on different pages, so applicants built spreadsheets.",
      decision: "A single chronological timeline across all applications, with exactly one highlighted next action.",
      why: "Reduces the task to “do this now” while keeping the full schedule available.",
      media: { src: "", alt: "Unified application timeline with next action", aspect: "16/9" },
    },
    {
      title: "Plain language next to legal language",
      problem: "Rewriting statutory content risks inaccuracy; leaving it risks incomprehension.",
      decision: "A two-layer pattern: plain-language summary first, exact official wording expandable underneath, always available.",
      why: "Comprehension for the applicant, accuracy for the institution. Neither has to lose.",
    },
  ],

  outcome: {
    metrics: [
      { value: "TODO", label: "Comprehension in unmoderated test" },
      { value: "AA", label: "WCAG 2.2 target met in audit" },
      { value: "TODO", label: "Time to find next required action" },
    ],
    body: [
      "TODO — add what you measured. Even a 5-person comprehension test on the original versus the redesign makes this case study land.",
    ],
  },

  reflection: [
    "A self-initiated redesign has to earn its place with evidence, not taste. The version of this case study worth reading is the one with the comparison test in it.",
  ],
};
