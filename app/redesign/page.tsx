import type { Metadata } from "next";
import Link from "next/link";
import { DemoNav } from "@/components/demo-nav";
import { SiteNav } from "@/components/site-nav";
import { BrandImage, BrandLogo } from "@/components/brand-image";
import { Icon } from "@/components/icons";
import { VisualGallery } from "@/components/visual-gallery";
import { DemoFaq } from "@/components/demo-faq";
import { brand, referenceAssetsAuthorized } from "@/lib/brand";
export const metadata: Metadata = {
  title: "Nueva perspectiva · Packman / Demo no oficial",
};
export default function Redesign() {
  return (
    <div className="redesign-page">
      <DemoNav current="redesign" />
      <SiteNav variant="redesign" />
      <main id="contenido">
        {!referenceAssetsAuthorized && (
          <div className="asset-notice">
            Fotografías y logotipo pendientes de permiso de reutilización. La
            paleta, la tipografía y la estructura se basan en la referencia
            pública.
          </div>
        )}
        <section className="modern-hero" id="inicio">
          <div className="modern-container modern-hero-grid">
            <div className="modern-hero-copy">
              <p className="eyebrow">
                <span />
                PACKMAN · ESTUDIO DE IDENTIDAD
              </p>
              <h1>
                Misma esencia.
                <br />
                Otra <span>perspectiva.</span>
              </h1>
              <p className="modern-lead">
                Color que destaca. Identidad que permanece.
                <br />
                Una nueva mirada al universo visual de Packman.
              </p>
              <a className="modern-button" href="#galeria">
                Explorar la identidad <Icon name="arrow" />
              </a>
              <div className="modern-hero-bottom">
                <span>DISEÑO / COLOR / CULTURA VISUAL</span>
                <a
                  href="#identidad"
                  aria-label="Descubrir el estudio de identidad"
                >
                  ↓
                </a>
              </div>
            </div>
            <div className="modern-hero-art">
              <BrandImage
                src={brand.hero}
                alt="Composición de packaging e ilustraciones de Packman"
                width={2000}
                height={2000}
                priority
                sizes="(max-width: 980px) 100vw, 50vw"
              />
              <div className="art-caption">
                <span>01 — IDENTIDAD EN COLOR</span>
                <Icon name="spark" />
              </div>
              <div className="art-sticker">
                <span>UNA NUEVA</span>
                <strong>MIRADA</strong>
                <Icon name="arrow" />
              </div>
            </div>
          </div>
        </section>
        <div className="modern-ribbon" aria-hidden="true">
          <span>PACKMAN</span>
          <Icon name="spark" />
          <span>COLOR CON CARÁCTER</span>
          <Icon name="spark" />
          <span>IDENTIDAD PROPIA</span>
          <Icon name="spark" />
          <span>PACKMAN</span>
        </div>
        <section className="modern-identity modern-container" id="identidad">
          <div className="identity-art">
            <BrandImage
              src={brand.about}
              alt="Estudio fotográfico del universo visual de Packman"
              width={1024}
              height={985}
              sizes="(max-width: 980px) 90vw, 40vw"
            />
            <div className="identity-image-label">
              <span>EL PUNTO DE PARTIDA</span>
              <span>01 / 03</span>
            </div>
          </div>
          <div className="identity-copy">
            <p className="eyebrow">01 / LA IDENTIDAD</p>
            <h2>
              Reconocible.
              <br />
              Desde el primer
              <br />
              <span>detalle.</span>
            </h2>
            <p>
              El personaje, el color y una tipografía con personalidad. El
              universo gráfico de Packman tiene una voz propia.
            </p>
            <p>
              Esta propuesta conserva los acentos menta y crema de la referencia
              y los combina con una composición más limpia, espacios generosos y
              un contraste cuidado.
            </p>
            <div className="identity-palette" aria-label="Paleta de marca">
              <span
                style={{ background: "#6d8196" }}
                title="Azul grisáceo #6d8196"
              />
              <span style={{ background: "#adebb3" }} title="Menta #adebb3" />
              <span style={{ background: "#fdfbd4" }} title="Crema #fdfbd4" />
              <span style={{ background: "#1d2528" }} title="Carbón #1d2528" />
              <p>
                La misma paleta.
                <br />
                Un nuevo equilibrio.
              </p>
            </div>
          </div>
        </section>
        <section className="modern-gallery-section" id="galeria">
          <div className="modern-container">
            <div className="modern-section-heading">
              <div>
                <p className="eyebrow">02 / ARCHIVO VISUAL</p>
                <h2>
                  Un universo.
                  <br />
                  <span>Mucho carácter.</span>
                </h2>
              </div>
              <p>
                Referencias de packaging y gráfica de la portada.
                <br />
                Una galería para observar, comparar y explorar el diseño.
              </p>
            </div>
            <VisualGallery />
            <p className="gallery-footnote">
              <Icon name="layers" />
              Archivo de referencias gráficas. Sin precios ni funciones de
              compra.
            </p>
          </div>
        </section>
        <section className="modern-principles modern-container">
          <div className="modern-section-heading">
            <div>
              <p className="eyebrow">03 / UNA EXPERIENCIA MÁS CLARA</p>
              <h2>
                Menos ruido.
                <br />
                Más <span>intención.</span>
              </h2>
            </div>
            <Link href="/original" className="text-link">
              Comparar con el original <Icon name="arrow" />
            </Link>
          </div>
          <div className="principles-grid">
            {[
              {
                n: "01",
                icon: "type" as const,
                title: "Tipografía que respira.",
                text: "Títulos con presencia. Párrafos más breves. Una lectura con ritmo y jerarquía.",
              },
              {
                n: "02",
                icon: "layers" as const,
                title: "Cada bloque, un propósito.",
                text: "Identidad, galería y contexto. El contenido se organiza para encontrarlo sin esfuerzo.",
              },
              {
                n: "03",
                icon: "screen" as const,
                title: "Natural en cada pantalla.",
                text: "Navegación accesible, distribución adaptable y movimiento discreto.",
              },
            ].map((item) => (
              <article key={item.n}>
                <div className="principle-top">
                  <span>{item.n}</span>
                  <Icon name={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="modern-banner">
          <div className="modern-container">
            <p className="eyebrow">DOS VERSIONES. UNA IDENTIDAD.</p>
            <h2>
              El cambio se ve.
              <br />
              La esencia <em>se queda.</em>
            </h2>
            <Link className="modern-button light" href="/original">
              Ver la reconstrucción <Icon name="arrow" />
            </Link>
            <span className="banner-star" aria-hidden="true">
              ✳
            </span>
          </div>
        </section>
        <section className="modern-faq modern-container" id="faq">
          <div>
            <p className="eyebrow">EL CONTEXTO, CLARO</p>
            <h2>
              Antes de
              <br />
              <span>seguir explorando.</span>
            </h2>
            <p>
              Todo lo que necesitas saber
              <br />
              sobre este estudio visual.
            </p>
          </div>
          <DemoFaq />
        </section>
      </main>
      <footer className="modern-footer" id="demo">
        <div className="modern-container">
          <div className="footer-main">
            <Link href="/redesign" aria-label="Packman, inicio de la demo">
              <BrandLogo />
            </Link>
            <p>
              Una mirada independiente
              <br />
              al universo visual de Packman.
            </p>
            <a href="#inicio" className="back-to-top">
              Volver arriba <span>↑</span>
            </a>
          </div>
          <div className="footer-bottom">
            <p>
              Demo no oficial · Sin afiliación comercial · Sin compras ni pagos
            </p>
            <nav aria-label="Comparar versiones">
              <Link href="/original">Original</Link>
              <Link href="/redesign" aria-current="page">
                Rediseño
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
