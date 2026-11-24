export type Discipline = "Product Design" | "UI/UX" | "Front-end" | "Design Systems";

/**
 * Three kinds of entry, because not every piece of work can be told the same way:
 * - "case-study": public work, told in full — problem, decisions, outcome.
 * - "role":       employed work under NDA. Scope and practice, no client internals.
 * - "project":    independent apps, free to show.
 */
export type WorkKind = "case-study" | "role" | "project";

export type Media = {
  /** Path under /public, e.g. "/work/heroic/cover.jpg". Leave empty to render a labelled placeholder. */
  src?: string;
  alt: string;
  caption?: string;
  /** CSS aspect-ratio, e.g. "16/10" */
  aspect?: string;
  mobileSrc?: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type ProofLink = { label: string; href: string };

export type Decision = {
  title: string;
  problem: string;
  decision: string;
  why: string;
  links?: ProofLink[];
  media?: Media;
};

export type ChapterTone =
  | "heroic"
  | "coinfello"
  | "hyperplay"
  | "starbreeze"
  | "remote-work"
  | "heavy-muscle";

export type Brief = {
  problem: string;
  contribution: string;
  outcome: string;
};

export type ThemeSurface = { name: string; surface: string };

export type Comparison = { title: string; note: string; before: Media; after: Media };

export type Block =
  | { type: "compare"; title: string; intro: string; items: Comparison[] }
  | {
      type: "code";
      title: string;
      body: string[];
      code: string;
      caption: string;
      themes: ThemeSurface[];
      links?: ProofLink[];
    }
  | { type: "text"; title?: string; body: string[]; links?: ProofLink[]; media?: Media }
  | { type: "figure"; media: Media }
  | { type: "gallery"; title?: string; intro?: string; media: Media[] }
  | { type: "decisions"; title: string; items: Decision[] }
  | {
      type: "list";
      title: string;
      items: { title: string; body: string; links?: ProofLink[] }[];
    }
  | { type: "quote"; text: string; body?: string[] }
  | { type: "stats"; title: string; items: Metric[]; body?: string[] };

export type WorkEntry = {
  slug: string;
  kind: WorkKind;
  tone: ChapterTone;
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
  links?: ProofLink[];

  /* Meta bar */
  role: string;
  team: string;
  timeline: string;
  platforms: string[];
  stack: string[];

  cover: Media;
  panel?: Media;
  brief: Brief;
  blocks: Block[];
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
