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
        <div className="hairline flex flex-wrap items-baseline justify-between gap-4 pt-6">
          <span className="label">{site.role}</span>
          <span className="label">{site.location}</span>
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
            className="order-first md:order-none md:col-span-5 md:col-start-8 lg:-mt-56 xl:-mt-64"
          >
            <Portrait
              priority
              className="w-[66vw] max-w-[19rem] sm:w-[52vw] md:ml-auto md:w-full md:max-w-[21rem] lg:max-w-[25rem] xl:max-w-[28rem]"
              sizes="(min-width: 1280px) 28rem, (min-width: 1024px) 25rem, (min-width: 768px) 21rem, 66vw"
            />
          </Reveal>

          <Reveal delay={0.35} className="md:col-span-6 md:col-start-1 md:row-start-1">
            <p className="max-w-[46ch] text-lead text-bone-dim">
              Product designer and front-end developer from Brazil.
              I&apos;ve been responsible for the design system at two companies
              and worked on the front-end at both — most recently with US teams
              at CoinFello and HyperPlay, and before that on Payday 2 at
              Starbreeze.
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
