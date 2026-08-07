import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { About, Chef, FloatingWhatsApp, Footer } from "@/components/site/sections";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Braso Taste — Experiências gastronômicas Full Service" },
      {
        name: "description",
        content:
          "Conheça Fábio Tortelote e Tatiana Souza, fundadores da Braso Taste: experiências gastronômicas Full Service e Turnkey com Culinária de Fogo, curadoria e hospitalidade.",
      },
      { property: "og:title", content: "Sobre a Braso Taste — Fogo, mesa e hospitalidade" },
      {
        property: "og:description",
        content:
          "A Braso Taste cuida de toda a experiência para que você viva plenamente o encontro.",
      },
    ],
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
