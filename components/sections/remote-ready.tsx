import { site } from "@/content/site";
import { SectionHead } from "@/components/ui/section-head";
import { Reveal } from "@/components/ui/reveal";

/**
 * The block that answers a US hiring manager's unasked questions:
 * can we talk, do our days overlap, and how do we pay you.
 */
export function RemoteReady() {
  return (
    <section className="container-edge py-16 md:py-20">
      <SectionHead
        label="Working together"
        title="Built for distributed teams."
      />

      <div className="mt-12 grid gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="text-lead text-bone-dim">
            I have worked with US companies as a full-time remote contractor since 2022,
            first from Sweden, then from Portugal, with teams mostly in the US
            and a few people in Europe. In Heroic I work with contributors in
            Europe and South America.
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
            <Reveal
              key={row.label}
              delay={i * 0.06}
              className="hairline grid grid-cols-3 gap-4 py-5"
            >
              <dt className="label">{row.label}</dt>
              <dd className="col-span-2">{row.value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
