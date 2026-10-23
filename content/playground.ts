import type { PlaygroundItem } from "./types";

/**
 * The page that proves "designer and developer" instead of claiming it.
 * Seeded from your public repositories — add screen recordings to /public/playground/.
 */
export const playground: PlaygroundItem[] = [
  {
    title: "Heroic Modal system",
    year: "2026",
    blurb:
      "An atomic Modal with size, tone and footer-layout props, built to replace a legacy Dialog across 60 files of an open-source app. Deleted more code than it added.",
    tags: ["TypeScript", "Design systems", "Open source"],
    href: "https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/pull/5932",
    media: { src: "", alt: "Modal variants: default, destructive, error", aspect: "4/3" },
  },
  {
    title: "Surface-aware colour tokens",
    year: "2026",
    blurb:
      "A token layer where components request a role on a surface rather than a colour, so text stays legible across 15 user-installed themes.",
    tags: ["Design tokens", "SCSS", "Accessibility"],
    href: "https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/pull/5964",
    media: { src: "", alt: "The same component rendered across six themes", aspect: "4/3" },
  },
  {
    title: "FlashCard",
    year: "2025",
    blurb:
      "Interactive flashcards built as a module challenge — the prototype that became FlashFlow.",
    tags: ["React", "CSS", "Prototype"],
    href: "https://github.com/biliesilva/FlashCard",
    media: { src: "", alt: "Flip-card interaction", aspect: "4/3" },
  },
  {
    title: "Book manager",
    year: "2026",
    blurb:
      "A responsive book management interface with full create, edit and filter flows. Vanilla JavaScript, no framework.",
    tags: ["JavaScript", "Responsive"],
    href: "https://github.com/biliesilva/gerenciador-de-livros",
    media: { src: "", alt: "Responsive book management interface", aspect: "4/3" },
  },
  {
    title: "Letmeask",
    year: "2021",
    blurb:
      "Real-time Q&A for live streams, built during Rocketseat's Next Level Week with React and Firebase.",
    tags: ["React", "Firebase", "Real-time"],
    href: "https://github.com/biliesilva/nlw-tgt-letmeask",
    media: { src: "", alt: "Live Q&A room interface", aspect: "4/3" },
  },
  {
    title: "Happy",
    year: "2020",
    blurb:
      "Web and mobile app connecting visitors to children's homes — ReactJS, React Native and TypeScript sharing one type layer.",
    tags: ["React Native", "TypeScript"],
    href: "https://github.com/biliesilva/Happy-application",
    media: { src: "", alt: "Happy web and mobile screens", aspect: "4/3" },
  },
];
