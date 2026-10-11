# Packman V3 — contenido y revisión

V3 continúa desde `244694d` en una nueva rama, `codex/packman-v3-reference`. Retira de la interfaz el nombre del concepto visual, los slogans y las descripciones artísticas. Conserva el logotipo, las fotografías autorizadas, el fondo cromático con scroll, las tarjetas, el cristal oscuro, el menú sticky y la tipografía aprobada del footer.

La implementación es una demo informativa no oficial. No reconstruye la promoción comercial de productos con THC, instrucciones de compra, afirmaciones de efectos, precios, disponibilidad ni canales de venta. Conserva contenido educativo y referencias de identificación; no debe presentarse como reproducción íntegra de la tienda original.

## Comparación con las fuentes

Se consultaron de nuevo mediante GET de lectura la portada, Shop, Sobre nosotros, FAQ, Contacto y las ocho fichas. Las trece páginas respondieron HTTP 200. El [manifiesto V3](v3-source-manifest.json) registra URLs, resultados, bytes y hashes SHA-256. No se importan HTML ejecutable, WordPress, Divi, WooCommerce, scripts, cookies ni widgets.

| Ruta                              | Contenido contrastado y adaptación                                                                                                                                                                                                                                   |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/redesign`                       | Marca Packman Vape, fotografía de Mystery OG y extracto educativo de la portada. Catálogo de ocho referencias, extracto sobre transparencia de Sobre nosotros y FAQ educativo. Se retiran bloques duplicados, slogans y presentación del diseño.                     |
| `/redesign/shop`                  | Selección de ocho nombres e imágenes reales; las cajas aparecen primero, como en el catálogo público. Búsqueda local por nombre o categoría, filtros combinables y estado vacío con restablecimiento. No reproduce el catálogo comercial completo de 34 referencias. |
| `/redesign/shop/[slug]`           | Ocho fichas estáticas. Nombre publicado, fotografía primaria, marca y categoría de la fuente; sin descripciones artísticas ni especificaciones inventadas. Otras referencias, breadcrumbs y vuelta al catálogo.                                                      |
| `/redesign/sobre-nosotros`        | Introducción, historia y principios educativos de la página pública. Los párrafos seleccionados y las tres descripciones de principios se reproducen literalmente, reorganizados con fotografía y jerarquía responsive.                                              |
| `/redesign/faq`                   | Cinco preguntas: cuatro del apartado educativo de Sobre nosotros y una definición neutral de FAQ. Las respuestas reproducen texto literal; la definición usa solo la primera frase, sin mensajes promocionales posteriores. Acordeones HTML nativos.                 |
| `/redesign/contacta-con-nosotros` | Función de contacto presentada con formulario simulado local. No se incorporan los teléfonos ni direcciones contradictorios de la fuente, ni se crean canales de venta. Los campos están desactivados sin JavaScript.                                                |
| `/original` y `/`                 | Conservados. La referencia y el selector quedan separados de la navegación principal.                                                                                                                                                                                |

Las preguntas educativas seleccionadas son: objetivo principal, significado del término vaper THC, importancia de la educación, tipo de información y calidad del contenido. El aviso no oficial permanece en la franja superior y el pie, sin ocupar los titulares.

## Identificación de referencias

| Nombres publicados                                             | Categoría publicada   | Cantidad en la demo |
| -------------------------------------------------------------- | --------------------- | ------------------- |
| Mystery OG, Granddaddy Urkle, Cereal Skunk, Berry Payton       | Packman Live Resin    | 4                   |
| Mango Tango                                                    | packman 2g vape       | 1                   |
| 10 Pack Variety Box, 50 Pack Variety Box, 100 Pack Variety Box | packman 2g disposable | 3                   |

Las categorías son etiquetas de la taxonomía pública. No acreditan composición, concentración, efectos, seguridad ni especificaciones técnicas. Los nombres de las cajas se mantienen como títulos publicados, sin convertirlos en denominaciones artísticas.

La ficha original de **50 Pack Variety Box**, que devolvía 503 en V2, respondió 200 en esta revisión. Se actualiza su estado de contraste y se incorpora su fotografía primaria de 842 × 956 px, en lugar de la miniatura de 300 px. La URL y el hash del recurso constan en el manifiesto.

## Comprobaciones

- `npm run build` y `npm run typecheck`: correctos.
- `npx playwright test`: **80 pruebas aprobadas**, sin omitidas. Suite en escritorio 1440 × 1000, tablet 768 × 1024, móvil 390 × 844 y móvil estrecho 320 × 740.
- Rutas principales, ocho fichas y 404; imágenes y fuentes locales, sin fallos de página ni desbordamiento horizontal.
- Cinco enlaces del menú, página activa, menú móvil, Escape, foco y cabecera sticky.
- Búsqueda con espacios, mayúsculas y diacríticos; intersección con categorías; cero resultados, restablecimiento y navegación con teclado.
- Ausencia de slogans del concepto en el contenido visible y contraste de extractos educativos con el HTML público.
- Formulario sin envío ni almacenamiento, campos desactivados sin JavaScript; navegación y FAQ nativo sin JavaScript.
- Movimiento reducido y evolución del fondo con scroll.
- Captura de `/original` idéntica antes y después de visitar el rediseño en los cuatro tamaños; sus archivos, estilos globales, componentes compartidos, datos y recursos originales sin cambios desde V2.

Durante la validación se corrigió una superposición del menú de fallback sobre los acordeones sin JavaScript: ahora la navegación ocupa espacio en el flujo de la página. No se fuerza el clic en las pruebas.

## Optimización

El rediseño utiliza derivados WOFF2 locales: Space Grotesk mantiene el mapa de glifos y las métricas horizontales de la fuente aprobada; Open Sans usa un subconjunto latino y conserva la fuente completa como fallback para otros alfabetos. Sus licencias y hashes acompañan los recursos. La imagen principal se solicita con prioridad alta y un tamaño responsive ajustado al encuadre. También se alinean los nombres accesibles de tarjetas y logotipo con sus etiquetas visibles.

Medición de laboratorio en la portada con Lighthouse sobre el servidor local de producción: rendimiento **98/100 en escritorio** y **88/100 en móvil simulado**; accesibilidad automatizada **100/100** en ambos. La medición móvil inicial era 70/100 antes de optimizar fuentes y prioridad de imagen. [Los indicadores](v3-performance.json) son locales y no garantizan tiempos en Vercel ni sustituyen una evaluación manual de accesibilidad.

## Capturas

Capturas completas de escritorio y móvil, obtenidas desde la compilación de producción local con fotografías y fuentes cargadas:

| Página         | Escritorio                                  | Móvil                                      |
| -------------- | ------------------------------------------- | ------------------------------------------ |
| Home           | [Ver](screenshots/v3/home-desktop.png)      | [Ver](screenshots/v3/home-mobile.png)      |
| Shop           | [Ver](screenshots/v3/shop-desktop.png)      | [Ver](screenshots/v3/shop-mobile.png)      |
| Sobre nosotros | [Ver](screenshots/v3/about-desktop.png)     | [Ver](screenshots/v3/about-mobile.png)     |
| FAQ            | [Ver](screenshots/v3/faq-desktop.png)       | [Ver](screenshots/v3/faq-mobile.png)       |
| Contacto       | [Ver](screenshots/v3/contact-desktop.png)   | [Ver](screenshots/v3/contact-mobile.png)   |
| Mystery OG     | [Ver](screenshots/v3/reference-desktop.png) | [Ver](screenshots/v3/reference-mobile.png) |
| Variety Box 50 | [Ver](screenshots/v3/box-50-desktop.png)    | [Ver](screenshots/v3/box-50-mobile.png)    |

## Revisar en Vercel

La nueva Pull Request apunta a `main`, sin fusión automática. Es acumulativa: incluye V1/V2 porque la PR anterior sigue sin fusionar, más esta corrección V3. Los commits previos y la PR anterior se conservan.

La integración existente de Vercel genera una Preview de la nueva rama. Abre el enlace **Visit Preview** del comentario/check de Vercel y añade `/redesign`, `/original` o una ruta interior. Si la protección del proyecto lo solicita, inicia sesión en Vercel con acceso al proyecto. No hay que fusionar para revisar, ni configurar variables de entorno.
