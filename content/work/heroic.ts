import type { WorkEntry } from "../types";

/**
 * Every number and claim here is verifiable from the public pull requests.
 * Add screenshots to /public/work/heroic/ and fill in the `src` fields.
 */
export const heroic: WorkEntry = {
  slug: "heroic-games-launcher",
  kind: "case-study",
  title: "Heroic Games Launcher",
  client: "Open source · 12,500+ stars",
  year: "2020 — present",
  summary:
    "Redesigning a 12.5k-star desktop games launcher and shipping the code: a design system that survives 15 user themes, built across ~14,000 lines of TypeScript.",
  disciplines: ["Product Design", "Design Systems", "Front-end", "UI/UX"],
  featured: true,
  order: 1,

  role: "UX/UI design contributor (2020—) · front-end contributor (2025—)",
  team: "Open-source maintainers and contributors",
  timeline: "5+ years, ongoing",
  platforms: ["Desktop (Linux, Windows, macOS)", "Electron"],
  stack: ["TypeScript", "React", "SCSS", "Electron", "Lucide", "Figma"],

  cover: {
    src: "",
    alt: "Heroic Games Launcher library redesigned with the Heroic Theme",
    aspect: "16/10",
  },

  disclosure:
    "Open source, so there is nothing I cannot show you. Every pull request, review conversation and decision below is public on GitHub.",

  context: [
    "Heroic Games Launcher is how hundreds of thousands of people play GOG, Amazon and Epic games on Linux, Windows, macOS and SteamDeck. It is open source, has 12,500+ stars, and like most community-built apps its interface had grown one contribution at a time: three fonts, Material UI mixed with custom SCSS, and 15 bundled themes that each broke in a different place.",
    "I have contributed as a UX/UI designer since December 2020, and since March 2025 as a front-end developer too. Nobody commissioned a redesign — I opened one, in public, with the code attached.",
    "This is the work I point to when an NDA stops me showing something else. It is the same practice I bring to employed work, except here you can read every decision and every review conversation yourself.",
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
      media: { src: "", alt: "Game page rebuilt as hero plus tabbed panel", aspect: "16/10" },
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
    media: { src: "", alt: "Heroic Theme applied across library, game page and settings", aspect: "16/9" },
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
      { value: "12.5k★", label: "Stars on the project I ship to" },
      { value: "4", label: "Public PRs — 1 merged, 3 in review" },
      { value: "-1,127", label: "Lines deleted by the Modal migration" },
    ],
    body: [
      "The first pull request — tab navigation, theme colours and spacing on the game info page — was merged in March 2025. The library redesign, the Modal system, and the game page and settings rebuild are public and in review.",
      "Everything is verifiable: the pull requests, the review conversations, and the decisions I lost are all on GitHub.",
    ],
  },

  reflection: [
    "I opened the library redesign before the token layer existed, which made the review harder than it needed to be. The structural change should always ship first — it is the argument for everything after it.",
    "Working in public changed how I write design rationale. A pull request description has to convince a stranger who has no meeting with me.",
  ],
};
