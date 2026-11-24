import type { Metadata } from "next";
import Link from "next/link";
import { ViewTransition } from "react";
import { notFound } from "next/navigation";
import {
  caseStudies,
  getCaseStudy,
  adjacentCaseStudy,
  kindLabel,
} from "@/content/work";
import manifest from "@/content/image-manifest.json";
import { cn } from "@/lib/cn";
import { MediaFrame } from "@/components/ui/media-frame";
import { CaseBlocks, CaseIndex } from "@/components/work/case-blocks";
import { ProofLinks } from "@/components/ui/proof-links";
import { PageJsonLd, ids } from "@/components/layout/json-ld";
import { site } from "@/content/site";
import type { WorkEntry } from "@/content/types";

type Props = { params: Promise<{ slug: string }> };

/**
 * `CreativeWork` rather than `Article` — these are projects, not posts. The
 * breadcrumb is what puts "Work › CoinFello" under the result instead of a
 * bare URL, and `author` ties every project back to the one Person node.
 */
function workSchema(study: WorkEntry) {
  const url = `${site.url}/work/${study.slug}`;
  const [startYear] = study.year.split(" to ");

  return {
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#work`,
        url,
        name: study.title,
        headline: `${study.title} | ${kindLabel[study.kind]}`,
        description: study.summary,
        abstract: study.summary,
        author: { "@id": ids.person },
        creator: { "@id": ids.person },
        isPartOf: { "@id": ids.website },
        inLanguage: "en",
        ...(study.cover.src ? { image: `${site.url}${study.cover.src}` } : {}),
        ...(/^\d{4}$/.test(startYear) ? { dateCreated: startYear } : {}),
        keywords: [...study.disciplines, ...study.stack, ...study.platforms].join(", "),
        about: study.disciplines.map((name) => ({ "@type": "Thing", name })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Work", item: `${site.url}/work` },
          { "@type": "ListItem", position: 3, name: study.title, item: url },
        ],
      },
    ],
  };
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      title: `${study.title} | ${kindLabel[study.kind]}`,
      description: study.summary,
      type: "article",
      url: `/work/${study.slug}`,
      // The project's own cover, so a shared link shows the work rather than
      // the same generic card six times over.
      ...(study.cover.src
        ? { images: [{ url: study.cover.src, alt: study.cover.alt }] }
        : {}),
    },
    ...(study.cover.src
      ? { twitter: { card: "summary_large_image" as const, images: [study.cover.src] } }
      : {}),
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const next = adjacentCaseStudy(study.slug);

  const coverWidth = (manifest as Record<string, { width: number }>)[study.cover.src ?? ""]?.width;
  const compactCover = coverWidth !== undefined && coverWidth < 1200;

  const meta = [
    { label: "Role", value: study.role },
    { label: "Team", value: study.team },
    { label: "Timeline", value: study.timeline },
    { label: "Platforms", value: study.platforms.join(", ") },
    { label: "Stack", value: study.stack.join(", ") },
  ];

  const brief = [
    { label: "Problem", value: study.brief.problem },
    { label: "My part", value: study.brief.contribution },
    { label: "Outcome", value: study.brief.outcome },
  ];

  return (
    <article data-chapter={study.tone}>
      <PageJsonLd data={workSchema(study)} />

      <header className="chapter">
        <div className="container-edge pt-32 pb-14 md:pt-40 md:pb-20">
          <p className="chapter-dim text-base">
            {kindLabel[study.kind]}
            <span className="mx-2" aria-hidden="true">/</span>
            {study.client}
            <span className="mx-2" aria-hidden="true">/</span>
            {study.year}
          </p>
          <ViewTransition name={`title-${study.slug}`} share="morph" default="none">
            <h1 className="mt-6 text-display font-medium">{study.title}</h1>
          </ViewTransition>
          <p className="mt-8 max-w-[48ch] text-lead">{study.summary}</p>
          <dl className="mt-14 grid gap-8 md:grid-cols-3">
            {brief.map((row) => (
              <div key={row.label} className="border-t border-current/30 pt-4">
                <dt className="chapter-dim text-base">{row.label}</dt>
                <dd className="mt-2 max-w-[44ch] text-lg leading-relaxed">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div
        className={cn(
          "container-edge pt-10 pb-14 md:pt-14 md:pb-16",
          compactCover && "grid gap-10 lg:grid-cols-12 lg:gap-12"
        )}
      >
        <ViewTransition name={`cover-${study.slug}`} share="morph" default="none">
        <div className={cn(compactCover && "lg:col-span-7")}>
          <MediaFrame
            media={study.cover}
            priority
            sizes={
              compactCover
                ? "(min-width: 1024px) 56vw, 94vw"
                : "(min-width: 1600px) 100rem, 94vw"
            }
          />
        </div>
        </ViewTransition>

        <section
          aria-label="Project details"
          className={cn(compactCover ? "lg:col-span-5" : "mt-14")}
        >
          <dl
            className={cn(
              "grid gap-x-8 gap-y-6 sm:grid-cols-2",
              !compactCover && "lg:grid-cols-5"
            )}
          >
            {meta.map((row) => (
              <div key={row.label}>
                <dt className="label">{row.label}</dt>
                <dd className="mt-1 leading-relaxed">{row.value}</dd>
              </div>
            ))}
          </dl>
          {study.disclosure ? (
            <div
              className={cn(
                "hairline mt-10 grid gap-x-12 gap-y-3 pt-6",
                !compactCover && "md:grid-cols-12"
              )}
            >
              <p className={cn("max-w-[68ch]", !compactCover && "md:col-span-7")}>
                <span className="label mr-2">What I can show</span>
                {study.disclosure}
              </p>
              <ProofLinks
                links={study.links}
                className={cn("text-accent", !compactCover && "md:col-span-5 md:justify-end")}
              />
            </div>
          ) : null}
        </section>
      </div>

      <CaseIndex blocks={study.blocks} />
      <CaseBlocks blocks={study.blocks} />

      <nav aria-label="Next case" data-chapter={next.tone} className="chapter">
        <Link
          href={`/work/${next.slug}`}
          className="group container-edge grid items-center gap-10 py-20 md:grid-cols-12 md:py-28"
        >
          <div className="md:col-span-6">
            <span className="chapter-dim text-base">Next</span>
            <ViewTransition name={`title-${next.slug}`} share="morph" default="none">
              <h2 className="mt-4 text-hero font-medium decoration-2 underline-offset-8 group-hover:underline group-focus-visible:underline">
              {next.title}
            </h2>
            </ViewTransition>
            <p className="mt-6 max-w-[44ch] text-lead">{next.summary}</p>
          </div>
          <div className="md:col-span-6">
            <MediaFrame
              media={{ ...(next.panel ?? next.cover), alt: "", caption: undefined }}
              sizes="(min-width: 768px) 46vw, 94vw"
            />
          </div>
        </Link>
      </nav>
    </article>
  );
}
