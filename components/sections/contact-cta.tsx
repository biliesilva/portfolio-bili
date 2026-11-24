import Link from "next/link";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { RevealWords } from "@/components/ui/reveal";

export function ContactCta({
  heading = "Let's build something that ships.",
}: {
  heading?: string;
}) {
  return (
    <section data-chapter="contact" className="chapter">
      <div className="container-edge py-24 md:py-36">
        <RevealWords text={heading} className="max-w-[16ch] text-display font-medium" />
        <p className="mt-8 max-w-[48ch] text-lead">{site.availability.label}.</p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <ButtonLink href={`mailto:${site.email}`} variant="ink">
            {site.email}
          </ButtonLink>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center font-display text-lg underline underline-offset-4 hover:decoration-2"
          >
            Other ways to reach me
          </Link>
        </div>
      </div>
    </section>
  );
}
