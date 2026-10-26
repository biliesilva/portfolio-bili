import type { WorkEntry } from "../types";

/**
 * Every number and claim here is verifiable from the public pull requests.
 * Add screenshots to /public/work/heroic/ and fill in the `src` fields.
 */
export const heroic: WorkEntry = {
  slug: "heroic-games-launcher",
  kind: "case-study",
  title: "Heroic Games Launcher",
  client: "Open source · 500k+ monthly users",
  year: "2020 — present",
  summary:
    "I ran the validation research that decided this was worth building. Five years later it has 500k+ monthly users, and I still design and ship its interface.",
  disciplines: ["Product Design", "Design Systems", "Front-end", "UI/UX"],
  featured: true,
  order: 3,

  role: "Validation research · UX/UI design (2020—) · front-end (2025—)",
  team: "Open-source maintainers and contributors",
  timeline: "5+ years, ongoing",
  platforms: ["Linux", "Windows", "macOS", "Steam Deck"],
  stack: ["TypeScript", "React", "SCSS", "Electron", "Lucide", "Figma"],

  cover: {
    src: "/work/heroic/library.jpg",
    alt: "The Heroic Games Launcher library, redesigned — Heroic Theme, Outfit, and the Lucide icon set in the sidebar",
    caption: "The library after the redesign, running the Heroic Theme",
    aspect: "16/9",
  },

  disclosure:
    "Open source, so there is nothing I cannot show you. Every pull request, review conversation and decision below is public on GitHub.",

  context: [
    "Heroic Games Launcher is how more than 500,000 people a month play GOG, Amazon and Epic games on Linux, Windows, macOS and Steam Deck. It is free and open source.",
    "I have been here since before it was a product. In 2020 I led the validation research — desk research plus interviews with Linux users — that answered the question underneath the idea: was this worth building at all? The research said yes, and five years of adoption has said the same thing louder.",
    "I stayed, as a UX/UI design contributor from 2020 and as a front-end contributor since 2025. Like most community-built software the interface had grown one contribution at a time: three fonts, Material UI mixed with custom SCSS, and 15 bundled themes that each broke in a different place. Nobody commissioned a redesign — I opened one, in public, with the code attached.",
    "This is the work I point to when an NDA stops me showing something else. Same practice as my employed work, except here you can read every decision and every review conversation yourself.",
  ],
  goal:
    "Give Heroic a coherent interface that any of its 15 themes can wear, without asking maintainers to accept a rewrite.",
  constraints: [
    "15 bundled community themes must keep working — no theme may be sacrificed",
    "Open-source review: every decision has to be defensible to maintainers in public",
    "Incremental pull requests only — nothing big enough to be unreviewable",
    "Three operating systems, one codebase",
  ],

  research: [
    {
      insight: "It was worth building — Linux users said so first",
      detail:
        "The validation research in 2020 combined desk research with interviews with Linux users. The demand was real and specific: people wanted their existing game libraries on Linux without a storefront telling them it was not supported. That finding is what the project was built on.",
    },
    {
      insight: "The themes were the real constraint",
      detail:
        "Hardcoded colours meant text legibility depended on which theme a user had picked. Any fix had to be structural, not cosmetic.",
    },
    {
      insight: "Layout logic was duplicated, not shared",
      detail:
        "Spacing and panel structure were re-implemented per screen, so the same visual bug had to be fixed four times.",
    },
    {
      insight: "Trust is earned in reviewable chunks",
      detail:
        "A single redesign PR would have been rejected on size alone. The work had to arrive as a sequence, each piece shippable on its own.",
    },
  ],

  decisions: [
    {
      title: "Surface-aware colour tokens instead of fixed colours",
      problem:
        "Text colour was authored per component, so a theme with a light surface could render low-contrast text — and there was no way to test all 15 combinations by hand.",
      decision:
        "Replaced hardcoded values with surface-aware semantic tokens: components ask for a role on a surface, the token system resolves the colour.",
      why:
        "One structural change made text neutral and legible across every bundled theme at once, and made new themes safe to add.",
      media: { src: "", alt: "Surface-aware token system across multiple themes", aspect: "16/9" },
    },
    {
      title: "One font and one type scale",
      problem:
        "Rubik and Cabin were both in use, with ad-hoc sizes per screen. Nothing lined up vertically.",
      decision:
        "Outfit as the single app font, and a 12/14/16/18/20/24/32/40/48 scale exposed as semantic tokens (--body-*, --title-*).",
      why:
        "A named scale ends the per-screen negotiation: contributors pick a role, not a pixel value.",
      media: { src: "", alt: "Type scale with semantic token names", aspect: "4/3" },
    },
    {
      title: "An atomic Modal, then every modal migrated to it",
      problem:
        "The legacy Dialog component was wrapped differently everywhere, so confirmation dialogs had inconsistent button order and no destructive treatment.",
      decision:
        "Built Modal / ModalHeader / ModalContent / ModalFooter with size, tone and footer-layout props, plus a Button atom with four variants — then migrated all 60 files that used the old dialog.",
      why:
        "Destructive actions now look destructive everywhere, and confirmation comes before cancel in every dialog in the app. 1,250 lines added, 1,127 deleted — the system shrank the codebase.",
      media: { src: "", alt: "Modal component anatomy with tone and size variants", aspect: "16/9" },
    },
    {
      title: "Shared layout primitives for the game page and settings",
      problem:
        "The game page and the settings screens duplicated layout and spacing logic across 266 files, so they drifted apart with every release.",
      decision:
        "Introduced Panel, SettingsCard, SettingRow, Alert, Tabs and SpecCard, then rebuilt the game page as a hero with a tabbed panel over the cover art and settings as cards.",
      why:
        "Spacing and structure now live in one place. The next contributor changes a component, not four screens.",
      media: {
        src: "/work/heroic/game-page.jpg",
        alt: "Heroic game page: a hero with the play actions over the cover art, and a tabbed panel below it",
        caption: "Game page — hero over cover art, with Overview, Installation Info and System Requirements as tabs",
        aspect: "16/9",
      },
    },
    {
      title: "Outlined icon system",
      problem:
        "MUI icons carried a visual language that fought the rest of the interface and pulled in a heavy dependency.",
      decision:
        "Migrated Library, Sidebar, Header, SearchBar, ActionIcons, filter dropdowns and buttons to Lucide outlined icons.",
      why:
        "A consistent icon weight across the app, and one less design language to reconcile.",
    },
  ],

  system: {
    title: "The Heroic Theme",
    body: [
      "Alongside the structural work I designed and shipped a new default: Heroic Theme — dark, minimal, cyan accent (#22d3ee) — registered in the theme picker next to the community themes rather than replacing them.",
      "The point was never my taste winning. The token layer underneath it is what lets 15 other themes look deliberate too.",
    ],
    media: {
      src: "/work/heroic/settings.jpg",
      alt: "Heroic settings rebuilt on cards, with Heroic Theme selected in the theme picker",
      caption: "Settings rebuilt on cards. The theme picker is set to Heroic Theme — the one I designed",
      aspect: "16/9",
    },
  },

  build: {
    body: [
      "I designed and implemented every change myself, in TypeScript and SCSS, and defended each one in public review. The work arrived as four pull requests, each independently reviewable, building on the one before it.",
      "This is the part of my practice that is hardest to show in a Figma file: the design only counts once it is merged into someone else's codebase without breaking their 15 themes.",
    ],
    notes: [
      { value: "~14k", label: "Lines of UI code contributed" },
      { value: "~500", label: "Files touched across 4 PRs" },
      { value: "15", label: "Themes kept working" },
    ],
  },

  outcome: {
    metrics: [
      { value: "500k+", label: "Monthly users of the product I validated" },
      { value: "12.5k★", label: "Stars on the repository I ship to" },
      { value: "5 yrs", label: "From validation research to shipping code" },
    ],
    body: [
      "The first pull request — tab navigation, theme colours and spacing on the game info page — was merged in March 2025. The library redesign, the Modal system, and the game page and settings rebuild are public and in review.",
      "Everything is verifiable: the pull requests, the review conversations, and the decisions I lost are all on GitHub.",
    ],
  },

  reflection: [
    "Five years on one product, from the research that justified it to the code that renders it, is the clearest answer I have to what I actually do.",
    "I opened the library redesign before the token layer existed, which made the review harder than it needed to be. The structural change should always ship first — it is the argument for everything after it.",
    "Working in public changed how I write design rationale. A pull request description has to convince a stranger who has no meeting with me.",
  ],
};
