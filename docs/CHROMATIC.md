# Chromatic Underground

La nueva dirección visual se aplica exclusivamente a `/redesign`. `/original`, los componentes compartidos y los estilos globales conservan su contenido anterior.

## Dirección visual

- Base carbón y grafito, con violeta, magenta, cyan, naranja y pequeños acentos lima.
- Hero editorial con fotografía autorizada, atmósfera cromática y un anillo realizado en CSS con reflejos metálicos.
- Cabecera de vidrio oscuro, navegación móvil y comparación directa con `/original`.
- Composiciones editoriales, archivo de ocho referencias con superficies por variante y filtros accesibles.
- Preguntas desplegables y cierre tipográfico con acabado cromático.
- Entradas suaves, reveals y profundidad de puntero moderada. Se respeta `prefers-reduced-motion`; el contenido y los acordeones permanecen accesibles sin JavaScript.

Los avisos de demo no oficial permanecen visibles. No hay precios, enlaces comerciales, formularios de compra, carrito ni pagos. Se reutilizan las imágenes ya autorizadas; no se modificaron esos archivos.

## Organización

La página, los componentes y el CSS están en `app/redesign/`. Todos los selectores del nuevo CSS están delimitados por `.chromatic-page`. La fuente display Space Grotesk se sirve localmente desde `public/redesign/fonts/`, con su licencia SIL Open Font License incluida.

Fuente: [Google Fonts / Space Grotesk](https://github.com/google/fonts/tree/main/ofl/spacegrotesk). El texto conserva Open Sans, ya incorporada al proyecto. No se añadieron dependencias de animación ni servicios externos.

El proyecto conserva la configuración Next.js compatible con Vercel. No se necesitan variables de entorno para la demo. Para probarlo localmente: `npm ci`, `npm run dev` y visitar `/redesign`. Para producción: `npm run build` y `npm start`.

## Validación

Comprobaciones del 11 de octubre de 2026:

- `npm run build`: compilación correcta y ambas rutas prerenderizadas.
- `npm run typecheck`: sin errores.
- `npm run test:e2e`: **28 pruebas aprobadas** en Chromium, con anchos de 1440, 768, 390 y 320 px.
- Recursos cargados, sin desbordamiento horizontal; filtros, navegación, menú móvil, Escape y acordeones funcionales.
- Movimiento reducido y contenido sin JavaScript comprobados.
- Capturas del primer viewport de `/original` idénticas antes y después de visitar `/redesign` mediante navegación del cliente, en los cuatro tamaños. Se verifica además que los archivos de `/original` y los estilos compartidos no cambiaron respecto de `main`.

No se ha modificado el sitio real ni se ha desplegado esta propuesta desde el entorno de trabajo.

## Capturas de producción

Las capturas completas se generaron tras cargar las fuentes e imágenes y recorrer la página para activar las entradas al hacer scroll.

- [Escritorio, 1440 px](screenshots/chromatic-desktop.png)
- [Móvil, 390 px](screenshots/chromatic-mobile.png)
- [Detalle del archivo cromático](screenshots/chromatic-gallery.png)
