# Validación de la demo

Comprobaciones realizadas el 11 de octubre de 2026, en el checkout `/workspace/demo420`.

- Instalación reproducible: `npm ci --cache /workspace/.npm-cache`.
- Producción: `npm run build`, páginas prerenderizadas `/`, `/original` y `/redesign`.
- Desarrollo: `npm run dev`, peticiones de las tres rutas con HTTP 200 y contenido comprobado.
- TypeScript estricto: `npm run typecheck`.
- Playwright sobre producción: **16 pruebas ejecutadas y aprobadas**, sin omitidas, en Chromium.
- Anchos verificados: 1440, 768, 390 y 320 px.
- Imágenes cargadas, fuentes locales, sin desbordamiento horizontal.
- Aviso de demo, cabeceras `noindex`, enlaces internos y ausencia de formularios comerciales.
- Menú móvil: abrir, cerrar, Escape y devolución del foco.
- Preguntas desplegables, filtros de galería (8 / 3 / 5 referencias) y navegación entre versiones.
- Sin peticiones del navegador a dominios externos durante las comprobaciones de las dos portadas.
- 14 imágenes originales: huellas SHA-256 de los archivos incorporados verificadas contra las descargas.

Se inspeccionaron visualmente capturas de ambas versiones en escritorio y móvil. En escritorio, el título de la reconstrucción conserva el ancho de 1080 px, altura de 199 px, tamaño de 63 px y posición horizontal de la referencia. El aviso de demo introduce un desplazamiento vertical de 40 px. No se afirma una equivalencia píxel a píxel de toda la página: las diferencias deliberadas están documentadas en `REFERENCE.md`.

## Capturas

| Versión | Escritorio | Móvil |
| --- | --- | --- |
| Original | [Captura](screenshots/original-desktop.png) | [Captura](screenshots/original-mobile.png) |
| Rediseño | [Captura](screenshots/redesign-desktop.png) | [Captura](screenshots/redesign-mobile.png) |

Las comprobaciones automatizadas no sustituyen una revisión de accesibilidad completa ni garantizan todos los navegadores. La validación registrada cubre Chromium y los tamaños indicados. No se ha desplegado en Vercel ni modificado el sitio de referencia.
