import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Experiences, FloatingWhatsApp, Footer } from "@/components/site/sections";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/experiencias/")({
  head: () => ({
    meta: [
      { title: "Experiências — Braso Taste" },
      {
        name: "description",
        content:
          "Conheça as seis experiências Braso Taste: Selection, Celebration, Personal Taste, Da Anatomia à Brasa, Brunch e House Burger.",
      },
      { property: "og:title", content: "Experiências — Braso Taste" },
      {
        property: "og:description",
        content:
          "Seis formatos de alta gastronomia na brasa, conduzidos pelo Chef Fabio Tortelote no seu espaço.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperienciasIndex,
});

function ExperienciasIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main className="pt-[70px] sm:pt-[82px]">
        <Experiences />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" />
    </div>
  );
}
