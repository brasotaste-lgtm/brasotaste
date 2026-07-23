import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Chef, FloatingWhatsApp, Footer } from "@/components/site/sections";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/chef")({
  head: () => ({
    meta: [
      { title: "Chef Fabio Tortelote — Braso Taste" },
      {
        name: "description",
        content:
          "Trajetória entre brasas, cozinhas autorais e o estudo dos cortes. Técnica clássica, criatividade e a obsessão pelo ponto certo do fogo.",
      },
      { property: "og:title", content: "Chef Fabio Tortelote — Braso Taste" },
      {
        property: "og:description",
        content:
          "Alta gastronomia com a hospitalidade de receber em casa. Conheça o chef Fabio Tortelote.",
      },
    ],
  }),
  component: ChefPage,
});

function ChefPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main className="pt-24 sm:pt-28">
        <Chef />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" />
    </div>
  );
}
