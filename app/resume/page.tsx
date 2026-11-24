import type { Metadata } from "next";
import { site } from "@/content/site";
import { roles, earlier, education, skills, certifications } from "@/content/resume";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { ButtonLink } from "@/components/ui/button-link";
import { MoreExperience } from "@/components/sections/more-experience";

export const metadata: Metadata = {
  title: "CV",
  description: `CV of ${site.name}, ${site.role} with ${site.experience}.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <>
      <section data-chapter="profile" className="chapter">
        <div className="container-edge pt-32 pb-14 md:pt-40 md:pb-20">
          <span className="chapter-dim text-base">CV, updated November 2026</span>
          <RevealWords
            as="h1"
            text={site.name}
            className="mt-6 text-display font-medium"
          />
          <p className="mt-6 text-lead">
            {site.role} · {site.location} · {site.usOverlap}
          </p>

          {/* On screen the contact details are buttons below; on paper a CV
              without an address on page one is a dead end. */}
          <p className="label mt-3 hidden print:block">
            {site.email} ·{" "}
            {site.socials
              .filter((social) => !social.href.startsWith("mailto:"))
              .map((social) => social.href.replace(/^https?:\/\/(www\.)?/, ""))
              .join(" · ")}
          </p>
          <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-4 print:hidden">
            <ButtonLink href="/biliane-silva-cv.pdf" external variant="ink">
              Download CV
            </ButtonLink>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-11 items-center font-display text-lg underline underline-offset-4 hover:decoration-2"
            >
              {site.email}
            </a>
          </Reveal>
        </div>
      </section>

      <section className="container-edge py-16">
        <SectionHead label="Experience" />
        <div className="mt-12 space-y-16">
          {roles.map((role, i) => (
            <Reveal key={`${role.company}-${role.period}-${i}`}>
              <article className="hairline grid gap-6 pt-8 md:grid-cols-12">
                <div className="md:col-span-3 print:col-span-2">
                  <p className="label">{role.period}</p>
                  <p className="label mt-2 text-bone-faint">{role.location}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-title">{role.title}</h3>
                  <p className="mt-2 text-bone-dim">{role.company}</p>
                  <p className="mt-6 max-w-[62ch] print:hidden">{role.summary}</p>
                  <ul className="mt-6 space-y-3">
                    {role.highlights.map((highlight, h) => (
                      <li
                        key={h}
                        className="flex max-w-[66ch] gap-3 text-bone-dim"
                      >
                        <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  {role.stack?.length ? (
                    <p className="label mt-6">{role.stack.join(" · ")}</p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-edge py-16">
        <SectionHead label="Earlier" />
        <ul className="mt-12">
          {earlier.map((entry) => (
            <li
              key={`${entry.company}-${entry.period}`}
              className="hairline grid grid-cols-12 gap-4 py-5"
            >
              <span className="label col-span-4 md:col-span-2">{entry.period}</span>
              <span className="col-span-8 md:col-span-3">{entry.title}</span>
              <span className="col-span-8 col-start-5 text-bone-dim md:col-span-3 md:col-start-auto">
                {entry.company}
              </span>
              <span className="col-span-8 col-start-5 text-base text-bone-dim md:col-span-4 md:col-start-auto">
                {entry.note}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-edge py-16">
        <SectionHead label="Skills" />
        <div className="mt-12 grid md:grid-cols-3">
          {skills.map((group) => (
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

      <section className="container-edge py-16">
        <SectionHead label="Education" />
        <ul className="mt-12">
          {education.map((entry, i) => (
            <li
              key={`${entry.title}-${i}`}
              className="hairline grid grid-cols-12 gap-x-4 gap-y-2 py-6"
            >
              <span className="label col-span-4 md:col-span-2">{entry.period}</span>
              <span className="col-span-8 md:col-span-6">{entry.title}</span>
              <span className="col-span-8 col-start-5 text-bone-dim md:col-span-4 md:col-start-auto">
                {entry.institution}
              </span>
              {"note" in entry && entry.note ? (
                <span className="label col-span-8 col-start-5 md:col-start-3 md:col-end-9">
                  {entry.note}
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-edge py-16">
        <SectionHead label="Certifications" />
        <ul className="mt-12 flex flex-wrap gap-2">
          {certifications.map((item) => (
            <li
              key={item}
              className="label rounded-sm border border-ink-line px-4 py-2"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-edge py-16">
        <SectionHead label="Languages" />
        <ul className="mt-12 md:max-w-xl">
          {site.languages.map((language) => (
            <li
              key={language.name}
              className="hairline flex justify-between gap-4 py-5"
            >
              <span>{language.name}</span>
              <span className="label">{language.level}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="pb-24 print:hidden">
        <MoreExperience note="Full employment history, recommendations and contact details." />
      </div>
    </>
  );
}
