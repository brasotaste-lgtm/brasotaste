import { useMemo } from "react";

/**
 * Subtle smoke + ember layer. Pure CSS animations — sits absolutely inside hero.
 */
export function Smoke() {
  const smoke = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => ({
        left: `${10 + i * 11}%`,
        delay: `${i * 1.4}s`,
        duration: `${12 + (i % 4) * 3}s`,
        dx: `${(i % 2 === 0 ? -1 : 1) * (20 + (i % 3) * 15)}px`,
        size: `${180 + (i % 3) * 60}px`,
      })),
    [],
  );

  const embers = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        left: `${5 + i * 7}%`,
        delay: `${i * 0.6}s`,
        duration: `${6 + (i % 5)}s`,
        dx: `${(i % 2 === 0 ? -1 : 1) * (40 + (i % 4) * 20)}px`,
        size: `${2 + (i % 3)}px`,
      })),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {smoke.map((s, i) => (
        <span
          key={`s${i}`}
          className="absolute bottom-[-10%] rounded-full bg-white/10 blur-3xl"
          style={{
            left: s.left,
            width: s.size,
            height: s.size,
            // @ts-expect-error custom prop
            "--dx": s.dx,
            animation: `smoke-rise ${s.duration} ${s.delay} ease-out infinite`,
          }}
        />
      ))}
      {embers.map((e, i) => (
        <span
          key={`e${i}`}
          className="absolute bottom-0 rounded-full shadow-[0_0_8px_2px_rgba(226,189,124,0.7)]"
          style={{
            left: e.left,
            width: e.size,
            height: e.size,
            backgroundColor: "var(--brand-gold)",
            // @ts-expect-error custom prop
            "--dx": e.dx,
            animation: `ember-float ${e.duration} ${e.delay} ease-out infinite`,
          }}
        />
      ))}
    </div>
  );
}
