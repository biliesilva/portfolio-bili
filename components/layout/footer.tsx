import Link from "next/link";
import { site } from "@/content/site";
import { LocalTime } from "@/components/ui/local-time";
import { Year } from "@/components/ui/year";

export function Footer() {
  return (
    <footer className="container-edge pb-10">
      <div className="hairline grid gap-10 pt-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="label">Elsewhere</p>
          <ul className="mt-4 space-y-1">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="link-wipe text-lead"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="label">Pages</p>
          <ul className="mt-4 space-y-1">
            {[...site.nav, { label: "CV", href: "/resume" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-wipe text-lead">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between gap-6 md:col-span-3 md:items-end">
          <p className="label md:text-right">
            {site.availability.open ? site.availability.label : "Not currently available"}
          </p>
          <div className="label flex flex-col gap-1 md:text-right">
            <LocalTime />
            <span>
              &copy; <Year /> {site.name}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
