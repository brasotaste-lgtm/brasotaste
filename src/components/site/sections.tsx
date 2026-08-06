import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getGoogleReviews, getInstagramPosts } from "@/lib/social.functions";

import {
  ArrowRight,
  Award,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  Star,
  Utensils,
} from "lucide-react";

import { Smoke } from "./Smoke";
import { Reveal } from "./Reveal";
import { Logo } from "@/components/brand/Logo";
import { IconFlame } from "./icons";
import { EXPERIENCES } from "@/data/experiences";

import heroChef from "@/assets/hero-chef.jpg";
import aboutGathering from "@/assets/about-gathering.jpg";
import chefPortrait from "@/assets/chef-portrait.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const WHATSAPP = "https://wa.me/5521974064098?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20Braso%20Taste";

/* ---------- HERO ---------- */
export function Hero() {
  return (
    <section id="home" className="relative isolate h-[100svh] min-h-[640px] w-full overflow-hidden bg-brand-navy-deep text-white">
      <img
        src={heroChef}
        alt="Chef Fabio preparando carnes premium na brasa"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/85" />
      <Smoke />

      <Logo
        size="default"
        className="pointer-events-none absolute right-[6%] top-[38%] z-20 hidden -translate-y-1/2 md:inline-flex lg:right-[8%] [&_img]:!h-[300px] lg:[&_img]:!h-[300px]"
      />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-28 md:justify-center md:pt-0">
        <div className="max-w-3xl animate-fade-up">
          <Logo
            size="default"
            className="mb-4 flex justify-center md:hidden [&_img]:!h-[160px] [&_img]:mx-auto"
          />
          <h1 className="font-display text-[40px] font-light leading-[1.02] tracking-tight text-center md:text-left sm:text-6xl md:text-7xl lg:text-[88px]">
            Sabor <span className="italic font-normal text-brand-gold">Braso</span>
          </h1>
          <p className="mt-5 max-w-lg text-[15px] font-light leading-relaxed text-white/85 text-center md:text-left sm:text-lg">
            A experiência gastronômica na sua casa.
            <br className="hidden sm:block" />
            Técnica, fogo e hospitalidade conduzidos pelo Chef Fabio Tortelote.
          </p>


          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-brand-gold px-6 py-3.5 text-[13px] font-semibold tracking-[0.22em] uppercase text-brand-navy transition-all duration-300 hover:bg-brand-gold-soft hover:shadow-[var(--shadow-gold-glow)]"
            >
              Solicitar orçamento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#experiencias"
              className="inline-flex items-center justify-center rounded-sm border border-white/40 bg-white/5 px-6 py-3.5 text-[13px] font-semibold tracking-[0.22em] uppercase text-white backdrop-blur-sm transition-colors hover:border-brand-gold hover:text-brand-gold"
            >
              Conhecer experiências
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-center text-[12px] tracking-[0.4em] text-white/60 md:block">
        <span className="block">SCROLL</span>
        <span className="mx-auto mt-2 block h-10 w-px bg-white/40" />
      </div>
    </section>
  );
}

