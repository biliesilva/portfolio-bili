import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import {
  caseStudies,
  getCaseStudy,
  adjacentCaseStudy,
  kindLabel,
} from "@/content/work";
import { MediaFrame } from "@/components/ui/media-frame";
import { cn } from "@/lib/cn";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";

type Props = { params: Promise<{ slug: string }> };

/** "9/16" and the like — taller than it is wide. */
function isPortrait(aspect?: string) {
  if (!aspect) return false;
  const [w, h] = aspect.split("/").map(Number);
  return Boolean(w && h && h > w);
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
      title: `${study.title} — ${kindLabel[study.kind]}`,
      description: study.summary,
      type: "article",
    },
  };
}

/**
 * The shell renders instantly; the slug-dependent article streams into it.
 * Direct visits still get fully prerendered HTML — every slug is known at
 * build time through generateStaticParams.
 */
export default function CaseStudyPage({ params }: Props) {
  return (
    <Suspense fallback={<CaseStudySkeleton />}>
      <CaseStudyArticle params={params} />
    </Suspense>
  );
}

function CaseStudySkeleton() {
  return (
    <div className="container-edge pt-36 pb-12 md:pt-44" aria-hidden="true">
      <div className="hairline pt-6">
        <div className="h-3 w-40 animate-pulse rounded-full bg-ink-raised" />
        <div className="mt-12 h-20 w-3/4 animate-pulse rounded-sm bg-ink-raised" />
        <div className="mt-8 h-4 w-1/2 animate-pulse rounded-full bg-ink-raised" />
        <div className="mt-12 aspect-[16/10] w-full animate-pulse rounded-sm bg-ink-raised" />
      </div>
    </div>
  );
}

