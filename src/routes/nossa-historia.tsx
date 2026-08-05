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
    year: "Antes da primeira brasa",
    title: "Duas casas, a mesma lição",
    body: [
      "Na casa de Fábio havia cheiro de madeira, de oficina e de carne assando devagar na brasa. Havia a avó Iolanda, que dizia “eu te amo” em forma de comida; a mãe Rosiléa, que fazia do cuidado um hábito diário; e o pai Salvador, que ensinava pelo exemplo que tudo o que vale a pena exige paciência.",
      "Em outro canto do Rio crescia Tatiana, filha de Alice e Norberto, cercada de música, plantas, ciência e bolo saindo do forno. Na cozinha mandava a avó Moema — pequena no tamanho, enorme no acolhimento — e uma regra silenciosa: é melhor sobrar do que faltar.",
      "Sem nunca terem se conhecido, as duas famílias ensinavam exatamente a mesma coisa: a comida nunca foi o centro. O centro sempre foram as pessoas.",
    ],
  },
  {
    year: "O encontro",
    title: "Quando as duas mesas viraram uma só",
    body: [
      "Fábio, o menino que desmontava brinquedos para entender o mundo, levou essa curiosidade para a eletrônica e para a tecnologia — e trouxe de lá método, controle de tempo e responsabilidade. Tatiana trouxe o olhar da natureza e do afeto: cores, texturas, aromas, estações e a arte de fazer o outro se sentir em casa.",
      "Juntos, entenderam cedo que sucesso não podia significar só produtividade. Precisava significar presença.",
    ],
  },
  {
    year: "O marco",
    title: "Um casamento junino",
    body: [
      "A Braso nasceu de verdade no próprio casamento dos dois: uma festa junina onde brasa, madeira, mesa posta, natureza e artesanato se encontraram. Naquela noite ficou claro que aquilo tinha identidade própria — e que dava para oferecer a outras pessoas a mesma sensação que eles receberam a vida inteira.",
      "A sensação de chegar a um lugar e perceber, antes da primeira garfada, que alguém preparou tudo aquilo pensando em você.",
    ],
  },
  {
    year: "O nome",
    title: "Braso: o fogo que transforma",
    body: [
      "Faltava um nome. Testaram, simplificaram, e nasceu Braso — uma palavra inédita que carrega muitas histórias. Braso lembra brasa: o fogo, o calor, o ponto onde ingredientes simples viram algo extraordinário.",
      "Ali entenderam que a Braso nunca seria apenas uma empresa de gastronomia. Seria um convite para reunir pessoas.",
    ],
  },
  {
    year: "O primeiro sim",
    title: "E se fizéssemos do nosso jeito?",
    body: [
      "Não havia marca consolidada nem experiência comercial. Havia uma pergunta feita numa madrugada: e se fizéssemos do nosso jeito? Veio o primeiro sim, depois outro — e com eles as frases que passaram a valer mais que qualquer elogio ao cardápio: “foi a primeira vez que consegui conversar com todos os meus convidados”.",
      "Aniversários, bodas, pais reencontrando filhos, amigos se despedindo antes de uma mudança. Cada evento carregava uma história.",
    ],
  },
  {
    year: "Hoje",
    title: "Da nossa mesa para a sua",
    body: [
      "Hoje a Braso Taste atende da Grande Rio à Região Serrana e à Região dos Lagos, com operação completa: planejamento, curadoria, cozinha, serviço e o pós-evento — para que o anfitrião só precise estar presente.",
      "O que não mudou desde a cozinha de Moema e da churrasqueira de Salvador: a brasa no centro, a mesa cheia e a certeza de que sempre cabe mais um prato.",
    ],
  },
];

const VALUES = [
  {
    k: "Fogo",
    v: "O fogo prepara a comida. Técnica, tempo e respeito pelo ingrediente — a brasa como linguagem, não como atalho.",
  },
  {
    k: "Mesa",
    v: "As pessoas dão sentido à mesa. Reunir é o objetivo; o alimento é o caminho até ele.",
  },
  {
    k: "Cuidado",
    v: "Herança de duas cozinhas: acolher bem, prever tudo e deixar o anfitrião livre para viver a própria festa.",
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
              Nenhuma história começa no dia em que uma empresa abre as portas. A nossa começou em
              duas casas do Rio de Janeiro, em mesas que nunca ficavam vazias — muito antes de
              existir um nome, um logotipo ou um cliente.
            </p>
          </div>
        </section>

        {/* INTRO + RETRATO */}
        <section className="bg-brand-cream-deep py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow">Os fundadores</p>
              <h2 className="mt-5 font-display text-3xl font-light leading-tight text-brand-navy sm:text-4xl md:text-5xl">
                O fogo prepara a comida.
                <br />
                <span className="italic text-brand-gold">As pessoas dão sentido à mesa</span>.
              </h2>
              <span className="gold-divider mt-6" />
              <div className="mt-7 space-y-5 text-[18px] leading-relaxed text-muted-foreground text-justify">
                <p>
                  Fábio Tortelote aprendeu com o pai, Salvador, que nada bom se constrói com pressa,
                  e com a avó Iolanda que comida é uma forma de dizer que alguém é bem-vindo. Da
                  eletrônica e da tecnologia trouxe o resto: método, precisão e controle de tempo —
                  hoje aplicados ao ponto exato de cada corte na brasa.
                </p>
                <p>
                  Tatiana cresceu entre música, ciência e a cozinha da avó Moema, onde valia a regra
                  de que é melhor sobrar do que faltar. É dela o olhar de anfitriã: o fluxo do
                  evento, o ritmo do serviço, a beleza da mesa e o cuidado que faz tudo parecer
                  simples para quem está sentado.
                </p>
                <p>
                  A Braso Taste vive exatamente no encontro dessas duas heranças — por isso
                  entregamos uma experiência inteira, e não apenas comida.
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
                De duas cozinhas de família para a sua casa
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
