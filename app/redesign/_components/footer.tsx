import Link from "next/link";
import { BrandLogo } from "@/components/brand-image";
import { navigation } from "../_data/navigation";
import { contactReference } from "../_data/contact";

export function ChromaticFooter() {
  return (
    <footer className="cu-footer" id="demo" aria-label="Pie de página de Packman">
      <div className="cu-container">
        <div className="cu-footer-top">
          <Link href="/redesign" aria-label="Packman, volver al inicio">
            <BrandLogo />
          </Link>
          <p>
            Packman Vape
            <br />
            <span>Información y referencias.</span>
          </p>
          <a href="#inicio">
            Volver arriba <span aria-hidden="true">↑</span>
          </a>
        </div>

        <nav className="cu-footer-navigation" aria-label="Navegación del pie de página">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="cu-footer-signature">
          <div className="cu-footer-word" aria-hidden="true">PACKMAN</div>
          <section className="cu-footer-details" aria-labelledby="cu-footer-details-heading">
            <h2 id="cu-footer-details-heading">CONTACTO</h2>
            <dl>
              <div>
                <dt>Nombre publicado</dt>
                <dd>{contactReference.name}</dd>
              </div>
              <div>
                <dt>Teléfono</dt>
                <dd>{contactReference.phone}</dd>
              </div>
              <div>
                <dt>Correo electrónico</dt>
                <dd>{contactReference.email}</dd>
              </div>
            </dl>
            <p className="cu-footer-details-note">
              Datos del sitio original · Pendientes de confirmación.
            </p>
          </section>
        </div>

        <div className="cu-footer-bottom">
          <p>
            Propuesta independiente de diseño · Demo no oficial
            <br />
            Sin afiliación confirmada ni funciones de venta, pago o carrito.
          </p>
          <span>PACKMAN VAPE</span>
          <nav aria-label="Comparar versiones">
            <Link href="/">Comparativa</Link>
            <Link href="/original">Original <span aria-hidden="true">↗</span></Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
