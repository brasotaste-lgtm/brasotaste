export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" aria-label="Braso Taste — Início" className={`group inline-flex items-center gap-3 ${className}`}>
      <span aria-hidden className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brand-gold/70">
        <FlameIcon className="h-4 w-4 text-brand-gold" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-[0.18em] text-brand-navy">
          BRASO<span className="text-brand-gold">·</span>TASTE
        </span>
        <span className="mt-1 text-[9px] tracking-[0.34em] text-muted-foreground">
          BBQ &amp; GASTRONOMIC
        </span>
      </span>
    </a>
  );
}

export function FlameIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.4">
      <path d="M12 2.5c1.2 3.6 4.5 5.4 4.5 9.2a4.5 4.5 0 1 1-9 0c0-1.7.9-3 1.7-4 .5 1.1 1.5 1.6 2.2 1.6-.4-2.3.2-4.5.6-6.8Z" strokeLinejoin="round" />
    </svg>
  );
}
