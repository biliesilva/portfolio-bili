import { cn } from "@/lib/cn";

/**
 * Infinite CSS marquee with a duplicated, aria-hidden track.
 * The global reduced-motion rule in globals.css freezes the animation, so no
 * JavaScript branch is needed and the markup is identical on both sides.
 */
export function Marquee({
  items,
  className,
  speed = 38,
}: {
  items: string[];
  className?: string;
  /** Seconds for one full pass. */
  speed?: number;
}) {
  const track = (hidden: boolean) => (
    <ul
      className="flex shrink-0 items-center gap-10 pr-10"
      aria-hidden={hidden || undefined}
    >
      {items.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center gap-10">
          <span className="text-title whitespace-nowrap text-bone-dim">{item}</span>
          <span className="size-1.5 shrink-0 rounded-full bg-accent" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className="flex w-max animate-[marquee_linear_infinite]"
        style={{ animationDuration: `${speed}s` }}
      >
        {track(false)}
        {track(true)}
      </div>
      <style>{`@keyframes marquee { from { transform: translate3d(0,0,0) } to { transform: translate3d(-50%,0,0) } }`}</style>
    </div>
  );
}
