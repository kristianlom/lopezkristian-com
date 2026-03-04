# Site Configuration

Este módulo centraliza la configuración del sitio, incluyendo URLs y metadatos.

## Uso

### SITE_URL

La constante `SITE_URL` contiene la URL base del sitio. Se puede sobrescribir usando la variable de entorno `PUBLIC_SITE_URL`:

```typescript
import { SITE_URL } from '@config/site';

console.log(SITE_URL); // https://lopezkristian.com (o el valor de PUBLIC_SITE_URL)
```

### getFullUrl()

Función helper para construir URLs absolutas:

```typescript
import { getFullUrl } from '@config/site';

const postUrl = getFullUrl('/writing/my-post');
// Resultado: https://lopezkristian.com/writing/my-post
```

### SITE_METADATA

Metadatos del sitio:

```typescript
import { SITE_METADATA } from '@config/site';

console.log(SITE_METADATA.name); // Kristian López
console.log(SITE_METADATA.domain); // lopezkristian.com
console.log(SITE_METADATA.url); // https://lopezkristian.com
```

## Configuración por Ambiente

### Producción

Por defecto, usa `https://lopezkristian.com`

### Staging

Configura en tu entorno de staging:

```bash
PUBLIC_SITE_URL=https://staging.lopezkristian.com
```

### Desarrollo Local

Configura en `.env.local`:

```bash
PUBLIC_SITE_URL=http://localhost:4321
```

### Preview/CI

```bash
PUBLIC_SITE_URL=https://preview-${BRANCH_NAME}.lopezkristian.com
```

## Archivos que Usan Esta Configuración

- `src/layouts/ProjectLayout.astro` - URLs de proyectos
- `src/layouts/PostLayout.astro` - URLs de posts
- `src/components/seo/SEO.astro` - Metadatos SEO y Open Graph
- `src/components/seo/JsonLd.astro` - Structured data
- `src/pages/writing/rss.xml.ts` - RSS feed

## Beneficios

- ✅ **Mantenibilidad**: Un solo lugar para cambiar la URL del sitio
- ✅ **Multi-ambiente**: Soporte para staging, preview, y desarrollo
- ✅ **Type-safe**: Tipado completo de TypeScript
- ✅ **Consistencia**: Todas las URLs se generan de la misma manera
