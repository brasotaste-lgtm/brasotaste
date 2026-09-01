import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import {
  About,
  Chef,
  FloatingWhatsApp,
  Footer,
} from "@/components/site/sections";
import { Toaster } from "@/components/ui/sonner";
import { canonicalUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";

const title = "Sobre a Braso Taste | Gastronomia Full Service no RJ";
const description =
  "Conheça Fábio Tortelote e Tatiana Souza, fundadores da Braso Taste: culinária de fogo, curadoria e operação completa no espaço do cliente.";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl("/sobre") },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/sobre") }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main className="pt-[70px] sm:pt-[82px]">
        <About />
        <Chef />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" />
    </div>
  );
}
