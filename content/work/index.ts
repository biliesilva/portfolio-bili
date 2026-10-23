import type { WorkEntry, Discipline } from "../types";
import { heroic } from "./heroic";
import { hyperplay } from "./hyperplay";
import { coinfello } from "./coinfello";
import { starbreeze } from "./starbreeze";
import { flashflow } from "./flashflow";

export const caseStudies: WorkEntry[] = [
  heroic,
  hyperplay,
  coinfello,
  starbreeze,
  flashflow,
].sort((a, b) => a.order - b.order);

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);

export function getCaseStudy(slug: string): WorkEntry | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function adjacentCaseStudy(slug: string): WorkEntry {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  return caseStudies[(i + 1) % caseStudies.length];
}

export const disciplines: Discipline[] = [
  "Product Design",
  "UI/UX",
  "Design Systems",
  "Front-end",
];

/** Label shown on the index so the reader knows what kind of entry they are opening. */
export const kindLabel: Record<WorkEntry["kind"], string> = {
  "case-study": "Case study",
  role: "Role",
  project: "Personal project",
};
