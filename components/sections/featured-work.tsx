import Link from "next/link";
import { caseStudies, featuredCaseStudies } from "@/content/work";
import { ChapterPanel } from "@/components/work/chapter-panel";

export function FeaturedWork() {
  const others = caseStudies.filter((study) => !study.featured);

  return (
    <section id="work" aria-labelledby="work-title" className="pt-24 md:pt-32">
      <div className="container-edge pb-12">
        <h2 id="work-title" className="text-headline">
          Selected work
        </h2>
      </div>

      {featuredCaseStudies.map((study, i) => (
        <ChapterPanel key={study.slug} study={study} flip={i % 2 === 1} />
      ))}

      <div className="container-edge py-20">
        <h3 className="text-title">Also live on Google Play</h3>
        <ul className="mt-6 space-y-3">
          {others.map((study) => (
            <li key={study.slug}>
              <Link
                href={`/work/${study.slug}`}
                data-chapter={study.tone}
                className="chapter group grid gap-2 p-6 transition-[padding] duration-300 hover:pl-10 focus-visible:pl-10 md:grid-cols-12"
              >
                <span className="text-title decoration-1 underline-offset-4 group-hover:underline group-focus-visible:underline md:col-span-4">
                  {study.title}
                </span>
                <span className="max-w-[60ch] md:col-span-8">
                  {study.summary}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
