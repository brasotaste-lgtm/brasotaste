import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { About, FloatingWhatsApp, Footer } from "@/components/site/sections";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Braso Taste — Alta gastronomia na sua casa" },
      {
        name: "description",
        content:
          "Conheça a Braso Taste: técnica de alta gastronomia, o calor da brasa e a hospitalidade que transforma encontros em memórias.",
      },
      { property: "og:title", content: "Sobre a Braso Taste" },
      {
        property: "og:description",
        content:
          "Técnica, fogo e hospitalidade conduzidos pelo Chef Fabio Tortelote — em mais de 10 cidades atendidas.",
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
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" />
    </div>
  );
}
