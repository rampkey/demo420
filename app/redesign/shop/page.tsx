import type { Metadata } from "next";
import { PageHeading } from "../_components/page-heading";
import { ChromaticGallery } from "../_components/gallery";
export const metadata: Metadata = { title: "Shop · Catálogo informativo" };
export default function Shop() {
  return (
    <>
      <PageHeading
        eyebrow="PACKMAN / SHOP"
        title="Cada referencia."
        accent="Su propio tono."
        description="Los nombres, las imágenes y el packaging de Packman. Consulta las fichas de este catálogo informativo, sin precios ni funciones de compra."
      />
      <section
        className="cu-shop-catalog cu-container"
        aria-label="Catálogo informativo"
      >
        <ChromaticGallery />
        <div className="cu-information-note">
          <span>INFORMACIÓN DEL CATÁLOGO</span>
          <p>
            Una selección de ocho referencias identificadas en el sitio público.
            Las fotografías permiten reconocer el packaging; no acreditan
            composición, disponibilidad ni especificaciones técnicas.
          </p>
        </div>
      </section>
    </>
  );
}
