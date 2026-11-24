export function CodeFrame({ code, caption }: { code: string; caption: string }) {
  return (
    <figure>
      <pre
        tabIndex={0}
        aria-label={caption}
        className="overflow-x-auto border border-ink-line bg-ink-raised p-6 font-code text-base leading-relaxed text-bone md:p-8"
      >
        <code>{code}</code>
      </pre>
      <figcaption className="label mt-3">{caption}</figcaption>
    </figure>
  );
}
