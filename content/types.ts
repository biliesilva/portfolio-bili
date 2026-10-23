export type Discipline = "Product Design" | "UI/UX" | "Front-end" | "Design Systems";

export type Media = {
  /** Path under /public, e.g. "/work/tradebook/cover.jpg". Leave empty to render a labelled placeholder. */
  src?: string;
  alt: string;
  caption?: string;
  /** CSS aspect-ratio, e.g. "16/10" */
  aspect?: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type Decision = {
  title: string;
  problem: string;
  decision: string;
  why: string;
  media?: Media;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  year: string;
  /** One line, outcome-first. Shown in the index and the hero. */
  summary: string;
  disciplines: Discipline[];
  featured: boolean;
  /** Lower comes first. */
  order: number;
  /** True when the real work is under NDA and the page shows a redacted version. */
  nda?: boolean;

  /* Meta bar */
  role: string;
  team: string;
  timeline: string;
  platforms: string[];
  stack: string[];

  cover: Media;

  /* Narrative */
  context: string[];
  goal: string;
  constraints: string[];
  research?: { insight: string; detail: string }[];
  decisions: Decision[];
  system?: { title: string; body: string[]; media?: Media };
  build?: { body: string[]; notes: Metric[] };
  outcome: {
    metrics: Metric[];
    body: string[];
    quote?: { text: string; author: string; role: string };
  };
  reflection: string[];
};

export type PlaygroundItem = {
  title: string;
  year: string;
  blurb: string;
  tags: string[];
  href?: string;
  media?: Media;
};

export type ResumeRole = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack?: string[];
};
