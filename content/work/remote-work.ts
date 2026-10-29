import type { WorkEntry } from "../types";

export const remoteWork: WorkEntry = {
  slug: "remote-work",
  kind: "project",
  title: "Remote Work",
  client: "Independent · Google Play",
  year: "2025 — 2026",
  summary:
    "An Android app that pulls remote jobs from five boards into one list, tracks every application and builds your CV. Past 100,000 installs.",
  disciplines: ["Product Design", "Front-end", "UI/UX"],
  featured: true,
  order: 5,

  disclosure: "Live on Google Play — install it and you are looking at the work.",

  role: "UI/UX and front-end",
  team: "Small team",
  timeline: "Ongoing",
  platforms: ["Android"],
  stack: ["Figma", "TypeScript", "React Native"],

  cover: {
    src: "/work/remote-work/cover.jpg",
    alt: "Remote Work: the job list with an Applied marker on each card, and the application tracker showing a role moving from applied to interviewing to offer",
    caption: "Finding the job and tracking it, in the same app",
    aspect: "16/10",
  },

  context: [
    "I joined once the app was running. It worked, but the interface was holding it back and there were no shared components to build screens from.",
    "Remote Work pulls listings from Remote OK, We Work Remotely, Remotive, Remote.co and Web3.career into one list, across 30+ categories. It is past 100,000 installs.",
  ],

  responsibilities: [
    {
      title: "Designed the screens before building them",
      body: "Every screen was drawn in Figma first — the list, the overflow menu, the filter sheet — so the states were decided before anything was coded.",
      media: {
        src: "/work/remote-work/design.jpg",
        alt: "Figma frames for Remote Work: the job list, the same list with a Share, Open URL and Remove Applied menu open, and a filter sheet with a date filter and tag chips",
        caption: "The list, the menu and the filter sheet, drawn as one set",
        aspect: "2/1",
      },
    },
    {
      title: "Improved the UI and UX",
      body: "The list is the whole app, so it carries everything you need to decide: role, company, date, a save action, and an Applied marker once you have applied. You never open a job twice by accident.",
      media: {
        src: "/work/remote-work/jobs.jpg",
        alt: "Remote Work job list: each card carries the role, company and date, with a save action, an overflow menu, and an Applied marker once you have applied",
        caption: "Applied state sits on the card, so you never apply twice",
        aspect: "682/1490",
      },
    },
    {
      title: "Added an application tracker",
      body: "Applied, Interviewing, Offer, Rejected — each stage dated, with a notes field. Applying is the easy part; remembering where twenty applications stand is not.",
      media: {
        src: "/work/remote-work/applications.jpg",
        alt: "Remote Work application tracker: two applications, each with applied, interviewing, offer and rejected stages, dated, with a notes field",
        caption: "Each stage dated, so the history is the status",
        aspect: "682/1490",
      },
    },
    {
      title: "Built the components that did not exist",
      body: "There was no component layer, so every screen had been built on its own. I designed the components, implemented them, and rebuilt the screens on top of them — filters, alerts and settings included.",
      media: {
        src: "/work/remote-work/filters.jpg",
        alt: "Remote Work filter sheet: filter by date posted, by applied status, and by tag, with tags like remote work and digital nomad selected",
        caption: "Filters by date, applied status and tag",
        aspect: "682/1490",
      },
    },
  ],

  system: {
    title: "The CV lives in the app",
    body: [
      "You find the job and apply from the same place, so the CV builder is a step in that flow rather than a separate product. Personal info, experience, education, skills and languages, then export.",
      "It ships in eight languages and two themes.",
    ],
    media: {
      src: "/work/remote-work/resume.jpg",
      alt: "Remote Work CV builder: tabs for personal info, experience, education, skills and languages, a form with name, title and email filled in, and save and export actions",
      caption: "Built and exported without leaving the app",
      aspect: "682/1490",
    },
  },

  outcome: {
    metrics: [
      { value: "100k+", label: "Installs" },
      { value: "5", label: "Job boards in one list" },
      { value: "8", label: "Languages supported" },
    ],
    body: [
      "Remote Work has passed 100,000 installs. Public ratings are the feedback loop, so the next release is usually answering the last review.",
    ],
  },
};
