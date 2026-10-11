# Packman — Chromatic Underground V2

Especificación del sistema visual para la demo informativa multipágina. La implementación es Next.js, TypeScript y Tailwind CSS, con CSS local para el lenguaje cromático. La propuesta conserva los acabados de Chromatic Underground V1 y el tratamiento tipográfico del footer. No modifica WordPress ni incorpora funciones de venta.

## Tokens y tipografía

La fuente de verdad es `app/redesign/tokens.css`. Los tokens se declaran bajo `.chromatic-page.cu-v2`; no se cambia `:root` ni el CSS de `/original`.

| Token                  | Valor                     | Uso                          |
| ---------------------- | ------------------------- | ---------------------------- |
| `--cu-bg`              | `#08090C`                 | Base carbón                  |
| `--cu-panel`           | `#101116`                 | Superficies                  |
| `--cu-text`            | `#F2F0F7`                 | Texto principal              |
| `--cu-muted`           | `#B1ACBF`                 | Texto secundario             |
| `--cu-violet`          | `#AD8CFF`                 | Identidad y foco             |
| `--cu-magenta`         | `#F281CA`                 | Gradientes y ambiente        |
| `--cu-cyan`            | `#80DEEC`                 | Ambiente azul/cian           |
| `--cu-orange`          | `#FFAE79`                 | Ambiente cálido              |
| `--cu-acid`            | `#C6EE83`                 | Acentos pequeños             |
| `--cu-line`            | `#FFFFFF1C`               | Bordes discretos             |
| `--cu-radius-sm/md/lg` | `8 / 16 / 24 px`          | Controles, tarjetas, bloques |
| `--cu-shadow`          | `0 20px 70px #0005`       | Profundidad                  |
| `--cu-page-width`      | `1320 px`                 | Contenedor máximo            |
| `--cu-section-space`   | `clamp(64px, 8vw, 120px)` | Ritmo vertical               |

Display: **Space Grotesk**, servida localmente como `CU Grotesk`, pesos 300–700. Es la misma familia que el footer aprobado; Home usa mayúsculas y peso 700, títulos interiores 700 y subtítulos 600. El footer conserva peso 600, interletraje `-0.065em`, escala `clamp(80px, 17vw, 250px)` y su gradiente metálico original.

Texto: **Open Sans**, servida localmente, 14–16 px para lectura y altura de línea 1.8–1.95. La navegación principal usa Space Grotesk a 15 px en escritorio y 19–20 px en el menú desplegable. Los textos de identificación son secundarios; no sustituyen a los nombres y enlaces legibles.

Las licencias OFL acompañan a las fuentes. El logotipo Packman sigue siendo el recurso autorizado existente; la tipografía no intenta sustituirlo ni recrearlo.

## Materialidad y composición

- Vidrio oscuro: capas `#111119D9`, gradientes translúcidos, `backdrop-filter: blur(22px)` y bordes blancos de baja opacidad. El fondo oscuro sólido mantiene la legibilidad si el navegador no soporta blur.
- Acentos: violeta/magenta en titulares, tonos individuales en referencias y cian/lima limitados a detalles. Se evita colorear cada elemento de navegación.
- Tarjetas: superficie oscura, fotografía sobre un panel claro teñido, halo suave y órbita elíptica. La mezcla CSS no altera el archivo de imagen.
- Hero: fotografía Mystery OG de 1000 × 1000 px, panel inclinado, anillo CSS con acabado metálico y etiqueta de ficha informativa. No se inventan partes del producto ni sus propiedades.
- Ritmo: Home combina un hero en dos columnas, tres referencias destacadas, un bloque editorial asimétrico, catálogo y FAQ. Los interiores utilizan una cabecera editorial común y cuerpos adaptados a cada función.

## Componentes y datos

| Elemento                                  | Fuente de implementación                        |
| ----------------------------------------- | ----------------------------------------------- |
| Estructura común, franja, header y footer | `app/redesign/layout.tsx`                       |
| Navegación y coincidencia de ruta activa  | `_data/navigation.ts`, `_components/header.tsx` |
| Catálogo y estado de contraste            | `_data/catalog.ts`                              |
| Preguntas y principios de marca           | `_data/content.ts`                              |
| Tarjeta reutilizable                      | `_components/reference-card.tsx`                |
| Filtros y recuento accesible              | `_components/gallery.tsx`                       |
| Cabecera interior                         | `_components/page-heading.tsx`                  |
| Acordeones nativos                        | `_components/faq.tsx`                           |
| Ambiente, reveals y profundidad           | `_components/motion.tsx`                        |
| Simulación de contacto                    | `_components/contact-form.tsx`                  |
| Plantilla de ficha informativa            | `shop/[slug]/page.tsx`                          |

Cada referencia tiene un slug estable, nombre contrastado, categoría de presentación, imagen con dimensiones, tono, paleta visual y nivel de contraste. Los colores son observaciones gráficas de la fotografía; no especificaciones del producto. `verification: public-catalog` señala que solo se pudo contrastar la entrada del catálogo. Las ocho fichas se generan durante el build; los slugs desconocidos devuelven 404.

Las imágenes de alta resolución nuevas están en `public/redesign/images/`. Las fotografías anteriores de `/original` permanecen intactas. El manifiesto `v2-source-manifest.json` registra orígenes, dimensiones, hashes y las verificaciones pendientes.

## Responsive y accesibilidad

