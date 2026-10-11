import Link from "next/link";
import { DemoNav } from "@/components/demo-nav";
import { referenceAssetsAuthorized } from "@/lib/brand";
export default function Home() {
  return (
    <div className="comparison-page">
      <DemoNav />
      <main className="comparison-main" id="contenido">
        <div className="comparison-heading">
          <div>
            <p className="eyebrow">PACKMAN / ESTUDIO VISUAL INDEPENDIENTE</p>
            <h1>
              Una identidad.
              <br />
              <span>Dos perspectivas.</span>
            </h1>
          </div>
          <p>
            De la portada pública a una nueva dirección visual. Compara la
            estructura de referencia con una propuesta más limpia, clara y
            adaptable.
          </p>
        </div>
        <div className="comparison-grid">
          <Link href="/original" className="comparison-card">
            <div className="comparison-preview old" aria-hidden="true">
              <span>HOME / GALERÍA / SOBRE NOSOTROS</span>
              <div className="preview-panel">
                Packman Vape:
                <br />
                La nueva generación
                <i>La composición y la paleta de la portada de referencia.</i>
              </div>
            </div>
            <div className="comparison-card-caption">
              <div>
                <h2>01 — Original</h2>
                <p>Reconstrucción de la estructura y estilos públicos.</p>
              </div>
              <span aria-hidden="true">↗</span>
            </div>
          </Link>
          <Link href="/redesign" className="comparison-card">
            <div className="comparison-preview new" aria-hidden="true">
              <span>UNA NUEVA MIRADA</span>
              <p>
                Misma esencia.
                <br />
                Otra <em>perspectiva.</em>
              </p>
              <b className="preview-spark">✳</b>
            </div>
            <div className="comparison-card-caption">
              <div>
                <h2>02 — Rediseño</h2>
                <p>Más espacio, mejor jerarquía y navegación clara.</p>
              </div>
              <span aria-hidden="true">↗</span>
            </div>
          </Link>
        </div>
        <p className="comparison-footnote">
          Demo no oficial. Sin afiliación comercial, compras, pagos ni carrito.
          <br />
          {referenceAssetsAuthorized
            ? "Referencias visuales incorporadas con autorización para esta demo."
            : "La estructura y los estilos se han contrastado con el HTML público. Las fotografías y el logotipo están pendientes de permiso de reutilización."}
        </p>
      </main>
    </div>
  );
}
