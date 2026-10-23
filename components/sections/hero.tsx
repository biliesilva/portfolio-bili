import { site } from "@/content/site";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { ButtonLink } from "@/components/ui/button-link";
import { Magnetic } from "@/components/ui/magnetic";
import { Scrub } from "@/components/ui/scrub";

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-between pt-32 pb-10">
      <Scrub y={-80} className="container-edge flex-1">
        <div className="hairline flex flex-wrap items-baseline justify-between gap-4 pt-6">
          <span className="label">{site.role}</span>
          <span className="label">{site.location} · {site.usOverlap}</span>
        </div>

        <h1 className="mt-14 max-w-[16ch] text-display font-medium md:mt-20">
          <RevealWords as="span" text="I design products" className="block" />
          <span className="block">
            <RevealWords as="span" text="and" className="inline" delay={0.18} />{" "}
            <RevealWords
              as="span"
              text="ship the code."
              className="inline font-serif font-normal italic text-accent"
              delay={0.26}
            />
          </span>
        </h1>

        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12">
          <Reveal delay={0.35} className="md:col-span-6 md:col-start-7">
            <p className="max-w-[46ch] text-lead text-bone-dim">
              Product designer and front-end developer from Maceió, Brazil.
              I&apos;ve owned the design system at two companies and shipped the
              interface in React at both — most recently for US teams at
              CoinFello and HyperPlay. Working in English, Portuguese and
              Spanish.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <ButtonLink href="/work">See the work</ButtonLink>
              </Magnetic>
              <ButtonLink href="/resume" variant="ghost">
                Résumé
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Scrub>

      <Reveal delay={0.5} className="mt-20">
        <Marquee
          items={[
            "Product design",
            "Design systems",
            "React & Next.js",
            "TypeScript",
            "Accessibility",
            "Motion",
            "Open source",
          ]}
        />
      </Reveal>
    </section>
  );
}