/* ---------- EXPERIENCES ---------- */
export function Experiences() {
  return (
    <section id="experiencias" className="relative bg-background py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">As experiências</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight text-brand-navy sm:text-4xl md:text-5xl">
            Seis maneiras de viver
            <br />
            <span className="italic text-brand-gold">a mesa Braso</span>.
          </h2>
          <span className="gold-divider mt-6" />
          <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-muted-foreground text-justify">
            Cada formato é desenhado com técnica de alta gastronomia e o calor do encontro.
            Escolha o que combina com o seu momento — nós cuidamos de cada detalhe.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((e, i) => (
            <Reveal key={e.title} delay={i * 80}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-border/70 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/60 hover:shadow-[var(--shadow-gold-glow)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={e.img}
                    alt={e.title}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/70 via-brand-navy-deep/10 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col px-7 py-7">
                  <div className="mx-auto mb-5 grid h-24 w-24 place-items-center text-brand-gold transition-transform duration-500 group-hover:scale-110 md:h-28 md:w-28">
                    <e.Icon className="h-24 w-24 md:h-28 md:w-28" />
                  </div>
                  <p className="text-center text-[12px] tracking-[0.28em] uppercase text-brand-gold">{e.sub}</p>
                  <h3 className="mt-3 text-center font-display text-xl font-medium text-brand-navy">{e.title}</h3>
                  <p className="mt-3 flex-1 text-justify text-[16px] leading-relaxed text-muted-foreground">{e.text}</p>
                  <Link
                    to="/experiencias/$slug"
                    params={{ slug: e.slug }}
                    className="mt-6 inline-flex items-center justify-center gap-2 text-[14px] font-semibold tracking-[0.24em] uppercase text-brand-navy transition-colors hover:text-brand-gold"
                  >
                    Saiba mais
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- ABOUT ---------- */
export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-brand-cream-deep py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow">Sobre a Braso Taste</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight text-brand-navy sm:text-4xl md:text-5xl">
            Transformamos encontros em
            <br />
            <span className="italic text-brand-gold">memórias gastronômicas</span>.
          </h2>
          <span className="gold-divider mt-6" />
          <div className="mt-7 space-y-5 text-[18px] leading-relaxed text-muted-foreground text-justify">
            <p>
              A Braso Taste nasce do encontro entre técnica de alta gastronomia, o calor da brasa e o
              cuidado de receber bem. Levamos ao seu espaço uma operação completa — chef, equipe,
              equipamentos e curadoria — para que você apenas viva o momento.
            </p>
            <p>
              Acreditamos que cada celebração merece um menu pensado, uma execução impecável e a
              hospitalidade que torna tudo memorável.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-border/70 pt-8 sm:grid-cols-3">
            {[
              { k: "+10", v: "cidades atendidas", sub: "Grande RJ, Serrana à Região dos Lagos" },
              { k: "100%", v: "eventos personalizados" },
              { k: "100%", v: "feito no seu espaço" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-light text-brand-navy">{s.k}</dt>
                <dd className="mt-2 text-[14px] tracking-[0.18em] uppercase text-muted-foreground">{s.v}</dd>
                {s.sub && (
                  <dd className="mt-1 text-[14px] leading-snug text-muted-foreground/80">{s.sub}</dd>
                )}
              </div>
            ))}
          </dl>

        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -left-3 -top-3 hidden h-full w-full border border-brand-gold/50 sm:block" />
            <img
              src={aboutGathering}
              alt="Encontro elegante reunido ao redor da brasa"
              loading="lazy"
              width={1600}
              height={1100}
              className="relative aspect-[4/3] w-full object-cover shadow-[var(--shadow-elegant)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- CHEF ---------- */
export function Chef() {
  return (
    <section id="chef" className="relative bg-brand-navy text-brand-cream py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -right-3 -bottom-3 hidden h-full w-full border border-brand-gold/60 sm:block" />
            <img
              src={chefPortrait}
              alt="Chef Fabio Tortelote"
              loading="lazy"
              width={1200}
              height={1500}
              className="relative aspect-[4/5] w-full object-cover shadow-[var(--shadow-elegant)]"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <p className="eyebrow">O Chef</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            Chef <span className="italic text-brand-gold">Fabio Tortelote</span>
          </h2>
          <span className="gold-divider mt-6" />
          <div className="mt-7 space-y-5 text-[18px] leading-relaxed text-brand-cream/85 text-justify">
            <p>
              Trajetória construída entre brasas, cozinhas autorais e o estudo dos cortes. Fabio
              une técnica clássica, criatividade contemporânea e a obsessão pelo ponto certo do fogo.
            </p>
            <p>
              Sua assinatura é a hospitalidade — receber como em casa, com a precisão de um restaurante
              de alta gastronomia.
            </p>
          </div>

          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { Icon: Utensils, t: "Técnica" },
              { Icon: Award, t: "Curadoria" },
              { Icon: IconFlame, t: "Hospitalidade" },
            ].map((b) => (
              <li key={b.t} className="flex items-center gap-3 border-l border-brand-gold/40 pl-4">
                <b.Icon className="h-5 w-5 text-brand-gold" />
                <span className="text-[14px] tracking-[0.2em] uppercase">{b.t}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
const GALLERY = [
  { src: g1, alt: "Picanha fatiada na tábua", span: "md:col-span-2 md:row-span-2" },
  { src: g2, alt: "Brasas vivas" },
  { src: g3, alt: "Vinho sendo servido" },
  { src: g4, alt: "Tempero e sal grosso" },
  { src: g5, alt: "Prato autoral finalizado" },
  { src: g6, alt: "Ambiente elegante ao ar livre", span: "md:col-span-2" },
];

export function Gallery() {
  const fetchPosts = useServerFn(getInstagramPosts);
  const { data: posts } = useQuery({
    queryKey: ["instagram-posts"],
    queryFn: () => fetchPosts(),
    staleTime: 1000 * 60 * 30,
    retry: false,
  });

  const items =
    posts && posts.length > 0
      ? posts.map((p, i) => ({
          src: p.imageUrl,
          alt: p.caption,
          href: p.permalink,
          span: i === 0 || i === 5 ? "md:col-span-2" : undefined,
        }))
      : GALLERY.map((g) => ({ src: g.src, alt: g.alt, href: undefined as string | undefined, span: g.span }));

  return (
    <section id="galeria" className="bg-background py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">Galeria</p>
            <h2 className="mt-5 font-display text-3xl font-light leading-tight text-brand-navy sm:text-4xl md:text-5xl">
              Momentos <span className="italic text-brand-gold">à mesa</span>.
            </h2>
            <span className="gold-divider mt-6" />
          </div>
          <a
            href="https://instagram.com/brasotaste"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] font-semibold tracking-[0.24em] uppercase text-brand-navy transition-colors hover:text-brand-gold"
          >
            <Instagram className="h-4 w-4" />
            @brasotaste
          </a>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {items.map((g, i) => {
            const Media = (
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            );
            return (
              <Reveal key={`${g.src}-${i}`} delay={i * 60} className={`group relative overflow-hidden ${g.span ?? ""}`}>
                {g.href ? (
                  <a href={g.href} target="_blank" rel="noopener noreferrer" className="block">
                    {Media}
                  </a>
                ) : (
                  Media
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* ---------- TESTIMONIALS ---------- */
const TESTIMONIALS = [
  {
    name: "Mariana A.",
    role: "Aniversário privado · Rio de Janeiro",
    text: "Cada detalhe foi pensado. O chef Fabio conduziu a noite com sofisticação e o menu surpreendeu cada convidado.",
  },
  {
    name: "Grupo Heritage",
    role: "Evento corporativo",
    text: "Recebemos clientes internacionais e a Braso Taste entregou uma experiência de altíssimo nível. Voltaremos sempre.",
  },
  {
    name: "Rafael &amp; Júlia",
    role: "Pré-wedding",
    text: "Foi a noite mais elegante que já tivemos em casa. Hospitalidade impecável e uma carne inesquecível.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-brand-cream-deep py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Depoimentos</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight text-brand-navy sm:text-4xl md:text-5xl">
            O que dizem nossos <span className="italic text-brand-gold">anfitriões</span>.
          </h2>
          <span className="gold-divider mt-6" />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-sm border border-border/70 bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/60 hover:shadow-[var(--shadow-gold-glow)]">
                <Quote className="h-6 w-6 text-brand-gold" />
                <blockquote className="mt-5 flex-1 text-[18px] leading-relaxed text-foreground/85 text-justify" dangerouslySetInnerHTML={{ __html: `“${t.text}”` }} />
                <div className="mt-8 flex items-center gap-1 text-brand-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <figcaption className="mt-4 border-t border-border pt-4">
                  <div className="font-display text-base font-medium text-brand-navy" dangerouslySetInnerHTML={{ __html: t.name }} />
                  <div className="mt-1 text-[14px] tracking-[0.18em] uppercase text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
export function Contact() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;

    // Open WhatsApp pre-filled with the form data (no backend integration yet).
    const msg = encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento Braso Taste.\n\n` +
        `Nome: ${data.name}\n` +
        `Telefone: ${data.phone}\n` +
        `Email: ${data.email}\n` +
        `Cidade: ${data.city}\n` +
        `Data: ${data.date}\n` +
        `Convidados: ${data.guests}\n` +
        `Tipo de evento: ${data.eventType}\n` +
        `Mensagem: ${data.message || "-"}`,
    );

    setTimeout(() => {
      setLoading(false);
      toast.success("Pedido enviado", { description: "Continuaremos a conversa pelo WhatsApp." });
      window.open(`https://wa.me/5521974064098?text=${msg}`, "_blank", "noopener,noreferrer");
      (e.target as HTMLFormElement).reset();
    }, 500);
  }

  const input =
    "h-12 w-full rounded-sm border border-border bg-card px-4 text-[16px] text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30";

  return (
    <section id="contato" className="relative bg-brand-navy text-brand-cream py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Contato</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            Vamos criar a sua
            <br />
            <span className="italic text-brand-gold">experiência</span>.
          </h2>
          <span className="gold-divider mt-6" />
          <p className="mt-7 max-w-md text-[18px] leading-relaxed text-brand-cream/85 text-justify">
            Conte-nos sobre o seu evento. Em até 24 horas retornaremos com uma proposta personalizada.
          </p>

          <ul className="mt-10 space-y-5 text-[16px]">
            <li className="flex items-center gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-brand-gold/60 text-brand-gold">
                <Phone className="h-4 w-4" />
              </span>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold">
                +55 21 97406-4098
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-brand-gold/60 text-brand-gold">
                <Instagram className="h-4 w-4" />
              </span>
              <a href="https://instagram.com/brasotaste" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold">
                @brasotaste
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-brand-gold/60 text-brand-gold">
                <Mail className="h-4 w-4" />
              </span>
              <a href="mailto:contato@brasotatse.com.br" className="hover:text-brand-gold">
                contato@brasotatse.com.br
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-brand-gold/60 text-brand-gold">
                <MapPin className="h-4 w-4" />
              </span>
              <span>Atendemos Rio de Janeiro e região.</span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="rounded-sm bg-brand-cream/[0.04] p-7 ring-1 ring-white/10 backdrop-blur-sm sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nome">
                <input name="name" required maxLength={120} className={input} placeholder="Seu nome" />
              </Field>
              <Field label="Telefone">
                <input name="phone" required maxLength={30} className={input} placeholder="(00) 00000-0000" />
              </Field>
              <Field label="Email">
                <input name="email" required type="email" maxLength={200} className={input} placeholder="email@exemplo.com" />
              </Field>
              <Field label="Cidade">
                <input name="city" required maxLength={120} className={input} placeholder="Rio de Janeiro" />
              </Field>
              <Field label="Data">
                <input name="date" required type="date" className={input} />
              </Field>
              <Field label="Convidados">
                <input name="guests" required type="number" min={1} max={500} className={input} placeholder="Ex.: 20" />
              </Field>
              <Field label="Tipo de evento" className="sm:col-span-2">
                <select name="eventType" required className={input} defaultValue="">
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option>Braso Taste Selection</option>
                  <option>Braso Celebration</option>
                  <option>Braso Personal Taste</option>
                  <option>Da Anatomia à Brasa</option>
                  <option>Brunch Braso Taste</option>
                  <option>Braso House Burger</option>
                  <option>Corporativo</option>
                  <option>Outro</option>
                </select>
              </Field>
              <Field label="Mensagem" className="sm:col-span-2">
                <textarea
                  name="message"
                  maxLength={1000}
                  rows={4}
                  className={`${input} min-h-[120px] py-3`}
                  placeholder="Conte-nos sobre o seu evento (opcional)"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-brand-gold py-4 text-[14px] font-semibold tracking-[0.24em] uppercase text-brand-navy transition-all duration-300 hover:bg-brand-gold-soft hover:shadow-[var(--shadow-gold-glow)] disabled:opacity-60"
            >
              {loading ? "Enviando…" : "Solicitar orçamento"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-[12px] font-medium tracking-[0.22em] uppercase text-brand-cream/70">
        {label}
      </span>
      {children}
    </label>
  );
}

/* ---------- FOOTER ---------- */
export function Footer() {
  return (
    <footer className="bg-brand-navy-deep text-brand-cream/80">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <Logo size="large" />
        </div>


        <div className="mt-12 grid gap-8 border-t border-white/10 pt-12 text-[16px] sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="eyebrow">WhatsApp</p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 hover:text-brand-gold">
              <MessageCircle className="h-4 w-4" /> 21 97406-4098
            </a>
          </div>
          <div>
            <p className="eyebrow">Instagram</p>
            <a href="https://instagram.com/brasotaste" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 hover:text-brand-gold">
              <Instagram className="h-4 w-4" /> @brasotaste
            </a>
          </div>
          <div>
            <p className="eyebrow">Email</p>
            <a href="mailto:contato@brasotatse.com.br" className="mt-3 inline-flex items-center gap-2 hover:text-brand-gold">
              <Mail className="h-4 w-4" /> contato@brasotatse.com.br
            </a>
          </div>
          <div>
            <p className="eyebrow">CNPJ</p>
            <p className="mt-3">60.333.080/0001-29</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[14px] tracking-[0.18em] uppercase text-brand-cream/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Braso Taste. Todos os direitos reservados.</p>
          <p>Conduzido pelo Chef Fabio Tortelote</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Floating WhatsApp ---------- */
export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-brand-gold text-brand-navy shadow-[var(--shadow-gold-glow)] transition-transform duration-300 hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
