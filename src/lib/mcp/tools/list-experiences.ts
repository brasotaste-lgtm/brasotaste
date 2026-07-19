import { defineTool } from "@lovable.dev/mcp-js";

const EXPERIENCES = [
  {
    slug: "selection",
    title: "Braso Taste Selection",
    subtitle: "Alta gastronomia na brasa",
    description:
      "Cortes premium selecionados, harmonizações exclusivas e o tempo certo do fogo conduzido pelo chef.",
  },
  {
    slug: "celebration",
    title: "Braso Celebration",
    subtitle: "Eventos & celebrações",
    description:
      "Menus completos para grupos, com serviço dedicado para transformar datas especiais em memória.",
  },
  {
    slug: "personal",
    title: "Braso Personal Taste",
    subtitle: "Experiência totalmente sua",
    description:
      "Menu desenhado junto ao cliente, com ingredientes escolhidos a quatro mãos com o chef.",
  },
  {
    slug: "anatomy",
    title: "Da Anatomia à Brasa",
    subtitle: "Workshop & degustação",
    description:
      "Desossa ao vivo, técnica de cortes e degustação guiada — uma imersão no universo do fogo.",
  },
  {
    slug: "brunch",
    title: "Brunch Braso Taste",
    subtitle: "Eventos diurnos",
    description:
      "Mesas sofisticadas para reunir família e amigos sob a luz do dia, com um menu leve e autoral.",
  },
  {
    slug: "burger",
    title: "Braso House Burger",
    subtitle: "Estação ao vivo",
    description:
      "Hambúrgueres artesanais preparados ao vivo, com pães, blends e finalizações da casa.",
  },
];

export default defineTool({
  name: "list_experiences",
  title: "List Braso Taste experiences",
  description:
    "List the six gastronomic experience formats offered by Braso Taste, with title, subtitle and description.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(EXPERIENCES, null, 2) }],
    structuredContent: { experiences: EXPERIENCES },
  }),
});
