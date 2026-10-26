import type { Metadata } from "next";
import { site } from "@/content/site";
import { roles, earlier, education, skills, certifications } from "@/content/resume";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { ButtonLink } from "@/components/ui/button-link";
import { MoreExperience } from "@/components/sections/more-experience";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé of ${site.name} — ${site.role} with ${site.yearsOfExperience} years of experience across product design, design systems and front-end engineering.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <>
      <section className="container-edge pt-36 pb-16 md:pt-44">
        <div className="hairline pt-6">
          <span className="label">Résumé — updated October 2026</span>
          <RevealWords
            as="h1"
            text={site.name}
            className="mt-10 text-hero font-medium"
          />
          <p className="mt-6 text-lead text-bone-dim">
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
            {/* TODO: export a PDF and drop it at /public/biliane-silva-resume.pdf */}
            <ButtonLink href="/biliane-silva-resume.pdf" external>
              Download PDF
            </ButtonLink>
            <ButtonLink href={`mailto:${site.email}`} variant="ghost">
              {site.email}
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="container-edge py-16">
        <SectionHead index="01" label="Experience" />
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
        <SectionHead index="02" label="Earlier" />
        <ul className="mt-12">
          {earlier.map((entry) => (
            <li
              key={`${entry.company}-${entry.period}`}
              className="hairline grid grid-cols-12 gap-4 py-5"
            >
              <span className="label col-span-4 md:col-span-2">{entry.period}</span>
              <span className="col-span-8 md:col-span-3">{entry.title}</span>
              <span className="col-span-12 text-bone-dim md:col-span-3">
                {entry.company}
              </span>
              <span className="col-span-12 text-base text-bone-faint md:col-span-4">
                {entry.note}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-edge py-16">
        <SectionHead index="03" label="Skills" />
        <div className="mt-12 grid gap-px bg-ink-line md:grid-cols-3">
          {skills.map((group) => (
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

      <section className="container-edge py-16">
        <SectionHead index="04" label="Education" />
        <ul className="mt-12">
          {education.map((entry, i) => (
            <li
              key={`${entry.title}-${i}`}
              className="hairline grid grid-cols-12 gap-x-4 gap-y-2 py-6"
            >
              <span className="label col-span-4 md:col-span-2">{entry.period}</span>
              <span className="col-span-8 md:col-span-6">{entry.title}</span>
              <span className="col-span-12 text-bone-dim md:col-span-4">
                {entry.institution}
              </span>
              {"note" in entry && entry.note ? (
                <span className="label col-span-12 text-bone-faint md:col-start-3 md:col-end-9">
                  {entry.note}
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-edge py-16">
        <SectionHead index="05" label="Certifications" />
        <ul className="mt-12 flex flex-wrap gap-2">
          {certifications.map((item) => (
            <li
              key={item}
              className="label rounded-full border border-ink-line px-4 py-2"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-edge py-16">
        <SectionHead index="06" label="Languages" />
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
