import { site } from "@/content/site";

export function Capabilities() {
  return (
    <section aria-labelledby="capabilities-title" className="container-edge py-10 md:py-14">
      <h2 id="capabilities-title" className="label">
        What I do
      </h2>
      <ul className="mt-6">
        {site.capabilities.map((capability) => (
          <li key={capability.title} className="hairline grid gap-6 py-10 md:grid-cols-12">
            <h3 className="text-hero font-medium leading-none md:col-span-7">
              {capability.title}
            </h3>
            <div className="md:col-span-5">
              <p className="max-w-[52ch]">{capability.body}</p>
              <p className="label mt-4">{capability.items.join(", ")}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
