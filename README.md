# Vizi by Vizora

Aplicación web de asistente virtual para restaurante, con menú, recomendaciones y envío de pedidos al chef por WhatsApp.

## Ejecutar localmente

Instala las dependencias y ejecuta el servidor:

```bash
npm install
npm start
```

Abre `http://localhost:3000`.

## Publicar en Netlify

El proyecto incluye `netlify.toml` y la función `netlify/functions/order.js`. La carpeta `public` contiene los archivos del sitio; la función conserva el endpoint `/api/order` que prepara el enlace de WhatsApp.

1. Sube el proyecto a un repositorio de GitHub, GitLab o Bitbucket.
2. En Netlify, selecciona **Add new site** > **Import an existing project** y conecta ese repositorio.
3. Deja que Netlify use la configuración de `netlify.toml` y publica el sitio.

No se requiere configurar variables de entorno para desplegar esta versión.
