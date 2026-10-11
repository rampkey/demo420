import type { Metadata } from "next";
import { PageHeading } from "../_components/page-heading";
import { ChromaticGallery } from "../_components/gallery";
export const metadata: Metadata = { title: "Shop · Catálogo informativo" };
export default function Shop() {
  return (
    <>
      <PageHeading
        eyebrow="PACKMAN / SHOP"
        title="Catálogo Packman"
        description="Consulta ocho referencias con sus nombres, fotografías y categorías publicadas."
      />
      <section
        className="cu-shop-catalog cu-container"
        aria-label="Catálogo informativo"
      >
        <ChromaticGallery />
        <div className="cu-information-note">
          <span>REFERENCIAS DEL CATÁLOGO</span>
          <p>
            Las categorías reproducen la clasificación de la web pública. Son
            etiquetas de identificación; no acreditan composición ni
            especificaciones técnicas.
          </p>
        </div>
      </section>
    </>
  );
}
