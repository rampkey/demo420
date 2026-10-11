import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BrandImage } from "@/components/brand-image";
import { Icon } from "@/components/icons";
import { brand } from "@/lib/brand";
import { ChromaticGallery } from "./_components/gallery";
import { ChromaticFaq } from "./_components/faq";
import { references } from "./_data/catalog";
export const metadata: Metadata = { title: "Packman Vape" };
export default function Redesign() {
  const hero = references[0];
  return (
    <>
      <section className="cu-hero cu-container">
        <div className="cu-hero-copy">
          <p className="cu-kicker">
            <i aria-hidden="true" />
            PACKMAN VAPE
          </p>
          <h1>
            Packman
            <br />
            <span>Vape.</span>
          </h1>
          <p className="cu-hero-description">
            Nuestro objetivo es ofrecer información detallada para ayudar a los
            usuarios a comprender mejor esta categoría.
          </p>
          <div className="cu-hero-actions">
            <Link href="/redesign/shop" className="cu-button cu-button-primary">
              Consultar referencias <Icon name="arrow" />
            </Link>
            <Link href="/redesign/sobre-nosotros" className="cu-quiet-link">
              Sobre nosotros <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="cu-hero-edition">
            <span>PACKMAN VAPE</span>
            <span>REFERENCIAS / INFORMACIÓN</span>
          </div>
        </div>
        <div className="cu-stage cu-product-stage">
          <div className="cu-stage-atmosphere" aria-hidden="true" />
          <div className="cu-stage-top">
            <span>
              <i aria-hidden="true" />
              MYSTERY OG
            </span>
            <Icon name="spark" />
          </div>
          <div className="cu-hero-product-plate">
            <Image
              src={hero.image}
              width={hero.width}
              height={hero.height}
              alt="Fotografía de referencia de Mystery OG"
              loading="eager"
              fetchPriority="high"
              sizes="(max-width:600px) 80vw, (max-width:800px) 60vw, 40vw"
            />
          </div>
          <div className="cu-chrome-ring" aria-hidden="true" />
          <div className="cu-stage-coordinate">PACKMAN VAPE</div>
          <Link href="/redesign/shop/mystery-og" className="cu-floating-label">
            <span>{hero.category}</span>
            <strong>Mystery OG</strong>
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
      <section className="cu-gallery-section" id="galeria">
        <div className="cu-container">
          <div className="cu-section-heading cu-reveal">
            <div>
              <p className="cu-kicker">REFERENCIAS PACKMAN</p>
              <h2>Catálogo informativo</h2>
            </div>
            <Link href="/redesign/shop" className="cu-text-link">
              Ver catálogo <Icon name="arrow" />
            </Link>
          </div>
          <ChromaticGallery />
        </div>
      </section>
      <section className="cu-editorial cu-container cu-reveal" id="identidad">
        <div className="cu-editorial-art">
          <BrandImage
            src={brand.hero}
            alt="Ilustraciones y packaging Packman"
            width={2000}
            height={2000}
            sizes="(max-width:600px) 90vw, 52vw"
          />
        </div>
        <div className="cu-editorial-side">
          <p className="cu-kicker">SOBRE NOSOTROS</p>
          <h2>Información y conocimiento</h2>
          <p>
            En un mercado donde existe mucha información contradictoria, creemos
            que la educación, la transparencia y la responsabilidad son
            elementos fundamentales para construir confianza.
          </p>
          <Link href="/redesign/sobre-nosotros" className="cu-text-link">
            Sobre nosotros <Icon name="arrow" />
          </Link>
        </div>
      </section>
      <section className="cu-faq cu-container cu-reveal" id="faq">
        <div>
          <p className="cu-kicker">FAQ</p>
          <h2>Preguntas frecuentes</h2>
          <Link href="/redesign/faq" className="cu-text-link">
            Ver todas las preguntas <Icon name="arrow" />
          </Link>
        </div>
        <ChromaticFaq />
      </section>
    </>
  );
}
