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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Braso Taste — BBQ & Gastronomic Experience at Home" },
      {
        name: "description",
        content:
          "Experiências gastronômicas premium na sua casa, conduzidas pelo Chef Fabio Tortelote. Solicite um orçamento.",
      },
      { property: "og:title", content: "Braso Taste — Experiência gastronômica na sua casa" },
      {
        property: "og:description",
        content:
          "Alta gastronomia, fogo e hospitalidade. Eventos particulares e corporativos conduzidos pelo Chef Fabio Tortelote.",
      },
    ],
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
