import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

/**
 * Four numbers, four equal cards. Figures sit on a shared baseline and labels
 * on a shared bottom edge, so the row reads as a set rather than four
 * independently drifting columns.
 */
export function Proof() {
  return (
    <section className="container-edge pb-8">
      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {site.proof.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.06} className="h-full">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-ink-line bg-ink-raised/40 p-7 transition-colors duration-500 hover:border-bone-faint">
              <div
                aria-hidden="true"
                className="holo-ring opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <dt className="text-headline font-medium leading-none">
                {item.value}
              </dt>
              <dd className="mt-10">
                <span className="block font-condensed text-lg leading-tight text-bone">
                  {item.label}
                </span>
                <span className="label mt-1.5 block text-bone-faint">
                  {item.note}
                </span>
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
