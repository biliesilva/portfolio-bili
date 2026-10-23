import type { Metadata } from "next";
import { site } from "@/content/site";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { ButtonLink } from "@/components/ui/button-link";
import { Magnetic } from "@/components/ui/magnetic";
import { LocalTime } from "@/components/ui/local-time";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — ${site.availability.label.toLowerCase()}, working remotely with teams in the US and Europe.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="container-edge pt-36 pb-16 md:pt-44">
        <div className="hairline pt-6">
          <span className="label">
            {site.availability.open ? site.availability.label : "Contact"}
          </span>
          <RevealWords
            as="h1"
            text="Tell me what you're building."
            className="mt-10 max-w-[18ch] text-hero font-medium"
          />
          <Reveal delay={0.2} className="mt-12 max-w-[52ch]">
            <p className="text-lead text-bone-dim">
              {site.availability.detail} I reply to everything within two
              business days — including the ones that turn out not to be a fit.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-12 flex flex-wrap items-center gap-4">
            <Magnetic>
              <ButtonLink href={`mailto:${site.email}`}>{site.email}</ButtonLink>
            </Magnetic>
            <ButtonLink href={site.calendar} variant="ghost" external>
              Book a 30-minute call
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="container-edge py-16">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHead index="01" label="For hiring teams" />
            <ul className="mt-10 space-y-5">
              {[
                "Roles I'm a fit for: Product Designer, Product Designer (UI-heavy), Design Engineer, Front-end Developer.",
                "Engagement: full-time employment, contractor, or contract-to-hire. I invoice as a business entity for contract work.",
                "I can share a portfolio walkthrough under NDA, and I'm happy to do a paid design exercise rather than an unpaid one.",
                "References from past teams available on request.",
              ].map((line, i) => (
                <li key={i} className="flex gap-3 text-bone-dim">
                  <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <SectionHead index="02" label="Details" />
            <dl className="mt-10">
              {[
                { label: "Email", value: site.email, href: `mailto:${site.email}` },
                ...site.socials
                  .filter((s) => !s.href.startsWith("mailto:"))
                  .map((s) => ({ label: s.label, value: s.href.replace(/^https?:\/\/(www\.)?/, ""), href: s.href })),
              ].map((row) => (
                <div key={row.label} className="hairline grid grid-cols-3 gap-4 py-5">
                  <dt className="label">{row.label}</dt>
                  <dd className="col-span-2">
                    <a
                      href={row.href}
                      target={row.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noreferrer"
                      className="link-wipe break-all"
                    >
                      {row.value}
                    </a>
                  </dd>
                </div>
              ))}
              <div className="hairline grid grid-cols-3 gap-4 py-5">
                <dt className="label">My local time</dt>
                <dd className="col-span-2">
                  <LocalTime />
                </dd>
              </div>
              <div className="hairline grid grid-cols-3 gap-4 py-5">
                <dt className="label">Languages</dt>
                <dd className="col-span-2">
                  {site.languages.map((l) => l.name).join(" · ")}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
