import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import {
  About,
  Chef,
  Contact,
  Experiences,
  FloatingWhatsApp,
  Footer,
  Gallery,
  Hero,
  Testimonials,
} from "@/components/site/sections";
import { Toaster } from "@/components/ui/sonner";
import { canonicalUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";

const title =
  "Braso Taste | Experiências gastronômicas e churrasco premium no RJ";
const description =
  "Experiências gastronômicas completas no seu espaço, com culinária de fogo, chef e operação Full Service na Grande Rio, Região Serrana e Região dos Lagos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl("/") },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/") }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Experiences />
        <About />
        <Chef />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" />
    </div>
  );
}
