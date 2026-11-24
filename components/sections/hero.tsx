import { site } from "@/content/site";
import { getCaseStudy } from "@/content/work";
import { RevealWords } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { MediaFrame } from "@/components/ui/media-frame";

export function Hero() {
  const lead = getCaseStudy("heroic-games-launcher");

  return (
    <section className="pt-28 md:pt-32">
      <div className="container-edge grid gap-8 pb-12 md:grid-cols-12 md:items-end">
        <h1 className="text-display font-medium md:col-span-8">
          <RevealWords as="span" text="I design products" className="block" />
          <span className="block">
            and <span className="holo-text italic">ship the code.</span>
          </span>
        </h1>
        <div className="md:col-span-4">
          <p className="max-w-[44ch] text-lead">
            {site.name}. Product designer with six years in product design,
            specialised in design systems, who also writes the front-end.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <ButtonLink href="/work">See the work</ButtonLink>
            <ButtonLink href="/resume" variant="ghost">
              CV
            </ButtonLink>
          </div>
        </div>
      </div>
      {lead ? (
        <div className="container-edge">
          <MediaFrame
            media={{
              ...lead.cover,
              mobileSrc: "/work/heroic/library-mobile.jpg",
              caption: "Heroic Games Launcher: validated and designed by me from the start, now with 500k+ monthly users",
            }}
            priority
            sizes="(max-width: 767px) 62vw, (min-width: 1600px) 100rem, 94vw"
          />
        </div>
      ) : null}
    </section>
  );
}
