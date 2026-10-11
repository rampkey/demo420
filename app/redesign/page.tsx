import type { Metadata } from "next";
import Link from "next/link";
import { DemoNav } from "@/components/demo-nav";
import { BrandImage, BrandLogo } from "@/components/brand-image";
import { ChromaticFaq } from "./_components/faq";
import { Icon } from "@/components/icons";
import { brand } from "@/lib/brand";
import { ChromaticHeader } from "./_components/header";
import { ChromaticGallery } from "./_components/gallery";
import { ChromaticMotion } from "./_components/motion";
import "./chromatic.css";
export const metadata: Metadata = {
  title: "Chromatic Underground · Packman / Demo no oficial",
  description:
    "Una exploración visual independiente: identidad Packman, color, packaging y diseño editorial. Demo sin compras ni pagos.",
};
export default function Redesign() {
  return (
    <div className="chromatic-page">
      <DemoNav current="redesign" />
      <ChromaticHeader />
      <ChromaticMotion>
        <main id="contenido">
          <section className="cu-hero cu-container" id="inicio">
            <div className="cu-hero-copy">
              <p className="cu-kicker">
                <i />
                PACKMAN / CHROMATIC UNDERGROUND
              </p>
              <h1>
                No es solo
                <br />
                color.
                <br />
                <span>Es carácter.</span>
              </h1>
              <p className="cu-hero-description">
                Una identidad que rompe el molde.
                <br />
                Un universo visual que no pasa desapercibido.
              </p>
              <div className="cu-hero-actions">
                <a href="#galeria" className="cu-button cu-button-primary">
                  Explorar el universo <Icon name="arrow" />
                </a>
                <a href="#identidad" className="cu-quiet-link">
                  Descubre la dirección <span>↓</span>
                </a>
              </div>
              <div className="cu-hero-edition">
                <span>INDEPENDENT VISUAL STUDY</span>
                <span>VOL. 01 — 2026</span>
              </div>
            </div>
            <div className="cu-stage">
              <div className="cu-stage-atmosphere" />
              <div className="cu-stage-top">
                <span>
                  <i />
                  SPECTRUM / 001
                </span>
                <Icon name="spark" />
              </div>
              <div className="cu-stage-photo">
                <BrandImage
                  src={brand.features}
                  width={1920}
                  height={1280}
                  alt="Fotografía de referencia con reflejos cromáticos sobre fondo negro"
                  priority
                  sizes="(max-width:980px) 100vw, 55vw"
                />
              </div>
              <div className="cu-chrome-ring" aria-hidden="true" />
              <div className="cu-stage-coordinate">41° / VISUAL FREQUENCY</div>
              <div className="cu-floating-label">
                <span>FULL SPECTRUM</span>
                <strong>Fuera de lo ordinario.</strong>
                <div>
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="cu-stage-bottom">
                <span>COLOR. MATERIAL. ATTITUDE.</span>
                <span>↗</span>
              </div>
            </div>
          </section>
          <div className="cu-strip" aria-hidden="true">
            <span>CHROMATIC</span>
            <Icon name="spark" />
            <span>UNDERGROUND</span>
            <Icon name="spark" />
            <span>PACKMAN</span>
            <Icon name="spark" />
            <span>NOT ORDINARY</span>
          </div>
          <section
            className="cu-manifesto cu-container cu-reveal"
            id="identidad"
          >
            <div className="cu-manifesto-heading">
              <p className="cu-kicker">01 / EL ADN VISUAL</p>
              <h2>
                La identidad
                <br />
                no se explica.
                <br />
                <span>Se reconoce.</span>
              </h2>
            </div>
            <div className="cu-manifesto-copy">
              <p>
                El personaje. El packaging. La energía del color. Packman tiene
                un lenguaje propio. Aquí lo llevamos a otra dimensión.
              </p>
              <p>
                Grafito como lienzo. Reflejos cromáticos como firma. Una
                exploración donde la precisión del diseño se encuentra con el
                pulso de la calle.
              </p>
              <div className="cu-spectrum">
                <span />
                <span />
                <span />
                <span />
                <span />
                <div>
                  FIVE TONES.
                  <br />
                  ONE ATTITUDE.
                </div>
              </div>
            </div>
          </section>
          <section className="cu-editorial cu-container cu-reveal">
            <div className="cu-editorial-art">
              <BrandImage
                src={brand.hero}
                alt="Ilustraciones y packaging multicolor del universo Packman"
                width={2000}
                height={2000}
                sizes="(max-width:600px) 90vw, 55vw"
              />
              <div className="cu-editorial-overlay">
                <span>THE VISUAL LANGUAGE</span>
                <strong>Bold by nature.</strong>
                <span>PACKMAN / ARCHIVE</span>
              </div>
            </div>
            <div className="cu-editorial-side">
              <p className="cu-kicker">DEL OBJETO AL UNIVERSO</p>
              <h2>
                Todo empieza
                <br />
                en un <span>detalle.</span>
              </h2>
              <p>
                Color, ilustración y textura. Cada referencia aporta una pieza a
                una identidad imposible de confundir.
              </p>
              <div className="cu-editorial-stat">
                <strong>08</strong>
                <div>
                  REFERENCIAS
                  <br />
                  UN MISMO UNIVERSO
                </div>
              </div>
              <a href="#galeria" className="cu-text-link">
                Entrar en el archivo <Icon name="arrow" />
              </a>
            </div>
          </section>
          <section className="cu-gallery-section" id="galeria">
            <div className="cu-container">
              <div className="cu-section-heading cu-reveal">
                <div>
                  <p className="cu-kicker">02 / ARCHIVO CROMÁTICO</p>
                  <h2>
                    Un color.
                    <br />
                    Otra <span>frecuencia.</span>
                  </h2>
                </div>
                <p>
                  Packaging y gráfica. Ocho referencias,
                  <br />
                  cada una con su propia firma visual.
                  <br />
                  <span>Solo diseño. Sin venta.</span>
                </p>
              </div>
              <ChromaticGallery />
              <div className="cu-gallery-note">
                <Icon name="layers" />
                <p>
                  Referencias gráficas de la marca · Sin precios ni funciones de
                  compra
                </p>
                <span>ARCHIVE / 01—08</span>
              </div>
            </div>
          </section>
          <section className="cu-principles cu-container cu-reveal">
            <div className="cu-section-heading">
              <div>
                <p className="cu-kicker">03 / DISEÑO CON INTENCIÓN</p>
                <h2>
                  Más presencia.
                  <br />
                  Menos <span>ruido.</span>
                </h2>
              </div>
              <p>
                Experimental en la forma.
                <br />
                Preciso en cada decisión.
              </p>
            </div>
            <div className="cu-principles-grid">
              {[
                {
                  n: "01",
                  icon: "type" as const,
                  title: "La forma tiene voz.",
                  body: "Tipografía editorial, escala contundente y espacio para que cada idea respire.",
                },
                {
                  n: "02",
                  icon: "layers" as const,
                  title: "Profundidad, sin peso.",
                  body: "Vidrio oscuro, reflejos suaves y capas que dan dimensión a la experiencia.",
                },
                {
                  n: "03",
                  icon: "screen" as const,
                  title: "El ritmo es tuyo.",
                  body: "Navegación clara y movimiento sutil. La misma intención en cada pantalla.",
                },
              ].map((item) => (
                <article key={item.n}>
                  <div>
                    <span>{item.n}</span>
                    <Icon name={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="cu-statement cu-container cu-reveal">
            <div className="cu-statement-aura" aria-hidden="true" />
            <p className="cu-kicker">MISMA MARCA. OTRA DIMENSIÓN.</p>
            <h2>
              La diferencia
              <br />
              <span>se siente.</span>
            </h2>
            <Link href="/original" className="cu-button cu-button-primary">
              Comparar con el original <Icon name="arrow" />
            </Link>
            <span className="cu-statement-mark" aria-hidden="true">
              ↗
            </span>
            <p className="cu-statement-bottom">
              CHROMATIC UNDERGROUND / INDEPENDENT CONCEPT
            </p>
          </section>
          <section className="cu-faq cu-container cu-reveal" id="faq">
            <div>
              <p className="cu-kicker">04 / SIN LETRA PEQUEÑA</p>
              <h2>
                El contexto.
                <br />
                <span>Bien claro.</span>
              </h2>
              <p>
                Una propuesta visual independiente.
                <br />
                Las respuestas, sin rodeos.
              </p>
            </div>
            <ChromaticFaq />
          </section>
        </main>
        <footer className="cu-footer" id="demo">
          <div className="cu-container">
            <div className="cu-footer-top">
              <Link href="/redesign" aria-label="Packman, inicio de la demo">
                <BrandLogo />
              </Link>
              <p>
                Different frequency.
                <br />
                <span>Same identity.</span>
              </p>
              <a href="#inicio">
                Volver arriba <span>↑</span>
              </a>
            </div>
            <div className="cu-footer-word" aria-hidden="true">
              PACKMAN
            </div>
            <div className="cu-footer-bottom">
              <p>
                Demo no oficial · Sin afiliación comercial
                <br />
                Sin compras, pagos ni carrito.
              </p>
              <span>CHROMATIC UNDERGROUND — VOL. 01</span>
              <nav aria-label="Comparar versiones">
                <Link href="/original">Original</Link>
                <Link href="/redesign" aria-current="page">
                  Rediseño ↗
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </ChromaticMotion>
    </div>
  );
}
