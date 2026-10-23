import type { CaseStudy, Discipline } from "../types";
import { heroic } from "./heroic";
import { tradebook } from "./tradebook";
import { juriswed } from "./juriswed";
import { antagning } from "./antagning";
import { flashflow } from "./flashflow";

export const caseStudies: CaseStudy[] = [
  heroic,
  tradebook,
  juriswed,
  antagning,
  flashflow,
].sort((a, b) => a.order - b.order);

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function adjacentCaseStudy(slug: string): CaseStudy {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  return caseStudies[(i + 1) % caseStudies.length];
}

export const disciplines: Discipline[] = [
  "Product Design",
  "UI/UX",
  "Design Systems",
  "Front-end",
];
