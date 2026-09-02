import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
} from "react";
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
import { trackEvent } from "@/lib/analytics";

import heroChef from "@/assets/hero-chef.jpg";
import aboutGathering from "@/assets/about-gathering.jpg";
import chefPortrait from "@/assets/chef-portrait.jpg";
import galleryFogoChao from "@/assets/gallery-fogo-chao.jpg";
import galleryEspetoBrasa from "@/assets/gallery-espeto-brasa.jpg";
import galleryGrelha from "@/assets/gallery-grelha.jpg";
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

const WHATSAPP =
  "https://wa.me/5521974064098?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20Braso%20Taste";

/* ---------- HERO ---------- */
export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate h-[100svh] min-h-[640px] w-full overflow-hidden bg-brand-navy-deep text-white"
    >
      <img
        src={heroChef}
        alt="Chef Fabio preparando carnes premium na brasa"
        width={1920}
        height={1280}
        fetchPriority="high"
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
            Sabor{" "}
            <span className="italic font-normal text-brand-gold">Braso</span>
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
  const [activeExperience, setActiveExperience] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const swipeStartX = useRef<number | null>(null);

  useEffect(() => {
    if (
      isCarouselPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveExperience((current) => (current + 1) % EXPERIENCES.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [isCarouselPaused]);

  const moveCarousel = (direction: -1 | 1) => {
    setActiveExperience(
      (current) =>
        (current + direction + EXPERIENCES.length) % EXPERIENCES.length,
    );
  };

  const relativePosition = (index: number) => {
    let position = index - activeExperience;
    const halfway = EXPERIENCES.length / 2;
    if (position > halfway) position -= EXPERIENCES.length;
    if (position < -halfway) position += EXPERIENCES.length;
    return position;
  };

  return (
    <section id="experiencias" className="relative bg-background py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-5xl">
            <p className="eyebrow">As experiências</p>
            <h2 className="mt-3 font-display text-3xl font-light leading-tight text-brand-navy sm:text-4xl lg:whitespace-nowrap lg:text-[46px]">
              Seis maneiras de viver{" "}
              <span className="italic text-brand-gold">a mesa Braso</span>.
            </h2>
            <span className="gold-divider mt-4" />
          </div>
          <p className="mt-4 max-w-4xl text-[18px] leading-relaxed text-muted-foreground">
            Cada formato é desenhado com técnica de alta gastronomia e o calor
            do encontro. Escolha o que combina com o seu momento — nós cuidamos
            de cada detalhe.
          </p>
        </Reveal>

        <div className="mt-5">
          <p className="text-[13px] tracking-[0.18em] uppercase text-muted-foreground">
            Deslize para conhecer todas
          </p>
        </div>

        <div
          className="experience-coverflow relative -mx-5 mt-3 h-[590px] overflow-hidden px-5 pt-3 sm:-mx-8 sm:h-[610px] sm:px-8 lg:mx-0"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Experiências Braso Taste"
          onMouseEnter={() => setIsCarouselPaused(true)}
          onMouseLeave={() => setIsCarouselPaused(false)}
          onFocusCapture={() => setIsCarouselPaused(true)}
          onBlurCapture={() => setIsCarouselPaused(false)}
          onPointerDown={(event) => {
            setIsCarouselPaused(true);
            swipeStartX.current = event.clientX;
          }}
          onPointerUp={(event) => {
            if (swipeStartX.current === null) return;
            const distance = event.clientX - swipeStartX.current;
            swipeStartX.current = null;
            setIsCarouselPaused(false);
            if (Math.abs(distance) < 45) return;
            moveCarousel(distance < 0 ? 1 : -1);
          }}
          onPointerCancel={() => {
            swipeStartX.current = null;
            setIsCarouselPaused(false);
          }}
        >
          {EXPERIENCES.map((e, i) => {
            const position = relativePosition(i);
            const distance = Math.abs(position);
            const isActive = position === 0;

            return (
              <div
                key={e.title}
                aria-hidden={!isActive}
                className="experience-coverflow-card absolute left-1/2 top-3 w-[82vw] max-w-[390px]"
                style={
                  {
                    "--card-position": position,
                    "--card-distance": Math.min(distance, 3),
                    zIndex: 30 - distance,
                    opacity: distance > 2 ? 0 : isActive ? 1 : 0.78,
                    pointerEvents: isActive ? "auto" : "none",
                  } as CSSProperties
                }
              >
              <Link
                to="/experiencias/$slug"
                params={{ slug: e.slug }}
                aria-label={`Conhecer ${e.title}`}
                className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                <article className="relative flex h-full flex-col overflow-hidden rounded-sm border border-border/70 bg-card shadow-[var(--shadow-elegant)] transition-shadow duration-500 group-hover:border-brand-gold/60 group-hover:shadow-[var(--shadow-gold-glow)]">
                  <div className="relative aspect-[2/1] overflow-hidden">
                    <img
                      src={e.img}
                      alt={e.title}
                      loading="lazy"
                      width={1280}
                      height={720}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/45 via-transparent to-transparent" />
                  </div>
                  <div className="flex min-h-[350px] flex-1 flex-col px-5 py-4">
                    <div className="mx-auto mb-1 grid h-12 w-12 place-items-center text-brand-gold transition-transform duration-500 group-hover:scale-110">
                      <e.Icon className="h-12 w-12" />
                    </div>
                    <p className="text-center text-[12px] tracking-[0.24em] uppercase text-brand-gold">
                      {e.sub}
                    </p>
                    <h3 className="mt-2 text-center font-display text-[21px] font-medium text-brand-navy">
                      {e.title}
                    </h3>
                    <p className="mt-3 flex-1 text-justify text-[17px] leading-relaxed text-muted-foreground">
                      {e.text}
                    </p>
                    <span className="mt-5 inline-flex items-center justify-center gap-2 text-[14px] font-semibold tracking-[0.24em] uppercase text-brand-navy transition-colors group-hover:text-brand-gold">
                      Saiba mais
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </Link>
              </div>
            );
          })}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-40 flex w-[min(430px,96%)] -translate-x-1/2 -translate-y-1/2 justify-between"
            aria-label="Controles do carrossel"
          >
            <button
              type="button"
              onClick={() => moveCarousel(-1)}
              aria-label="Experiência anterior"
              className="pointer-events-auto grid h-20 w-16 place-items-center text-brand-gold drop-shadow-[0_2px_3px_rgba(255,255,255,0.95)] transition-colors hover:text-brand-navy"
            >
              <ChevronLeft className="h-12 w-12 stroke-[1.35]" />
            </button>
            <button
              type="button"
              onClick={() => moveCarousel(1)}
              aria-label="Próxima experiência"
              className="pointer-events-auto grid h-20 w-16 place-items-center text-brand-gold drop-shadow-[0_2px_3px_rgba(255,255,255,0.95)] transition-colors hover:text-brand-navy"
            >
              <ChevronRight className="h-12 w-12 stroke-[1.35]" />
            </button>
          </div>
        </div>
        <div
          className="mt-1 flex justify-center gap-2"
          aria-label="Posição no carrossel"
        >
          {EXPERIENCES.map((experience, index) => (
            <button
              key={experience.slug}
              type="button"
              aria-label={`Mostrar ${experience.title}`}
              onClick={() => setActiveExperience(index)}
              className={`h-2 rounded-full transition-all ${activeExperience === index ? "w-7 bg-brand-gold" : "w-2 bg-brand-navy/25"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
export function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-brand-cream-deep py-12 sm:py-14"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="eyebrow">Sobre a Braso Taste</p>
            <h2 className="mt-5 font-display text-3xl font-light leading-tight text-brand-navy sm:text-4xl md:text-5xl">
              Transformamos encontros em
              <br />
              <span className="italic text-brand-gold">
                experiências memoráveis
              </span>
              .
            </h2>
            <span className="gold-divider mt-6" />
            <div className="mt-7 space-y-5 text-[19px] leading-relaxed text-muted-foreground text-justify">
              <p>
                Somos Fábio Tortelote e Tatiana Souza, o casal fundador da Braso
                Taste.
              </p>
              <p>
                A Braso Taste é uma Boutique Gastronômica especializada em
                Culinária de Fogo. Criamos experiências gastronômicas Full
                Service e Turnkey no espaço do cliente, com curadoria conduzida
                pelo Chef Fábio Tortelote e gestão da experiência e da operação
                por Tatiana Souza.
              </p>
              <p>
                Da primeira conversa ao pós-evento, cuidamos de cada etapa:
                planejamento, curadoria, compras, preparo, serviço, organização
                e limpeza da área de trabalho — para que o cliente viva
                plenamente o papel de anfitrião.
              </p>
              <p>
                Acreditamos que a comida é uma forma de arte e de expressão de
                afeto. Nosso propósito é aproximar pessoas, celebrar a vida e
                criar experiências que permanecem na memória e no coração.
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
                    <h3 className="text-[14px] font-semibold tracking-[0.16em] uppercase text-brand-navy">
                      {s.k}
                    </h3>
                    <p className="mt-1 text-[16px] leading-relaxed text-muted-foreground">
                      {s.v}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-10 border-t border-border/70 pt-8">
          <dl className="mx-auto grid max-w-4xl grid-cols-1 gap-7 text-center sm:grid-cols-3">
            {[
              {
                k: "7",
                v: "municípios atendidos",
                sub: "Grande RJ, Serrana e Região dos Lagos",
              },
              { k: "100%", v: "eventos personalizados" },
              { k: "100%", v: "feito no seu espaço" },
            ].map((s) => (
              <div key={s.v} className="flex flex-col items-center">
                <dt className="font-display text-3xl font-semibold text-brand-navy">
                  {s.k}
                </dt>
                <dd className="mt-2 text-[13px] tracking-[0.16em] uppercase text-brand-navy">
                  {s.v}
                </dd>
                {s.sub && (
                  <dd className="mt-2 text-[14px] leading-snug text-muted-foreground">
                    {s.sub}
                  </dd>
                )}
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
    <section
      id="chef"
      className="relative bg-brand-navy text-brand-cream py-12 sm:py-14"
    >
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
            Onde a <span className="italic text-brand-gold">técnica</span>{" "}
            encontra o fogo
          </h2>
          <span className="gold-divider mt-6" />
          <div className="mt-7 space-y-5 text-[19px] leading-relaxed text-brand-cream/85 text-justify">
            <p>
              Fábio Tortelote está à frente da curadoria gastronômica e da
              execução da Culinária de Fogo da Braso Taste.
            </p>
            <p>
              Da seleção e do porcionamento ao ponto exato da brasa, une técnica
              clássica, criatividade contemporânea e rigor com o sabor. Sua
              assinatura é a hospitalidade: receber como em casa, com a precisão
              de um restaurante de alta gastronomia.
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
                  <span className="text-[14px] font-semibold tracking-[0.2em] uppercase">
                    {b.t}
                  </span>
                  <p className="mt-1 text-[16px] leading-relaxed text-brand-cream/75">
                    {b.d}
                  </p>
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
    layout: "portrait",
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
    layout: "portrait",
  },
  {
    src: videoAnatomiaCortes,
    poster: posterAnatomiaCortes,
    title: "Anatomia dos cortes",
    alt: "Preparação técnica de cortes bovinos para a brasa",
    layout: "portrait",
  },
];

function GalleryVideo({
  video,
  active,
}: {
  video: (typeof VIDEO_GALLERY)[number];
  active: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3, rootMargin: "80px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (active && visible) void element.play().catch(() => undefined);
    else element.pause();
  }, [active, visible]);

  return (
    <video
      ref={ref}
      src={video.src}
      poster={video.poster}
      aria-label={video.alt}
      muted
      loop
      playsInline
      preload="none"
      className="aspect-[9/16] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
    />
  );
}

export function Gallery() {
  const videoCarouselRef = useRef<HTMLDivElement>(null);

  const moveVideoCarousel = (direction: -1 | 1) => {
    const carousel = videoCarouselRef.current;
    if (!carousel) return;
    carousel.scrollBy({
      left: direction * carousel.clientWidth * 0.82,
      behavior: "smooth",
    });
  };

  return (
    <section id="galeria" className="bg-background py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">Galeria</p>
            <h2 className="mt-5 font-display text-3xl font-light leading-tight text-brand-navy sm:text-4xl md:text-5xl">
              Braso em <span className="italic text-brand-gold">movimento</span>
              .
            </h2>
            <span className="gold-divider mt-6" />
            <p className="mt-5 text-[18px] leading-relaxed text-muted-foreground">
              Registros reais da preparação, do fogo e do serviço no espaço do
              cliente.
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

        <div className="mt-9 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {[
            {
              src: galleryFogoChao,
              alt: "Carnes e linguiças preparadas no fogo de chão",
              className: "h-[300px] lg:h-[360px]",
            },
            {
              src: galleryEspetoBrasa,
              alt: "Carnes e linguiças assando diretamente sobre a brasa",
              className: "col-span-2 h-[300px] lg:h-[360px]",
            },
            {
              src: galleryGrelha,
              alt: "Carnes variadas dourando sobre a grelha",
              className: "h-[300px] lg:h-[360px]",
            },
          ].map((photo, i) => (
            <Reveal key={photo.src} delay={i * 70} className={photo.className}>
              <figure className="group relative h-full overflow-hidden rounded-sm bg-brand-navy-deep shadow-[var(--shadow-elegant)]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/35 to-transparent" />
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-9">
          <p className="text-[13px] tracking-[0.18em] uppercase text-muted-foreground">
            Deslize para assistir
          </p>
        </div>

        <div className="relative">
        <div
          ref={videoCarouselRef}
          style={{ scrollbarWidth: "none", overflowY: "hidden" }}
          className="experience-carousel mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-2"
        >
          {VIDEO_GALLERY.map((video, i) => (
            <Reveal
              key={video.title}
              delay={i * 60}
              className="w-[76%] shrink-0 snap-start sm:w-[43%] lg:w-[28%]"
            >
              <figure className="group relative overflow-hidden rounded-sm bg-brand-navy-deep shadow-[var(--shadow-elegant)]">
                <GalleryVideo video={video} active />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy-deep/90 to-transparent px-5 pb-5 pt-14">
                  <figcaption className="text-[13px] font-semibold tracking-[0.2em] uppercase text-brand-cream">
                    {video.title}
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-40 flex w-[min(430px,96%)] -translate-x-1/2 -translate-y-1/2 justify-between"
            aria-label="Controles dos vídeos"
          >
            <button
              type="button"
              onClick={() => moveVideoCarousel(-1)}
              aria-label="Vídeo anterior"
              className="pointer-events-auto grid h-20 w-16 place-items-center text-brand-gold drop-shadow-[0_2px_3px_rgba(255,255,255,0.95)] transition-colors hover:text-brand-navy"
            >
              <ChevronLeft className="h-12 w-12 stroke-[1.35]" />
            </button>
            <button
              type="button"
              onClick={() => moveVideoCarousel(1)}
              aria-label="Próximo vídeo"
              className="pointer-events-auto grid h-20 w-16 place-items-center text-brand-gold drop-shadow-[0_2px_3px_rgba(255,255,255,0.95)] transition-colors hover:text-brand-navy"
            >
              <ChevronRight className="h-12 w-12 stroke-[1.35]" />
            </button>
          </div>
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
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);
  const testimonialSwipeStartX = useRef<number | null>(null);
  const fetchReviews = useServerFn(getGoogleReviews);
  const { data: reviews } = useQuery({
    queryKey: ["google-reviews"],
    queryFn: () => fetchReviews(),
    staleTime: 1000 * 60 * 60,
    retry: false,
  });

  const items = [
    ...(reviews ?? []).map((r) => ({
      name: r.name,
      role: r.role,
      text: r.text,
      rating: r.rating,
    })),
    ...TESTIMONIALS.map((t) => ({ ...t, rating: 5 })),
  ];

  useEffect(() => {
    if (
      isTestimonialPaused ||
      items.length < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % items.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [isTestimonialPaused, items.length]);

  useEffect(() => {
    if (activeTestimonial >= items.length) setActiveTestimonial(0);
  }, [activeTestimonial, items.length]);

  const moveTestimonials = (direction: -1 | 1) => {
    setActiveTestimonial(
      (current) => (current + direction + items.length) % items.length,
    );
  };

  const testimonialPosition = (index: number) => {
    let position = index - activeTestimonial;
    const halfway = items.length / 2;
    if (position > halfway) position -= items.length;
    if (position < -halfway) position += items.length;
    return position;
  };

  return (
    <section id="depoimentos" className="bg-brand-cream-deep py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow flex items-center justify-center gap-3 before:h-px before:w-14 before:bg-brand-gold after:h-px after:w-14 after:bg-brand-gold">
            Depoimentos
          </p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight text-brand-navy sm:text-4xl md:text-5xl">
            O que dizem nossos{" "}
            <span className="italic text-brand-gold">convidados</span>
          </h2>
        </Reveal>

        <div
          className="experience-coverflow relative -mx-5 mt-10 h-[430px] overflow-hidden px-5 pt-3 sm:-mx-8 sm:px-8 lg:mx-0"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Depoimentos dos convidados"
          onMouseEnter={() => setIsTestimonialPaused(true)}
          onMouseLeave={() => setIsTestimonialPaused(false)}
          onFocusCapture={() => setIsTestimonialPaused(true)}
          onBlurCapture={() => setIsTestimonialPaused(false)}
          onPointerDown={(event) => {
            setIsTestimonialPaused(true);
            testimonialSwipeStartX.current = event.clientX;
          }}
          onPointerUp={(event) => {
            if (testimonialSwipeStartX.current === null) return;
            const distance = event.clientX - testimonialSwipeStartX.current;
            testimonialSwipeStartX.current = null;
            setIsTestimonialPaused(false);
            if (Math.abs(distance) < 45) return;
            moveTestimonials(distance < 0 ? 1 : -1);
          }}
          onPointerCancel={() => {
            testimonialSwipeStartX.current = null;
            setIsTestimonialPaused(false);
          }}
        >
          {items.map((t, i) => {
            const position = testimonialPosition(i);
            const distance = Math.abs(position);
            const isActive = position === 0;

            return (
            <div
              key={`${t.name}-${i}`}
              aria-hidden={!isActive}
              className="experience-coverflow-card absolute left-1/2 top-3 w-[82vw] max-w-[390px]"
              style={
                {
                  "--card-position": position,
                  "--card-distance": Math.min(distance, 3),
                  zIndex: 30 - distance,
                  opacity: distance > 2 ? 0 : isActive ? 1 : 0.78,
                  pointerEvents: isActive ? "auto" : "none",
                } as CSSProperties
              }
            >
              <figure className="flex h-full flex-col rounded-sm border border-border/70 border-l-[3px] border-l-brand-gold bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-gold-glow)]">
                <Quote className="h-7 w-7 text-brand-gold/60" />
                <div className="mt-4 flex items-center gap-1 text-brand-gold">
                  {Array.from({ length: t.rating || 5 }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <blockquote
                  className="mt-5 flex-1 text-[19px] italic leading-relaxed text-foreground/85"
                  dangerouslySetInnerHTML={{ __html: `“${t.text}”` }}
                />
                <figcaption className="mt-6 border-t border-border pt-5">
                  <div
                    className="font-display text-base font-medium text-brand-navy"
                    dangerouslySetInnerHTML={{ __html: t.name }}
                  />
                  <div className="mt-1 text-[14px] tracking-[0.18em] uppercase text-muted-foreground">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            </div>
          )})}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-40 flex w-[min(430px,96%)] -translate-x-1/2 -translate-y-1/2 justify-between"
            aria-label="Controles dos depoimentos"
          >
            <button
              type="button"
              onClick={() => moveTestimonials(-1)}
              aria-label="Depoimento anterior"
              className="pointer-events-auto grid h-20 w-16 place-items-center text-brand-gold drop-shadow-[0_2px_3px_rgba(255,255,255,0.95)] transition-colors hover:text-brand-navy"
            >
              <ChevronLeft className="h-12 w-12 stroke-[1.35]" />
            </button>
            <button
              type="button"
              onClick={() => moveTestimonials(1)}
              aria-label="Próximo depoimento"
              className="pointer-events-auto grid h-20 w-16 place-items-center text-brand-gold drop-shadow-[0_2px_3px_rgba(255,255,255,0.95)] transition-colors hover:text-brand-navy"
            >
              <ChevronRight className="h-12 w-12 stroke-[1.35]" />
            </button>
          </div>
        </div>
        <div
          className="mt-1 flex justify-center gap-2"
          aria-label="Posição dos depoimentos"
        >
          {items.map((testimonial, index) => (
            <button
              key={`${testimonial.name}-position-${index}`}
              type="button"
              aria-label={`Mostrar depoimento de ${testimonial.name}`}
              onClick={() => setActiveTestimonial(index)}
              className={`h-2 rounded-full transition-all ${activeTestimonial === index ? "w-7 bg-brand-gold" : "w-2 bg-brand-navy/25"}`}
            />
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
    const data = Object.fromEntries(
      new FormData(e.currentTarget).entries(),
    ) as Record<string, string>;

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
      trackEvent("generate_lead", {
        source: "contact_form",
        event_type: data.eventType,
        city: data.city,
      });
      toast.success("Pedido enviado", {
        description: "Continuaremos a conversa pelo WhatsApp.",
      });
      window.open(
        `https://wa.me/5521974064098?text=${msg}`,
        "_blank",
        "noopener,noreferrer",
      );
      (e.target as HTMLFormElement).reset();
    }, 500);
  }

  const input =
    "h-12 w-full rounded-sm border border-border bg-card px-4 text-[17px] text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30";

  return (
    <section
      id="contato"
      className="relative bg-brand-navy text-brand-cream py-12 sm:py-14"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.3fr] lg:items-start lg:gap-14">
        <Reveal className="order-2 lg:order-1 lg:sticky lg:top-28">
          <p className="eyebrow">Contato</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            Vamos criar a sua
            <br />
            <span className="italic text-brand-gold">experiência</span>.
          </h2>
          <span className="gold-divider mt-6" />
          <p className="mt-7 max-w-2xl text-[19px] leading-relaxed text-brand-cream/85 text-justify">
            Conte-nos sobre o seu evento. Em até 24 horas retornaremos com uma
            proposta personalizada.
          </p>

          <div className="mt-9 space-y-5 text-[16px] text-brand-cream/90">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("whatsapp_click", { location: "contact" })
              }
              className="flex items-center gap-4 transition-colors hover:text-brand-gold"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand-gold/35 text-brand-gold">
                <MessageCircle className="h-5 w-5" />
              </span>
              <span>
                <strong className="block text-[12px] tracking-[0.18em] uppercase text-brand-gold">
                  WhatsApp
                </strong>
                <span className="mt-1 block">(21) 97406-4098</span>
              </span>
            </a>
            <a
              href="https://instagram.com/brasotaste"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 transition-colors hover:text-brand-gold"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand-gold/35 text-brand-gold">
                <Instagram className="h-5 w-5" />
              </span>
              <span>
                <strong className="block text-[12px] tracking-[0.18em] uppercase text-brand-gold">
                  Instagram
                </strong>
                <span className="mt-1 block">@brasotaste</span>
              </span>
            </a>
            <a
              href="mailto:contato@brasotaste.com.br"
              className="flex items-center gap-4 transition-colors hover:text-brand-gold"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand-gold/35 text-brand-gold">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <strong className="block text-[12px] tracking-[0.18em] uppercase text-brand-gold">
                  E-mail
                </strong>
                <span className="mt-1 block">contato@brasotaste.com.br</span>
              </span>
            </a>
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand-gold/35 text-brand-gold">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <strong className="block text-[12px] tracking-[0.18em] uppercase text-brand-gold">
                  Atendimento
                </strong>
                <span className="mt-1 block">
                  Grande RJ, Região Serrana e Região dos Lagos
                </span>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <form
            onSubmit={handleSubmit}
            className="rounded-sm bg-brand-navy-deep p-7 ring-1 ring-white/10 shadow-[var(--shadow-elegant)] sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nome">
                <input
                  name="name"
                  required
                  maxLength={120}
                  className={input}
                  placeholder="Seu nome"
                />
              </Field>
              <Field label="Telefone">
                <input
                  name="phone"
                  required
                  maxLength={30}
                  className={input}
                  placeholder="(00) 00000-0000"
                />
              </Field>
              <Field label="Email">
                <input
                  name="email"
                  required
                  type="email"
                  maxLength={200}
                  className={input}
                  placeholder="email@exemplo.com"
                />
              </Field>
              <Field label="Cidade">
                <input
                  name="city"
                  required
                  maxLength={120}
                  className={input}
                  placeholder="Rio de Janeiro"
                />
              </Field>
              <Field label="Data">
                <input name="date" required type="date" className={input} />
              </Field>
              <Field label="Convidados">
                <input
                  name="guests"
                  required
                  type="number"
                  min={1}
                  max={500}
                  className={input}
                  placeholder="Ex.: 20"
                />
              </Field>
              <Field label="Tipo de evento" className="sm:col-span-2">
                <select
                  name="eventType"
                  required
                  className={input}
                  defaultValue=""
                >
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
              Boutique Gastronômica especializada em Culinária de Fogo. Cuidamos
              de tudo para que você viva o encontro.
            </p>
          </div>

          <div>
            <p className="eyebrow">Navegação</p>
            <nav className="mt-4 flex flex-col gap-3">
              <Link to="/" className="hover:text-brand-gold">
                Início
              </Link>
              <Link to="/experiencias" className="hover:text-brand-gold">
                Experiências
              </Link>
              <Link to="/sobre" className="hover:text-brand-gold">
                Sobre
              </Link>
              <Link to="/nossa-historia" className="hover:text-brand-gold">
                Nossa História
              </Link>
              <Link to="/" hash="galeria" className="hover:text-brand-gold">
                Galeria
              </Link>
              <Link to="/" hash="depoimentos" className="hover:text-brand-gold">
                Depoimentos
              </Link>
              <Link to="/contato" className="hover:text-brand-gold">
                Contato
              </Link>
            </nav>
          </div>

          <div>
            <p className="eyebrow">Áreas atendidas</p>
            <ul className="mt-4 space-y-3">
              {[
                "Araruama",
                "Cabo Frio",
                "Saquarema",
                "Búzios",
                "Rio das Ostras",
                "Macaé",
                "Nova Friburgo",
              ].map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Contato</p>
            <div className="mt-4 flex flex-col gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-brand-gold"
              >
                <MessageCircle className="h-4 w-4 text-brand-gold" /> (21)
                97406-4098
              </a>
              <a
                href="https://instagram.com/brasotaste"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-brand-gold"
              >
                <Instagram className="h-4 w-4 text-brand-gold" /> @brasotaste
              </a>
              <a
                href="mailto:contato@brasotaste.com.br"
                className="inline-flex items-center gap-2 hover:text-brand-gold"
              >
                <Mail className="h-4 w-4 text-brand-gold" />{" "}
                contato@brasotaste.com.br
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
          <p>
            © {new Date().getFullYear()} Braso Taste. Todos os direitos
            reservados.
          </p>
          <p className="italic">
            O fogo prepara a comida. As pessoas dão sentido à mesa.
          </p>
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
      onClick={() =>
        trackEvent("whatsapp_click", { location: "floating_button" })
      }
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-brand-gold text-brand-navy shadow-[var(--shadow-gold-glow)] transition-transform duration-300 hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
