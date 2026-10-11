import type { Metadata } from "next";
import Link from "next/link";
import { BrandImage } from "@/components/brand-image";
import { Icon } from "@/components/icons";
import { brand } from "@/lib/brand";
import { PageHeading } from "../_components/page-heading";
import { aboutIntro, aboutPrinciples } from "../_data/content";
export const metadata: Metadata = { title: "Sobre nosotros" };
export default function About() {
  return (
    <>
      <PageHeading
        eyebrow="PACKMAN / SOBRE NOSOTROS"
        title="Sobre nosotros"
        description={aboutIntro}
      />
      <section className="cu-about-story cu-container cu-reveal">
        <div className="cu-about-photo">
          <BrandImage
            src={brand.about}
            width={1024}
            height={985}
            alt="Fotografía de dispositivo y packaging Packman"
            sizes="(max-width:700px) 90vw, 50vw"
          />
          <span>PACKMAN VAPE</span>
        </div>
        <div className="cu-about-copy">
          <p className="cu-kicker">NUESTRA HISTORIA</p>
          <h2>Creando un espacio basado en información y confianza</h2>
          <p>
            El crecimiento del sector del vapeo ha generado nuevas
            conversaciones alrededor de la tecnología, los dispositivos
            electrónicos y la cultura asociada a los cannabinoides.
          </p>
          <p>
            Desde el inicio, nuestra visión ha sido crear un punto de referencia
            donde los usuarios puedan encontrar información organizada,
            explicaciones sencillas y recursos útiles para comprender mejor este
            ecosistema.
          </p>
          <Link href="/redesign/faq" className="cu-text-link">
            Preguntas frecuentes <Icon name="arrow" />
          </Link>
        </div>
      </section>
      <section className="cu-about-principles cu-container cu-reveal">
        <div className="cu-section-heading">
          <div>
            <p className="cu-kicker">COMPROMISO CON LA TRANSPARENCIA</p>
            <h2>La confianza se construye mediante información clara.</h2>
          </div>
        </div>
        <div className="cu-principles-grid">
          {aboutPrinciples.map((item) => (
            <article key={item.number}>
              <div>
                <span>{item.number}</span>
                <Icon name="spark" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
