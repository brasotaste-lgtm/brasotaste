/**
 * Custom brand-line icons for each experience. Thin stroke, gold ink — meant to
 * stand in for the official icon set until the brand SVGs are uploaded.
 */
type IconProps = { className?: string };

const base = "stroke-current fill-none";
const sw = 1.25;

export function IconSelection({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={`${base} ${className}`} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 30c4-4 10-4 14 0s10 4 14 0" />
      <path d="M24 8c2 4 6 6 6 11a6 6 0 1 1-12 0c0-3 2-5 3-7 .8 1.4 2 2 3 2-.5-2 0-4 0-6Z" />
      <path d="M14 38h20" />
    </svg>
  );
}

export function IconCelebration({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={`${base} ${className}`} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 10v8a8 8 0 0 0 16 0v-8" />
      <path d="M14 10h20" />
      <path d="M24 26v10" />
      <path d="M16 40h16" />
      <path d="M10 12c0 4 2 6 6 6" />
      <path d="M38 12c0 4-2 6-6 6" />
    </svg>
  );
}

export function IconPersonal({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={`${base} ${className}`} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="16" r="6" />
      <path d="M10 38c2-6 8-10 14-10s12 4 14 10" />
      <path d="M24 6v2" />
      <path d="M16 8l1.5 1.5" />
      <path d="M32 8l-1.5 1.5" />
    </svg>
  );
}

export function IconAnatomy({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={`${base} ${className}`} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 30l24-18 4 4-24 18z" />
      <path d="M30 16l4 4" />
      <path d="M10 36h22" />
      <path d="M14 40h14" />
    </svg>
  );
}

export function IconBrunch({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={`${base} ${className}`} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="12" />
      <circle cx="24" cy="24" r="5" />
      <path d="M24 6v4" />
      <path d="M24 38v4" />
      <path d="M6 24h4" />
      <path d="M38 24h4" />
    </svg>
  );
}

export function IconBurger({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={`${base} ${className}`} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 20c0-6 7-10 16-10s16 4 16 10" />
      <path d="M8 26h32" />
      <path d="M10 32c2 3 5 4 8 3s5 1 7 0 4 2 7 1 5-2 6-4" />
      <path d="M8 38h32" />
    </svg>
  );
}

export function IconFlame({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} strokeWidth={1.3} strokeLinejoin="round">
      <path d="M12 2.5c1.2 3.6 4.5 5.4 4.5 9.2a4.5 4.5 0 1 1-9 0c0-1.7.9-3 1.7-4 .5 1.1 1.5 1.6 2.2 1.6-.4-2.3.2-4.5.6-6.8Z" />
    </svg>
  );
}
