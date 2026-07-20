import {
  IconAnatomy,
  IconBrunch,
  IconBurger,
  IconCelebration,
  IconPersonal,
  IconSelection,
} from "@/components/site/icons";

import expSelection from "@/assets/exp-selection.jpg";
import expCelebration from "@/assets/exp-celebration.jpg";
import expPersonal from "@/assets/exp-personal.jpg";
import expAnatomy from "@/assets/exp-anatomy.jpg";
import expBrunch from "@/assets/exp-brunch.jpg";
import expBurger from "@/assets/exp-burger.jpg";

export type Experience = {
  slug: string;
  Icon: (props: { className?: string }) => JSX.Element;
  img: string;
  title: string;
  sub: string;
  text: string;
  intro: string;
  highlights: { title: string; text: string }[];
  includes: string[];
  ideal: string;
};

export const EXPERIENCES: Experience[] = [
  {
    slug: "selection",
    Icon: IconSelection,
    img: expSelection,
    title: "Braso Taste Selection",
    sub: "Alta gastronomia na brasa",
    text: "Cortes premium selecionados, harmonizações exclusivas e o tempo certo do fogo conduzido pelo chef.",
    intro:
      "A experiência assinatura da Braso Taste. Uma curadoria de cortes nobres selecionados a dedo, brasa conduzida no ponto exato e harmonizações que valorizam cada mordida. Um jantar de alta gastronomia servido no conforto do seu espaço.",
    highlights: [
      { title: "Curadoria de cortes", text: "Prime, dry aged e cortes especiais selecionados pelo chef." },
      { title: "Harmonização", text: "Sugestões de vinhos e destilados para cada tempo do menu." },
      { title: "Serviço à mesa", text: "Equipe dedicada durante toda a experiência." },
    ],
    includes: [
      "Chef executivo e equipe completa",
      "Cortes premium e acompanhamentos autorais",
      "Mise en place, cocção e serviço",
      "Louças, utensílios e finalização",
    ],
    ideal: "Jantares privados, celebrações íntimas e recepções de alto padrão.",
  },
  {
    slug: "celebration",
    Icon: IconCelebration,
    img: expCelebration,
    title: "Braso Celebration",
    sub: "Eventos & celebrações",
    text: "Menus completos para grupos, com serviço dedicado para transformar datas especiais em memória.",
    intro:
      "Aniversários, bodas, formaturas e datas que merecem ser lembradas. Um menu completo, do couvert à sobremesa, com serviço impecável e o calor da brasa como protagonista.",
    highlights: [
      { title: "Menu completo", text: "Do couvert à sobremesa, tudo pensado para o seu momento." },
      { title: "Equipe estendida", text: "Cozinha, salão e coordenação dedicados ao evento." },
      { title: "Personalização", text: "Cardápio adaptado ao perfil dos seus convidados." },
    ],
    includes: [
      "Chef, sous-chef e brigada completa",
      "Serviço de salão e coordenação",
      "Menu personalizado em reunião prévia",
      "Estruturas de brasa e cocção",
    ],
    ideal: "Grupos de 20 a 120 convidados em celebrações marcantes.",
  },
  {
    slug: "personal",
    Icon: IconPersonal,
    img: expPersonal,
    title: "Braso Personal Taste",
    sub: "Experiência totalmente sua",
    text: "Menu desenhado junto ao cliente, com ingredientes escolhidos a quatro mãos com o chef.",
    intro:
      "Uma experiência co-criada. O chef Fabio senta com você, entende o momento, o gosto e o perfil dos convidados — e desenha um menu único, com ingredientes escolhidos a quatro mãos.",
    highlights: [
      { title: "Consultoria com o chef", text: "Reunião presencial ou online para desenhar cada tempo." },
      { title: "Ingredientes selecionados", text: "Fornecedores e insumos escolhidos com você." },
      { title: "Menu autoral", text: "Um cardápio exclusivo, servido apenas para você." },
    ],
    includes: [
      "Sessão de curadoria com o chef",
      "Menu autoral e exclusivo",
      "Execução completa no seu espaço",
      "Relatório e memórias do evento",
    ],
    ideal: "Anfitriões que buscam uma experiência verdadeiramente única.",
  },
  {
    slug: "anatomia",
    Icon: IconAnatomy,
    img: expAnatomy,
    title: "Da Anatomia à Brasa",
    sub: "Workshop & degustação",
    text: "Desossa ao vivo, técnica de cortes e degustação guiada — uma imersão no universo do fogo.",
    intro:
      "Uma imersão no universo do fogo. Desossa ao vivo, apresentação dos cortes, técnicas de brasa e degustação guiada — os convidados aprendem, provam e vivem cada etapa junto ao chef.",
    highlights: [
      { title: "Aula ao vivo", text: "Desossa, apresentação de cortes e técnicas de brasa." },
      { title: "Degustação guiada", text: "Cada corte servido no tempo certo, com narrativa do chef." },
      { title: "Interatividade", text: "Os convidados participam, perguntam e experimentam." },
    ],
    includes: [
      "Chef executivo conduzindo o workshop",
      "Peça inteira para desossa ao vivo",
      "Degustação de todos os cortes",
      "Material de apoio e sugestões de vinhos",
    ],
    ideal: "Grupos que buscam entretenimento gastronômico e aprendizado.",
  },
  {
    slug: "brunch",
    Icon: IconBrunch,
    img: expBrunch,
    title: "Brunch Braso Taste",
    sub: "Eventos diurnos",
    text: "Mesas sofisticadas para reunir família e amigos sob a luz do dia, com um menu leve e autoral.",
    intro:
      "Reunir família e amigos sob a luz do dia, ao redor de uma mesa farta e elegante. Um menu leve, autoral e visualmente marcante — pães, defumados, ovos, frutas e o toque da brasa em versão diurna.",
    highlights: [
      { title: "Mesa farta", text: "Composição visual sofisticada, do doce ao salgado." },
      { title: "Menu autoral", text: "Receitas leves com o toque de brasa da Braso." },
      { title: "Ambiente diurno", text: "Serviço pensado para a luz e o ritmo do dia." },
    ],
    includes: [
      "Chef e equipe de brunch",
      "Composição de mesa e decoração gastronômica",
      "Menu completo do doce ao salgado",
      "Serviço durante toda a experiência",
    ],
    ideal: "Reuniões diurnas, chás e encontros de fim de semana.",
  },
  {
    slug: "burger",
    Icon: IconBurger,
    img: expBurger,
    title: "Braso House Burger",
    sub: "Estação ao vivo",
    text: "Hambúrgueres artesanais preparados ao vivo, com pães, blends e finalizações da casa.",
    intro:
      "Uma estação ao vivo onde a brasa encontra o hambúrguer artesanal. Blends autorais, pães da casa e finalizações que transformam o clássico em experiência premium.",
    highlights: [
      { title: "Blend autoral", text: "Combinação de cortes desenvolvida pelo chef." },
      { title: "Pães da casa", text: "Produzidos especialmente para a experiência." },
      { title: "Estação ao vivo", text: "Os convidados acompanham o preparo do início ao fim." },
    ],
    includes: [
      "Estação completa de burger",
      "Chef e equipe de preparo ao vivo",
      "Blends, pães e molhos autorais",
      "Acompanhamentos e finalizações premium",
    ],
    ideal: "Eventos descontraídos com toque gourmet, confraternizações e comemorações.",
  },
];

export function getExperienceBySlug(slug: string) {
  return EXPERIENCES.find((e) => e.slug === slug);
}
