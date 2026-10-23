import type { Metadata } from "next";
import { playground } from "@/content/playground";
import { MediaFrame } from "@/components/ui/media-frame";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "Components, design-system experiments and open-source UI work — the proof that the design and the code come from the same person.",
  alternates: { canonical: "/playground" },
};

export default function PlaygroundPage() {
  return (
    <>
      <section className="container-edge pt-36 pb-16 md:pt-44">
        <div className="hairline pt-6">
          <span className="label">Playground — {playground.length} experiments</span>
          <RevealWords
            as="h1"
            text="Things I built to find out if they would work."
            className="mt-10 max-w-[22ch] text-hero font-medium"
          />
          <Reveal delay={0.2} className="mt-12 max-w-[52ch]">
            <p className="text-lead text-bone-dim">
              Components, token systems and small products. Some shipped into
              open-source projects, some exist only to answer a question. Every
              one of them is code I wrote.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-edge pb-24">
        <ul className="grid gap-x-10 gap-y-20 md:grid-cols-2">
          {playground.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 0.08} as="li" y={32}>
              <article className="group">
                {item.media ? (
                  <div className="overflow-hidden rounded-sm">
                    <div className="transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]">
                      <MediaFrame
                        media={item.media}
                        sizes="(min-width: 768px) 48vw, 100vw"
                      />
                    </div>
                  </div>
                ) : null}

                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <h2 className="text-title">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="link-wipe transition-colors duration-500 group-hover:text-accent"
                      >
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h2>
                  <span className="label shrink-0">{item.year}</span>
                </div>
                <p className="mt-4 max-w-[48ch] text-bone-dim">{item.blurb}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="label rounded-full border border-ink-line px-3 py-1.5"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      <ContactCta heading="I build these for fun. Imagine what I do on payroll." />
    </>
  );
}
