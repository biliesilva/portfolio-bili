import { Hero } from "@/components/sections/hero";
import { Proof } from "@/components/sections/proof";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Capabilities } from "@/components/sections/capabilities";
import { RemoteReady } from "@/components/sections/remote-ready";
import { ContactCta } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Proof />
      <FeaturedWork />
      <Capabilities />
      <RemoteReady />
      <ContactCta />
    </>
  );
}
