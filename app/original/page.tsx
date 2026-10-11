import type { Metadata } from "next";
import { DemoNav } from "@/components/demo-nav";
import { SiteNav } from "@/components/site-nav";
import { BrandImage } from "@/components/brand-image";
import { DemoFaq } from "@/components/demo-faq";
import { Icon, type IconName } from "@/components/icons";
import { brand, referenceAssetsAuthorized, visuals } from "@/lib/brand";
export const metadata: Metadata = {
  title: "Portada de referencia · Packman / Demo no oficial",
};
const features: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "layers",
    title: "Estructura y composición original.",
    body: "Una portada organizada por bloques: presentación, características, identidad, galería y contenido editorial.",
  },
  {
    icon: "spark",
    title: "Identidad visual de la marca",
    body: "El azul grisáceo, el verde menta y los tonos crema definen esta referencia. Las fotografías aportan contraste y color al conjunto.",
  },
  {
    icon: "type",
    title: "Tipografía y personalidad",
    body: "Los títulos altos y condensados de Oswald se combinan con el estilo redondeado de Nunito en los textos de la portada.",
  },
  {
    icon: "screen",
    title: "Adaptación a cada pantalla",
    body: "La composición pasa de cuatro columnas a bloques apilados, siguiendo los puntos de adaptación de la referencia.",
  },
];
export default function Original() {
  return (
    <div className="original-page">
      <DemoNav current="original" />
      <SiteNav variant="original" />
      <main id="contenido">
        {!referenceAssetsAuthorized && (
          <div className="asset-notice">
            HTML y estilos públicos verificados. Logotipo y fotografías
            pendientes de permiso; los recuadros son marcadores, no imágenes de
            la web original.
          </div>
        )}
        <section
          className="original-hero"
          id="inicio"
          style={
            referenceAssetsAuthorized
              ? { backgroundImage: `url(${brand.hero})` }
              : undefined
          }
        >
          <div className="original-container original-hero-panel">
            <h1>Packman Vape: La Nueva Generación de Vape THC en España</h1>
            <div className="original-hero-description">
              <p>
                Bienvenido al mundo de Packman Vape, un referente dentro de la
                comunidad del vape y los productos relacionados con THC.
                Descubre información completa sobre Packman THC Vape,
                características, formatos disponibles y todo lo que necesitas
                saber antes de elegir tu experiencia de vapeo.
              </p>
              <p>
                Nuestra plataforma está creada para usuarios que buscan
                información clara, actualizada y especializada sobre vape THC
                Spain, tendencias del mercado y soluciones adaptadas a la
                comunidad cannábica moderna.
              </p>
            </div>
            <a href="#galeria" className="original-button">
              Explorar la referencia
            </a>
          </div>
        </section>
        <section
          className="original-features"
          style={
            referenceAssetsAuthorized
              ? { backgroundImage: `url(${brand.features})` }
              : undefined
          }
        >
          <div className="original-container original-feature-heading">
            <h2>Lo que ofrecemos</h2>
          </div>
          <div className="original-container original-feature-grid">
            {features.map((feature) => (
              <article key={feature.title}>
                <Icon name={feature.icon} />
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="original-about" id="identidad">
          <div className="original-about-copy">
            <h2>¿Qué es Packman Vape?</h2>
            <p>
              En los últimos años, el mercado del vape ha evolucionado
              rápidamente, creando nuevas formas para que los usuarios exploren
              diferentes experiencias. Dentro de esta evolución aparece vaper
              thc, un nombre cada vez más buscado por personas interesadas en
              dispositivos modernos, prácticos y relacionados con la cultura del
              vape.
            </p>
            <p>
              Cuando los usuarios buscan términos como packman vape, packman thc
              vape o packman vape thc, normalmente buscan conocer más sobre sus
              características, funcionamiento y disponibilidad.
            </p>
            <p>
              Nuestro objetivo es ofrecer información detallada para ayudar a
              los usuarios a comprender mejor esta categoría.
            </p>
          </div>
          <div className="original-about-image">
            <BrandImage
              src={brand.about}
              alt="Composición fotográfica de la portada original"
              width={1024}
              height={985}
            />
          </div>
        </section>
        <section
          className="original-gallery-section"
          id="galeria"
          aria-label="Referencias gráficas de la portada"
        >
          <div className="original-container original-gallery">
            {visuals.map((item) => (
              <article key={item.id}>
                <BrandImage
                  src={item.image}
                  width={300}
                  height={300}
                  alt={`Diseño de referencia: ${item.title}`}
                  sizes="(max-width: 980px) 40vw, 240px"
                />
                <h3>{item.title}</h3>
                <span>Referencia visual · Sin venta</span>
              </article>
            ))}
          </div>
        </section>
        <section className="original-editorial">
          <div className="original-container">
            <h2>Packman THC Vape: Diseño, Tecnología y Experiencia</h2>
            <h3>Una identidad dentro de la cultura visual del vape</h3>
            <p>
              Este bloque conserva el formato editorial de la referencia
              pública: títulos condensados, párrafos amplios y una jerarquía
              visual marcada.
            </p>
            <h3>Diseño compacto</h3>
            <p>
              Los objetos y sus envases forman parte de la composición. En esta
              demo se estudian únicamente como referencias gráficas.
            </p>
            <h3>Tecnología de presentación</h3>
            <p>
              La reconstrucción se realiza con Next.js, TypeScript y Tailwind
              CSS, de forma independiente de WordPress, Divi y WooCommerce.
            </p>
            <h3>Experiencia visual</h3>
            <p>
              El color, la tipografía y las fotografías permiten reconocer la
              estructura de la portada que se tomó como referencia.
            </p>
            <h2>¿Por qué una nueva perspectiva de Packman Vape?</h2>
            <h3>La evolución de una identidad</h3>
            <p>
              La versión moderna conserva los elementos reconocibles de la marca
              y reorganiza la información para facilitar la lectura:
            </p>
            <ul>
              <li>Tipografía con presencia</li>
              <li>Jerarquías claras</li>
              <li>Espacios más equilibrados</li>
              <li>Navegación adaptable</li>
              <li>Contenido centrado en el diseño</li>
            </ul>
            <p>
              Ambas versiones permiten comparar el tratamiento visual de una
              misma identidad sin realizar operaciones comerciales.
            </p>
            <h2>Guía visual para explorar la referencia</h2>
            <h3>Detalles que construyen el conjunto</h3>
            <p>La apariencia de la portada se define por distintos aspectos:</p>
            <h3>1. Paleta e identidad</h3>
            <ul>
              <li>Azul grisáceo como base</li>
              <li>Verde menta en los acentos</li>
              <li>Crema en el texto</li>
              <li>Fondos oscuros y fotografía</li>
            </ul>
            <h3>2. Composición y ritmo</h3>
            <p>
              La distribución original alterna bloques a todo el ancho con
              columnas de contenido más estrechas.
            </p>
            <ul>
              <li>Presentación centrada</li>
              <li>Cuatro columnas de características</li>
              <li>Galería en dos filas</li>
            </ul>
            <h3>3. Alcance de esta demo</h3>
            <p>
              Los textos comerciales, precios y datos de contacto se han
              sustituido por información sobre el estudio visual. No se han
              incorporado funciones de comercio electrónico.
            </p>
          </div>
        </section>
        <section className="original-panorama">
          <BrandImage
            src={brand.panorama}
            alt="Fotografía panorámica de la identidad Packman presente en la portada"
            width={2048}
            height={2048}
            sizes="100vw"
          />
          <div className="original-reading">
            <h2>Packman Vape España: una referencia de identidad visual</h2>
            <p>
              La portada pública combina fotografía, tipografía e ilustración
              para crear una estética reconocible.
            </p>
            <p>Las decisiones visuales de esta referencia:</p>
            <p>Fondos fotográficos</p>
            <p>Títulos condensados</p>
            <p>Acentos de color menta</p>
            <p>
              se mantienen como punto de partida para comparar las dos versiones
              de la demo.
            </p>
            <p>
              El rediseño reorganiza el contenido y mejora el contraste sin
              abandonar estos elementos.
            </p>
            <h2>Información clara dentro de una demo independiente</h2>
            <p>
              Este proyecto permite estudiar y comparar dos tratamientos de una
              misma identidad visual.
            </p>
            <h3>Referencia comprobada</h3>
            <p>
              La estructura y los estilos proceden del HTML público obtenido del
              sitio.
            </p>
            <h3>Contenido de demostración</h3>
            <p>
              Los bloques comerciales se han adaptado a contenido visual sin
              venta.
            </p>
            <h3>Comparación directa</h3>
            <p>Utiliza la barra superior para pasar de una versión a otra.</p>
            <a className="original-button" href="/redesign">
              Ver rediseño
            </a>
          </div>
        </section>
        <section className="original-faq original-container" id="faq">
          <h2>Preguntas sobre esta demo</h2>
          <DemoFaq />
        </section>
      </main>
      <footer className="original-footer" id="demo">
        <div className="original-container original-footer-grid">
          <BrandImage
            src={brand.footer}
            alt="Imagen de marca usada como referencia en el pie original"
            width={539}
            height={569}
          />
          <div>
            {[
              {
                icon: "message" as const,
                title: "Demo no oficial",
                body: "Estudio visual independiente. Sin afiliación con la marca.",
              },
              {
                icon: "pin" as const,
                title: "Solo referencia",
                body: "Una reconstrucción visual basada en la portada pública.",
              },
              {
                icon: "mail" as const,
                title: "Sin comercio",
                body: "No hay compras, pagos, carrito ni contactos de venta.",
              },
            ].map((item) => (
              <div className="original-footer-item" key={item.title}>
                <Icon name={item.icon} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