- Contenedor al 90 %, 89 % en móvil, máximo 1320 px.
- Menú desplegable por debajo de 1121 px, antes de que cinco enlaces puedan amontonarse. Botón con `aria-expanded`, `aria-controls`, Escape y devolución del foco. Se cierra al navegar o pulsar fuera de la cabecera.
- Sin JavaScript, los enlaces móviles se muestran como navegación convencional y la cabecera deja de ser sticky. El contenido y los acordeones siguen disponibles.
- Galería: cuatro columnas grandes, dos por debajo de 1121 px. Destacadas: tres columnas y una por debajo de 801 px.
- Editorial, ficha y contacto se apilan por debajo de 801 px. Formularios a una columna en móvil; tamaño de campo 16 px para evitar zoom automático.
- Filtros con `aria-pressed` y recuento `aria-live`. Tarjetas enlazadas completas, nombres accesibles descriptivos y foco visible.
- FAQ con `details`/`summary`; no necesita una librería ni JavaScript para funcionar.
- Enlace para saltar al contenido, `main` identificable, un H1 por página, navegación por teclado e imágenes con texto alternativo.

La validación automatizada cubre Chromium a 1440, 768, 390 y 320 px. No equivale a una auditoría completa de accesibilidad ni a una prueba de todos los navegadores.

## Movimiento y fondo continuo

Cuatro gradientes radiales fijos forman el ambiente. Un listener pasivo de scroll agenda como máximo una actualización por frame con `requestAnimationFrame`. Se interpolan cuatro opacidades entre cinco escenas: violeta/magenta, cian/azul, naranja/violeta, mezcla suave y cierre oscuro. No hay cambios bruscos de fondo ni listeners que bloqueen el desplazamiento.

Las entradas de sección utilizan `IntersectionObserver` y dejan de observarse al revelarse. La profundidad del hero se limita a ±2 grados y solo responde a un puntero de ratón. No se añaden librerías de animación, canvas ni vídeo automático.

Con `prefers-reduced-motion`, el ambiente permanece estable, se desactivan entradas/transiciones y el hero no se inclina. Sin JavaScript, el contenido está visible y el ambiente utiliza una escena estática. Los listeners y observadores se limpian al abandonar cada ruta.

## Adaptación conceptual a WordPress + Divi 4.27.2

**El código Next.js no se importa directamente en Divi.** La adaptación requiere reproducir las plantillas, trasladar el contenido y escribir los estilos e interacciones necesarios. Estos archivos sirven como especificación y referencia visual.

| Bloque o plantilla      | Base posible en Divi                                    | Trabajo personalizado                                                                                      |
| ----------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Header y footer comunes | Theme Builder, menú WordPress, módulos de imagen/texto  | Barra sticky, activo cromático, menú accesible, gradiente del wordmark y espaciados                        |
| Hero                    | Sección y fila de dos columnas, imagen, texto y botones | Panel inclinado, anillo, mezcla cromática y profundidad moderada                                           |
| Sobre nosotros          | Filas asimétricas, imagen, texto y tarjetas             | Bordes, transparencias, tokens y ajustes responsive                                                        |
| Catálogo informativo    | Plantilla de archivo y consultas de contenido           | Tarjetas, filtros accesibles y fichas enlazadas; desarrollo de módulo o plantilla propia                   |
| Ficha informativa       | Plantilla compartida del Theme Builder                  | Metadatos verificados, paleta, estado de contraste y referencias relacionadas                              |
| FAQ                     | Módulos de acordeón o HTML `details`                    | Jerarquía, foco y comprobación de comportamiento sin JavaScript                                            |
| Contacto                | Maquetación de campos                                   | Simulación local; no usar un módulo que envíe mensajes sin definir previamente una función real autorizada |
| Fondo continuo          | CSS local de la sección común                           | Script pequeño para opacidades, limpieza de listeners y movimiento reducido                                |

El contenido puede organizarse mediante páginas WordPress y referencias como contenido estructurado. Si se usan datos existentes de WooCommerce, esta propuesta solo contempla su presentación informativa: no define ni implementa carrito, checkout, compras o precios. La elección entre un tipo de contenido específico y referencias existentes debe acordarse durante la adaptación real.

Antes de incorporar información nueva hay que contrastar datos técnicos y de contacto, mantener trazabilidad de las fuentes y los permisos de imagen, y revisar cualquier texto comercial, sanitario o legal. Aquí no se han inventado ni reconstruido políticas de ese tipo.

## Publicación y separación

La comparación sigue en `/`, separada de la navegación principal. `/original` conserva archivos, recursos y estilos. La franja de demo y los avisos del footer aparecen en todas las páginas del rediseño. No se afirma que sea la web oficial.

Vercel puede compilar las páginas y fichas estáticas con el preset Next.js, `npm ci` y `npm run build`, sin variables de entorno. Las actualizaciones de la rama de la PR permiten generar una Preview sin fusionar en `main`. La protección de despliegues puede exigir acceso con la cuenta del propietario.

## Continuidad en V3

La denominación Chromatic Underground queda exclusivamente en documentación y nombres internos. La interfaz usa Packman, páginas funcionales, las denominaciones y categorías publicadas de ocho referencias y extractos educativos auténticos. Se eliminan slogans, leyendas de paleta, descripciones artísticas y bloques que explicaban el concepto del rediseño.

La búsqueda funciona exclusivamente en memoria del navegador y se combina con la taxonomía pública de las fichas. Los colores por referencia, materiales, gradientes con scroll y tipografía de `.cu-footer-word` permanecen como recursos visuales. `v3.css` añade ajustes de jerarquía y controles con selectores bajo `.chromatic-page.cu-v3`; `/original` conserva sus archivos y recursos. Véase [PACKMAN-V3.md](PACKMAN-V3.md).
