# Referencia, fidelidad y cambios deliberados

## Fuente comprobada

El 11 de octubre de 2026 la petición HTTPS de lectura a `https://packmanvape.es/` devolvió **HTTP 200** y 454 624 bytes de HTML. Se identificaron Divi 4.27.2, WooCommerce, módulos de la portada, estilos en línea y hojas de estilo públicas. No se hizo ningún cambio en el sitio ni se usaron endpoints de compra, cuentas o administración.

Se inspeccionaron el HTML y el CSS y se renderizó una referencia estática con Chromium a 1440 × 1000 y 390 × 844. Las peticiones de HTML, estilos, imágenes y fuentes se obtuvieron mediante HTTPS con verificación TLS. Chromium no reconocía el certificado del proxy del entorno; se suministraron las respuestas obtenidas con `curl` verificado, sin desactivar la verificación. Se bloquearon scripts y otras peticiones. Se hizo visible el contenido que Divi anima y se fijó el fondo parallax para el estudio estático. Por tanto, estas capturas documentan la apariencia estática, no las animaciones o interacciones del WordPress en vivo.

- [Referencia de escritorio, parte superior](screenshots/reference-desktop.png).
- [Referencia móvil, parte superior](screenshots/reference-mobile.png).
- [Medidas y estilos observados](reference-geometry.json).
- [Origen y huellas de los recursos incorporados](asset-manifest.json).

## Elementos conservados en `/original`

| Elemento             | Referencia y reconstrucción                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------- |
| Paleta               | Azul `#6d8196`, menta `#adebb3`, crema `#fdfbd4`, carbón `#1d2528`                          |
| Encabezado           | 80 px, contenedor al 80 %, máximo 1080 px, logotipo y navegación horizontal                 |
| Presentación         | Fondo fotográfico, panel negro al 53 %, esquinas de 10 px, contenido centrado               |
| Título principal     | Oswald 63 px en escritorio / 40 px en móvil, mayúsculas, interlínea 1,5 y espaciado 0,05 em |
| Párrafos principales | Nunito 20 px; texto y título de presentación tomados del HTML                               |
| Botón                | Borde menta de 10 px, Oswald y texto espaciado                                              |
| Características      | Fondo fotográfico oscuro y cuatro columnas; apiladas en móvil                               |
| Identidad            | Texto a la izquierda, fotografía a la derecha, fondo azul grisáceo                          |
| Galería              | Ocho imágenes de referencia, cuatro columnas en escritorio, dos en móvil                    |
| Editorial            | Bloques largos, títulos Oswald centrados, cuerpo Nunito y listas                            |
| Cierre               | Imagen cuadrada al ancho, lectura de máximo 600 px y pie fotográfico                        |

## Diferencias deliberadas

- Se añade la barra de demo y el selector de versiones. El aviso añade altura al principio de la página.
- “Shop” y los botones a la tienda se sustituyen por navegación interna a la galería visual.
- Se conservan los ocho recursos gráficos, pero se eliminan precios, enlaces a productos, cantidades y opciones de compra. Los títulos de los artículos se acortan para identificar las referencias gráficas.
- Las promesas de venta/entrega, potencia y pago de las cuatro características se sustituyen por descripciones del estudio visual. Se crean iconos SVG propios, sin reutilizar código de iconos de Divi.
- El contenido editorial se adapta al estudio visual; cambia su longitud, por lo que no se afirma una coincidencia píxel a píxel de la página completa.
- Se omiten el carrito, buscador de tienda, WhatsApp, teléfono, correo comercial y direcciones de vendedores. El pie describe la demo.
- Se añaden preguntas sobre el proyecto, foco de teclado y navegación móvil operativa.
- El fondo de presentación es estático. No se reproduce el parallax ni las animaciones de Divi.

## Decisiones del rediseño

El rediseño mantiene los recursos de marca autorizados y las tipografías, pero cambia la composición: presentación dividida, títulos más breves, superficies claras y carbón, menta como acento, espacio entre bloques, referencias gráficas filtrables y preguntas desplegables. Los textos describen la identidad y el diseño; no anuncian la venta ni recomiendan productos.

Las dos rutas son componentes React propios y no cargan CSS, JavaScript, cookies, rastreadores ni APIs de WordPress/WooCommerce. Las fuentes y recursos se sirven localmente; la aplicación no depende de que el dominio original permanezca accesible.

La autorización del usuario cubre esta demo. Se conserva la atribución sin inventar una licencia abierta para las fotografías o el logotipo. Las licencias de las fuentes están incluidas junto a sus archivos.
