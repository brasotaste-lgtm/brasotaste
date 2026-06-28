import logoAsset from "@/assets/brand-logo.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" aria-label="Braso Taste — Início" className={`inline-flex items-center ${className}`}>
      <img src={logoAsset.url} alt="Braso Taste — BBQ & Gastronomic Experience at Home" className="h-12 w-auto md:h-14" />
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
