# Packman — demo visual no oficial

Estudio visual independiente construido con **Next.js App Router, TypeScript y Tailwind CSS**. Dos versiones de la portada de `packmanvape.es`, sin WordPress, Divi, WooCommerce, compras, precios, pagos, carrito ni conexiones con vendedores.

## Rutas

- `/`: selector y comparación de versiones.
- `/original`: reconstrucción de la composición, paleta, tipografía y bloques de la portada pública. Mantiene el encabezado azul grisáceo, presentación fotográfica centrada, bloque de cuatro características, identidad a dos columnas, ocho referencias gráficas, contenido editorial, imagen a todo el ancho y pie fotográfico.
- `/redesign`: propuesta editorial con mejor jerarquía, fondos más despejados, galería filtrable, navegación móvil y preguntas desplegables. Conserva el logotipo, las fotografías autorizadas, Oswald/Nunito y la paleta de marca.

Se muestra un aviso de **demo no oficial** en todas las rutas. La reconstrucción no es una copia comercial: los textos de venta, precios y contactos se sustituyen por contenido sobre el estudio visual. Véase [el alcance y la metodología](docs/REFERENCE.md).

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

Las pruebas Playwright comprueban escritorio (1440 px), tablet (768 px), móvil (390 px) y móvil estrecho (320 px): imágenes cargadas, ausencia de desbordamientos, menú y Escape, enlaces locales, aviso, preguntas, filtros y cambio de ruta. Se ejecutan sobre la compilación de producción y conservan traza/captura si fallan.

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

No se ha desplegado. `robots.txt`, metadata y `X-Robots-Tag` indican `noindex, nofollow`; esto evita la indexación por rastreadores que respeten estas señales, pero no convierte la demo en un sitio privado. Para revisión privada puede usarse la protección de despliegues de Vercel.

## Recursos

El usuario confirmó permiso de reutilización del logotipo y fotografías **para esta demo** el 11 de octubre de 2026. [El manifiesto](docs/asset-manifest.json) registra URL de origen, tamaño, dimensiones, SHA-256 y autorización. Los recursos de marca no se relicencian: cualquier uso fuera de esta demo requiere los permisos correspondientes. Oswald, Nunito y Open Sans se distribuyen bajo SIL Open Font License; las licencias acompañan las fuentes en `public/fonts/`.

No se copia ni ejecuta el HTML de WordPress dentro de la aplicación. Se ha reconstruido con componentes React, estilos locales e iconos SVG propios. No se han incorporado scripts comerciales, formularios, cookies de seguimiento ni integraciones de la web real.
