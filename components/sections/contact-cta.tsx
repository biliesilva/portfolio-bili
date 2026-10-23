import { site } from "@/content/site";
import { RevealWords, Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Magnetic } from "@/components/ui/magnetic";

export function ContactCta({
  heading = "Let's build something that ships.",
}: {
  heading?: string;
}) {
  return (
    <section className="container-edge py-32 md:py-48">
      <div className="hairline pt-6">
        <span className="label">Next step</span>
        <RevealWords
          text={heading}
          className="mt-10 max-w-[20ch] text-display font-medium"
        />
        <Reveal delay={0.2} className="mt-12 max-w-[52ch]">
          <p className="text-lead text-bone-dim">{site.availability.detail}</p>
        </Reveal>
        <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic>
            <ButtonLink href={`mailto:${site.email}`}>{site.email}</ButtonLink>
          </Magnetic>
          <ButtonLink href="/contact" variant="ghost">
            All the ways to reach me
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
