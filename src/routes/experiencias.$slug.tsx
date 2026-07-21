import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";

import { Header } from "@/components/site/Header";
import { FloatingWhatsApp, Footer } from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";
import { Toaster } from "@/components/ui/sonner";
import { EXPERIENCES, getExperienceBySlug, type Experience } from "@/data/experiences";

const WHATSAPP =
  "https://wa.me/5521974064098?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20Braso%20Taste";

export const Route = createFileRoute("/experiencias/$slug")({
  loader: ({ params }) => {
    const exp = getExperienceBySlug(params.slug);
    if (!exp) throw notFound();
    return { exp };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Experiência não encontrada — Braso Taste" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { exp } = loaderData;
    const title = `${exp.title} — Braso Taste`;
    return {
      meta: [
        { title },
        { name: "description", content: exp.text },
        { property: "og:title", content: title },
        { property: "og:description", content: exp.text },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ExperienceDetail,
});

function ExperienceDetail() {
  const { exp } = Route.useLoaderData() as { exp: Experience };
  const others = EXPERIENCES.filter((e) => e.slug !== exp.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative isolate min-h-[70svh] w-full overflow-hidden bg-brand-navy-deep text-white">
          <img
            src={exp.img}
            alt={exp.title}
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/85" />
          <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-40 sm:px-8 sm:pb-24">
            <Link
              to="/"
              className="inline-flex items-center gap-2 self-start text-[14px] font-semibold tracking-[0.24em] uppercase text-white/80 transition-colors hover:text-brand-gold"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar
            </Link>
            <div className="mt-6 flex items-center gap-4">
              <exp.Icon className="h-16 w-16 text-brand-gold md:h-20 md:w-20" />
              <p className="text-[14px] tracking-[0.28em] uppercase text-brand-gold">{exp.sub}</p>
            </div>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[80px]">
              {exp.title}
            </h1>
            <span className="mt-6 block h-px w-24 bg-brand-gold" />
          </div>
        </section>

        {/* Intro + highlights */}
        <section className="bg-background py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-6">
              <p className="eyebrow">A experiência</p>
              <h2 className="mt-5 font-display text-3xl font-light leading-tight text-brand-navy sm:text-4xl">
                Sobre a <span className="italic text-brand-gold">experiência</span>.
              </h2>
              <span className="gold-divider mt-6" />
              <p className="mt-7 text-[18px] leading-relaxed text-muted-foreground text-justify">
                {exp.intro}
              </p>
              <div className="mt-8 rounded-sm border border-border/70 bg-card p-6">
                <p className="text-[12px] tracking-[0.24em] uppercase text-brand-gold">Ideal para</p>
                <p className="mt-3 text-[16px] leading-relaxed text-foreground/85">{exp.ideal}</p>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-6">
              <p className="eyebrow">Destaques</p>
              <h3 className="mt-5 font-display text-2xl font-light text-brand-navy sm:text-3xl">
                O que torna esta experiência única.
              </h3>
              <span className="gold-divider mt-6" />
              <ul className="mt-8 space-y-6">
                {exp.highlights.map((h) => (
                  <li key={h.title} className="border-l-2 border-brand-gold/70 pl-5">
                    <p className="font-display text-lg font-medium text-brand-navy">{h.title}</p>
                    <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground text-justify">{h.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Includes */}
        <section className="bg-brand-cream-deep py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">O que está incluso</p>
              <h2 className="mt-5 font-display text-3xl font-light leading-tight text-brand-navy sm:text-4xl">
                Uma operação <span className="italic text-brand-gold">completa</span>.
              </h2>
              <span className="gold-divider mt-6" />
              <p className="mt-6 text-[18px] leading-relaxed text-muted-foreground text-justify">
                Cuidamos de todos os detalhes para que você apenas viva o momento.
              </p>
            </Reveal>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {exp.includes.map((item, i) => (
                <Reveal key={item} delay={i * 60}>
                  <li className="flex items-start gap-4 rounded-sm border border-border/70 bg-card p-5">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-gold/15 text-brand-gold">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-[16px] leading-relaxed text-foreground/85">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-navy text-brand-cream py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
            <Reveal>
              <p className="eyebrow">Vamos conversar</p>
              <h2 className="mt-5 font-display text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
                Solicite um orçamento para <span className="italic text-brand-gold">{exp.title}</span>.
              </h2>
              <span className="gold-divider mx-auto mt-6" />
              <p className="mx-auto mt-7 max-w-xl text-[18px] leading-relaxed text-brand-cream/85">
                Em até 24 horas retornaremos com uma proposta personalizada para o seu evento.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Link
                  to="/"
                  hash="contato"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-gold px-7 py-4 text-[14px] font-semibold tracking-[0.24em] uppercase text-brand-navy transition-all duration-300 hover:bg-brand-gold-soft hover:shadow-[var(--shadow-gold-glow)]"
                >
                  Solicitar orçamento
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-brand-gold/60 px-7 py-4 text-[14px] font-semibold tracking-[0.24em] uppercase text-brand-cream transition-colors hover:border-brand-gold hover:text-brand-gold"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Related */}
        <section className="bg-background py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow">Outras experiências</p>
              <h2 className="mt-5 font-display text-3xl font-light leading-tight text-brand-navy sm:text-4xl">
                Explore outros <span className="italic text-brand-gold">formatos</span>.
              </h2>
              <span className="gold-divider mt-6" />
            </Reveal>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((o, i) => (
                <Reveal key={o.slug} delay={i * 80}>
                  <Link
                    to="/experiencias/$slug"
                    params={{ slug: o.slug }}
                    className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-border/70 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/60 hover:shadow-[var(--shadow-gold-glow)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={o.img}
                        alt={o.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/70 via-brand-navy-deep/10 to-transparent" />
                    </div>
                    <div className="flex flex-1 flex-col px-6 py-6">
                      <p className="text-[12px] tracking-[0.28em] uppercase text-brand-gold">{o.sub}</p>
                      <h3 className="mt-2 font-display text-xl font-medium text-brand-navy">{o.title}</h3>
                      <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.24em] uppercase text-brand-navy transition-colors group-hover:text-brand-gold">
                        Saiba mais <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" />
    </div>
  );
}
