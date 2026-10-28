import type { Metadata } from "next";
import { Barlow_Condensed, Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { JsonLd } from "@/components/layout/json-ld";
import { MotionProvider } from "@/components/layout/motion-provider";

const display = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const sans = Barlow_Semi_Condensed({
  variable: "--font-barlow-semi-condensed",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: `${site.tagline} ${site.yearsOfExperience} years across product design, design systems and front-end engineering. Based in ${site.location}, working remotely with US teams.`,
  keywords: [
    "product designer",
    "UI UX designer",
    "front-end developer",
    "design systems",
    "React",
    "Next.js",
    "remote designer LATAM",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: `${site.name} — ${site.role}` }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@bili_mds",
    images: ["/opengraph-image.png"],
  },
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable}`}
    >
      <body className="min-h-svh">
        <SmoothScroll />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:font-condensed focus:text-base focus:text-ink"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
        <div className="grain" aria-hidden="true" />
        <JsonLd />
      </body>
    </html>
  );
}
