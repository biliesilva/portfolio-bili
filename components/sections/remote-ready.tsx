import { site } from "@/content/site";
import { SectionHead } from "@/components/ui/section-head";
import { Reveal } from "@/components/ui/reveal";

/**
 * The block that answers a US hiring manager's unasked questions:
 * can we talk, do our days overlap, and how do we pay you.
 */
export function RemoteReady() {
  return (
    <section className="container-edge py-24 md:py-36">
      <SectionHead
        index="03"
        label="Working together"
        title="Built for distributed teams."
      />

      <div className="mt-20 grid gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="text-lead text-bone-dim">
            I work with US companies, and have since 2022 — on teams whose
            members sat across the US, Europe and Latin America, several time
            zones in one standup. Design reviews in English, async written
            rationale by default, and code in the same repository as the
            engineers I design for.
          </p>
          <ul className="mt-10 space-y-4">
            {site.languages.map((language) => (
              <li key={language.name} className="hairline flex justify-between pt-4">
                <span>{language.name}</span>
                <span className="label">{language.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <dl className="md:col-span-6 md:col-start-7">
          {site.remote.map((row, i) => (
            <Reveal key={row.label} delay={i * 0.06}>
              <div className="hairline grid grid-cols-3 gap-4 py-5">
                <dt className="label">{row.label}</dt>
                <dd className="col-span-2">{row.value}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
