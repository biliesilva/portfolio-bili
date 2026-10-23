import Link from "next/link";
import { featuredCaseStudies } from "@/content/work";
import { SectionHead } from "@/components/ui/section-head";
import { Reveal } from "@/components/ui/reveal";
import { MediaFrame } from "@/components/ui/media-frame";
import { ButtonLink } from "@/components/ui/button-link";

export function FeaturedWork() {
  return (
    <section id="work" className="container-edge py-24 md:py-36">
      <SectionHead
        index="01"
        label="Selected work"
        title="Four pieces of work, told properly."
      />

      <div className="mt-20 space-y-28 md:space-y-40">
        {featuredCaseStudies.map((study, i) => (
          <Reveal key={study.slug} y={40}>
            <article>
              <Link href={`/work/${study.slug}`} className="group block">
                <div className="overflow-hidden rounded-sm">
                  <div className="transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]">
                    <MediaFrame
                      media={study.cover}
                      priority={i === 0}
                      sizes="(min-width: 1024px) 90vw, 100vw"
                    />
                  </div>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-12">
                  <div className="md:col-span-7">
                    <div className="flex items-baseline gap-4">
                      <span className="holo-text font-display text-3xl font-medium leading-none tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-headline transition-colors duration-500 group-hover:text-accent">
                        {study.title}
                      </h3>
                    </div>
                    <p className="label mt-4 ml-[2.4rem]">
                      {study.client} — {study.year}
                    </p>
                  </div>
                  <div className="md:col-span-5">
                    <p className="max-w-[46ch] text-lead text-bone-dim">
                      {study.summary}
                    </p>
                    <p className="label mt-6">{study.disciplines.join(" · ")}</p>
                  </div>
                </div>
              </Link>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-24 flex justify-center">
        <ButtonLink href="/work" variant="ghost">
          Open the index
        </ButtonLink>
      </Reveal>
    </section>
  );
}
