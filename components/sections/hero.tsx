import { site } from "@/content/site";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { ButtonLink } from "@/components/ui/button-link";
import { Magnetic } from "@/components/ui/magnetic";
import { Scrub } from "@/components/ui/scrub";
import { Portrait } from "@/components/ui/portrait";

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-between pt-28 pb-10">
      <Scrub y={-80} className="container-edge flex-1">
        {/* The location used to sit on the right here, but the header clock
            already says it two lines up. */}
        <div className="hairline flex flex-wrap items-baseline justify-between gap-4 pt-6">
          <span className="label">{site.positioning}</span>
        </div>

        <h1 className="mt-14 max-w-[16ch] text-display font-medium md:mt-20">
          <RevealWords as="span" text="I design products" className="block" />
          <span className="block">
            <RevealWords as="span" text="and" className="inline" delay={0.18} />{" "}
            <RevealWords
              as="span"
              text="ship the code."
              className="holo-text inline font-display font-normal italic"
              delay={0.26}
            />
          </span>
        </h1>

        <div className="mt-10 grid items-start gap-10 md:mt-8 md:grid-cols-12">
          <Reveal
            delay={0.45}
            // The portrait tucks up beside the headline from xl on. It used to
            // start rising at lg too, where the column is narrow enough that
            // "ship the code." ran into her shoulder — so below 1280 it sits
            // under the headline instead.
            className="order-first md:order-none md:col-span-5 md:col-start-8 xl:-mt-64"
          >
            <Portrait
              priority
              className="w-[66vw] max-w-[19rem] sm:w-[52vw] md:ml-auto md:w-full md:max-w-[21rem] lg:max-w-[25rem] xl:max-w-[28rem]"
              sizes="(min-width: 1280px) 28rem, (min-width: 1024px) 25rem, (min-width: 768px) 21rem, 66vw"
            />
          </Reveal>

          <Reveal delay={0.35} className="md:col-span-6 md:col-start-1 md:row-start-1">
            <p className="max-w-[46ch] text-lead text-bone-dim">
              I&apos;m a product designer who builds what I design. I&apos;ve
              owned the design system at two US companies, CoinFello and
              HyperPlay, and implemented both in code. At CoinFello I turned the
              design system into context for AI agents, so new components came
              out of Figma and into production React already matching the
              system. Before that I worked on Payday 2 at Starbreeze, and
              I&apos;ve designed the open-source Heroic Games Launcher since
              2020.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <ButtonLink href="/work">See the work</ButtonLink>
              </Magnetic>
              <ButtonLink href="/resume" variant="ghost">
                CV
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
