import { Hero } from "@/components/sections/hero";
import { PointOfView } from "@/components/sections/point-of-view";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Capabilities } from "@/components/sections/capabilities";
import { RemoteReady } from "@/components/sections/remote-ready";
import { ContactCta } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <PointOfView />
      <Capabilities />
      <RemoteReady />
      <ContactCta />
    </>
  );
}
