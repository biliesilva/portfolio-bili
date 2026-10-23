import { site } from "@/content/site";

const linkedin =
  site.socials.find((social) => social.label === "LinkedIn")?.href ??
  "https://www.linkedin.com/in/bilianesilva/";

/**
 * The portfolio shows four pieces of work. The full employment history —
 * earlier roles, freelance, the beginning — lives on LinkedIn, where that
 * kind of completeness actually belongs.
 */
export function MoreExperience({
  note = "This portfolio covers the work worth reading in full. The complete history — earlier roles, freelance and where it started — is on LinkedIn.",
}: {
  note?: string;
}) {
  return (
    <section className="container-edge py-16">
      <a
        href={linkedin}
        target="_blank"
        rel="noreferrer"
        className="group hairline block pt-6"
      >
        <span className="label">More experience</span>
        <div className="mt-8 flex flex-wrap items-baseline justify-between gap-6">
          <h2 className="text-hero font-medium transition-colors duration-500 group-hover:text-accent">
            See the rest on LinkedIn
          </h2>
          <span
            aria-hidden="true"
            className="text-title transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2"
          >
            &#8599;
          </span>
        </div>
        <p className="mt-6 max-w-[56ch] text-lead text-bone-dim">{note}</p>
      </a>
    </section>
  );
}
