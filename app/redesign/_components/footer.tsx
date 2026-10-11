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

        <div className="cu-footer-contact" aria-labelledby="cu-contact-heading">
          <div className="cu-footer-contact-heading">
            <span className="cu-footer-overline">PACKMAN / CONTACTO</span>
            <h2 id="cu-contact-heading">Contacto</h2>
            <p>Datos publicados en la web de referencia.</p>
          </div>
          <div className="cu-footer-contact-grid">
            <div className="cu-footer-contact-card">
              <span>REFERENCIA DE CONTACTO</span>
              <strong>{contactReference.name}</strong>
              <small>Nombre que figura en la web original</small>
            </div>
            <div className="cu-footer-contact-card">
              <span>TELÉFONO</span>
              <strong>{contactReference.phone}</strong>
              <small>Según la web de referencia</small>
            </div>
            <div className="cu-footer-contact-card">
              <span>CORREO ELECTRÓNICO</span>
              <strong className="cu-footer-email">{contactReference.email}</strong>
              <small>Según la web de referencia</small>
            </div>
          </div>
          <p className="cu-footer-contact-note">
            {contactReference.source} La dirección postal se ha omitido por
            contener información contradictoria en la web original.
          </p>
        </div>

        <nav className="cu-footer-navigation" aria-label="Navegación del pie de página">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="cu-footer-word" aria-hidden="true">PACKMAN</div>
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