async function CaseStudyArticle({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const next = adjacentCaseStudy(study.slug);

  const meta = [
    { label: "Role", value: study.role },
    { label: "Team", value: study.team },
    { label: "Timeline", value: study.timeline },
    { label: "Platforms", value: study.platforms.join(", ") },
    { label: "Stack", value: study.stack.join(", ") },
  ];

  // Sections vary by entry kind, so the numbering is counted rather than hardcoded.
  let step = 0;
  const n = () => String(++step).padStart(2, "0");

  return (
    <article>
      {/* Hero */}
      <header className="container-edge pt-36 pb-12 md:pt-44">
        <div className="hairline pt-6">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <span className="label">
              {kindLabel[study.kind]} — {study.client}
            </span>
            <span className="label">{study.disciplines.join(" · ")}</span>
          </div>
          <RevealWords
            as="h1"
            text={study.title}
            className="mt-10 text-display font-medium"
          />
          <Reveal delay={0.15} className="mt-10 max-w-[56ch]">
            <p className="text-lead text-bone-dim">{study.summary}</p>
          </Reveal>

          {study.disclosure ? (
            <Reveal delay={0.25} className="mt-10">
              <p className="max-w-[64ch] border-l-2 border-accent pl-5 text-base leading-relaxed text-bone-dim">
                <span className="label mr-2 text-accent">What I can show</span>
                {study.disclosure}
              </p>
            </Reveal>
          ) : null}
        </div>
      </header>

      <div className="container-edge">
        <MediaFrame
          media={study.cover}
          priority
          sizes="(min-width: 1024px) 90vw, 100vw"
        />
      </div>

      {/* Meta bar */}
      <section className="container-edge py-20">
        <dl className="grid gap-px bg-ink-line md:grid-cols-5">
          {meta.map((row) => (
            <div key={row.label} className="bg-ink p-6">
              <dt className="label">{row.label}</dt>
              <dd className="mt-3 text-base leading-relaxed">{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Context, goal, constraints */}
      <section className="container-edge py-16">
        <div className="grid gap-16 md:grid-cols-12">
          <div
            className={
              study.goal || study.constraints?.length
                ? "md:col-span-7"
                : "md:col-span-10"
            }
          >
            <SectionHead index={n()} label="Context" />
            <div className="mt-10 space-y-6">
              {study.context.map((paragraph, i) => (
                <Reveal key={i}>
                  <p className="max-w-[62ch] text-lead">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {study.goal || study.constraints?.length ? (
            <div className="md:col-span-4 md:col-start-9">
              {study.goal ? (
                <div className="hairline pt-6">
                  <span className="label">The goal</span>
                  <p className="mt-6 text-title">{study.goal}</p>
                </div>
              ) : null}
              {study.constraints?.length ? (
                <div className="hairline mt-10 pt-6">
                  <span className="label">Constraints</span>
                  <ul className="mt-6 space-y-4">
                    {study.constraints.map((constraint) => (
                      <li key={constraint} className="flex gap-3 text-base text-bone-dim">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                        {constraint}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

      {/* What I owned — the honest shape for employed work */}
      {study.responsibilities?.length ? (
        <section className="container-edge py-16">
          <SectionHead index={n()} label="What I owned" title="Scope, in my own words." />
          <div className="mt-16">
            {study.responsibilities.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="hairline py-8">
                  <div className="grid gap-6 md:grid-cols-12">
                    <span className="holo-text font-display text-2xl font-medium leading-none tabular-nums md:col-span-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-title md:col-span-5">{item.title}</h3>
                    <p className="max-w-[54ch] text-bone-dim md:col-span-6">
                      {item.body}
                    </p>
                  </div>
                  {item.media ? (
                    <div
                      className={cn(
                        "mt-10 md:ml-[8.333%]",
                        // A phone screenshot blown up to full width is both odd
                        // and soft; portrait media gets a narrow column.
                        isPortrait(item.media.aspect)
                          ? "md:w-[34%]"
                          : "md:w-[91.666%]"
                      )}
                    >
                      <MediaFrame
                        media={item.media}
                        sizes={
                          isPortrait(item.media.aspect)
                            ? "(min-width: 768px) 32vw, 100vw"
                            : "(min-width: 768px) 85vw, 100vw"
                        }
                      />
                    </div>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {/* Research */}
      {study.research?.length ? (
        <section className="container-edge py-16">
          <SectionHead
            index={n()}
            label="What the research changed"
            title="The findings that moved the design."
          />
          <div className="mt-16 grid gap-px bg-ink-line md:grid-cols-3">
            {study.research.map((finding, i) => (
              <Reveal key={finding.insight} delay={i * 0.08} className="bg-ink p-8">
                <span className="holo-text font-display text-2xl font-medium leading-none tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-title">{finding.insight}</h3>
                <p className="mt-5 text-base leading-relaxed text-bone-dim">
                  {finding.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {/* Decisions */}
      {study.decisions?.length ? (
        <section className="container-edge py-16">
          <SectionHead
            index={n()}
            label="Key decisions"
            title="Problem, decision, and why it was the right trade."
          />

          <div className="mt-20 space-y-28">
            {study.decisions.map((decision, i) => (
              <Reveal key={decision.title} y={36}>
                <div className="grid gap-12 md:grid-cols-12">
                  {/* Without an image there is no second column to balance, so
                      the text spreads instead of leaving half the row empty. */}
                  <div
                    className={cn(
                      decision.media ? "md:col-span-5" : "md:col-span-12"
                    )}
                  >
                    <span className="holo-text font-display text-xl font-medium">
                      Decision {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-6 text-title">{decision.title}</h3>
                    <dl
                      className={cn(
                        "mt-10",
                        decision.media
                          ? "space-y-8"
                          : "grid gap-x-10 gap-y-8 md:grid-cols-3"
                      )}
                    >
                      <div>
                        <dt className="label">Problem</dt>
                        <dd className="mt-3 max-w-[48ch] text-bone-dim">
                          {decision.problem}
                        </dd>
                      </div>
                      <div>
                        <dt className="label">Decision</dt>
                        <dd className="mt-3 max-w-[48ch]">{decision.decision}</dd>
                      </div>
                      <div>
                        <dt className="label">Why it held</dt>
                        <dd className="mt-3 max-w-[48ch] text-bone-dim">
                          {decision.why}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  {decision.media ? (
                    <div className="md:col-span-6 md:col-start-7">
                      <MediaFrame
                        media={decision.media}
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {/* System */}
      {study.system ? (
        <section className="container-edge py-24">
          <SectionHead index={n()} label="The system" title={study.system.title} />
          <div className="mt-16 grid gap-12 md:grid-cols-12">
            <div className="space-y-6 md:col-span-5">
              {study.system.body.map((paragraph, i) => (
                <p key={i} className="text-bone-dim">
                  {paragraph}
                </p>
              ))}
            </div>
            {study.system.media ? (
              <div
                className={cn(
                  isPortrait(study.system.media.aspect)
                    ? "md:col-span-4 md:col-start-8"
                    : "md:col-span-7"
                )}
              >
                <MediaFrame
                  media={study.system.media}
                  sizes={
                    isPortrait(study.system.media.aspect)
                      ? "(min-width: 768px) 32vw, 100vw"
                      : "(min-width: 768px) 58vw, 100vw"
                  }
                />
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* Build */}
      {study.build ? (
        <section className="container-edge py-16">
          <SectionHead index={n()} label="Build" title={study.build.title} />
          <div className="mt-16 grid gap-12 md:grid-cols-12">
            <div className="space-y-6 md:col-span-6">
              {study.build.body.map((paragraph, i) => (
                <p key={i} className="text-lead">
                  {paragraph}
                </p>
              ))}
            </div>
            <dl className="md:col-span-5 md:col-start-8">
              {study.build.notes.map((note) => (
                <div
                  key={note.label}
                  className="hairline flex items-baseline justify-between gap-4 py-5"
                >
                  <dt className="label">{note.label}</dt>
                  <dd className="text-title">{note.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      {/* Outcome */}
      {study.outcome ? (
        <section className="container-edge py-24">
          <SectionHead index={n()} label="Outcome" title="What changed." />
          {study.outcome.metrics?.length ? (
            <dl className="mt-16 grid gap-10 md:grid-cols-3">
              {study.outcome.metrics.map((metric, i) => (
                <Reveal key={metric.label} delay={i * 0.08} className="hairline pt-6">
                  <dt className="text-display font-medium leading-none">
                    {metric.value}
                  </dt>
                  <dd className="label mt-6 max-w-[22ch]">{metric.label}</dd>
                </Reveal>
              ))}
            </dl>
          ) : null}

          <div className="mt-20 grid gap-12 md:grid-cols-12">
            <div className="space-y-6 md:col-span-6">
              {study.outcome.body.map((paragraph, i) => (
                <p key={i} className="text-lead">
                  {paragraph}
                </p>
              ))}
            </div>
            {study.outcome.quote ? (
              <blockquote className="md:col-span-5 md:col-start-8">
                <p className="font-display text-title italic">
                  &ldquo;{study.outcome.quote.text}&rdquo;
                </p>
                <footer className="label mt-6">
                  {study.outcome.quote.author} — {study.outcome.quote.role}
                </footer>
              </blockquote>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* Reflection */}
      {study.reflection?.length ? (
        <section className="container-edge py-16">
          <SectionHead
            index={n()}
            label="Reflection"
            title="What I would do differently."
          />
          <div className="mt-12 max-w-[62ch] space-y-6">
            {study.reflection.map((paragraph, i) => (
              <p key={i} className="text-lead text-bone-dim">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ) : null}

      {/* Next */}
      <section className="container-edge py-24 md:py-36">
        <Link href={`/work/${next.slug}`} className="group hairline block pt-6">
          <span className="label">Next — {kindLabel[next.kind]}</span>
          <h2 className="mt-8 text-hero font-medium transition-colors duration-500 group-hover:text-accent">
            {next.title}
          </h2>
          <p className="mt-6 max-w-[48ch] text-lead text-bone-dim">
            {next.summary}
          </p>
        </Link>
      </section>
    </article>
  );
}
