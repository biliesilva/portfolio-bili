import type { Metadata } from "next";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { MediaFrame } from "@/components/ui/media-frame";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { ContactCta } from "@/components/sections/contact-cta";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is a product designer and front-end developer with ${site.yearsOfExperience} years of experience, based in ${site.location} and working with teams in the US and Europe.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="container-edge pt-36 pb-16 md:pt-44">
        <div className="hairline pt-6">
          <span className="label">About — {site.role}</span>
          <RevealWords
            as="h1"
            text={about.headline}
            className="mt-10 max-w-[20ch] text-hero font-medium"
          />
        </div>
      </section>

      <section className="container-edge pb-24">
        <div className="grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <MediaFrame media={about.portrait} sizes="(min-width: 768px) 40vw, 100vw" />
            <dl className="mt-8">
              {[
                { label: "Based in", value: site.location },
                { label: "Overlap", value: site.usOverlap },
                { label: "Languages", value: site.languages.map((l) => l.name).join(", ") },
                { label: "Open to", value: "Full-time · Contract" },
              ].map((row) => (
                <div key={row.label} className="hairline flex justify-between gap-4 py-4">
                  <dt className="label">{row.label}</dt>
                  <dd className="text-sm">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="space-y-7 md:col-span-6 md:col-start-7">
            {about.bio.map((paragraph, i) => (
              <Reveal key={i}>
                <p className="text-lead">{paragraph}</p>
              </Reveal>
            ))}
            <Reveal className="pt-4">
              <ButtonLink href="/resume" variant="ghost">
                Full résumé
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-edge py-24">
        <SectionHead index="01" label="How I work" title="Five things I will not trade away." />
        <div className="mt-16">
          {about.principles.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 0.05}>
              <div className="hairline grid gap-6 py-8 md:grid-cols-12">
                <span className="label text-bone-faint md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-title md:col-span-5">{principle.title}</h3>
                <p className="max-w-[52ch] text-bone-dim md:col-span-6">
                  {principle.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-edge py-24">
        <SectionHead index="02" label="Tools" />
        <div className="mt-12 grid gap-px bg-ink-line md:grid-cols-3">
          {about.tools.map((group) => (
            <div key={group.group} className="bg-ink p-8">
              <h3 className="label">{group.group}</h3>
              <ul className="mt-6 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-bone-dim">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container-edge py-24">
        <SectionHead index="03" label="Timeline" />
        <ol className="mt-12">
          {about.timeline.map((entry) => (
            <Reveal key={`${entry.year}-${entry.event}`}>
              <li className="hairline grid grid-cols-12 gap-4 py-6">
                <span className="label col-span-4 md:col-span-2">{entry.year}</span>
                <span className="col-span-8 md:col-span-9">{entry.event}</span>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <ContactCta heading="Still reading? Let's talk." />
    </>
  );
}
