import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

type NavItem =
  | { kind: "route"; to: string; label: string }
  | { kind: "hash"; hash: string; label: string };

const NAV: NavItem[] = [
  { kind: "route", to: "/", label: "Home" },
  { kind: "route", to: "/experiencias", label: "Experiências" },
  { kind: "route", to: "/sobre", label: "Sobre" },
  { kind: "route", to: "/chef", label: "Chef" },
  { kind: "hash", hash: "galeria", label: "Galeria" },
  { kind: "hash", hash: "depoimentos", label: "Depoimentos" },
  { kind: "route", to: "/contato", label: "Contato" },
];

const WHATSAPP =
  "https://wa.me/5521974064098?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20Braso%20Taste";

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
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = `text-[15px] font-semibold tracking-[0.18em] uppercase transition-colors ${
    scrolled ? "text-brand-navy/80 hover:text-brand-gold" : "text-white/85 hover:text-brand-gold"
  }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/95 backdrop-blur-xl"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-500 sm:px-8 ${
          scrolled ? "py-3 sm:py-4" : "py-4 sm:py-6"
        }`}
      >
        <div />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) =>
            n.kind === "route" ? (
              <Link key={n.label} to={n.to} className={linkClass}>
                {n.label}
              </Link>
            ) : (
              <Link key={n.label} to="/" hash={n.hash} className={linkClass}>
                {n.label}
              </Link>
            ),
          )}
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
          <Link
            to="/contato"
            className="hidden rounded-sm bg-brand-gold px-5 py-3 text-[13px] font-semibold tracking-[0.22em] uppercase text-brand-navy transition-all duration-300 hover:bg-brand-gold-soft hover:shadow-[var(--shadow-gold-glow)] md:inline-flex"
          >
            Solicitar orçamento
          </Link>
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className={`grid h-10 w-10 place-items-center rounded-full border lg:hidden ${
              scrolled ? "border-brand-navy/20 text-brand-navy" : "border-white/60 text-white"
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
          className={`absolute inset-0 bg-brand-navy-deep/80 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto border-l border-border/70 bg-brand-cream px-6 py-6 shadow-2xl transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-brand-gold">
              Menu
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-brand-navy/15 text-brand-navy"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col">
            {NAV.map((n) =>
              n.kind === "route" ? (
                <Link
                  key={n.label}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/70 py-4 text-base font-medium text-brand-navy"
                >
                  {n.label}
                </Link>
              ) : (
                <Link
                  key={n.label}
                  to="/"
                  hash={n.hash}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/70 py-4 text-base font-medium text-brand-navy"
                >
                  {n.label}
                </Link>
              ),
            )}
          </nav>

          <Link
            to="/contato"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-brand-gold py-4 text-[13px] font-semibold tracking-[0.22em] uppercase text-brand-navy"
          >
            Solicitar orçamento
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brand-navy/20 py-4 text-[13px] font-semibold tracking-[0.22em] uppercase text-brand-navy"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </aside>
      </div>
    </header>
  );
}
