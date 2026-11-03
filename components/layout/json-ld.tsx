import { site } from "@/content/site";

/** Stable @id values so the graph nodes can reference each other. */
export const ids = {
  person: `${site.url}/#person`,
  website: `${site.url}/#website`,
};

/**
 * One `@graph` holding the whole site's entity data. Search engines read it for
 * rich results; assistants read it when someone asks who Biliane Silva is and
 * what she can be hired for. Everything here is a fact stated elsewhere on the
 * site — schema that over-claims is worse than no schema.
 */
export function personNode() {
  return {
    "@type": "Person",
    "@id": ids.person,
    name: site.name,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: site.role,
    description: `${site.tagline} Product designer and front-end developer, designing since 2010, working remotely with US teams from Brazil.`,
    image: `${site.url}/opengraph-image.png`,
    nationality: { "@type": "Country", name: "Brazil" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Maceió",
      addressRegion: "AL",
      addressCountry: "BR",
    },
    homeLocation: {
      "@type": "Place",
      name: site.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Maceió",
        addressRegion: "AL",
        addressCountry: "BR",
      },
    },
    knowsLanguage: site.languages.map((language) => ({
      "@type": "Language",
      name: language.name,
      alternateName: { English: "en", Portuguese: "pt", Spanish: "es" }[language.name],
    })),
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Product Designer",
        occupationalCategory: "15-1255.00",
        skills: [
          "Product design",
          "User research",
          "Design systems",
          "Figma",
          "Prototyping",
          "Accessibility",
        ],
      },
      {
        "@type": "Occupation",
        name: "Front-end Developer",
        occupationalCategory: "15-1254.00",
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "SCSS", "WCAG 2.2 AA"],
      },
    ],
    knowsAbout: [
      "Product design",
      "UI/UX design",
      "Design systems",
      "Design tokens",
      "Front-end development",
      "React",
      "TypeScript",
      "Next.js",
      "Accessibility",
      "Web3 and crypto product design",
      "Game and launcher UI",
      "Digital law, data protection and AI regulation",
    ],
    sameAs: site.socials
      .filter((social) => !social.href.startsWith("mailto:"))
      .map((social) => social.href),
    seeks: {
      "@type": "Demand",
      name: site.availability.label,
      description: site.availability.detail,
    },
    workLocation: {
      "@type": "Place",
      name: "Remote — working with teams in the United States",
    },
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    url: site.url,
    name: `${site.name} — ${site.role}`,
    description: site.tagline,
    inLanguage: "en",
    publisher: { "@id": ids.person },
    about: { "@id": ids.person },
  };
}

/** Rendered once, in the root layout. Page-level schema links back by @id. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [personNode(), websiteNode()],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Page-level schema. Kept here so every node shares the same @id vocabulary. */
export function PageJsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", ...data }),
      }}
    />
  );
}
