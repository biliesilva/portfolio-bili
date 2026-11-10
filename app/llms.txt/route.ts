import { site } from "@/content/site";
import { about } from "@/content/about";
import { caseStudies, kindLabel } from "@/content/work";
import { faq } from "@/content/faq";

// Static export: emitted as out/llms.txt at build time.
export const dynamic = "force-static";

/**
 * llmstxt.org convention — one plain-text file an assistant can read instead of
 * parsing the rendered site. Generated from the same content as the pages, so
 * it cannot drift out of sync with them.
 */
function build(): string {
  const work = caseStudies
    .map(
      (study) =>
        `- [${study.title}](${site.url}/work/${study.slug}) — ${kindLabel[study.kind]}, ${study.client}, ${study.year}. ${study.summary} Disciplines: ${study.disciplines.join(", ")}. Stack: ${study.stack.join(", ")}.`
    )
    .join("\n");

  const languages = site.languages
    .map((language) => `${language.name} (${language.level})`)
    .join(", ");

  const capabilities = site.capabilities
    .map((capability) => `### ${capability.title}\n${capability.body}\nAreas: ${capability.items.join(", ")}.`)
    .join("\n\n");

  const facts = site.proof
    .map((item) => `- ${item.value} — ${item.label}. ${item.note}`)
    .join("\n");

  return `# ${site.name} — ${site.role}

> ${site.tagline} Based in ${site.location}, working remotely with teams in the United States.

${about.bio.join("\n\n")}

## Availability

${site.availability.label}. ${site.availability.detail}

- Engagement: ${site.remote.find((r) => r.label === "Engagement")?.value}
- Time zone: ${site.usOverlap}
- Languages: ${languages}
- Contact: ${site.email}

## What I do

${capabilities}

## Selected work

${work}

## Facts

${facts}

## Questions and answers

${faq.map((item) => `### ${item.question}\n${item.answer}`).join("\n\n")}

## Pages

- [Home](${site.url}) — overview
- [Work](${site.url}/work) — all ${caseStudies.length} projects
- [About](${site.url}/about) — background, principles, timeline
- [CV](${site.url}/resume) — full curriculum vitae
- [Contact](${site.url}/contact) — how to get in touch

## Elsewhere

${site.socials.map((social) => `- ${social.label}: ${social.href}`).join("\n")}
`;
}

export function GET() {
  return new Response(build(), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
