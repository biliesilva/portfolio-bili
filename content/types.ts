export type Discipline = "Product Design" | "UI/UX" | "Front-end" | "Design Systems";

/**
 * Three kinds of entry, because not every piece of work can be told the same way:
 * - "case-study": public work, told in full — problem, decisions, outcome.
 * - "role":       employed work under NDA. Scope and practice, no client internals.
 * - "project":    personal work, free to show.
 */
export type WorkKind = "case-study" | "role" | "project";

export type Media = {
  /** Path under /public, e.g. "/work/heroic/cover.jpg". Leave empty to render a labelled placeholder. */
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

export type WorkEntry = {
  slug: string;
  kind: WorkKind;
  title: string;
  client: string;
  year: string;
  /** One line, outcome-first. Shown in the index and the hero. */
  summary: string;
  disciplines: Discipline[];
  featured: boolean;
  /** Lower comes first. */
  order: number;

  /**
   * What can and cannot be shown, stated plainly at the top of the page.
   * Saying so is more credible than quietly having nothing to show.
   */
  disclosure?: string;

  /* Meta bar */
  role: string;
  team: string;
  timeline: string;
  platforms: string[];
  stack: string[];

  cover: Media;

  /* Narrative — every section below is optional except context */
  context: string[];
  /** For role entries: what you owned, in your own words. */
  responsibilities?: { title: string; body: string; media?: Media }[];
  goal?: string;
  constraints?: string[];
  research?: { insight: string; detail: string }[];
  decisions?: Decision[];
  system?: { title: string; body: string[]; media?: Media };
  build?: { title?: string; body: string[]; notes: Metric[] };
  outcome?: {
    metrics?: Metric[];
    body: string[];
    quote?: { text: string; author: string; role: string };
  };
  reflection?: string[];
};

/** Kept as an alias so older imports keep reading naturally. */
export type CaseStudy = WorkEntry;

export type ResumeRole = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack?: string[];
};
