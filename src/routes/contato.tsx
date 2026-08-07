import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Contact, FloatingWhatsApp, Footer } from "@/components/site/sections";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Braso Taste" },
      {
        name: "description",
        content:
          "Solicite um orçamento Braso Taste. Em até 24 horas retornaremos com uma proposta personalizada para o seu evento.",
      },
      { property: "og:title", content: "Contato — Braso Taste" },
      {
        property: "og:description",
        content: "Vamos criar juntos a sua experiência gastronômica.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main className="pt-[70px] sm:pt-[82px]">
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" />
    </div>
  );
}
