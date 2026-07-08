import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#experiencias", label: "Experiências" },
  { href: "#sobre", label: "Sobre" },
  { href: "#chef", label: "Chef" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const WHATSAPP = "https://wa.me/5521974064098?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20Braso%20Taste";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
          scrolled ? "py-5" : "py-8"
        }`}
      >
        <div />



        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-[14px] font-semibold tracking-[0.20em] uppercase transition-colors ${
                scrolled
                  ? "text-brand-navy/80 hover:text-brand-gold"
                  : "text-white/85 hover:text-brand-gold"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className={`grid h-10 w-10 place-items-center rounded-full border transition-colors ${
              scrolled
                ? "border-brand-navy/20 text-brand-navy hover:bg-brand-navy hover:text-brand-cream"
                : "border-white/40 text-white hover:bg-white hover:text-brand-navy"
            }`}
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href="#contato"
            className="hidden rounded-sm bg-brand-gold px-5 py-3 text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-navy transition-all duration-300 hover:bg-brand-gold-soft hover:shadow-[var(--shadow-gold-glow)] md:inline-flex"
          >
            Solicitar orçamento
          </a>
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className={`grid h-10 w-10 place-items-center rounded-full border lg:hidden ${
              scrolled ? "border-brand-navy/20 text-brand-navy" : "border-white/40 text-white"
            }`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-brand-navy-deep/80 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col border-l border-border/70 bg-brand-cream px-7 py-7 shadow-2xl transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="relative flex items-center justify-center">
            <Logo size="xl" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="absolute right-0 grid h-11 w-11 place-items-center rounded-full border border-brand-navy/15 text-brand-navy"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-1">
            {NAV.map((n, i) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-border/70 py-4 text-brand-navy"
                style={{ animation: open ? `fade-up 0.5s ${i * 0.05}s both` : "none" }}
              >
                <span className="text-base font-medium">{n.label}</span>
                <span className="text-brand-gold opacity-0 transition-opacity group-hover:opacity-100">→</span>
              </a>
            ))}
          </nav>
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-auto inline-flex w-full items-center justify-center rounded-sm bg-brand-gold py-4 text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-navy"
          >
            Solicitar orçamento
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brand-navy/20 py-4 text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-navy"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </aside>
      </div>
    </header>
  );
}
