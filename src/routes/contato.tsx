import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Contact, FloatingWhatsApp, Footer } from "@/components/site/sections";
import { Toaster } from "@/components/ui/sonner";
import { canonicalUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";

const title = "Solicite um orçamento | Braso Taste";
const description =
  "Conte sobre o seu evento e solicite uma proposta personalizada da Braso Taste para a Grande Rio, Região Serrana ou Região dos Lagos.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl("/contato") },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/contato") }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main className="pt-[70px] sm:pt-[82px]">
        <section
          className="bg-brand-cream-deep py-10 sm:py-12"
          aria-labelledby="areas-atendidas"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="eyebrow">Contato</p>
            <h2
              id="areas-atendidas"
              className="mt-4 max-w-3xl font-display text-3xl font-light leading-tight text-brand-navy sm:text-4xl"
            >
              Vamos criar a sua experiência no seu espaço.
            </h2>
            <p className="mt-6 max-w-4xl text-[18px] leading-relaxed text-muted-foreground">
              A Braso Taste realiza eventos particulares e corporativos em
              diferentes regiões do Rio de Janeiro. Atendemos a Grande Rio, a
              Região Serrana e a Região dos Lagos, com disponibilidade e
              logística confirmadas durante o planejamento.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  region: "Grande Rio",
                  cities:
                    "Rio de Janeiro, Niterói e municípios da Região Metropolitana.",
                },
                {
                  region: "Região Serrana",
                  cities:
                    "Petrópolis, Teresópolis, Nova Friburgo e cidades próximas.",
                },
                {
                  region: "Região dos Lagos",
                  cities:
                    "Cabo Frio, Araruama, Saquarema, Búzios, Rio das Ostras e região.",
                },
              ].map((area) => (
                <article
                  key={area.region}
                  className="rounded-sm border border-brand-gold/25 bg-card p-6"
                >
                  <h3 className="font-display text-xl font-medium text-brand-navy">
                    {area.region}
                  </h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">
                    {area.cities}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Contact pageIntro />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" />
    </div>
  );
}
