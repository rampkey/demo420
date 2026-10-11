import type { Metadata } from "next";
import Link from "next/link";
import { BrandImage } from "@/components/brand-image";
import { Icon } from "@/components/icons";
import { brand } from "@/lib/brand";
import { PageHeading } from "../_components/page-heading";
import { aboutPrinciples } from "../_data/content";
export const metadata: Metadata = { title: "Sobre nosotros" };
export default function About() {
  return (
    <>
      <PageHeading
        eyebrow="PACKMAN / SOBRE NOSOTROS"
        title="Una identidad."
        accent="Una comunidad."
        description="Información, tecnología y conocimiento. Un espacio para comprender la evolución del vapeo y los conceptos del sector, con claridad y transparencia."
      />
      <section className="cu-about-story cu-container cu-reveal">
        <div className="cu-about-photo">
          <BrandImage
            src={brand.about}
            width={1024}
            height={985}
            alt="Fotografía del dispositivo y packaging Packman"
            sizes="(max-width:700px) 90vw, 50vw"
          />
          <span>PACKMAN / PERSONAJE Y PACKAGING</span>
        </div>
        <div className="cu-about-copy">
          <p className="cu-kicker">NUESTRO ENFOQUE</p>
          <h2>
            El conocimiento.
            <br />
            <span>En primer plano.</span>
          </h2>
          <p>
            La tecnología de vapeo ha abierto nuevas conversaciones sobre los
            dispositivos electrónicos y la evolución de la industria. Comprender
            sus conceptos requiere información organizada y explicaciones
            claras.
          </p>
          <p>
            Nuestro enfoque parte de la educación, la transparencia y la
            responsabilidad. Una comunidad interesada en aprender necesita
            información que pueda comprender y contrastar.
          </p>
          <Link href="/redesign/faq" className="cu-text-link">
            Preguntas y respuestas <Icon name="arrow" />
          </Link>
        </div>
      </section>
      <section className="cu-about-principles cu-container cu-reveal">
        <div className="cu-section-heading">
          <div>
            <p className="cu-kicker">LOS PRINCIPIOS</p>
            <h2>
              Claridad.
              <br />
              <span>Sin rodeos.</span>
            </h2>
          </div>
          <p>
            La confianza empieza en la información.
            <br />Y en reconocer qué necesita contraste.
          </p>
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
      <section className="cu-about-panorama cu-container cu-reveal">
        <BrandImage
          src={brand.panorama}
          width={2048}
          height={2048}
          alt="Composición fotográfica de distintas referencias Packman"
          sizes="90vw"
        />
        <div>
          <p className="cu-kicker">PACKMAN / EN TODOS SUS TONOS</p>
          <h2>
            Un personaje.
            <br />
            <span>Muchas referencias.</span>
          </h2>
          <Link href="/redesign/shop" className="cu-button cu-button-primary">
            Consultar el catálogo <Icon name="arrow" />
          </Link>
        </div>
      </section>
    </>
  );
}
