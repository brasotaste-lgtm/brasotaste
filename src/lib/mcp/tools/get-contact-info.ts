import { defineTool } from "@lovable.dev/mcp-js";

const CONTACT = {
  brand: "Braso Taste",
  tagline: "BBQ & Gastronomic Experience at Home",
  chef: "Fabio Tortelote",
  whatsapp: "+55 21 97406-4098",
  whatsapp_link:
    "https://wa.me/5521974064098?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20Braso%20Taste",
  instagram: "@brasotaste",
  instagram_url: "https://instagram.com/brasotaste",
  email: "contato@brasotatse.com.br",
  cnpj: "60.333.080/0001-29",
  service_area: [
    "Grande Rio de Janeiro",
    "Região Serrana do RJ",
    "Região dos Lagos",
  ],
  cities_covered: "Mais de 10 cidades atendidas",
  website: "https://brasotaste.lovable.app",
};

export default defineTool({
  name: "get_contact_info",
  title: "Get Braso Taste contact info",
  description:
    "Return official Braso Taste contact information: WhatsApp, Instagram, email, CNPJ and service area.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(CONTACT, null, 2) }],
    structuredContent: CONTACT,
  }),
});
