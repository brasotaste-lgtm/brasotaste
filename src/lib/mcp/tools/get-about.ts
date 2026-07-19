import { defineTool } from "@lovable.dev/mcp-js";

const ABOUT = {
  positioning:
    "Experiência gastronômica premium no espaço do cliente, conduzida pelo Chef Fabio Tortelote. Alta gastronomia, técnica e hospitalidade ao redor da brasa.",
  what_we_deliver:
    "Operação completa (chef, equipe, equipamentos e curadoria) no espaço do cliente para eventos particulares e corporativos.",
  stats: [
    { value: "+10", label: "cidades atendidas", detail: "Grande RJ, Serrana à Região dos Lagos" },
    { value: "100%", label: "eventos personalizados" },
    { value: "100%", label: "feito no seu espaço" },
  ],
};

export default defineTool({
  name: "get_about",
  title: "About Braso Taste",
  description:
    "Return Braso Taste positioning, what is delivered and highlight stats (service area, personalization).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(ABOUT, null, 2) }],
    structuredContent: ABOUT,
  }),
});
