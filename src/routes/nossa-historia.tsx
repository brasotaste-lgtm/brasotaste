import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { FloatingWhatsApp, Footer } from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";
import { Toaster } from "@/components/ui/sonner";

import heroChef from "@/assets/hero-chef.jpg";
import aboutGathering from "@/assets/about-gathering.jpg";
import chefPortrait from "@/assets/chef-portrait.jpg";

export const Route = createFileRoute("/nossa-historia")({
  head: () => ({
    meta: [
      { title: "Nossa História — Tatiana e Fábio | Braso Taste" },
      {
        name: "description",
        content:
          "Como tudo começou: a história de Tatiana e Fábio Tortelote, do primeiro almoço em família à Braso Taste — alta gastronomia, brasa e hospitalidade na sua casa.",
      },
      { property: "og:title", content: "Nossa História — Tatiana e Fábio | Braso Taste" },
      {
        property: "og:description",
        content:
          "Do fogo em casa para a mesa dos nossos clientes: a trajetória que deu origem à Braso Taste.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nossa História — Tatiana e Fábio | Braso Taste" },
      {
        name: "twitter:description",
        content:
          "Do fogo em casa para a mesa dos nossos clientes: a trajetória que deu origem à Braso Taste.",
      },
    ],
  }),
  component: NossaHistoriaPage,
});

const CHAPTERS = [
  {
    year: "O começo",
    title: "Uma mesa, um fogo, duas pessoas",
    body: [
      "Tudo começou do jeito mais simples possível: um fim de semana em casa, a brasa acesa no quintal e amigos chegando sem hora para ir embora. Fábio cuidava do fogo — a carne no ponto, o tempo certo de cada corte, a paciência que só a brasa ensina. Tatiana cuidava de tudo o que acontece ao redor dele: a mesa posta, a taça cheia, a conversa que não deixa ninguém de fora.",
      "Era só um almoço de família. Mas todo mundo saía dali dizendo a mesma frase: “isso aqui não é um churrasco, é uma experiência”.",
    ],
  },
  {
    year: "A virada",
    title: "Do quintal para a casa dos outros",
    body: [
      "O primeiro convite veio de um amigo: “faz na minha casa?”. Depois veio outro, e outro. Sem plano de negócio, sem cardápio impresso, sem nome. Só o desejo de repetir aquela sensação em outras mesas.",
      "Foi aí que Tatiana e Fábio perceberam que o que tinham em mãos não era um serviço de comida — era um serviço de encontro. A gastronomia é o meio; o que fica é a memória do dia.",
    ],
  },
  {
    year: "O nome",
    title: "Braso Taste nasce da brasa",
    body: [
      "Braso vem do fogo, do calor que transforma. Taste é o sabor, o cuidado com o detalhe, a técnica que faz um prato simples virar algo inesquecível. Juntos, os dois nomes traduzem exatamente o que fazemos: alta gastronomia conduzida pela brasa, dentro da sua casa.",
      "Fábio assumiu a cozinha e a curadoria dos menus, trazendo técnica de alta gastronomia para um universo que quase sempre é tratado como informal. Tatiana assumiu a experiência: o atendimento, a operação, o ritmo do evento, a hospitalidade que faz o anfitrião sentar e aproveitar a própria festa.",
    ],
  },
  {
    year: "Hoje",
    title: "Mais de 10 cidades, uma só filosofia",
    body: [
      "Hoje a Braso Taste atende da Grande Rio à Região Serrana e à Região dos Lagos, com uma operação completa: chef, equipe, equipamentos e curadoria levados até o seu espaço. Cada evento é 100% personalizado — não existe menu padrão, existe o seu menu.",
      "O que não mudou desde o primeiro almoço no quintal: a brasa no centro, a mesa cheia e a certeza de que ninguém deveria trabalhar na própria comemoração.",
    ],
  },
];

const VALUES = [
  {
    k: "Fogo",
    v: "A brasa é o nosso ponto de partida — técnica, tempo e respeito pelo ingrediente.",
  },
  {
    k: "Mesa",
    v: "Comida boa é desculpa para reunir gente. O encontro é sempre o objetivo final.",
  },
  {
    k: "Cuidado",
    v: "Do primeiro contato à última taça: hospitalidade em cada detalhe da operação.",
  },
];

function NossaHistoriaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative isolate min-h-[58svh] w-full overflow-hidden bg-brand-navy-deep text-white">
          <img
            src={heroChef}
            alt="Chef Fábio Tortelote conduzindo a brasa em um evento Braso Taste"
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/85" />
          <div className="relative z-10 mx-auto flex min-h-[58svh] max-w-7xl flex-col justify-end px-5 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-28">
            <p className="text-[14px] font-semibold tracking-[0.28em] uppercase text-brand-gold">
              Nossa História
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-[36px] font-light leading-[1.05] sm:text-5xl lg:text-6xl">
              Tatiana e Fábio:
              <br />
              <span className="italic text-brand-gold">como tudo começou</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/85 text-justify">
              Antes de existir marca, cardápio ou equipe, existia uma brasa acesa em casa e duas
              pessoas que gostavam de receber. Essa é a história de como um almoço de família virou
              a Braso Taste.
            </p>
          </div>
        </section>

        {/* INTRO + RETRATO */}
        <section className="bg-brand-cream-deep py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow">Os fundadores</p>
              <h2 className="mt-5 font-display text-3xl font-light leading-tight text-brand-navy sm:text-4xl md:text-5xl">
                Dois ofícios que se
                <br />
                <span className="italic text-brand-gold">completam à mesa</span>.
              </h2>
              <span className="gold-divider mt-6" />
              <div className="mt-7 space-y-5 text-[18px] leading-relaxed text-muted-foreground text-justify">
                <p>
                  Fábio Tortelote traz a técnica: anos de cozinha, obsessão por ponto, corte e
                  temperatura, e uma leitura de alta gastronomia aplicada ao fogo aberto. Para ele,
                  a brasa não é um atalho — é o método mais exigente que existe.
                </p>
                <p>
                  Tatiana traz a experiência: o olhar de anfitriã que enxerga o evento inteiro antes
                  de ele acontecer. Fluxo, tempo, atendimento, ambiente. É o trabalho invisível que
                  faz tudo parecer simples para quem está na mesa.
                </p>
                <p>
                  A Braso Taste existe exatamente no encontro desses dois ofícios — e é por isso que
                  entregamos experiência, não apenas comida.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative">
                <div className="absolute -left-3 -top-3 hidden h-full w-full border border-brand-gold/50 sm:block" />
                <img
                  src={chefPortrait}
                  alt="Retrato do Chef Fábio Tortelote"
                  loading="lazy"
                  className="relative aspect-[4/5] w-full object-cover shadow-[var(--shadow-elegant)]"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* LINHA DO TEMPO */}
        <section className="bg-background py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow">A trajetória</p>
              <h2 className="mt-5 font-display text-3xl font-light leading-tight text-brand-navy sm:text-4xl">
                Do quintal de casa à sua casa
              </h2>
              <span className="gold-divider mt-6" />
            </Reveal>

            <ol className="mt-12 space-y-12 border-l border-border/70 pl-6 sm:pl-10">
              {CHAPTERS.map((c, i) => (
                <Reveal key={c.title} delay={i * 90}>
                  <li className="relative">
                    <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-brand-gold sm:-left-[47px]" />
                    <p className="text-[14px] font-semibold tracking-[0.24em] uppercase text-brand-gold">
                      {c.year}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-light text-brand-navy sm:text-3xl">
                      {c.title}
                    </h3>
                    <div className="mt-4 space-y-4 text-[18px] leading-relaxed text-muted-foreground text-justify">
                      {c.body.map((p) => (
                        <p key={p.slice(0, 24)}>{p}</p>
                      ))}
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* VALORES */}
        <section className="relative overflow-hidden bg-brand-navy-deep py-14 text-white sm:py-20">
          <img
            src={aboutGathering}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-15"
          />
          <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <p className="text-[14px] font-semibold tracking-[0.28em] uppercase text-brand-gold">
                O que nos guia
              </p>
              <h2 className="mt-5 max-w-2xl font-display text-3xl font-light leading-tight sm:text-4xl">
                Três coisas que nunca mudaram
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-10 sm:grid-cols-3">
              {VALUES.map((v, i) => (
                <Reveal key={v.k} delay={i * 100}>
                  <div className="border-t border-brand-gold/40 pt-6">
                    <h3 className="font-display text-2xl font-light text-brand-gold">{v.k}</h3>
                    <p className="mt-3 text-[18px] leading-relaxed text-white/80 text-justify">
                      {v.v}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-cream-deep py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <Reveal>
              <h2 className="font-display text-3xl font-light leading-tight text-brand-navy sm:text-4xl">
                A próxima história pode ser <span className="italic text-brand-gold">a sua</span>.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[18px] leading-relaxed text-muted-foreground">
                Conte para a gente o que você quer celebrar — cuidamos do resto.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center rounded-sm bg-brand-gold px-7 py-4 text-[14px] font-semibold tracking-[0.22em] uppercase text-brand-navy transition-colors hover:bg-brand-gold-soft"
                >
                  Solicitar orçamento
                </Link>
                <Link
                  to="/experiencias"
                  className="inline-flex items-center justify-center rounded-sm border border-brand-navy/25 px-7 py-4 text-[14px] font-semibold tracking-[0.22em] uppercase text-brand-navy transition-colors hover:bg-brand-navy hover:text-brand-cream"
                >
                  Ver experiências
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" />
    </div>
  );
}
