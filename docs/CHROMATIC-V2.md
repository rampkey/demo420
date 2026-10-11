# Chromatic Underground V2 — entrega y validación

V2 continúa desde el commit `8e577d2` de `codex/chromatic-underground`. La portada pasa de explicar el rediseño a presentar referencias e información de Packman en una demo no oficial multipágina. Se mantienen las tarjetas, las superficies translúcidas, los acentos cromáticos, las animaciones discretas y el wordmark del footer aprobado.

## Rutas

| Página | Ruta |
| --- | --- |
| Home | `/redesign` |
| Catálogo informativo | `/redesign/shop` |
| Ocho fichas informativas | `/redesign/shop/[slug]` |
| Sobre nosotros | `/redesign/sobre-nosotros` |
| Preguntas frecuentes | `/redesign/faq` |
| Contacto simulado | `/redesign/contacta-con-nosotros` |
| Comparación independiente, conservada | `/` |
| Referencia, conservada | `/original` |

Las páginas comparten una cabecera sticky, menú accesible, franja discreta de demo, fondo cromático continuo y footer. La comparación queda fuera de la navegación principal. Todo el catálogo es informativo: no hay precios, disponibilidad, carrito, pedidos, pagos ni conexiones con vendedores.

## Contenidos y límites de contraste

Se inspeccionó el HTML público de Shop, Sobre nosotros, FAQ, Contacto y las fichas de las referencias. Las nuevas fotografías de mayor resolución proceden de los recursos primarios de esas fichas y permanecen locales. El [manifiesto de fuentes](v2-source-manifest.json) conserva los resultados HTTP, los hashes y los orígenes.

Sobre nosotros recoge la misión educativa y la orientación hacia información, transparencia y comunidad. FAQ selecciona conceptos generales existentes y las preguntas educativas de Sobre nosotros; no copia instrucciones de compra, afirmaciones sanitarias ni políticas comerciales o legales.

El teléfono y la dirección del sitio contienen datos contradictorios. La página de contacto los marca como pendientes de confirmación; no se inventa un dato alternativo. El formulario valida campos y genera una vista previa exclusivamente en memoria del navegador. No transmite, persiste ni conecta con Packman.

La ficha original de 50 Pack Variety Box respondió HTTP 503. Su nombre e imagen sí se identificaron en el catálogo público. Su ficha en la demo muestra expresamente que no se pudo contrastar el detalle. Las demás fichas también se limitan a identificación y descripción visual: no certifican composición, efectos, concentraciones ni datos técnicos.

## Comprobaciones

Comprobaciones del 11 de octubre de 2026:

- `npm run build`: correcto; cinco páginas principales y ocho fichas prerenderizadas.
- `npm run typecheck`: sin errores.
- `npm run test:e2e`: **72 pruebas aprobadas**, sin omitidas, en Chromium.
- Cuatro tamaños: escritorio 1440 × 1000, tablet 768 × 1024, móvil 390 × 844 y móvil estrecho 320 × 740.
- Imágenes cargadas, recursos locales, sin errores de página, respuestas fallidas ni desbordamiento horizontal en las rutas inspeccionadas.
- Navegación completa, activo de página y activo Shop en fichas; menú, Escape, foco, cierre al navegar y cabecera sticky.
- Filtros de 8 / 5 / 3 referencias, enlaces a fichas, los ocho slugs disponibles y respuesta 404 para un slug desconocido.
- Acordeones, contenido y navegación sin JavaScript; formulario desactivado sin JavaScript.
- Validación del formulario, vista previa, cero peticiones durante su simulación y ausencia de almacenamiento local o de sesión.
- Fondo que evoluciona con el scroll y permanece estable con movimiento reducido.
- Capturas del primer viewport de `/original` idénticas antes y después de visitar V2, en los cuatro tamaños.
- Archivos de `/original`, CSS global, componentes compartidos, datos originales y recursos `public/reference/` sin cambios respecto a V1.

Las comprobaciones se realizaron sobre producción local. No constituyen una auditoría completa de accesibilidad ni cobertura de todos los navegadores. La web real no se modificó.

## Capturas

Capturas completas obtenidas de la compilación de producción, tras cargar las fuentes, recorrer las secciones y cargar las imágenes diferidas.

| Página | Escritorio | Móvil |
| --- | --- | --- |
| Home | [Captura](screenshots/v2/home-desktop.png) | [Captura](screenshots/v2/home-mobile.png) |
| Shop | [Captura](screenshots/v2/shop-desktop.png) | [Captura](screenshots/v2/shop-mobile.png) |
| Sobre nosotros | [Captura](screenshots/v2/about-desktop.png) | [Captura](screenshots/v2/about-mobile.png) |
| FAQ | [Captura](screenshots/v2/faq-desktop.png) | [Captura](screenshots/v2/faq-mobile.png) |
| Contacto | [Captura](screenshots/v2/contact-desktop.png) | [Captura](screenshots/v2/contact-mobile.png) |
| Mystery OG | [Captura](screenshots/v2/reference-desktop.png) | [Captura](screenshots/v2/reference-mobile.png) |

## Vercel y adaptación futura

Las páginas usan el layout y los recursos locales del proyecto. No se necesitan variables de entorno, base de datos, WordPress ni WooCommerce. La integración de GitHub existente puede crear una Preview de la rama, sin fusionar la PR en `main`. La protección del proyecto puede pedir iniciar sesión.

El [sistema de diseño](design-system.md) documenta tokens, tipografía, componentes, responsive, motion y una correspondencia conceptual con Divi 4.27.2. La adaptación a WordPress requiere construir sus plantillas y los módulos o estilos personalizados; el código Next.js no puede importarse directamente en Divi.
