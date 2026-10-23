import { site } from "@/content/site";
import { SectionHead } from "@/components/ui/section-head";
import { Reveal } from "@/components/ui/reveal";

export function Capabilities() {
  return (
    <section className="container-edge py-24 md:py-36">
      <SectionHead
        index="02"
        label="Capabilities"
        title="One person across the whole hand-off."
      />

      <div className="mt-20 grid gap-px bg-ink-line md:grid-cols-3">
        {site.capabilities.map((capability, i) => (
          <Reveal
            key={capability.title}
            delay={i * 0.08}
            className="bg-ink p-8 md:p-10"
          >
            <span className="holo-text font-display text-3xl font-medium leading-none tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-6 text-title">{capability.title}</h3>
            <p className="mt-5 text-bone-dim">{capability.body}</p>
            <ul className="mt-8 space-y-2">
              {capability.items.map((item) => (
                <li key={item} className="label flex items-center gap-3">
                  <span className="size-1 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
