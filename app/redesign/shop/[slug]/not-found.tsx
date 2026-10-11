import Link from "next/link";
import { PageHeading } from "../../_components/page-heading";
export default function ReferenceNotFound() {
  return (
    <>
      <PageHeading
        eyebrow="PACKMAN / 404"
        title="Esta referencia"
        accent="no está aquí."
        description="Puedes consultar las referencias disponibles en el catálogo informativo."
      />
      <div className="cu-container cu-empty-page">
        <Link href="/redesign/shop" className="cu-button cu-button-primary">
          Volver al catálogo →
        </Link>
      </div>
    </>
  );
}
