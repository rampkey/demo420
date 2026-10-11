export type Reference = {
  slug: string;
  name: string;
  category: "Packman Live Resin" | "packman 2g vape" | "packman 2g disposable";
  image: string;
  width: number;
  height: number;
  color: string;
  code: string;
  verification: "product-page" | "public-catalog";
  sourceId: string;
};

// Names and taxonomy labels checked against public HTML on 2026-10-11.
// Published categories identify the source taxonomy, not verified specifications.
export const references: Reference[] = [
  {
    slug: "mystery-og",
    name: "Mystery OG",
    category: "Packman Live Resin",
    image: "/redesign/images/mystery-og.webp",
    width: 1000,
    height: 1000,
    color: "#93bfff",
    code: "01",
    verification: "product-page",
    sourceId: "mystery-og",
  },
  {
    slug: "granddaddy-urkle",
    name: "Granddaddy Urkle",
    category: "Packman Live Resin",
    image: "/redesign/images/granddaddy-urkle.webp",
    width: 510,
    height: 510,
    color: "#cf9dff",
    code: "02",
    verification: "product-page",
    sourceId: "granddaddy-urkle",
  },
  {
    slug: "cereal-skunk",
    name: "Cereal Skunk",
    category: "Packman Live Resin",
    image: "/redesign/images/cereal-skunk.webp",
    width: 1000,
    height: 1000,
    color: "#c6ef83",
    code: "03",
    verification: "product-page",
    sourceId: "cereal-skunk",
  },
  {
    slug: "berry-payton",
    name: "Berry Payton",
    category: "Packman Live Resin",
    image: "/redesign/images/berry-payton.webp",
    width: 1000,
    height: 1000,
    color: "#ff99cb",
    code: "04",
    verification: "product-page",
    sourceId: "berry-payton",
  },
  {
    slug: "mango-tango",
    name: "Mango Tango",
    category: "packman 2g vape",
    image: "/redesign/images/mango-tango.webp",
    width: 794,
    height: 719,
    color: "#ffbc75",
    code: "05",
    verification: "product-page",
    sourceId: "mango-tango",
  },
  {
    slug: "variety-box-10",
    name: "10 Pack Variety Box",
    category: "packman 2g disposable",
    image: "/redesign/images/variety-box-10.webp",
    width: 1280,
    height: 960,
    color: "#ff9b79",
    code: "06",
    verification: "product-page",
    sourceId: "variety-box-10",
  },
  {
    slug: "variety-box-50",
    name: "50 Pack Variety Box",
    category: "packman 2g disposable",
    image: "/redesign/images/variety-box-50.webp",
    width: 842,
    height: 956,
    color: "#be9aff",
    code: "07",
    verification: "product-page",
    sourceId: "variety-box-50",
  },
  {
    slug: "variety-box-100",
    name: "100 Pack Variety Box",
    category: "packman 2g disposable",
    image: "/redesign/images/variety-box-100.webp",
    width: 834,
    height: 927,
    color: "#b7e765",
    code: "08",
    verification: "product-page",
    sourceId: "variety-box-100",
  },
];

export const catalogReferences = [
  ...references.filter((item) => item.category === "packman 2g disposable"),
  ...references.filter((item) => item.category !== "packman 2g disposable"),
];
export function getReference(slug: string) {
  return references.find((item) => item.slug === slug);
}
