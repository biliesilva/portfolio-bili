import type { WorkEntry, Discipline } from "../types";
import { hyperplay } from "./hyperplay";
import { coinfello } from "./coinfello";
import { heroic } from "./heroic";
import { starbreeze } from "./starbreeze";
import { remoteWork } from "./remote-work";
import { heavyMuscle } from "./heavy-muscle";

/**
 * Six entries, deliberately. Everything else lives on LinkedIn — a portfolio
 * that gives equal weight to a 2010 internship is a portfolio nobody finishes.
 */
export const caseStudies: WorkEntry[] = [
  hyperplay,
  coinfello,
  heroic,
  starbreeze,
  remoteWork,
  heavyMuscle,
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
