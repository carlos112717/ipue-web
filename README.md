# IPUE Web

Sitio institucional one-page construido con React, Vite, Tailwind CSS v4 y Framer Motion para presentar la iglesia IPUE Mula.

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Scripts

- `npm run dev`: inicia el servidor de desarrollo
- `npm run build`: genera la compilación de producción
- `npm run preview`: sirve la build generada localmente
- `npm run lint`: valida el código con ESLint

En PowerShell con restricciones de ejecución puede ser necesario usar `npm.cmd run dev`, `npm.cmd run build` o `npm.cmd run lint`.

## Estructura principal

- `src/App.jsx`: interfaz principal de la landing page
- `src/index.css`: entrada de Tailwind CSS
- `src/main.jsx`: bootstrap de React
- `public/favicon.svg`: favicon del sitio
- `vite.config.js`: configuración de Vite y Tailwind

## Personalización recomendada

- Actualiza en `src/App.jsx` los datos de `siteConfig` con teléfono, dirección, correo, mapa y redes sociales oficiales.
- Si vas a conectar el formulario, reemplaza la simulación actual por una integración con backend, API o servicio de correo.
- Añade imágenes reales de la congregación para sustituir la galería visual de demostración.

## Verificación

El proyecto queda listo para validar con:

```bash
npm run lint
npm run build
```

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo `LICENSE`.
