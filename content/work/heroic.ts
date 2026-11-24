import type { ProofLink, WorkEntry } from "../types";

const pull = (number: number, topic: string): ProofLink => ({
  label: `${topic}, PR #${number}`,
  href: `https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/pull/${number}`,
});

export const heroic: WorkEntry = {
  slug: "heroic-games-launcher",
  kind: "case-study",
  tone: "heroic",
  title: "Heroic Games Launcher",
  client: "Open source, 500k+ monthly users",
  year: "2020 to present",
  summary:
    "I ran the research that validated it and designed it from the start. Years later I rebuilt it around one design system, with rules so it stays coherent.",
  disciplines: ["Product Design", "Design Systems", "Front-end", "UI/UX"],
  featured: true,
  order: 1,

  disclosure:
    "Open source. The pull requests and their review conversations are public on GitHub, and linked below.",
  links: [
    {
      label: "Heroic on GitHub",
      href: "https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher",
    },
    {
      label: "My pull requests",
      href: "https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/pulls?q=is%3Apr+author%3Abiliesilva",
    },
  ],

  role: "Validation research and visual design from the start (2020), front-end since 2025, UI pull request review",
  team: "Open-source contributors in Europe and South America",
  timeline: "6 years, ongoing",
  platforms: ["Linux", "Windows", "macOS", "Steam Deck"],
  stack: ["TypeScript", "React", "SCSS", "Electron", "Storybook", "Figma"],

  cover: {
    src: "/work/heroic/library-2026.jpg",
    alt: "The redesigned Heroic library: a grouped sidebar, one header with search, categories, filters and view controls, and a Played recently card with its Play button",
    caption: "The redesigned library, captured from the development build",
    aspect: "2000/1138",
  },

  panel: {
    src: "/work/heroic/game-page-2026.jpg",
    alt: "The redesigned Heroic game page: Install as the main action over the cover art, with the overview and game details below",
    aspect: "16/10",
  },

  brief: {
    problem:
      "Years of UI pull requests I could not control, while I worked full time at other companies and startups, altered my original design. The result was weak UX, inconsistent UI, poor contrast and support links players could not find.",
    contribution:
      "I did the desk research and Linux user interviews that validated the project, and the visual design from the start. Then, after some years, when I had more time, I redesigned the interface, wrote its front-end and built the design system.",
    outcome:
      "A consistent interface and organised front-end code. Screens share one design system, and all 17 bundled themes pass WCAG AA text contrast, tested on every pull request.",
  },

  blocks: [
    {
      type: "text",
      title: "Here since before it was a product",
      body: [
        "In 2020 I did the desk research and the interviews with Linux users that validated the project: whether Heroic was worth building at all.",
        "I also did all of the visual design at the beginning: the brand, the screens and the UI components.",
      ],
    },
    {
      type: "text",
      title: "How it became Frankenstein",
      body: [
        "Much of that design was changed over the years. I was working full time at other companies and startups, so I could not control which pull requests were merged, or organise the people who were sending UI changes.",
        "Anyone could contribute, and nothing told them what the interface should look like. Three fonts, Material UI mixed with custom SCSS, and themes that each broke somewhere.",
      ],
    },
    {
      type: "quote",
      text: "Rebuild everything, keep every feature, and do not make it feel like a stranger's app.",
      body: [
        "That was the hard part. More than 500,000 people a month already use Heroic to play their Epic, GOG, Amazon, itch.io and Steam games, and they knew where things were. Removing a feature, or moving everything at once, would have cost them more than the old interface did.",
      ],
    },
    {
      type: "compare",
      title: "Before and after",
      intro: "Release 2.22.4 and the redesign, captured from the development build, which still shows that version number.",
      items: [
        {
          title: "Library",
          note: "One header, a grouped sidebar, and a name on every card.",
          before: { src: "/work/heroic/before-library.jpg", alt: "Old Heroic library: an ungrouped sidebar and game cards without visible names", aspect: "2000/1138" },
          after: { src: "/work/heroic/library-2026.jpg", alt: "Redesigned Heroic library: grouped sidebar, one header and a named game card", aspect: "2000/1138" },
        },
        {
          title: "Game page",
          note: "The title stops competing with the art, and Install comes first.",
          before: { src: "/work/heroic/before-game-page.jpg", alt: "Old Heroic game page: the title overlaps the logo in the art, and Install sits at the bottom", aspect: "2000/1124" },
          after: { src: "/work/heroic/game-page-2026.jpg", alt: "Redesigned Heroic game page: title and Install at the top, overview and game details below", aspect: "2000/1124" },
        },
        {
          title: "Downloads",
          note: "The current download leads, the empty queue explains itself, and every item has a status.",
          before: { src: "/work/heroic/before-downloads.jpg", alt: "Old Heroic downloads page: an empty graph and tables with no status", aspect: "2000/1138" },
          after: { src: "/work/heroic/downloads-2026.jpg", alt: "Redesigned Heroic downloads page: the current download with pause and cancel, an explained empty queue, and a status on each completed item", aspect: "2000/1138" },
        },
        {
          title: "Wine manager",
          note: "A description, tabs that read as tabs, and panels for the notice and the table.",
          before: { src: "/work/heroic/before-wine-manager.jpg", alt: "Old Heroic Wine Manager: a floating notice and a table with bright lines across the page", aspect: "2000/1138" },
          after: { src: "/work/heroic/wine-manager-2026.jpg", alt: "Redesigned Heroic Wine manager: page description, underlined tabs, a notice panel and a table panel", aspect: "2000/1138" },
        },
        {
          title: "Settings",
          note: "One long column became cards, with each label and control on one row.",
          before: { src: "/work/heroic/before-settings.jpg", alt: "Old Heroic settings: one narrow column of stacked fields", aspect: "2000/690" },
          after: { src: "/work/heroic/settings-2026.jpg", alt: "Redesigned Heroic settings: a section menu and cards that pair each label with its control", aspect: "2000/690" },
        },
      ],
    },
    {
      type: "decisions",
      title: "What I rebuilt, and what had to survive",
      items: [
        {
          title: "Colour that holds in every theme",
          problem:
            "Text colour was set per component, so legibility depended on the theme.",
          decision:
            "Components ask for a role on a surface and the token system resolves the colour. I audited every theme and fixed the WCAG AA failures.",
          why: "All 17 bundled themes pass WCAG AA for body text, 4.5:1 or better.",
          links: [pull(5964, "Colour tokens"), pull(6067, "Theme palettes")],
          media: {
            src: "/work/heroic/theme-list.jpg",
            alt: "The theme picker in Heroic settings, open on its list of themes, from Heroic Theme to Cyberpunk",
            caption: "The theme picker: 17 themes on the same roles",
            aspect: "1916/1644",
          },
        },
        {
          title: "One font, one scale, one icon weight",
          problem:
            "Rubik and Cabin together, sizes set per screen, and icons from another visual language.",
          decision:
            "Outfit as the single font, a scale from 12 to 48 exposed as semantic tokens, and outlined Lucide icons.",
          why: "Contributors choose a role instead of a pixel value.",
          links: [pull(5489, "Font and icons"), pull(5964, "Type scale")],
          media: {
            src: "/work/heroic/type-roles.jpg",
            alt: "Heroic downloads page: page title, description, section heading, labels and status, each on its own step of the scale, with outlined icons",
            caption: "Title, description, section, label and status, on one scale",
            aspect: "1410/820",
          },
        },
        {
          title: "Shared layout for the game page and settings",
          problem:
            "Layout was written again on each screen, so one bug had to be fixed in several places.",
          decision:
            "Panel, SettingsCard, SettingRow, Alert, Tabs and SpecCard, shared by the game page and settings.",
          why: "Spacing and structure live in one place.",
          links: [pull(5964, "Layout components"), pull(6071, "Stores page")],
          media: {
            src: "/work/heroic/stores.jpg",
            alt: "The Heroic Stores page: one card per store, with its description, login status and actions",
            caption: "Stores: one card per store, on a single page",
            aspect: "2000/1135",
          },
        },
        {
          title: "A new modal that controllers do not notice",
          problem:
            "Controller navigation depended on the structure of the old dialog.",
          decision:
            "I moved every modal to one component and kept the structure the gamepad code relies on.",
          why: "The interface changed and playing with a controller did not.",
          links: [pull(5932, "Modal")],
        },
      ],
    },
    {
      type: "code",
      title: "The design decision, as code",
      body: [
        "Nobody can check every text colour in 17 themes by hand, so the rule lives in the code. Text measures the surface under it and flips to the readable side.",
      ],
      code: `--on-panel: oklch(
  from var(--panel-base)
  clamp(0.14, (0.62 - l) * 1000, 0.97) 0 h
);
--on-panel-muted: oklch(
  from var(--panel-base)
  clamp(0.36, (0.62 - l) * 1000, 0.79) 0 h
);`,
      caption: "From _surfaces.scss in Heroic. The panel beside it runs this same rule.",
      themes: [
        { name: "Dracula", surface: "#282a36" },
        { name: "Candy Light", surface: "#d7e6fb" },
        { name: "One Piece", surface: "#ebe0bf" },
        { name: "Mint", surface: "#0d1510" },
        { name: "Vampyria", surface: "#1a0608" },
      ],
      links: [pull(5964, "Surface tokens")],
    },
    {
      type: "list",
      title: "So it does not become Frankenstein again",
      items: [
        {
          title: "Storybook, with rules",
          body: "Components and tokens can be reviewed on their own, in every theme. Every story runs as a test on each pull request.",
          links: [pull(6054, "Storybook")],
        },
        {
          title: "Contrast tested in every theme",
          body: "If any text pair falls below 4.5:1 in any theme, the check fails.",
          links: [
            {
              label: "Contrast test",
              href: "https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/blob/main/.storybook/foundations/Contrast.stories.tsx",
            },
          ],
        },
        {
          title: "A written design system",
          body: "Colour, type and spacing are documented, so contributors have something to follow.",
          links: [
            {
              label: "Design system guide",
              href: "https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/blob/main/doc/frontend_design_system.md",
            },
          ],
        },
        {
          title: "Review",
          body: "I review and approve UI pull requests from other contributors.",
          links: [
            {
              label: "Pull requests I reviewed",
              href: "https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/pulls?q=is%3Apr+reviewed-by%3Abiliesilva+-author%3Abiliesilva",
            },
          ],
        },
        {
          title: "One way of writing",
          body: "Every label, button and message moved to sentence case.",
          links: [pull(6066, "Sentence case")],
        },
      ],
    },
    {
      type: "text",
      title: "Helping players find how to support it",
      body: [
        "Heroic is free, and it depends on people who support its contributors. The coffee page, Patreon and affiliate links existed, but many players did not know about them. Making them easy to find was a goal of the redesign, and now there is one Support us page.",
        "I redesigned these pages and sent the code too. I rebuilt the Support Us screen with feature cards, in a pull request shared with a maintainer, and moved the Deals screen, which carries affiliate links, onto the design system. I also redesigned the banner that explains those links, and added the affiliate notes to the Stores page and to settings.",
      ],
      media: {
        src: "/work/heroic/support-us.jpg",
        alt: "The Heroic Support us page: cards for Patreon, Ko-fi, PayPal and GitHub Sponsors, each with its type and an Open button",
        caption: "Support us, with every way to help in one place",
        aspect: "2000/1143",
      },
      links: [pull(6058, "Support Us screen"), pull(6067, "Deals screen"), pull(6054, "Banner"), pull(6071, "Affiliate notes")],
    },
    {
      type: "stats",
      title: "Where it stands",
      items: [
        { value: "500k+", label: "Monthly users" },
        { value: "12.6k", label: "Stars on GitHub" },
        { value: "17", label: "Themes that pass WCAG AA text contrast" },
        { value: "2020", label: "Validated and designed from the start" },
      ],
      body: [
        "The app now shares components, tokens and one visual language, with the rules written down for whoever contributes next.",
        "My first pull request was merged in May 2025. The library, modals, game page and settings merged in November 2026, followed by Storybook, the refreshed themes and the new Stores page.",
      ],
    },
  ],
};
