export type Reference = {
  slug: string;
  name: string;
  category: "Referencias" | "Packaging";
  image: string;
  width: number;
  height: number;
  color: string;
  tone: string;
  code: string;
  description: string;
  palette: string[];
  verification: "product-page" | "public-catalog";
  sourceId: string;
};

// Names cross-checked against public HTML on 2026-10-11. Visual descriptions
// describe the photographs, never composition, effects, potency or availability.
export const references: Reference[] = [
  {
    slug: "mystery-og",
    name: "Mystery OG",
    category: "Referencias",
    image: "/redesign/images/mystery-og.webp",
    width: 1000,
    height: 1000,
    color: "#93bfff",
    tone: "ICE BLUE",
    code: "01",
    description:
      "Azul hielo, un personaje de trazo negro y detalles plateados en la fotografía de referencia.",
    palette: ["#aecbfa", "#e9effa", "#242932"],
    verification: "product-page",
    sourceId: "mystery-og",
  },
  {
    slug: "granddaddy-urkle",
    name: "Granddaddy Urkle",
    category: "Referencias",
    image: "/redesign/images/granddaddy-urkle.webp",
    width: 510,
    height: 510,
    color: "#cf9dff",
    tone: "ELECTRIC PURPLE",
    code: "02",
    description:
      "Violeta y lila sobre una composición con ilustración, personaje y letras de alto contraste.",
    palette: ["#9c6bdd", "#d6b3f5", "#30213c"],
    verification: "product-page",
    sourceId: "granddaddy-urkle",
  },
  {
    slug: "cereal-skunk",
    name: "Cereal Skunk",
    category: "Referencias",
    image: "/redesign/images/cereal-skunk.webp",
    width: 1000,
    height: 1000,
    color: "#c6ef83",
    tone: "ACID LIME",
    code: "03",
    description:
      "Lima y amarillo conviven con un fondo ilustrado multicolor y el personaje Packman.",
    palette: ["#c1db4f", "#eedd6c", "#428885"],
    verification: "product-page",
    sourceId: "cereal-skunk",
  },
  {
    slug: "berry-payton",
    name: "Berry Payton",
    category: "Referencias",
    image: "/redesign/images/berry-payton.webp",
    width: 1000,
    height: 1000,
    color: "#ff99cb",
    tone: "HOT MAGENTA",
    code: "04",
    description:
      "Rosa, magenta y reflejos rojos en un packaging marcado por la figura y el logotipo.",
    palette: ["#eb569a", "#f5a3c9", "#522638"],
    verification: "product-page",
    sourceId: "berry-payton",
  },
  {
    slug: "mango-tango",
    name: "Mango Tango",
    category: "Referencias",
    image: "/redesign/images/mango-tango.webp",
    width: 794,
    height: 719,
    color: "#ffbc75",
    tone: "AMBER ORANGE",
    code: "05",
    description:
      "Naranja y amarillo, ilustraciones contrastadas y tipografía blanca sobre tonos cálidos.",
    palette: ["#ecae37", "#f4d169", "#658567"],
    verification: "product-page",
    sourceId: "mango-tango",
  },
  {
    slug: "variety-box-10",
    name: "10 Pack Variety Box",
    category: "Packaging",
    image: "/redesign/images/variety-box-10.webp",
    width: 1280,
    height: 960,
    color: "#ff9b79",
    tone: "COLOR MIX / 01",
    code: "06",
    description:
      "Una composición fotográfica de cajas que reúne diferentes colores del universo Packman.",
    palette: ["#ff9b79", "#c993ef", "#e3bf56"],
    verification: "product-page",
    sourceId: "variety-box-10",
  },
  {
    slug: "variety-box-50",
    name: "50 Pack Variety Box",
    category: "Packaging",
    image: "/reference/box-50.webp",
    width: 300,
    height: 300,
    color: "#be9aff",
    tone: "COLOR MIX / 02",
    code: "07",
    description:
      "Packaging multicolor identificado en el catálogo público. Su ficha completa está pendiente de contraste.",
    palette: ["#be9aff", "#e2a449", "#e9b4cf"],
    verification: "public-catalog",
    sourceId: "shop",
  },
  {
    slug: "variety-box-100",
    name: "100 Pack Variety Box",
    category: "Packaging",
    image: "/redesign/images/variety-box-100.webp",
    width: 834,
    height: 927,
    color: "#b7e765",
    tone: "COLOR MIX / 03",
    code: "08",
    description:
      "Una caja ilustrada con una disposición conjunta de distintas referencias y paletas.",
    palette: ["#b7e765", "#f3b35b", "#df85ab"],
    verification: "product-page",
    sourceId: "variety-box-100",
  },
];

export const featuredReferences = [references[0], references[1], references[4]];
export function getReference(slug: string) {
  return references.find((item) => item.slug === slug);
}
