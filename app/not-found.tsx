import { ButtonLink } from "@/components/ui/button-link";
import { RevealWords } from "@/components/ui/reveal";
import { caseStudies } from "@/content/work";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-edge flex min-h-svh flex-col justify-center py-36">
      <div className="hairline pt-6">
        <span className="label">Error 404</span>
        <RevealWords
          as="h1"
          text="This page shipped without a route."
          className="mt-10 max-w-[18ch] text-hero font-medium"
        />
        <p className="mt-10 max-w-[48ch] text-lead text-bone-dim">
          Nothing here. An honest 404 is better than a redirect that pretends
          otherwise — here is where you probably wanted to go.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <ButtonLink href="/">Home</ButtonLink>
          <ButtonLink href="/work" variant="ghost">
            All work
          </ButtonLink>
        </div>

        <ul className="mt-20 grid gap-px bg-ink-line md:grid-cols-3">
          {caseStudies.slice(0, 3).map((study) => (
            <li key={study.slug} className="bg-ink p-8">
              <Link href={`/work/${study.slug}`} className="group block">
                <span className="label">{study.year}</span>
                <h2 className="mt-4 text-title transition-colors duration-500 group-hover:text-accent">
                  {study.title}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
