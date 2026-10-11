import type { Metadata } from "next";
import Link from "next/link";
import { BrandImage } from "@/components/brand-image";
import { Icon } from "@/components/icons";
import { brand } from "@/lib/brand";
import { ChromaticGallery } from "./_components/gallery";
import { ChromaticFaq } from "./_components/faq";
import { ReferenceCard } from "./_components/reference-card";
import { featuredReferences, references } from "./_data/catalog";
export const metadata: Metadata = { title: "Home" };
export default function Redesign() {
  const hero = references[0];
  return (
    <>
      <section className="cu-hero cu-container">
        <div className="cu-hero-copy">
          <p className="cu-kicker">
            <i aria-hidden="true" />
            PACKMAN / TODOS SUS TONOS
          </p>
          <h1>
            PACKMAN.
            <br />
            COLOR CON
            <br />
            <span>CARÁCTER.</span>
          </h1>
          <p className="cu-hero-description">
            Personaje, packaging y color. Conoce las referencias y la
            información de Packman, en un mismo lugar.
          </p>
          <div className="cu-hero-actions">
            <Link href="/redesign/shop" className="cu-button cu-button-primary">
              Ver catálogo informativo <Icon name="arrow" />
            </Link>
            <Link href="/redesign/sobre-nosotros" className="cu-quiet-link">
              Sobre Packman <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="cu-hero-edition">
            <span>PACKMAN VAPE</span>
            <span>REFERENCIAS / PACKAGING / INFORMACIÓN</span>
          </div>
        </div>
        <div className="cu-stage cu-product-stage">
          <div className="cu-stage-atmosphere" aria-hidden="true" />
          <div className="cu-stage-top">
            <span>
              <i aria-hidden="true" />
              01 / MYSTERY OG
            </span>
            <Icon name="spark" />
          </div>
          <div className="cu-hero-product-plate">
            <BrandImage
              src={hero.image}
              width={hero.width}
              height={hero.height}
              alt="Mystery OG: packaging azul hielo y dispositivo Packman en la fotografía autorizada"
              priority
              sizes="(max-width:600px) 90vw, 48vw"
            />
          </div>
          <div className="cu-chrome-ring" aria-hidden="true" />
          <div className="cu-stage-coordinate">PACKMAN / ICE BLUE</div>
          <Link href="/redesign/shop/mystery-og" className="cu-floating-label">
            <span>REFERENCIA / 01</span>
            <strong>Mystery OG</strong>
            <div>
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <p>
              Ver ficha informativa <span aria-hidden="true">↗</span>
            </p>
          </Link>
          <div className="cu-stage-bottom">
            <span>FOTOGRAFÍA DE REFERENCIA</span>
            <span aria-hidden="true">↗</span>
          </div>
        </div>
      </section>
      <div className="cu-strip" aria-hidden="true">
        <span>PACKMAN</span>
        <Icon name="spark" />
        <span>CHROMATIC</span>
        <Icon name="spark" />
        <span>UNDERGROUND</span>
        <Icon name="spark" />
        <span>FULL SPECTRUM</span>
      </div>
      <section className="cu-home-featured cu-container cu-reveal">
        <div className="cu-section-heading">
          <div>
            <p className="cu-kicker">01 / REFERENCIAS DESTACADAS</p>
            <h2>
              Nombres propios.
              <br />
              <span>Tonos distintos.</span>
            </h2>
          </div>
          <Link href="/redesign/shop" className="cu-text-link">
            Todas las referencias <Icon name="arrow" />
          </Link>
        </div>
        <div className="cu-featured-grid">
          {featuredReferences.map((item) => (
            <ReferenceCard key={item.slug} item={item} featured />
          ))}
        </div>
      </section>
      <section className="cu-editorial cu-container cu-reveal" id="identidad">
        <div className="cu-editorial-art">
          <BrandImage
            src={brand.hero}
            alt="Personaje e ilustraciones multicolor del packaging Packman"
            width={2000}
            height={2000}
            sizes="(max-width:600px) 90vw, 52vw"
          />
          <div className="cu-editorial-overlay">
            <span>PACKMAN / MÁS ALLÁ DEL NOMBRE</span>
            <strong>
              Una identidad.
              <br />
              Muchos tonos.
            </strong>
            <span>PERSONAJE / COLOR / PACKAGING</span>
          </div>
        </div>
        <div className="cu-editorial-side">
          <p className="cu-kicker">SOBRE NOSOTROS</p>
          <h2>
            Información clara.
            <br />
            <span>Una voz propia.</span>
          </h2>
          <p>
            Un espacio dedicado al conocimiento de la tecnología de vapeo y la
            evolución del sector. Información organizada, transparencia y una
            comunidad interesada en comprender.
          </p>
          <div className="cu-spectrum" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Link href="/redesign/sobre-nosotros" className="cu-text-link">
            Conoce nuestro enfoque <Icon name="arrow" />
          </Link>
        </div>
      </section>
      <section className="cu-gallery-section" id="galeria">
        <div className="cu-container">
          <div className="cu-section-heading cu-reveal">
            <div>
              <p className="cu-kicker">02 / EL CATÁLOGO</p>
              <h2>
                Todo el color.
                <br />
                <span>En un lugar.</span>
              </h2>
            </div>
            <p>
              Referencias y packaging Packman.
              <br />
              Explora sus nombres, imágenes y fichas.
              <br />
              <span>Catálogo informativo. Sin venta.</span>
            </p>
          </div>
          <ChromaticGallery />
          <div className="cu-gallery-note">
            <Icon name="layers" />
            <p>
              Fotografías autorizadas · Fichas informativas, sin precios ni
              compras
            </p>
            <span>PACKMAN / 01—08</span>
          </div>
        </div>
      </section>
      <section className="cu-faq cu-container cu-reveal" id="faq">
        <div>
          <p className="cu-kicker">03 / PREGUNTAS FRECUENTES</p>
          <h2>
            Las preguntas.
            <br />
            <span>La información.</span>
          </h2>
          <p>Conceptos generales y datos sobre Packman.</p>
          <Link href="/redesign/faq" className="cu-text-link">
            Ver todas las preguntas <Icon name="arrow" />
          </Link>
        </div>
        <ChromaticFaq />
      </section>
    </>
  );
}
