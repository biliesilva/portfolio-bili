import { site } from "@/content/site";

/**
 * Person schema. This is what gets quoted back when a recruiter — or an
 * AI assistant — is asked who I am and what I do.
 */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: site.role,
    description: site.tagline,
    address: { "@type": "PostalAddress", addressCountry: "BR" },
    knowsLanguage: site.languages.map((language) => language.name),
    knowsAbout: [
      "Product design",
      "UI/UX design",
      "Design systems",
      "Front-end development",
      "React",
      "TypeScript",
      "Accessibility",
    ],
    sameAs: site.socials
      .filter((social) => !social.href.startsWith("mailto:"))
      .map((social) => social.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
