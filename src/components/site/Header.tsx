import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { EXPERIENCES } from "@/data/experiences";

type NavItem =
  | { kind: "route"; to: string; label: string }
  | { kind: "hash"; hash: string; label: string }
  | { kind: "experiences"; label: string };

const NAV: NavItem[] = [
  { kind: "route", to: "/", label: "Home" },
  { kind: "experiences", label: "Experiências" },
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
  const [expOpen, setExpOpen] = useState(false);

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

  const linkClass = `text-[16px] font-semibold tracking-[0.20em] uppercase transition-colors ${
    scrolled ? "text-brand-navy/80 hover:text-brand-gold" : "text-white/85 hover:text-brand-gold"
  }`;

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
          {NAV.map((n) => {
            if (n.kind === "route") {
              return (
                <Link key={n.label} to={n.to} className={linkClass}>
                  {n.label}
                </Link>
              );
            }
            if (n.kind === "hash") {
              return (
                <Link key={n.label} to="/" hash={n.hash} className={linkClass}>
                  {n.label}
                </Link>
              );
            }
            return (
              <div
                key={n.label}
                className="relative"
                onMouseEnter={() => setExpOpen(true)}
                onMouseLeave={() => setExpOpen(false)}
              >
                <Link
                  to="/"
                  hash="experiencias"
                  className={`${linkClass} inline-flex items-center gap-1`}
                >
                  {n.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                <div
                  className={`absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 border border-border/60 bg-background/95 shadow-[var(--shadow-elegant)] backdrop-blur-xl transition-all duration-200 ${
                    expOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <ul className="py-2">
                    {EXPERIENCES.map((e) => (
                      <li key={e.slug}>
                        <Link
                          to="/experiencias/$slug"
                          params={{ slug: e.slug }}
                          className="flex flex-col gap-0.5 px-5 py-3 text-brand-navy transition-colors hover:bg-brand-cream-deep"
                        >
                          <span className="text-[11px] tracking-[0.24em] uppercase text-brand-gold">
                            {e.sub}
                          </span>
                          <span className="text-[15px] font-medium">{e.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
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
            className="hidden rounded-sm bg-brand-gold px-5 py-3 text-[14px] font-semibold tracking-[0.22em] uppercase text-brand-navy transition-all duration-300 hover:bg-brand-gold-soft hover:shadow-[var(--shadow-gold-glow)] md:inline-flex"
          >
            Solicitar orçamento
          </Link>
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
          className={`absolute inset-0 bg-brand-navy-deep/80 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto border-l border-border/70 bg-brand-cream px-7 py-7 shadow-2xl transition-transform duration-500 ${
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
          <nav className="mt-10 flex flex-col gap-1">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-border/70 py-4 text-brand-navy"
            >
              <span className="text-base font-medium">Home</span>
            </Link>

            <div className="border-b border-border/70 py-4">
              <Link
                to="/"
                hash="experiencias"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between text-brand-navy"
              >
                <span className="text-base font-medium">Experiências</span>
              </Link>
              <ul className="mt-3 space-y-2 pl-3">
                {EXPERIENCES.map((e) => (
                  <li key={e.slug}>
                    <Link
                      to="/experiencias/$slug"
                      params={{ slug: e.slug }}
                      onClick={() => setOpen(false)}
                      className="block py-1.5 text-[15px] text-brand-navy/80 hover:text-brand-gold"
                    >
                      {e.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {[
              { to: "/sobre", label: "Sobre" },
              { to: "/chef", label: "Chef" },
            ].map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-border/70 py-4 text-brand-navy"
              >
                <span className="text-base font-medium">{n.label}</span>
              </Link>
            ))}
            {[
              { hash: "galeria", label: "Galeria" },
              { hash: "depoimentos", label: "Depoimentos" },
            ].map((n) => (
              <Link
                key={n.hash}
                to="/"
                hash={n.hash}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-border/70 py-4 text-brand-navy"
              >
                <span className="text-base font-medium">{n.label}</span>
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-border/70 py-4 text-brand-navy"
            >
              <span className="text-base font-medium">Contato</span>
            </Link>
          </nav>
          <Link
            to="/contato"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-brand-gold py-4 text-[14px] font-semibold tracking-[0.22em] uppercase text-brand-navy"
          >
            Solicitar orçamento
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brand-navy/20 py-4 text-[14px] font-semibold tracking-[0.22em] uppercase text-brand-navy"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </aside>
      </div>
    </header>
  );
}
