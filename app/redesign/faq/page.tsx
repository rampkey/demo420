import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "../_components/page-heading";
import { ChromaticFaq } from "../_components/faq";
import { brandQuestions } from "../_data/content";
import { Icon } from "@/components/icons";
export const metadata: Metadata = { title: "FAQ · Preguntas frecuentes" };
export default function FaqPage() {
  return (
    <>
      <PageHeading
        eyebrow="PACKMAN / FAQ"
        title="Preguntas frecuentes"
        description="Información sobre tecnología, conceptos generales y el enfoque educativo de Packman."
      />
      <section
        className="cu-faq-v3 cu-container cu-reveal"
        aria-label="Preguntas y respuestas"
      >
        <ChromaticFaq questions={brandQuestions} />
        <div className="cu-faq-contact">
          <Link href="/redesign/contacta-con-nosotros" className="cu-text-link">
            Contacta con nosotros <Icon name="arrow" />
          </Link>
        </div>
      </section>
    </>
  );
}
