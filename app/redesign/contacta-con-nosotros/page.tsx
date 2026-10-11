import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { PageHeading } from "../_components/page-heading";
import { ContactForm } from "../_components/contact-form";
import { contactReference } from "../_data/contact";

export const metadata: Metadata = { title: "Contacta con nosotros" };

export default function Contact() {
  return (
    <>
      <PageHeading
        eyebrow="PACKMAN / CONTACTO"
        title="Contacta con nosotros"
        description="Información de contacto publicada en Packman Vape."
      />
      <section className="cu-contact-layout cu-container">
        <div className="cu-contact-context">
          <div className="cu-contact-card cu-contact-data">
            <Icon name="pin" />
            <h2>Datos de contacto</h2>
            <dl>
              <dt>Referencia de contacto</dt><dd>{contactReference.name}</dd>
              <dt>Teléfono publicado</dt><dd>{contactReference.phone}</dd>
              <dt>Correo publicado</dt><dd>{contactReference.email}</dd>
            </dl>
            <p className="cu-contact-disclaimer">
              {contactReference.source} No se muestra la dirección postal
              porque el sitio original contiene datos contradictorios.
            </p>
          </div>
          <div className="cu-contact-card">
            <Icon name="message" />
            <h2>Preguntas frecuentes</h2>
            <p>Puedes consultar la información disponible y las referencias en el catálogo.</p>
            <Link href="/redesign/faq" className="cu-text-link">
              Consultar las preguntas <Icon name="arrow" />
            </Link>
          </div>
          <div className="cu-contact-small">
            <Icon name="layers" />
            <p>Esta propuesta de diseño no gestiona ventas, atención comercial, pedidos ni pagos.</p>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
