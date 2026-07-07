/**
 * Official brand icons (PNG) served from the Lovable Assets CDN.
 */
import anatomyAsset from "@/assets/icon-anatomy.png.asset.json";
import brunchAsset from "@/assets/icon-brunch.png.asset.json";
import burgerAsset from "@/assets/icon-burger.png.asset.json";
import celebrationAsset from "@/assets/icon-celebration.png.asset.json";
import personalAsset from "@/assets/icon-personal.png.asset.json";
import selectionAsset from "@/assets/icon-selection.png.asset.json";

type IconProps = { className?: string };

function BrandIcon({ src, alt, className = "h-16 w-16" }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} loading="lazy" className={`object-contain ${className}`} />;
}

export function IconSelection({ className }: IconProps) {
  return <BrandIcon src={selectionAsset.url} alt="Selection" className={className} />;
}

export function IconCelebration({ className }: IconProps) {
  return <BrandIcon src={celebrationAsset.url} alt="Celebration" className={className} />;
}

export function IconPersonal({ className }: IconProps) {
  return <BrandIcon src={personalAsset.url} alt="Personal Taste" className={className} />;
}

export function IconAnatomy({ className }: IconProps) {
  return <BrandIcon src={anatomyAsset.url} alt="Anatomia à Brasa" className={className} />;
}

export function IconBrunch({ className }: IconProps) {
  return <BrandIcon src={brunchAsset.url} alt="Brunch" className={className} />;
}

export function IconBurger({ className }: IconProps) {
  return <BrandIcon src={burgerAsset.url} alt="House Burger" className={className} />;
}

export function IconFlame({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current ${className}`} strokeWidth={1.3} strokeLinejoin="round">
      <path d="M12 2.5c1.2 3.6 4.5 5.4 4.5 9.2a4.5 4.5 0 1 1-9 0c0-1.7.9-3 1.7-4 .5 1.1 1.5 1.6 2.2 1.6-.4-2.3.2-4.5.6-6.8Z" />
    </svg>
  );
}
