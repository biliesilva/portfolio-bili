import type { Metadata } from "next";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { Portrait } from "@/components/ui/portrait";
import { cn } from "@/lib/cn";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { ContactCta } from "@/components/sections/contact-cta";
import { ButtonLink } from "@/components/ui/button-link";
import { PageJsonLd, ids } from "@/components/layout/json-ld";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name}, product designer and front-end developer in ${site.location}. Six years in product design, remote with US teams since 2022.`,
  alternates: { canonical: "/about" },
};

/** `ProfilePage` is the type search engines expect on an "about the person" page. */
const profileSchema = {
  "@type": "ProfilePage",
  "@id": `${site.url}/about#profile`,
  url: `${site.url}/about`,
  name: `About ${site.name}`,
  isPartOf: { "@id": ids.website },
  about: { "@id": ids.person },
  mainEntity: { "@id": ids.person },
  inLanguage: "en",
};

export default function AboutPage() {
  return (
    <>
      <PageJsonLd data={profileSchema} />
      <header data-chapter="profile" className="chapter">
        <div className="container-edge grid items-end gap-10 pt-32 pb-14 md:grid-cols-12 md:pt-40 md:pb-20">
          <RevealWords
            as="h1"
            text={about.headline}
            className="text-display font-medium md:col-span-8"
          />
          <p className="chapter-dim text-lead md:col-span-4">{site.role}</p>
        </div>
      </header>

      <section className="container-edge py-16 md:py-24">
        <div className="grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <Portrait priority sizes="(max-width: 767px) 60vw, 40vw" />
            <dl className="mt-8 overflow-hidden rounded-2xl border border-ink-line bg-ink-raised/40">
              {[
                { label: "Based in", value: site.location },
                { label: "Overlap", value: site.usOverlap },
                {
                  label: "Languages",
                  value: site.languages.map((l) => l.name).join(" · "),
                },
                { label: "Open to", value: "Full-time with US teams, as an employee or contractor" },
              ].map((row, i) => (
                <div
                  key={row.label}
                  className={cn(
                    "flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6",
                    i > 0 && "border-t border-ink-line"
                  )}
                >
                  <dt className="label shrink-0">{row.label}</dt>
                  <dd className="font-display text-lg leading-snug sm:text-right">
                    {row.value}
                  </dd>
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
                Full CV
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-edge py-24">
        <SectionHead label="How I work" title="Six things I will not trade away." />
        <div className="mt-16">
          {about.principles.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 0.05}>
              <div className="hairline grid gap-6 py-8 md:grid-cols-12">
                <span className="holo-text font-display text-2xl font-medium leading-none tabular-nums md:col-span-1">
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
        <SectionHead label="Tools" />
        <div className="mt-12 grid md:grid-cols-3">
          {about.tools.map((group) => (
            <div key={group.group} className="bg-ink py-8 md:pr-8">
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
        <SectionHead label="Timeline" />
        <ol className="mt-12">
          {about.timeline.map((entry) => (
            <Reveal
              as="li"
              key={`${entry.year}-${entry.event}`}
              className="hairline grid grid-cols-12 gap-4 py-6"
            >
              <span className="label col-span-4 md:col-span-2">{entry.year}</span>
              <span className="col-span-8 md:col-span-9">{entry.event}</span>
            </Reveal>
          ))}
        </ol>
      </section>

      <ContactCta heading="Still reading? Let's talk." />
    </>
  );
}
