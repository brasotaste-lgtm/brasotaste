import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import {
  Experiences,
  FloatingWhatsApp,
  Footer,
} from "@/components/site/sections";
import { Toaster } from "@/components/ui/sonner";
import { canonicalUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";

const title = "Experiências gastronômicas no RJ | Braso Taste";
const description =
  "Conheça as experiências Braso Taste: churrasco premium, celebrações, menus personalizados, workshops, burgers e brunch no espaço do cliente.";

export const Route = createFileRoute("/experiencias/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl("/experiencias") },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/experiencias") }],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
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
