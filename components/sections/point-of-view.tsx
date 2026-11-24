import { site } from "@/content/site";
import { Portrait } from "@/components/ui/portrait";
import { ButtonLink } from "@/components/ui/button-link";

export function PointOfView() {
  return (
    <section className="container-edge grid gap-12 py-14 md:grid-cols-12 md:py-20">
      <div className="md:col-span-4">
        <Portrait sizes="(min-width: 768px) 30vw, 90vw" />
      </div>
      <div className="md:col-span-7 md:col-start-6">
        <h2 className="max-w-[18ch] text-headline">
          I kept ending up on the other side of the hand-off.
        </h2>
        <p className="mt-8 max-w-[60ch] text-lead">
          I started as a designer and became the developer of the same
          interface, so I stopped crossing back. I care about systems that other
          people can keep coherent after I leave the room.
        </p>
        <dl className="mt-12 grid gap-8 sm:grid-cols-2">
          {site.proof.map((item) => (
            <div key={item.label} className="hairline flex flex-col-reverse justify-end pt-5">
              <dt className="mt-2">
                {item.label}
                <span className="label block">{item.note}</span>
              </dt>
              <dd className="text-headline leading-none">{item.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-12">
          <ButtonLink href="/about" variant="ghost">
            About me
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
