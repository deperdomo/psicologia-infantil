# Solución para Error 404 en Netlify con React Router

## Problema

Al desplegar una aplicación React con React Router en Netlify, aparece un error 404 cuando:
- Se accede directamente a una URL (ej: `https://lleniapsicologia.com/recursos`)
- Se recarga la página en una ruta específica
- Se comparte un enlace directo a una página interna

**Error mostrado:**
```
Page not found
Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
```

## Causa del Problema

Este es un problema común en **Single Page Applications (SPA)**:

1. **En desarrollo local**: Vite/webpack-dev-server maneja automáticamente el routing del lado del cliente
2. **En producción (Netlify)**: El servidor busca archivos físicos que no existen
   - Cuando visitas `/recursos`, Netlify busca un archivo `recursos/index.html`
   - Como no existe, devuelve un 404
   - React Router nunca tiene la oportunidad de manejar la ruta

## Solución Implementada

### 1. Archivo `_redirects` en `public/`

```
# Netlify redirects file for SPA (Single Page Application)
# This file redirects all routes to index.html to let React Router handle routing

# Redirect all routes to index.html for client-side routing
/*    /index.html   200
```

**Qué hace:**
- Redirige TODAS las rutas (`/*`) a `/index.html`
- Usa código de estado `200` (no es una redirección real, es un "rewrite")
- Permite que React Router maneje el routing una vez cargada la aplicación

### 2. Archivo `netlify.toml` (alternativo)

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Ventajas del netlify.toml:**
- Configuración más completa de Netlify
- Permite configurar headers de seguridad
- Configuración de cache para assets estáticos

## Cómo Funciona la Solución

### Flujo Normal (Sin Solución)
1. Usuario visita `https://lleniapsicologia.com/recursos`
2. Netlify busca archivo `recursos/index.html`
3. No existe → Error 404

### Flujo con Solución
1. Usuario visita `https://lleniapsicologia.com/recursos`
2. Netlify encuentra la regla `/*` en `_redirects`
3. Sirve `index.html` con código 200 (no redirect)
4. React se carga y React Router maneja `/recursos`
5. Se muestra la página correcta

## Pasos para Desplegar

1. **Verificar archivos creados:**
   - ✅ `public/_redirects` existe
   - ✅ `netlify.toml` existe (opcional)

2. **Build del proyecto:**
   ```bash
   npm run build
   ```

3. **Verificar que `_redirects` esté en `dist/`:**
   ```bash
   ls dist/_redirects  # Debe existir
   ```

4. **Desplegar en Netlify:**
   - Hacer commit y push de los cambios
   - Netlify desplegará automáticamente
   - O subir manualmente la carpeta `dist/`

## Verificación Post-Despliegue

Probar las siguientes URLs directamente en el navegador:
- ✅ `https://lleniapsicologia.com/`
- ✅ `https://lleniapsicologia.com/recursos`
- ✅ `https://lleniapsicologia.com/recursos/categoria/manejo-de-emociones`
- ✅ `https://lleniapsicologia.com/sobre-mi`
- ✅ `https://lleniapsicologia.com/servicios/acompañamiento-infantil`

**Todas deberían funcionar sin mostrar error 404.**

## Troubleshooting

### Si sigue apareciendo 404:

1. **Verificar que `_redirects` esté en la raíz del sitio publicado:**
   - Ir a `https://tudominio.com/_redirects`
   - Debería mostrar el contenido del archivo

2. **Verificar configuración de Netlify:**
   - Ir a Site Settings → Build & Deploy
   - Confirmar que "Publish directory" es `dist`

3. **Forzar nuevo despliegue:**
   - En Netlify dashboard: Deploys → Trigger deploy → Deploy site

4. **Cache del navegador:**
   - Probar en modo incógnito
   - O limpiar cache del navegador

### Otras Configuraciones Útiles

**Headers de seguridad (en netlify.toml):**
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

**Cache de assets estáticos:**
```toml
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## Recursos Adicionales

- [Netlify SPA Documentation](https://docs.netlify.com/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps)
- [React Router y Hosting Estático](https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing)
- [Netlify Redirects Reference](https://docs.netlify.com/routing/redirects/)
