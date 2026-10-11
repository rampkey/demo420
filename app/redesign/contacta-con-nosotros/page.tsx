import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { PageHeading } from "../_components/page-heading";
import { ContactForm } from "../_components/contact-form";
export const metadata: Metadata = { title: "Contacta con nosotros" };
export default function Contact() {
  return (
    <>
      <PageHeading
        eyebrow="PACKMAN / CONTACTO"
        title="Contacta con nosotros"
        description="Consulta las preguntas frecuentes o prueba el formulario de contacto con datos de ejemplo."
      />
      <section className="cu-contact-layout cu-container">
        <div className="cu-contact-context">
          <div className="cu-contact-card">
            <Icon name="message" />
            <h2>Preguntas frecuentes</h2>
            <p>
              Encontrarás los nombres y las fotografías disponibles en el
              catálogo, y respuestas a conceptos generales en FAQ.
            </p>
            <Link href="/redesign/faq" className="cu-text-link">
              Consultar las preguntas <Icon name="arrow" />
            </Link>
          </div>
          <div className="cu-contact-card">
            <Icon name="pin" />
            <h2>Datos de contacto.</h2>
            <p>
              Los datos publicados de teléfono y ubicación presentan
              inconsistencias. Necesitan confirmación del propietario antes de
              incorporarse.
            </p>
            <span className="cu-verification-tag">
              PENDIENTE DE CONFIRMACIÓN
            </span>
          </div>
          <div className="cu-contact-small">
            <Icon name="layers" />
            <p>
              Esta demo no gestiona ventas, atención comercial, pedidos ni
              pagos.
            </p>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
