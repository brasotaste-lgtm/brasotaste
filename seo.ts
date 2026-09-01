export const SITE_URL = "https://brasotaste.com.br";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-braso-taste.jpg`;

export function canonicalUrl(path = "") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Braso Taste",
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  description:
    "Boutique gastronômica especializada em experiências de culinária de fogo e operação completa no espaço do cliente.",
  email: "contato@brasotaste.com.br",
  telephone: "+55 21 97406-4098",
  taxID: "60.333.080/0001-29",
  sameAs: ["https://www.instagram.com/brasotaste"],
  areaServed: [
    "Grande Rio",
    "Região Serrana do Rio de Janeiro",
    "Região dos Lagos",
    "Araruama",
    "Cabo Frio",
    "Búzios",
    "Saquarema",
    "Rio das Ostras",
    "Macaé",
    "Nova Friburgo",
  ],
  founder: [
    { "@type": "Person", name: "Fábio Tortelote", jobTitle: "Chef executivo" },
    {
      "@type": "Person",
      name: "Tatiana Souza",
      jobTitle: "Gestora da experiência",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55 21 97406-4098",
    contactType: "sales",
    availableLanguage: "Portuguese",
    areaServed: "BR",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Braso Taste",
  inLanguage: "pt-BR",
  publisher: { "@id": `${SITE_URL}/#organization` },
};
