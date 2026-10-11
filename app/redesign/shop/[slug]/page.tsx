import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandImage } from "@/components/brand-image";
import { Icon } from "@/components/icons";
import { references, getReference } from "../../_data/catalog";
import { ReferenceCard } from "../../_components/reference-card";

export const dynamicParams = false;
export function generateStaticParams() {
  return references.map((item) => ({ slug: item.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getReference(slug);
  return {
    title: item
      ? `${item.name} · Ficha informativa`
      : "Referencia no encontrada",
    description: item
      ? `${item.name}: nombre, fotografía y categoría publicada. Ficha informativa, sin venta.`
      : undefined,
  };
}
export default async function ReferencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getReference(slug);
  if (!item) notFound();
  const sameCategory = references.filter(
    (other) => other.category === item.category && other.slug !== item.slug,
  );
  const related = (
    sameCategory.length
      ? sameCategory
      : references.filter((other) => other.slug !== item.slug)
  ).slice(0, 3);
  return (
    <div
      className="cu-detail-page cu-container"
      style={{ "--variant": item.color } as CSSProperties}
    >
      <nav className="cu-breadcrumbs" aria-label="Ruta de navegación">
        <Link href="/redesign">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/redesign/shop">Shop</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{item.name}</span>
      </nav>
      <section className="cu-reference-detail">
        <div className="cu-detail-art">
          <p>{item.code} / PACKMAN</p>
          <BrandImage
            src={item.image}
            width={item.width}
            height={item.height}
            alt={`Fotografía autorizada de Packman ${item.name}`}
            priority
            sizes="(max-width:700px) 90vw, 50vw"
          />
          <div className="cu-detail-orbit" aria-hidden="true" />
          <span>PACKMAN VAPE</span>
        </div>
        <div className="cu-detail-copy">
          <p className="cu-kicker">{item.category} / FICHA INFORMATIVA</p>
          <h1>{item.name}</h1>
          <p className="cu-detail-description">{item.category}</p>
          <dl className="cu-reference-facts">
            <div>
              <dt>Marca identificada</dt>
              <dd>Packman</dd>
            </div>
            <div>
              <dt>Nombre publicado</dt>
              <dd>{item.name}</dd>
            </div>
            <div>
              <dt>Categoría publicada</dt>
              <dd>{item.category}</dd>
            </div>
            <div>
              <dt>Fuente de identificación</dt>
              <dd>
                {item.verification === "product-page"
                  ? "Ficha y catálogo públicos"
                  : "Catálogo público"}
              </dd>
            </div>
          </dl>
          <div className="cu-detail-disclaimer">
            <Icon name="layers" />
            <p>
              {item.verification === "public-catalog"
                ? "La ficha original no pudo contrastarse por un error de acceso. Solo se muestran el nombre y la imagen identificados en el catálogo público."
                : "La información se limita a la identificación y la fotografía. No se han validado especificaciones técnicas, concentraciones, efectos, certificaciones ni disponibilidad."}
            </p>
          </div>
          <Link href="/redesign/shop" className="cu-button cu-button-primary">
            Volver al catálogo <Icon name="arrow" />
          </Link>
        </div>
      </section>
      <section className="cu-related cu-reveal">
        <div className="cu-section-heading">
          <div>
            <p className="cu-kicker">MÁS REFERENCIAS</p>
            <h2>Otras referencias</h2>
          </div>
          <Link className="cu-text-link" href="/redesign/shop">
            Ver catálogo <Icon name="arrow" />
          </Link>
        </div>
        <div className="cu-featured-grid">
          {related.map((other) => (
            <ReferenceCard key={other.slug} item={other} featured />
          ))}
        </div>
      </section>
    </div>
  );
}
