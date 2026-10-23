import type { Metadata } from "next";
import { caseStudies } from "@/content/work";
import { WorkIndex } from "@/components/work/work-index";
import { RevealWords, Reveal } from "@/components/ui/reveal";
import { ContactCta } from "@/components/sections/contact-cta";
import { MoreExperience } from "@/components/sections/more-experience";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product design, design systems and front-end projects — including open-source UI work on a 12,500-star desktop app.",
};

export default function WorkPage() {
  return (
    <>
      <section className="container-edge pt-36 pb-16 md:pt-44">
        <div className="hairline pt-6">
          <span className="label">Work — {caseStudies.length} selected</span>
          <RevealWords
            as="h1"
            text="Problems framed, interfaces built, code merged."
            className="mt-10 max-w-[24ch] text-hero font-medium"
          />
          <Reveal delay={0.2} className="mt-12 max-w-[52ch]">
            <p className="text-lead text-bone-dim">
              Four pieces of work, told at the depth each one allows. Open
              source gets the full case study; employed work gets scope and
              practice without client internals. Everything else is on LinkedIn.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-edge pb-16">
        <WorkIndex items={caseStudies} />
      </section>

      <MoreExperience />

      <ContactCta heading="Want the version with the Figma files open?" />
    </>
  );
}
