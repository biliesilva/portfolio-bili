import type { Metadata } from "next";
import { caseStudies } from "@/content/work";
import { WorkIndex } from "@/components/work/work-index";
import { RevealWords, Reveal } from "@/components/ui/reveal";
import { ContactCta } from "@/components/sections/contact-cta";

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
          <span className="label">Work — {caseStudies.length} projects</span>
          <RevealWords
            as="h1"
            text="Problems framed, interfaces built, code merged."
            className="mt-10 max-w-[24ch] text-hero font-medium"
          />
          <Reveal delay={0.2} className="mt-12 max-w-[52ch]">
            <p className="text-lead text-bone-dim">
              Each case study follows the same shape: what the problem was, the
              decisions I made, what I shipped, and what it changed. The ones
              marked with code are projects where I also wrote the front end.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-edge pb-24">
        <WorkIndex items={caseStudies} />
      </section>

      <ContactCta heading="Want the version with the Figma files open?" />
    </>
  );
}
