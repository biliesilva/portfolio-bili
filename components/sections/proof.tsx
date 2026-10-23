import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

export function Proof() {
  return (
    <section className="container-edge py-16">
      <dl className="hairline grid grid-cols-2 gap-10 pt-10 md:grid-cols-4">
        {site.proof.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.06}>
            <dt className="text-headline font-medium">{item.value}</dt>
            <dd className="label mt-3 max-w-[18ch]">{item.label}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
