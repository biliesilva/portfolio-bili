import type { WorkEntry } from "../types";

export const heroic: WorkEntry = {
  slug: "heroic-games-launcher",
  kind: "case-study",
  title: "Heroic Games Launcher",
  client: "Open source · 500k+ monthly users",
  year: "2020 — present",
  summary:
    "I ran the validation research that decided this was worth building. It now has 500k+ monthly users, and I still design and ship its interface.",
  disciplines: ["Product Design", "Design Systems", "Front-end", "UI/UX"],
  featured: true,
  order: 3,

  disclosure:
    "Open source. Every pull request, review conversation and decision below is public on GitHub.",

  role: "Validation research · UX/UI design (2020—) · front-end (2025—)",
  team: "Open-source maintainers and contributors",
  timeline: "5+ years, ongoing",
  platforms: ["Linux", "Windows", "macOS", "Steam Deck"],
  stack: ["TypeScript", "React", "SCSS", "Electron", "Lucide", "Figma"],

  cover: {
    src: "/work/heroic/library.jpg",
    alt: "The Heroic Games Launcher library, redesigned — Heroic Theme, Outfit, and the Lucide icon set in the sidebar",
    caption: "The library after the redesign",
    aspect: "16/9",
  },

  context: [
    "Heroic Games Launcher lets more than 500,000 people a month play GOG, Amazon and Epic games on Linux, Windows, macOS and Steam Deck. It is free and open source.",
    "In 2020 I ran the validation research that came before it: desk research plus interviews with Linux users, to find out whether it was worth building at all.",
    "I have contributed as a UX/UI designer since then, and as a front-end developer since 2025. The interface had grown one contribution at a time — three fonts, Material UI mixed with custom SCSS, and 15 bundled themes that each broke somewhere. Nobody asked for a redesign; I opened one as a series of pull requests.",
  ],

  goal:
    "Give Heroic a coherent interface that any of its 15 themes can wear, without asking maintainers to accept a rewrite.",
  constraints: [
    "15 bundled themes must keep working",
    "Every decision reviewed in public",
    "Incremental pull requests, each shippable on its own",
    "Three operating systems, one codebase",
  ],

  research: [
    {
      insight: "Linux users wanted their existing libraries",
      detail:
        "The 2020 research combined desk research with interviews. The demand was specific: play the games you already own on Linux, without a storefront saying it is unsupported.",
    },
    {
      insight: "The themes were the real constraint",
      detail:
        "Colours were hardcoded per component, so text legibility depended on which theme the user had picked. Any fix had to be structural.",
    },
    {
      insight: "Layout logic was duplicated",
      detail:
        "Spacing and panel structure were re-implemented per screen, so the same bug had to be fixed four times.",
    },
  ],

  decisions: [
    {
      title: "Surface-aware colour tokens",
      problem:
        "Text colour was set per component, so a theme with a light surface could render low-contrast text. There was no way to check 15 themes by hand.",
      decision:
        "Replaced hardcoded values with semantic tokens: a component asks for a role on a surface, and the token system resolves the colour.",
      why: "One change made text legible across every bundled theme, and made new themes safe to add.",
    },
    {
      title: "One font, one type scale",
      problem:
        "Rubik and Cabin were both in use, with ad-hoc sizes per screen. Nothing lined up.",
      decision:
        "Outfit as the single app font, and a 12/14/16/18/20/24/32/40/48 scale exposed as semantic tokens.",
      why: "Contributors pick a role instead of a pixel value.",
    },
    {
      title: "Shared layout primitives",
      problem:
        "The game page and settings duplicated layout and spacing across 266 files, so they drifted apart every release.",
      decision:
        "Introduced Panel, SettingsCard, SettingRow, Alert, Tabs and SpecCard, then rebuilt the game page as a hero with a tabbed panel, and settings as cards.",
      why: "Spacing and structure live in one place.",
      media: {
        src: "/work/heroic/game-page.jpg",
        alt: "Heroic game page: a hero with the play actions over the cover art, and a tabbed panel below it",
        caption: "Game page — hero over cover art, Overview / Installation Info / System Requirements as tabs",
        aspect: "16/9",
      },
    },
    {
      title: "Outlined icon system",
      problem:
        "MUI icons carried a different visual language and a heavy dependency.",
      decision:
        "Migrated the library, sidebar, header, search, action icons and filters to Lucide outlined icons.",
      why: "One icon weight across the app.",
    },
  ],

  system: {
    title: "Heroic Theme",
    body: [
      "Alongside the structural work I designed a new theme: dark, minimal, cyan accent (#22d3ee). It sits in the theme picker next to the community themes rather than replacing them.",
      "The token layer underneath is what lets the other 15 look deliberate too.",
    ],
    media: {
      src: "/work/heroic/settings.jpg",
      alt: "Heroic settings rebuilt on cards, with Heroic Theme selected in the theme picker",
      caption: "Settings rebuilt on cards, with Heroic Theme selected",
      aspect: "16/9",
    },
  },

  build: {
    body: [
      "I designed and implemented every change myself, in TypeScript and SCSS, and defended each one in public review. The work arrived as four pull requests, each reviewable on its own.",
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
      { value: "12.5k★", label: "Stars on the repository" },
      { value: "5 yrs", label: "From research to shipping code" },
    ],
    body: [
      "The first pull request — tab navigation, theme colours and spacing on the game info page — was merged in March 2025. The library redesign and the game page and settings rebuild are public and in review.",
    ],
  },

  reflection: [
    "I opened the library redesign before the token layer existed, which made the review harder than it needed to be. The structural change should ship first.",
  ],
};
