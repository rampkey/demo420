import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "../_components/page-heading";
import { ChromaticFaq } from "../_components/faq";
import { brandQuestions, demoQuestions } from "../_data/content";
import { Icon } from "@/components/icons";
export const metadata: Metadata = { title: "FAQ · Preguntas frecuentes" };
export default function FaqPage() {
  return (
    <>
      <PageHeading
        eyebrow="PACKMAN / FAQ"
        title="Buenas preguntas."
        accent="Información clara."
        description="Conceptos generales, información de Packman y el alcance de este catálogo. Sin políticas comerciales ni afirmaciones sanitarias sin verificar."
      />
      <div className="cu-faq-page cu-container">
        <nav className="cu-faq-index" aria-label="Grupos de preguntas">
          <a href="#packman">
            01 / Sobre Packman <Icon name="arrow" />
          </a>
          <a href="#esta-demo">
            02 / Sobre esta demo <Icon name="arrow" />
          </a>
        </nav>
        <div className="cu-faq-groups">
          <section id="packman" className="cu-reveal">
            <p className="cu-kicker">01 / SOBRE PACKMAN</p>
            <h2>Los conceptos.</h2>
            <ChromaticFaq questions={brandQuestions} />
          </section>
          <section id="esta-demo" className="cu-reveal">
            <p className="cu-kicker">02 / SOBRE ESTA DEMO</p>
            <h2>Lo que incluye.</h2>
            <ChromaticFaq questions={demoQuestions} />
          </section>
          <div className="cu-faq-contact">
            <p>¿Quieres ver la sección de contacto?</p>
            <Link
              href="/redesign/contacta-con-nosotros"
              className="cu-text-link"
            >
              Contacta con nosotros <Icon name="arrow" />
            </Link>
            <span>Formulario simulado. No se envían mensajes.</span>
          </div>
        </div>
      </div>
    </>
  );
}
