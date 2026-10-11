// User confirmed permission to reuse site artwork in this demo (2026-10-11).
export const referenceAssetsAuthorized = true;
export const brand = {
  logo: "/reference/logo.webp",
  hero: "/reference/hero.webp",
  features: "/reference/features.webp",
  about: "/reference/about.webp",
  panorama: "/reference/panorama.webp",
  footer: "/reference/footer.webp",
};
export type Visual = {
  id: string;
  title: string;
  category: "Packaging" | "Gráfica";
  image: string;
  color: string;
  caption: string;
};
export const visuals: Visual[] = [
  {
    id: "box-10",
    title: "Variety Box / 01",
    category: "Packaging",
    image: "/reference/box-10.webp",
    color: "#f3c657",
    caption: "Composición de cajas y color de la portada de referencia.",
  },
  {
    id: "box-50",
    title: "Variety Box / 02",
    category: "Packaging",
    image: "/reference/box-50.webp",
    color: "#bf94ce",
    caption: "Una segunda composición del packaging de referencia.",
  },
  {
    id: "box-100",
    title: "Variety Box / 03",
    category: "Packaging",
    image: "/reference/box-100.webp",
    color: "#a5c997",
    caption: "Disposición de los elementos gráficos en conjunto.",
  },
  {
    id: "mystery",
    title: "Mystery OG",
    category: "Gráfica",
    image: "/reference/mystery.webp",
    color: "#bd92d1",
    caption: "Estudio visual de la paleta y el personaje de marca.",
  },
  {
    id: "granddaddy",
    title: "Granddaddy Urkle",
    category: "Gráfica",
    image: "/reference/granddaddy.webp",
    color: "#d281b5",
    caption: "Variación cromática de la identidad gráfica.",
  },
  {
    id: "cereal",
    title: "Cereal Skunk",
    category: "Gráfica",
    image: "/reference/cereal.webp",
    color: "#cfdd93",
    caption: "Tipografía, ilustración y contraste en el diseño.",
  },
  {
    id: "berry",
    title: "Berry Payton",
    category: "Gráfica",
    image: "/reference/berry.webp",
    color: "#9bb8d2",
    caption: "Una composición de referencia en tonos fríos.",
  },
  {
    id: "mango",
    title: "Mango Tango",
    category: "Gráfica",
    image: "/reference/mango.webp",
    color: "#ecc174",
    caption: "Estudio de los tonos cálidos del packaging.",
  },
];
