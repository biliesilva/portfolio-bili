import { CodeFrame } from "@/components/ui/code-frame";
import { MediaFrame } from "@/components/ui/media-frame";
import { ProofLinks } from "@/components/ui/proof-links";
import { Reveal } from "@/components/ui/reveal";
import { ThemeDemo } from "@/components/work/theme-demo";
import { cn } from "@/lib/cn";
import { isPortrait } from "@/lib/media";
import type { Block, Decision } from "@/content/types";

function Prose({ body, className }: { body: string[]; className?: string }) {
  return (
    <div className={cn("max-w-[62ch] space-y-6", className)}>
      {body.map((paragraph) => (
        <p key={paragraph} className="text-lead">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function ProseColumns({ body, className }: { body: string[]; className?: string }) {
  return (
    <div
      className={cn("grid gap-x-12 gap-y-6", body.length > 1 && "md:grid-cols-2", className)}
    >
      {body.map((paragraph) => (
        <p key={paragraph} className="max-w-[62ch] text-lead">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

type TextBlock = Extract<Block, { type: "text" }>;

function TextPair({ blocks }: { blocks: TextBlock[] }) {
  return (
    <div className="container-edge grid gap-x-12 gap-y-14 py-14 md:grid-cols-2 md:py-20">
      {blocks.map((block) => (
        <section key={block.title} id={anchorId(block)} className="scroll-mt-24">
          <h2 className="max-w-[20ch] text-headline">{block.title}</h2>
          <Prose body={block.body} className="mt-8" />
          <ProofLinks links={block.links} className="mt-6 text-accent" />
        </section>
      ))}
    </div>
  );
}

function groupBlocks(blocks: Block[]) {
  const groups: (Block | TextBlock[])[] = [];

  for (let i = 0; i < blocks.length; i += 1) {
    const current = blocks[i];
    const following = blocks[i + 1];

    if (
      current.type === "text" &&
      current.title &&
      !current.media &&
      following?.type === "text" &&
      following.title &&
      !following.media
    ) {
      groups.push([current, following]);
      i += 1;
    } else {
      groups.push(current);
    }
  }

  return groups;
}

function DecisionItem({ decision }: { decision: Decision }) {
  return (
    <li className="hairline pt-8">
      <h3 className="max-w-[24ch] text-title">{decision.title}</h3>
      <div className="mt-8 grid gap-10 md:grid-cols-12">
        <div className={decision.media ? "md:col-span-5" : "md:col-span-12"}>
        <dl
          className={
            decision.media ? "space-y-6" : "grid gap-x-12 gap-y-6 md:grid-cols-3"
          }
        >
          <div>
            <dt className="label">Problem</dt>
            <dd className="mt-1 max-w-[56ch]">{decision.problem}</dd>
          </div>
          <div>
            <dt className="label">Decision</dt>
            <dd className="mt-1 max-w-[56ch]">{decision.decision}</dd>
          </div>
          <div>
            <dt className="label">Result</dt>
            <dd className="mt-1 max-w-[56ch]">{decision.why}</dd>
          </div>
        </dl>
        <ProofLinks links={decision.links} className="mt-6 text-accent" />
        </div>
        {decision.media ? (
          <Reveal className="md:col-span-7 md:col-start-6 md:row-start-1">
            <MediaFrame media={decision.media} sizes="(min-width: 768px) 56vw, 100vw" />
          </Reveal>
        ) : null}
      </div>
    </li>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "quote":
      return (
        <div className="chapter">
          <div className="container-edge py-24 md:py-32">
            <div className="grid items-end gap-10 md:grid-cols-12">
              <h2
                className={cn(
                  "text-hero",
                  block.body?.length === 1 ? "md:col-span-7" : "max-w-[26ch] md:col-span-12"
                )}
              >
                {block.text}
              </h2>
              {block.body ? (
                <ProseColumns
                  body={block.body}
                  className={block.body.length === 1 ? "md:col-span-5" : "md:col-span-12"}
                />
              ) : null}
            </div>
          </div>
        </div>
      );

    case "text":
      if (!block.title && !block.media) {
        return (
          <div className="container-edge py-14 md:py-20">
            <ProseColumns body={block.body} />
            <ProofLinks links={block.links} className="mt-6 text-accent" />
          </div>
        );
      }

      if (!block.media) {
        return (
          <div className="container-edge grid gap-x-12 gap-y-8 py-14 md:grid-cols-12 md:py-20">
            <h2 className="max-w-[20ch] text-headline md:col-span-5">{block.title}</h2>
            <div className="md:col-span-7">
              <Prose body={block.body} />
              <ProofLinks links={block.links} className="mt-6 text-accent" />
            </div>
          </div>
        );
      }

      return (
        <div className="container-edge grid items-center gap-12 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            {block.title ? (
              <h2 className="max-w-[20ch] text-headline">{block.title}</h2>
            ) : null}
            <Prose body={block.body} className="mt-10" />
            <ProofLinks links={block.links} className="mt-8 text-accent" />
          </div>
          <div
            className={
              isPortrait(block.media.aspect)
                ? "mx-auto w-full max-w-[22rem] md:col-span-4 md:col-start-9"
                : "md:col-span-5"
            }
          >
            <MediaFrame media={block.media} sizes="(min-width: 768px) 22rem, 90vw" />
          </div>
        </div>
      );

    case "figure":
      return (
        <Reveal className="container-edge py-12 md:py-16">
          <MediaFrame media={block.media} sizes="(min-width: 1600px) 100rem, 94vw" />
        </Reveal>
      );

    case "gallery":
      return (
        <div className="container-edge py-14 md:py-20">
          <div className="grid items-end gap-x-12 gap-y-6 md:grid-cols-12">
            {block.title ? (
              <h2 className="max-w-[20ch] text-headline md:col-span-5">{block.title}</h2>
            ) : null}
            {block.intro ? (
              <p className="max-w-[62ch] text-lead md:col-span-7">{block.intro}</p>
            ) : null}
          </div>
          <ul
            className={cn(
              "mt-12 grid items-start gap-8",
              block.media.length === 2 ? "md:grid-cols-2" : "sm:grid-cols-2 md:grid-cols-3"
            )}
          >
            {block.media.map((media) => (
              <li key={media.src}>
                <MediaFrame
                  media={media}
                  sizes={
                    block.media.length === 2
                      ? "(min-width: 768px) 46vw, 94vw"
                      : "(min-width: 768px) 30vw, (min-width: 640px) 46vw, 94vw"
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      );

    case "decisions":
      return (
        <div className="container-edge py-14 md:py-20">
          <h2 className="max-w-[22ch] text-headline">{block.title}</h2>
          <ol className="mt-16 space-y-20">
            {block.items.map((decision) => (
              <DecisionItem key={decision.title} decision={decision} />
            ))}
          </ol>
        </div>
      );

    case "compare":
      return (
        <div className="container-edge py-14 md:py-20">
          <div className="grid items-end gap-x-12 gap-y-6 md:grid-cols-12">
            <h2 className="max-w-[20ch] text-headline md:col-span-5">{block.title}</h2>
            <p className="max-w-[62ch] text-lead md:col-span-7">{block.intro}</p>
          </div>
          <ul className="mt-12 space-y-16">
            {block.items.map((item) => (
              <li key={item.title} className="hairline pt-8">
                <div className="grid gap-x-12 gap-y-3 md:grid-cols-12">
                  <h3 className="text-title md:col-span-5">{item.title}</h3>
                  <p className="max-w-[62ch] md:col-span-7">{item.note}</p>
                </div>
                <div className="mt-8 grid items-start gap-6 md:grid-cols-2">
                  <div>
                    <p className="label mb-3">Before</p>
                    <MediaFrame media={item.before} sizes="(min-width: 768px) 46vw, 94vw" />
                  </div>
                  <div>
                    <p className="mb-3 text-base text-accent">After</p>
                    <MediaFrame media={item.after} sizes="(min-width: 768px) 46vw, 94vw" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );

    case "code":
      return (
        <div className="container-edge py-14 md:py-20">
          <div className="grid items-end gap-x-12 gap-y-6 md:grid-cols-12">
            <h2 className="max-w-[20ch] text-headline md:col-span-5">{block.title}</h2>
            <Prose body={block.body} className="md:col-span-7" />
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <CodeFrame code={block.code} caption={block.caption} />
            <ThemeDemo themes={block.themes} />
          </div>
          <ProofLinks links={block.links} className="mt-4 text-accent" />
        </div>
      );

    case "list":
      return (
        <div className="container-edge py-14 md:py-20">
          <h2 className="max-w-[22ch] text-headline">{block.title}</h2>
          <ul className="mt-12">
            {block.items.map((item) => (
              <li key={item.title} className="hairline grid gap-4 py-8 md:grid-cols-12">
                <h3 className="text-title md:col-span-5">{item.title}</h3>
                <div className="md:col-span-7">
                  <p className="max-w-[60ch]">{item.body}</p>
                  <ProofLinks links={item.links} className="mt-3 text-accent" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      );

    case "stats":
      return (
        <div className="container-edge py-14 md:py-20">
          <h2 className="max-w-[22ch] text-headline">{block.title}</h2>
          <dl
            className={cn(
              "mt-12 grid gap-10",
              block.items.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"
            )}
          >
            {block.items.map((item) => (
              <div key={item.label} className="hairline flex flex-col-reverse justify-end pt-6">
                <dt className="label mt-3">{item.label}</dt>
                <dd className="text-hero font-medium leading-none">{item.value}</dd>
              </div>
            ))}
          </dl>
          {block.body ? (
            <ProseColumns
              body={block.body}
              className={cn("mt-14", block.body.length === 3 && "lg:grid-cols-3")}
            />
          ) : null}
        </div>
      );
  }
}

function blockTitle(block: Block) {
  return "title" in block ? block.title : undefined;
}

function blockId(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function anchorId(block: Block) {
  const title = blockTitle(block);
  return title ? blockId(title) : undefined;
}

export function CaseIndex({ blocks }: { blocks: Block[] }) {
  const titles = blocks.map(blockTitle).filter((title) => title !== undefined);
  if (titles.length < 4) return null;

  return (
    <nav aria-label="In this case" className="container-edge pb-10">
      <ul className="flex flex-wrap gap-x-6 gap-y-1">
        {titles.map((title) => (
          <li key={title}>
            <a
              href={`#${blockId(title)}`}
              className="inline-flex min-h-11 items-center text-bone-dim underline decoration-1 underline-offset-4 hover:text-bone hover:decoration-2"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function CaseBlocks({ blocks }: { blocks: Block[] }) {
  return groupBlocks(blocks).map((group, i) =>
    Array.isArray(group) ? (
      <TextPair key={`pair-${i}`} blocks={group} />
    ) : (
      <section key={`${group.type}-${i}`} id={anchorId(group)} className="scroll-mt-16">
        <BlockView block={group} />
      </section>
    )
  );
}
