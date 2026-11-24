import type { Metadata } from "next";
import { site } from "@/content/site";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { ButtonLink } from "@/components/ui/button-link";
import { LocalTime } from "@/components/ui/local-time";
import { PageJsonLd, ids } from "@/components/layout/json-ld";
import { faq } from "@/content/faq";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}. ${site.availability.label}, working remotely with US teams.`,
  alternates: { canonical: "/contact" },
};

/** Google requires every answer here to be visible on the page. All six are. */
const faqSchema = {
  "@type": "FAQPage",
  "@id": `${site.url}/contact#faq`,
  url: `${site.url}/contact`,
  isPartOf: { "@id": ids.website },
  about: { "@id": ids.person },
  inLanguage: "en",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function ContactPage() {
  return (
    <>
      <PageJsonLd data={faqSchema} />

      <header data-chapter="contact" className="chapter">
        <div className="container-edge grid items-end gap-12 pt-32 pb-16 md:grid-cols-12 md:pt-40 md:pb-24">
          <div className="md:col-span-7">
            <p className="chapter-dim text-base">
              {site.availability.open ? site.availability.label : "Contact"}
            </p>
            <RevealWords
              as="h1"
              text="Tell me what you're building."
              className="mt-6 max-w-[14ch] text-display font-medium"
            />
          </div>
          <div className="md:col-span-5">
            <p className="text-lead">
              {site.availability.detail} I reply to everything within two
              business days, including the ones that turn out not to be a fit.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href={`mailto:${site.email}`} variant="ink">
                {site.email}
              </ButtonLink>
              <a
                href={site.socials.find((s) => s.label === "LinkedIn")?.href ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center font-display text-lg underline underline-offset-4 hover:decoration-2"
              >
                Message me on LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="container-edge py-16">
        <SectionHead label="Questions I get asked" />
        <div className="mt-16">
          {faq.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.05}>
              <div className="hairline grid gap-6 py-8 md:grid-cols-12">
                <h2 className="text-title md:col-span-5">{item.question}</h2>
                <p className="max-w-[56ch] text-bone-dim md:col-span-6 md:col-start-7">
                  {item.answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-edge py-16">
        <SectionHead label="Details" />
        <div className="mt-16">
          <dl>
            {[
              {
                label: "Email",
                value: site.email,
                href: `mailto:${site.email}`,
              },
              ...site.socials
                .filter((s) => !s.href.startsWith("mailto:"))
                .map((s) => ({
                  label: s.label,
                  value: s.href.replace(/^https?:\/\/(www\.)?/, ""),
                  href: s.href,
                })),
            ].map((row) => (
              <div
                key={row.label}
                className="hairline grid grid-cols-3 gap-4 py-5"
              >
                <dt className="label">{row.label}</dt>
                <dd className="col-span-2">
                  <a
                    href={row.href}
                    target={
                      row.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
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
      </section>
    </>
  );
}
