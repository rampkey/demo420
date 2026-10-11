# Packman — demo visual no oficial

Demo no oficial construida con **Next.js App Router, TypeScript y Tailwind CSS**. Una reconstrucción de referencia y una experiencia informativa multipágina Chromatic Underground, independientes de WordPress, Divi y WooCommerce. Sin compras, precios, pagos, carrito ni conexiones con vendedores.

## Rutas

- `/`: selector y comparación de versiones.
- `/original`: reconstrucción de la composición, paleta, tipografía y bloques de la portada pública. Mantiene el encabezado azul grisáceo, presentación fotográfica centrada, bloque de cuatro características, identidad a dos columnas, ocho referencias gráficas, contenido editorial, imagen a todo el ancho y pie fotográfico.
- `/redesign`: Home Chromatic Underground V2, con Mystery OG como referencia visual, tarjetas cromáticas, contenido de marca, filtros y FAQ.
- `/redesign/shop`: catálogo informativo con ocho referencias y filtros.
- `/redesign/shop/[slug]`: ocho fichas estáticas con nombres, imágenes y descripciones visuales contrastadas.
- `/redesign/sobre-nosotros`: enfoque educativo y principios recogidos de la página pública.
- `/redesign/faq`: preguntas organizadas por contenido de marca y alcance de la demo.
- `/redesign/contacta-con-nosotros`: presentación de contacto y formulario simulado; no envía ni almacena información.

Se muestra un aviso de **demo no oficial** en todas las rutas. La navegación principal contiene Home, Shop, Sobre nosotros, FAQ y Contacta con nosotros; la comparación queda fuera de ella. `/original` conserva su implementación anterior. Véanse [el alcance de la reconstrucción](docs/REFERENCE.md), [el sistema visual y adaptación conceptual a Divi](docs/design-system.md) y [las fuentes contrastadas de V2](docs/v2-source-manifest.json).

## Desarrollo

Node.js **24**, npm **11**. Desde la raíz del checkout (`/workspace/demo420` en el entorno de nube):

```sh
npm ci --cache /workspace/.npm-cache
npm run dev
```

En otro equipo puede usarse `npm ci` sin la opción de caché. No requiere secretos, variables de entorno, bases de datos ni servicios de terceros. Las imágenes y fuentes se sirven desde el proyecto: el navegador no consulta el sitio real, Google Fonts ni proveedores externos.

## Comprobaciones

```sh
npm run typecheck
npm run build
npm run test:e2e
```

Las pruebas Playwright comprueban escritorio (1440 px), tablet (768 px), móvil (390 px) y móvil estrecho (320 px): imágenes cargadas, ausencia de desbordamientos, menú y Escape, enlaces locales, aviso, preguntas, filtros, rutas interiores, fichas y 404. También verifican movimiento reducido, contenido sin JavaScript, estabilidad visual de `/original` y que el formulario simulado no envía ni almacena mensajes. Se ejecutan sobre producción y conservan traza/captura si fallan.

Si no hay Chromium en el equipo:

```sh
npx playwright install chromium
```

Opcionalmente `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` permite seleccionar un navegador instalado. Los resultados quedan en `playwright-report/` y `test-results/` (ignorados por Git).

## Vercel

1. Importar el repositorio en Vercel cuando se decida publicarlo.
2. Preset **Next.js**, directorio raíz del proyecto.
3. Comando de instalación `npm ci`, compilación `npm run build`, salida automática.
4. No añadir variables de entorno para este proyecto.

La integración existente de GitHub con Vercel genera una Preview al publicar cambios en la rama de la PR. Su enlace aparece en los checks y en el comentario de Vercel. La protección del proyecto puede exigir iniciar sesión. `robots.txt`, metadata y `X-Robots-Tag` indican `noindex, nofollow`; esto evita la indexación por rastreadores que respeten estas señales, pero no convierte la demo en un sitio privado.

## Recursos

El usuario confirmó permiso de reutilización del logotipo y fotografías **para esta demo** el 11 de octubre de 2026. [El manifiesto inicial](docs/asset-manifest.json) y [el de V2](docs/v2-source-manifest.json) registran origen, tamaño, dimensiones y SHA-256. Los recursos de marca no se relicencian: cualquier uso fuera de esta demo requiere los permisos correspondientes. Oswald, Nunito, Open Sans y Space Grotesk se distribuyen bajo SIL Open Font License; las licencias acompañan las fuentes en `public/fonts/` y `public/redesign/fonts/`.

No se copia ni ejecuta el HTML de WordPress dentro de la aplicación. Se ha reconstruido con componentes React, estilos locales e iconos SVG propios. No se han incorporado scripts comerciales, cookies de seguimiento ni integraciones de la web real. El único formulario es una simulación local claramente identificada.
