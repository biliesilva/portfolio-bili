import type { WorkEntry } from "../types";

export const remoteWork: WorkEntry = {
  slug: "remote-work",
  kind: "project",
  tone: "remote-work",
  title: "Remote Work",
  client: "Independent, Google Play",
  year: "2025 to 2026",
  summary:
    "An Android app that pulls remote jobs from five boards into one list, tracks every application and builds your CV. Rebuilt from scratch in 2025.",
  disciplines: ["Product Design", "Front-end", "UI/UX"],
  featured: false,
  order: 5,

  disclosure: "Live on Google Play. Install it and you are looking at the work.",
  links: [
    {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.remotework",
    },
  ],

  role: "Design and front-end of the new version",
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

  panel: {
    src: "/work/remote-work/panel.jpg",
    alt: "Remote Work job list and application tracker",
    aspect: "16/10",
  },

  brief: {
    problem:
      "Remote jobs are spread over many boards, and it is hard to remember where twenty applications stand.",
    contribution:
      "I designed every screen of the new version in Figma, built its component layer, and take part in deciding what it does.",
    outcome:
      "The listing has passed 100,000 installs. That total includes the older app the 2025 rebuild replaced.",
  },

  blocks: [
    {
      type: "text",
      title: "The list is the whole app",
      body: [
        "It carries what you need to decide: role, company, date, a save action, and an Applied marker once you have applied. You never open a job twice by accident.",
      ],
      media: {
        src: "/work/remote-work/jobs.jpg",
        alt: "Remote Work job list: each card carries the role, company and date, with a save action, an overflow menu, and an Applied marker",
        caption: "Applied state sits on the card",
        aspect: "666/1480",
      },
    },
    {
      type: "figure",
      media: {
        src: "/work/remote-work/design.jpg",
        alt: "Figma frames for Remote Work: the job list, an overflow menu, and a filter sheet with a date filter and tag chips",
        caption: "The list, the menu and the filter sheet, drawn as one set",
        aspect: "2192/1070",
      },
    },
    {
      type: "gallery",
      title: "From finding to applying",
      intro:
        "Filters by date, status and tag. A tracker that dates every stage. A CV builder, because you apply from the same place. Nine languages and two themes.",
      media: [
        {
          src: "/work/remote-work/filters.jpg",
          alt: "Remote Work filter sheet: filter by date posted, by applied status, and by tag",
          caption: "Filters",
          aspect: "666/1480",
        },
        {
          src: "/work/remote-work/applications.jpg",
          alt: "Remote Work application tracker: applications with applied, interviewing, offer and rejected stages, dated, with notes",
          caption: "Tracker",
          aspect: "666/1480",
        },
        {
          src: "/work/remote-work/resume.jpg",
          alt: "Remote Work CV builder: tabs for personal info, experience, education and skills, with save and export actions",
          caption: "CV builder",
          aspect: "666/1480",
        },
      ],
    },
  ],
};
