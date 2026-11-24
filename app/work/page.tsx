import type { Metadata } from "next";
import { caseStudies } from "@/content/work";
import { WorkIndex } from "@/components/work/work-index";
import { RevealWords, Reveal } from "@/components/ui/reveal";
import { ContactCta } from "@/components/sections/contact-cta";
import { MoreExperience } from "@/components/sections/more-experience";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product design, design systems and front-end projects, including open-source UI work on a 12,600-star desktop app.",
};

export default function WorkPage() {
  return (
    <>
      <section className="container-edge pt-24 pb-8 md:pt-28">
        <div className="hairline pt-6">
          <span className="label">{caseStudies.length} projects</span>
          <RevealWords
            as="h1"
            text="Problems framed, interfaces built, code merged."
            className="mt-4 max-w-[28ch] text-headline font-medium"
          />
          <Reveal delay={0.2} className="mt-5 max-w-[70ch]">
            <p className="text-lead text-bone-dim">
              Four cases told in full, and two live apps.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-edge pb-16">
        <WorkIndex items={caseStudies} />
      </section>

      <MoreExperience />

      <ContactCta heading="Want to walk through any of it?" />
    </>
  );
}
