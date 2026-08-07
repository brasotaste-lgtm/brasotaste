import { useRef, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getGoogleReviews } from "@/lib/social.functions";

import {
  ArrowRight,
  Award,
  ChevronLeft,
  ChevronRight,
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
import videoFire from "@/assets/videos/fogo-brasa.mp4";
import videoCarving from "@/assets/videos/corte-finalizacao.mp4";
import videoFullService from "@/assets/videos/mesa-full-service.mp4";
import posterFire from "@/assets/videos/fogo-brasa-poster.jpg";
import posterCarving from "@/assets/videos/corte-finalizacao-poster.jpg";
import posterFullService from "@/assets/videos/mesa-full-service-poster.jpg";
import videoMiniBurgers from "@/assets/videos/mini-burgers.mp4";
import posterMiniBurgers from "@/assets/videos/mini-burgers-poster.jpg";
import videoMesaBrunch from "@/assets/videos/mesa-brunch.mp4";
import posterMesaBrunch from "@/assets/videos/mesa-brunch-poster.jpg";
import videoCarneBrasa from "@/assets/videos/carne-na-brasa.mp4";
import posterCarneBrasa from "@/assets/videos/carne-na-brasa-poster.jpg";
import videoFogoFinalizacao from "@/assets/videos/fogo-finalizacao.mp4";
import posterFogoFinalizacao from "@/assets/videos/fogo-finalizacao-poster.jpg";
import videoAnatomiaCortes from "@/assets/videos/anatomia-cortes.mp4";
import posterAnatomiaCortes from "@/assets/videos/anatomia-cortes-poster.jpg";

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
        className="pointer-events-none absolute left-[66%] top-[38%] z-20 hidden -translate-x-1/2 -translate-y-1/2 md:inline-flex [&_img]:!h-[300px] lg:[&_img]:!h-[300px]"
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
  const carouselRef = useRef<HTMLDivElement>(null);

  const moveCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollBy({ left: direction * carousel.clientWidth * 0.86, behavior: "smooth" });
  };

  return (
    <section id="experiencias" className="relative bg-background py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-5xl">
            <p className="eyebrow">As experiências</p>
            <h2 className="mt-3 font-display text-3xl font-light leading-tight text-brand-navy sm:text-4xl lg:whitespace-nowrap lg:text-[46px]">
              Seis maneiras de viver <span className="italic text-brand-gold">a mesa Braso</span>.
            </h2>
            <span className="gold-divider mt-4" />
          </div>
          <p className="mt-4 max-w-4xl text-[18px] leading-relaxed text-muted-foreground">
            Cada formato é desenhado com técnica de alta gastronomia e o calor do encontro.
            Escolha o que combina com o seu momento — nós cuidamos de cada detalhe.
          </p>
        </Reveal>

        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="text-[13px] tracking-[0.18em] uppercase text-muted-foreground">
            Deslize para conhecer todas
          </p>
          <div className="flex gap-2" aria-label="Controles do carrossel">
            <button
              type="button"
              onClick={() => moveCarousel(-1)}
              aria-label="Experiências anteriores"
              className="grid h-11 w-11 place-items-center rounded-full border border-brand-navy/25 text-brand-navy transition-colors hover:border-brand-gold hover:bg-brand-gold hover:text-brand-navy"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => moveCarousel(1)}
              aria-label="Próximas experiências"
              className="grid h-11 w-11 place-items-center rounded-full border border-brand-navy/25 text-brand-navy transition-colors hover:border-brand-gold hover:bg-brand-gold hover:text-brand-navy"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          style={{ scrollbarWidth: "none", overflowY: "hidden" }}
          className="experience-carousel mt-3 flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-2"
        >
          {EXPERIENCES.map((e, i) => (
            <Reveal
              key={e.title}
              delay={i * 60}
              className="w-[84%] shrink-0 snap-start sm:w-[47%] lg:w-[29.5%]"
            >
              <Link
                to="/experiencias/$slug"
                params={{ slug: e.slug }}
                aria-label={`Conhecer ${e.title}`}
                className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                <article className="relative flex h-full flex-col overflow-hidden rounded-sm border border-border/70 bg-card transition-all duration-500 group-hover:-translate-y-1 group-hover:border-brand-gold/60 group-hover:shadow-[var(--shadow-gold-glow)]">
                  <div className="relative aspect-[2/1] overflow-hidden">
                    <img
                      src={e.img}
                      alt={e.title}
                      loading="lazy"
                      width={1280}
                      height={720}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/65 via-brand-navy-deep/5 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col px-5 py-4">
                    <div className="mx-auto mb-1 grid h-12 w-12 place-items-center text-brand-gold transition-transform duration-500 group-hover:scale-110">
                      <e.Icon className="h-12 w-12" />
                    </div>
                    <p className="text-center text-[12px] tracking-[0.24em] uppercase text-brand-gold">{e.sub}</p>
                    <h3 className="mt-2 text-center font-display text-[21px] font-medium text-brand-navy">{e.title}</h3>
                    <p className="mt-3 flex-1 text-justify text-[17px] leading-relaxed text-muted-foreground">{e.text}</p>
                    <span className="mt-5 inline-flex items-center justify-center gap-2 text-[14px] font-semibold tracking-[0.24em] uppercase text-brand-navy transition-colors group-hover:text-brand-gold">
                      Saiba mais
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </Link>
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
    <section id="sobre" className="relative overflow-hidden bg-brand-cream-deep py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
          <p className="eyebrow">Sobre a Braso Taste</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight text-brand-navy sm:text-4xl md:text-5xl">
            Transformamos encontros em
            <br />
            <span className="italic text-brand-gold">experiências memoráveis</span>.
          </h2>
          <span className="gold-divider mt-6" />
          <div className="mt-7 space-y-5 text-[19px] leading-relaxed text-muted-foreground text-justify">
            <p>
              Somos Fábio Tortelote e Tatiana Souza, o casal fundador da Braso Taste.
            </p>
            <p>
              A Braso Taste é uma Boutique Gastronômica especializada em Culinária de Fogo.
              Criamos experiências gastronômicas Full Service e Turnkey no espaço do cliente, com
              curadoria conduzida pelo Chef Fábio Tortelote e gestão da experiência e da operação
              por Tatiana Souza.
            </p>
            <p>
              Da primeira conversa ao pós-evento, cuidamos de cada etapa: planejamento, curadoria,
              compras, preparo, serviço, organização e limpeza da área de trabalho — para que o
              cliente viva plenamente o papel de anfitrião.
            </p>
            <p>
              Acreditamos que a comida é uma forma de arte e de expressão de afeto. Nosso propósito
              é aproximar pessoas, celebrar a vida e criar experiências que permanecem na memória
              e no coração.
            </p>
          </div>

          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="absolute -left-3 -top-3 hidden h-full w-full border border-brand-gold/50 sm:block" />
              <img
                src={aboutGathering}
                alt="Tatiana Souza e Chef Fábio Tortelote, fundadores da Braso Taste"
                loading="lazy"
                width={1600}
                height={1100}
                className="relative aspect-[4/3] w-full object-cover shadow-[var(--shadow-elegant)]"
              />
            </div>

            <ul className="mt-8 space-y-4">
              {[
                {
                  k: "Paixão pelo Fogo",
                  v: "O poder transformador do fogo e da culinária para criar experiências únicas e autênticas.",
                },
                {
                  k: "Excelência e Qualidade",
                  v: "A perfeição em cada detalhe, da escolha dos ingredientes ao atendimento.",
                },
                {
                  k: "Personalização e Afeto",
                  v: "Cada evento é cocriado com o cliente, com carinho e atenção aos seus desejos.",
                },
                {
                  k: "Conexão e Comunidade",
                  v: "Os laços criados ao redor da mesa, promovendo a união e a celebração.",
                },
              ].map((s) => (
                <li key={s.k} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brand-gold/50 text-brand-gold">
                    <IconFlame className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-[14px] font-semibold tracking-[0.16em] uppercase text-brand-navy">{s.k}</h3>
                    <p className="mt-1 text-[16px] leading-relaxed text-muted-foreground">{s.v}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-10 border-t border-border/70 pt-8">
          <dl className="mx-auto grid max-w-4xl grid-cols-1 gap-7 text-center sm:grid-cols-3">
            {[
              { k: "7", v: "municípios atendidos", sub: "Grande RJ, Serrana e Região dos Lagos" },
              { k: "100%", v: "eventos personalizados" },
              { k: "100%", v: "feito no seu espaço" },
            ].map((s) => (
              <div key={s.v} className="flex flex-col items-center">
                <dt className="font-display text-3xl font-semibold text-brand-navy">{s.k}</dt>
                <dd className="mt-2 text-[13px] tracking-[0.16em] uppercase text-brand-navy">{s.v}</dd>
                {s.sub && <dd className="mt-2 text-[14px] leading-snug text-muted-foreground">{s.sub}</dd>}
              </div>
            ))}
          </dl>

          <div className="mt-8 flex justify-center">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-gold px-7 py-4 text-[14px] font-semibold tracking-[0.22em] uppercase text-brand-navy transition-all duration-300 hover:bg-brand-gold-soft hover:shadow-[var(--shadow-gold-glow)]"
            >
              Solicitar proposta personalizada
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- CHEF ---------- */
export function Chef() {
  return (
    <section id="chef" className="relative bg-brand-navy text-brand-cream py-12 sm:py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
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
            Onde a <span className="italic text-brand-gold">técnica</span> encontra o fogo
          </h2>
          <span className="gold-divider mt-6" />
          <div className="mt-7 space-y-5 text-[19px] leading-relaxed text-brand-cream/85 text-justify">
            <p>
              Fábio Tortelote está à frente da curadoria gastronômica e da execução da Culinária
              de Fogo da Braso Taste.
            </p>
            <p>
              Da seleção e do porcionamento ao ponto exato da brasa, une técnica clássica,
              criatividade contemporânea e rigor com o sabor. Sua assinatura é a hospitalidade:
              receber como em casa, com a precisão de um restaurante de alta gastronomia.
            </p>
          </div>

          <blockquote className="mt-8 border-l border-brand-gold pl-5 text-[20px] italic text-brand-gold">
            O fogo prepara a comida. As pessoas dão sentido à mesa.
          </blockquote>

          <ul className="mt-8 space-y-5">
            {[
              {
                Icon: Utensils,
                t: "Técnica",
                d: "Domínio da Culinária de Fogo, da seleção e do porcionamento ao ponto exato da brasa.",
              },
              {
                Icon: Award,
                t: "Curadoria",
                d: "Seleção de cortes, ingredientes e técnicas com padrão de alta gastronomia.",
              },
              {
                Icon: IconFlame,
                t: "Hospitalidade",
                d: "Receber como em casa, com precisão, cuidado e atenção a cada detalhe.",
              },
            ].map((b) => (
              <li key={b.t} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand-gold/50">
                  <b.Icon className="h-5 w-5 text-brand-gold" />
                </span>
                <div>
                  <span className="text-[14px] font-semibold tracking-[0.2em] uppercase">{b.t}</span>
                  <p className="mt-1 text-[16px] leading-relaxed text-brand-cream/75">{b.d}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            to="/contato"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-sm border border-brand-gold px-7 py-4 text-[14px] font-semibold tracking-[0.22em] uppercase text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-navy"
          >
            Contratar o Chef
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
const VIDEO_GALLERY = [
  {
    src: videoFire,
    poster: posterFire,
    title: "Fogo e brasa",
    alt: "Carnes sendo preparadas sobre o fogo",
    layout: "portrait",
  },
  {
    src: videoMiniBurgers,
    poster: posterMiniBurgers,
    title: "Estação de mini burgers",
    alt: "Mesa real com mini burgers artesanais e molhos da Braso Taste",
    layout: "portrait",
  },
  {
    src: videoCarving,
    poster: posterCarving,
    title: "Corte e finalização",
    alt: "Chef finalizando o corte de uma carne assada",
    layout: "portrait",
  },
  {
    src: videoMesaBrunch,
    poster: posterMesaBrunch,
    title: "Mesa Braso",
    alt: "Mesa real de frios, frutas, pães e acompanhamentos preparada pela Braso Taste",
    layout: "wide",
  },
  {
    src: videoFullService,
    poster: posterFullService,
    title: "Experiência Full Service",
    alt: "Mesa de serviço gastronômico montada no espaço do cliente",
    layout: "portrait",
  },
  {
    src: videoCarneBrasa,
    poster: posterCarneBrasa,
    title: "Sabor da brasa",
    alt: "Carne assada e dourada preparada pela Braso Taste",
    layout: "portrait",
  },
  {
    src: videoFogoFinalizacao,
    poster: posterFogoFinalizacao,
    title: "Fogo e finalização",
    alt: "Finalização gastronômica com calor e fumaça",
    layout: "wide",
  },
  {
    src: videoAnatomiaCortes,
    poster: posterAnatomiaCortes,
    title: "Anatomia dos cortes",
    alt: "Preparação técnica de cortes bovinos para a brasa",
    layout: "wide",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="bg-background py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">Galeria</p>
            <h2 className="mt-5 font-display text-3xl font-light leading-tight text-brand-navy sm:text-4xl md:text-5xl">
              Braso em <span className="italic text-brand-gold">movimento</span>.
            </h2>
            <span className="gold-divider mt-6" />
            <p className="mt-5 text-[18px] leading-relaxed text-muted-foreground">
              Registros reais da preparação, do fogo e do serviço no espaço do cliente.
            </p>
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

        <div className="mt-9 grid gap-4 sm:grid-cols-3">
          {VIDEO_GALLERY.map((video, i) => (
            <Reveal
              key={video.title}
              delay={i * 60}
              className={video.layout === "wide" ? "sm:col-span-2" : ""}
            >
              <figure className="group relative overflow-hidden rounded-sm bg-brand-navy-deep shadow-[var(--shadow-elegant)]">
                <video
                  src={video.src}
                  poster={video.poster}
                  aria-label={video.alt}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className={`${video.layout === "wide" ? "aspect-video" : "aspect-[9/16]"} w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]`}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy-deep/90 to-transparent px-5 pb-5 pt-14">
                  <figcaption className="text-[13px] font-semibold tracking-[0.2em] uppercase text-brand-cream">
                    {video.title}
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
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
  const fetchReviews = useServerFn(getGoogleReviews);
  const { data: reviews } = useQuery({
    queryKey: ["google-reviews"],
    queryFn: () => fetchReviews(),
    staleTime: 1000 * 60 * 60,
    retry: false,
  });

  const items = [
    ...(reviews ?? []).map((r) => ({ name: r.name, role: r.role, text: r.text, rating: r.rating })),
    ...TESTIMONIALS.map((t) => ({ ...t, rating: 5 })),
  ];

  return (
    <section id="depoimentos" className="bg-brand-cream-deep py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow flex items-center justify-center gap-3 before:h-px before:w-14 before:bg-brand-gold after:h-px after:w-14 after:bg-brand-gold">
            Depoimentos
          </p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight text-brand-navy sm:text-4xl md:text-5xl">
            O que dizem nossos <span className="italic text-brand-gold">convidados</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={`${t.name}-${i}`} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-sm border border-border/70 border-l-[3px] border-l-brand-gold bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-gold-glow)]">
                <Quote className="h-7 w-7 text-brand-gold/60" />
                <div className="mt-4 flex items-center gap-1 text-brand-gold">
                  {Array.from({ length: t.rating || 5 }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-[19px] italic leading-relaxed text-foreground/85" dangerouslySetInnerHTML={{ __html: `“${t.text}”` }} />
                <figcaption className="mt-6 border-t border-border pt-5">
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
    "h-12 w-full rounded-sm border border-border bg-card px-4 text-[17px] text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30";

  return (
    <section id="contato" className="relative bg-brand-navy text-brand-cream py-12 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.3fr] lg:items-start lg:gap-14">
        <Reveal className="lg:sticky lg:top-28">
          <p className="eyebrow">Contato</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            Vamos criar a sua
            <br />
            <span className="italic text-brand-gold">experiência</span>.
          </h2>
          <span className="gold-divider mt-6" />
          <p className="mt-7 max-w-2xl text-[19px] leading-relaxed text-brand-cream/85 text-justify">
            Conte-nos sobre o seu evento. Em até 24 horas retornaremos com uma proposta personalizada.
          </p>

          <div className="mt-9 space-y-5 text-[16px] text-brand-cream/90">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 transition-colors hover:text-brand-gold">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand-gold/35 text-brand-gold"><MessageCircle className="h-5 w-5" /></span>
              <span><strong className="block text-[12px] tracking-[0.18em] uppercase text-brand-gold">WhatsApp</strong><span className="mt-1 block">(21) 97406-4098</span></span>
            </a>
            <a href="https://instagram.com/brasotaste" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 transition-colors hover:text-brand-gold">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand-gold/35 text-brand-gold"><Instagram className="h-5 w-5" /></span>
              <span><strong className="block text-[12px] tracking-[0.18em] uppercase text-brand-gold">Instagram</strong><span className="mt-1 block">@brasotaste</span></span>
            </a>
            <a href="mailto:contato@brasotaste.com.br" className="flex items-center gap-4 transition-colors hover:text-brand-gold">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand-gold/35 text-brand-gold"><Mail className="h-5 w-5" /></span>
              <span><strong className="block text-[12px] tracking-[0.18em] uppercase text-brand-gold">E-mail</strong><span className="mt-1 block">contato@brasotaste.com.br</span></span>
            </a>
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand-gold/35 text-brand-gold"><MapPin className="h-5 w-5" /></span>
              <span><strong className="block text-[12px] tracking-[0.18em] uppercase text-brand-gold">Atendimento</strong><span className="mt-1 block">Grande RJ, Região Serrana e Região dos Lagos</span></span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} className="rounded-sm bg-brand-navy-deep p-7 ring-1 ring-white/10 shadow-[var(--shadow-elegant)] sm:p-10">
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
      <span className="mb-2 block text-[13px] font-medium tracking-[0.22em] uppercase text-brand-cream/70">
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
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14">
        <div className="flex flex-col items-center text-center">
          <Logo size="large" />
        </div>

        <div className="mt-10 grid gap-10 border-t border-white/10 pt-10 text-[16px] sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <p className="max-w-xs leading-relaxed text-brand-cream/70">
              Boutique Gastronômica especializada em Culinária de Fogo. Cuidamos de tudo para que
              você viva o encontro.
            </p>
          </div>

          <div>
            <p className="eyebrow">Navegação</p>
            <nav className="mt-4 flex flex-col gap-3">
              <Link to="/" className="hover:text-brand-gold">Início</Link>
              <Link to="/experiencias" className="hover:text-brand-gold">Experiências</Link>
              <Link to="/sobre" className="hover:text-brand-gold">Sobre</Link>
              <Link to="/nossa-historia" className="hover:text-brand-gold">Nossa História</Link>
              <Link to="/" hash="galeria" className="hover:text-brand-gold">Galeria</Link>
              <Link to="/" hash="depoimentos" className="hover:text-brand-gold">Depoimentos</Link>
              <Link to="/contato" className="hover:text-brand-gold">Contato</Link>
            </nav>
          </div>

          <div>
            <p className="eyebrow">Áreas atendidas</p>
            <ul className="mt-4 space-y-3">
              {["Araruama", "Cabo Frio", "Saquarema", "Búzios", "Rio das Ostras", "Macaé", "Nova Friburgo"].map(
                (city) => <li key={city}>{city}</li>,
              )}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Contato</p>
            <div className="mt-4 flex flex-col gap-4">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-brand-gold">
                <MessageCircle className="h-4 w-4 text-brand-gold" /> (21) 97406-4098
              </a>
              <a href="https://instagram.com/brasotaste" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-brand-gold">
                <Instagram className="h-4 w-4 text-brand-gold" /> @brasotaste
              </a>
              <a href="mailto:contato@brasotaste.com.br" className="inline-flex items-center gap-2 hover:text-brand-gold">
                <Mail className="h-4 w-4 text-brand-gold" /> contato@brasotaste.com.br
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow">Empresa</p>
            <div className="mt-4 space-y-3">
              <p>CNPJ: 60.333.080/0001-29</p>
              <p className="inline-flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-gold" />
                Rio de Janeiro, RJ — Brasil
              </p>
            </div>
            <Link
              to="/contato"
              className="mt-6 inline-flex items-center justify-center rounded-sm bg-brand-gold px-5 py-3 text-[13px] font-semibold tracking-[0.18em] uppercase text-brand-navy transition-colors hover:bg-brand-gold-soft"
            >
              Solicitar proposta personalizada
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-[14px] tracking-[0.12em] text-brand-cream/45 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Braso Taste. Todos os direitos reservados.</p>
          <p className="italic">O fogo prepara a comida. As pessoas dão sentido à mesa.</p>
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
