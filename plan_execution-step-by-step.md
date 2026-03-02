# Plan de Ejecución Paso a Paso — lopezkristian.com

> **Consolidación de:** lopezkristian-plan-CLAUDE.md, lopezkristian-com_plan-openAI.md, lopezkristian-com_plan-GEMINI.md, plan-de-trabajo.md
> **Fecha:** 2026-02-28
> **Estado actual del proyecto:** MVP funcional con Astro + Tailwind + MDX, desplegado en GitHub Pages

---

## Estado Actual del Proyecto (Baseline)

Antes de planificar, lo que **ya existe**:

| Elemento | Estado |
|---|---|
| Framework (Astro 5 + Tailwind + React) | Implementado |
| Páginas: Home, About, Projects, Writing, Resume, Contact, Privacy, 404 | Implementadas |
| Componentes: Header, Footer, Card, CTA, Tag, SEO, JsonLd, ReadingTime, ToC | Implementados |
| Content Collections (MDX): 5 blog posts, 3 proyectos | Publicados |
| CI/CD: GitHub Actions (lint + typecheck + build + deploy) | Configurado |
| Hosting: GitHub Pages con dominio personalizado (CNAME) | Activo |
| RSS Feed + Sitemap automático | Configurado |
| Dark mode (class-based con localStorage) | Implementado |
| Dev Container (.devcontainer) | Configurado |
| Linting: ESLint + Prettier + Commitlint | Configurado |

---

## Fase 0 — Auditoría y Correcciones Base

**Objetivo:** Asegurar que la base existente cumple estándares de calidad antes de iterar.
**Duración estimada:** 3–5 días
**Responsable:** Staff Engineer

### Tarea 0.1 — Auditoría de calidad Lighthouse

- [x] 0.1.1 Ejecutar Lighthouse en todas las páginas (Home, About, Projects, Writing, Resume, Contact)
- [x] 0.1.2 Documentar scores actuales: Performance, Accessibility, Best Practices, SEO
- [x] 0.1.3 Identificar y listar cada issue con prioridad (crítico / medio / bajo)
- [x] 0.1.4 Crear issues en GitHub para cada corrección necesaria

### Tarea 0.2 — Auditoría de accesibilidad (A11y)

- [x] 0.2.1 Verificar contraste de colores WCAG AA en ambos temas (light/dark)
- [x] 0.2.2 Verificar navegación completa por teclado (Tab, Enter, Escape)
- [x] 0.2.3 Verificar atributos `alt` en todas las imágenes
- [x] 0.2.4 Verificar estructura de headings (h1 → h2 → h3, sin saltos)
- [x] 0.2.5 Verificar etiquetas ARIA en componentes interactivos (menú mobile, theme toggle)
- [x] 0.2.6 Corregir issues encontrados

### Tarea 0.3 — Auditoría de SEO técnico

- [x] 0.3.1 Verificar que `robots.txt` tiene las reglas correctas
- [x] 0.3.2 Verificar que `sitemap.xml` incluye todas las rutas públicas
- [x] 0.3.3 Verificar meta tags (title, description) únicos en cada página
- [x] 0.3.4 Verificar Open Graph tags (og:title, og:description, og:image) en cada página
- [x] 0.3.5 Verificar JSON-LD (schema.org Person en home, Article en blog posts)
- [x] 0.3.6 Verificar canonical URLs
- [x] 0.3.7 Corregir issues encontrados

### Tarea 0.4 — Auditoría de seguridad

- [x] 0.4.1 Verificar headers HTTP de seguridad: CSP, HSTS, X-Frame-Options, X-Content-Type-Options
- [x] 0.4.2 Verificar que no hay secrets expuestos en el repositorio
- [x] 0.4.3 Verificar que `.env.example` no contiene valores reales
- [x] 0.4.4 Ejecutar `npm audit` y resolver vulnerabilidades
- [x] 0.4.5 Documentar hallazgos y acciones tomadas

### Tarea 0.5 — Corrección de assets placeholder

- [x] 0.5.1 Crear o reemplazar `og-default.png` con imagen real de Open Graph (1200x630)
- [x] 0.5.2 Crear o reemplazar `resume.pdf` con CV real (o remover si no está listo)
- [x] 0.5.3 Verificar que `favicon.svg` se renderiza correctamente en todos los navegadores

**Definition of Done Fase 0:** Lighthouse ≥ 90 en las 4 categorías, 0 issues críticos de A11y, SEO técnico completo, 0 vulnerabilidades en dependencias.

---

## Fase 1 — Identidad de Marca y Design System

**Objetivo:** Definir identidad visual consistente y documentar el design system.
**Duración estimada:** 1 semana
**Responsable:** Kristian López (decisiones) + Staff Engineer (implementación)

### Tarea 1.1 — Definición del Brand Kit

- [x] 1.1.1 Definir paleta de colores definitiva (primario, secundario, acentos, fondos, textos)
- [x] 1.1.2 Validar contraste WCAG AA de la paleta en light y dark mode
- [x] 1.1.3 Definir tipografía: confirmar Inter (sans) y JetBrains Mono (mono) o elegir alternativas
- [x] 1.1.4 Definir tono de comunicación: profesional-técnico, accesible, sin jerga innecesaria
- [x] 1.1.5 Crear logo/monograma (si aplica) o confirmar uso de nombre tipográfico
- [x] 1.1.6 Definir tagline final (ej. "Arquitecto de Software · Sistemas que escalan")

### Tarea 1.2 — Documentación del Design System

- [x] 1.2.1 Documentar tokens de diseño en `tailwind.config.mjs` (colores, spacing, radii, shadows)
- [x] 1.2.2 Documentar componentes existentes y sus variantes (Card, CTA, Tag, etc.)
- [x] 1.2.3 Crear página `/style-guide` (opcional, interna) como referencia visual
- [x] 1.2.4 Asegurar consistencia visual entre todas las páginas existentes

### Tarea 1.3 — Optimización de assets visuales

- [x] 1.3.1 Preparar foto profesional optimizada (WebP, múltiples tamaños)
- [x] 1.3.2 Crear Open Graph images por sección (Home, About, Blog, Projects)
- [x] 1.3.3 Crear favicon en múltiples formatos (SVG, PNG 32x32, PNG 192x192, apple-touch-icon)
- [x] 1.3.4 Implementar optimización de imágenes en build (sharp o Astro Image)

**Definition of Done Fase 1:** Brand kit documentado y aprobado, design system implementado en Tailwind config, assets visuales optimizados.

---

## Fase 2 — Mejoras de UX/UI y Componentes

**Objetivo:** Elevar la experiencia de usuario y completar componentes faltantes.
**Duración estimada:** 1–2 semanas
**Responsable:** Staff Engineer

### Tarea 2.1 — Mejoras del Header y Navegación

- [x] 2.1.1 Verificar que el menú mobile (hamburger) abre/cierra correctamente
- [x] 2.1.2 Agregar indicador de página activa en la navegación
- [x] 2.1.3 Implementar animación suave de scroll al navegar entre secciones del Home
- [x] 2.1.4 Verificar que el header sticky funciona correctamente en scroll largo

### Tarea 2.2 — Mejoras del Home Page

- [x] 2.2.1 Revisar y mejorar el Hero section (tagline, CTA principal, visual)
- [x] 2.2.2 Revisar sección de Skills: agregar iconos tecnológicos si faltan
- [x] 2.2.3 Verificar que los proyectos destacados (featured) se muestran correctamente
- [x] 2.2.4 Verificar que las últimas entradas del blog se muestran correctamente
- [x] 2.2.5 Agregar CTA secundario (ej. "Ver todos los proyectos", "Leer más artículos")

### Tarea 2.3 — Mejoras del Blog (Writing)

- [x] 2.3.1 Verificar que el filtrado por tags funciona correctamente
- [x] 2.3.2 Implementar paginación si hay más de 10 posts
- [x] 2.3.3 Verificar que el syntax highlighting (Shiki) se renderiza correctamente en todos los posts
- [x] 2.3.4 Verificar que el ReadingTime se calcula y muestra correctamente
- [x] 2.3.5 Verificar que el Table of Contents se genera correctamente en posts largos
- [x] 2.3.6 Agregar navegación prev/next entre artículos
- [x] 2.3.7 Agregar sección "Artículos relacionados" al final de cada post (por tags compartidos)

### Tarea 2.4 — Mejoras de la página Projects

- [x] 2.4.1 Implementar filtrado por stack/tecnología
- [x] 2.4.2 Agregar badge de estado (active/archived) visible en las cards
- [x] 2.4.3 Verificar que los links a repositorios (repoUrl) funcionan
- [x] 2.4.4 Verificar layout responsive de la grilla de proyectos

### Tarea 2.5 — Mejoras de la página Contact

- [x] 2.5.1 Integrar formulario con servicio de email (Resend, Formspree, o Netlify Forms)
- [x] 2.5.2 Agregar validación de campos (nombre, email, mensaje)
- [x] 2.5.3 Implementar honeypot anti-spam
- [x] 2.5.4 Agregar feedback visual: loading state, success message, error message
- [x] 2.5.5 Agregar rate limiting básico (client-side)

### Tarea 2.6 — Mejoras de la página Resume

- [x] 2.6.1 Verificar que el contenido del resume está completo y actualizado
- [x] 2.6.2 Agregar botón de descarga de PDF funcional (con PDF real)
- [x] 2.6.3 Verificar formato de impresión (print CSS)

### Tarea 2.7 — Página 404 personalizada

- [x] 2.7.1 Verificar que la página 404 tiene diseño consistente con el sitio
- [x] 2.7.2 Agregar links útiles (Home, Blog, Contact)
- [x] 2.7.3 Agregar barra de búsqueda o sugerencias (opcional)

### Tarea 2.8 — Performance y optimización

- [x] 2.8.1 Verificar `font-display: swap` en todas las fuentes
- [x] 2.8.2 Implementar lazy loading en imágenes below the fold
- [x] 2.8.3 Verificar que CSS no usado se purga correctamente (Tailwind)
- [x] 2.8.4 Verificar que JavaScript se carga solo en islas que lo requieren
- [x] 2.8.5 Medir y optimizar LCP < 2.5s, FID < 100ms, CLS < 0.1

**Definition of Done Fase 2:** Todas las páginas con UX pulida, formulario de contacto funcional, navegación fluida en mobile y desktop, Core Web Vitals en verde.

---

## Fase 3 — Contenido Editorial

**Objetivo:** Completar y enriquecer el contenido del sitio para que no sea "bonito y vacío".
**Duración estimada:** 2–3 semanas
**Responsable:** Kristian López (redacción) + Staff Engineer (implementación técnica)

### Tarea 3.1 — Revisión del contenido existente

- [x] 3.1.1 Revisar y actualizar la bio en la página About
- [x] 3.1.2 Revisar y actualizar la página Resume
- [x] 3.1.3 Revisar los 5 blog posts existentes: ortografía, tono, consistencia
- [x] 3.1.4 Revisar los 3 proyectos existentes: descripciones, métricas de impacto, stack actualizado
- [x] 3.1.5 Actualizar la Privacy Policy con información real del sitio

### Tarea 3.2 — Nuevos artículos técnicos (objetivo: 10 total al lanzamiento)

- [x] 3.2.1 Redactar artículo 6: "Microservicios production-grade en Java 21"
- [x] 3.2.2 Redactar artículo 7: "Observabilidad práctica: SLO/SLI y alerting"
- [x] 3.2.3 Redactar artículo 8: "APIs: idempotencia, contratos y versionado"
- [x] 3.2.4 Redactar artículo 9: "AWS Well-Architected aplicado a microservicios"
- [x] 3.2.5 Redactar artículo 10: "Data Governance para pagos (alto nivel)"
- [x] 3.2.6 Agregar cada artículo como archivo MDX en `/src/content/writing/`
- [x] 3.2.7 Agregar hero images a los artículos que no tengan

### Tarea 3.3 — Nuevos proyectos / Case Studies (objetivo: 5 total)

- [x] 3.3.1 Redactar proyecto 4: siguiendo plantilla Case Study (problema → solución → impacto)
- [x] 3.3.2 Redactar proyecto 5: siguiendo plantilla Case Study
- [x] 3.3.3 Agregar diagramas de arquitectura (Mermaid o imágenes) a los proyectos
- [x] 3.3.4 Incluir métricas de impacto medibles en cada proyecto

### Tarea 3.4 — SEO de contenido (on-page)

- [x] 3.4.1 Verificar que cada artículo tiene meta description única y atractiva (< 160 chars)
- [x] 3.4.2 Verificar que cada artículo tiene tags relevantes
- [x] 3.4.3 Agregar internal linking entre artículos relacionados
- [x] 3.4.4 Verificar que las URLs (slugs) son descriptivas y SEO-friendly
- [x] 3.4.5 Agregar schema.org Article a cada blog post (verificar JsonLd component)

**Definition of Done Fase 3:** Mínimo 10 artículos y 5 proyectos publicados, contenido revisado editorialmente, SEO on-page completo.

---

## Fase 4 — Infraestructura y DevOps

**Objetivo:** Robustecer la infraestructura, monitoreo y seguridad.
**Duración estimada:** 1 semana
**Responsable:** Staff Engineer / Arquitecto de Software

### Tarea 4.1 — DNS y TLS

- [ ] 4.1.1 Verificar que el dominio `lopezkristian.com` resuelve correctamente a GitHub Pages
- [ ] 4.1.2 Verificar HTTPS activo con certificado válido
- [ ] 4.1.3 Verificar redirección HTTP → HTTPS
- [ ] 4.1.4 Verificar redirección www → apex (o viceversa)
- [ ] 4.1.5 Obtener score A+ en SSL Labs test

### Tarea 4.2 — Headers HTTP de seguridad

- [ ] 4.2.1 Configurar Content-Security-Policy (CSP)
- [ ] 4.2.2 Configurar Strict-Transport-Security (HSTS)
- [ ] 4.2.3 Configurar X-Frame-Options: DENY
- [ ] 4.2.4 Configurar X-Content-Type-Options: nosniff
- [ ] 4.2.5 Configurar Referrer-Policy
- [ ] 4.2.6 Verificar headers con securityheaders.com

### Tarea 4.3 — CI/CD y automatización

- [ ] 4.3.1 Verificar que el pipeline CI (lint + typecheck + build) pasa en green
- [ ] 4.3.2 Agregar step de Lighthouse CI al pipeline (performance budget)
- [ ] 4.3.3 Agregar step de link checking (verificar 0 enlaces rotos)
- [ ] 4.3.4 Configurar Dependabot o Renovate para actualizaciones automáticas de dependencias
- [ ] 4.3.5 Verificar que el deploy automático a GitHub Pages funciona en push a main

### Tarea 4.4 — Analítica

- [ ] 4.4.1 Elegir solución de analítica: Cloudflare Web Analytics (recomendado, privacy-friendly) o Google Analytics
- [ ] 4.4.2 Integrar analítica en el sitio (variable `PUBLIC_ANALYTICS_ID` en .env)
- [ ] 4.4.3 Verificar que la analítica registra pageviews correctamente
- [ ] 4.4.4 Configurar eventos: click en CTA de contacto, descarga de CV, click en links externos

### Tarea 4.5 — Monitoreo

- [ ] 4.5.1 Configurar UptimeRobot (free tier) para monitoreo de disponibilidad
- [ ] 4.5.2 Configurar alertas por email/Slack cuando el sitio esté caído
- [ ] 4.5.3 Verificar uptime tras 24h de monitoreo

### Tarea 4.6 — Indexación en buscadores

- [ ] 4.6.1 Registrar propiedad en Google Search Console
- [ ] 4.6.2 Enviar sitemap.xml a Google Search Console
- [ ] 4.6.3 Registrar propiedad en Bing Webmaster Tools
- [ ] 4.6.4 Enviar sitemap.xml a Bing Webmaster Tools
- [ ] 4.6.5 Verificar indexación inicial después de 7 días

**Definition of Done Fase 4:** HTTPS con A+, headers de seguridad configurados, CI/CD con Lighthouse budget, analítica funcional, monitoreo activo, sitio indexado en Google y Bing.

---

## Fase 5 — QA Final y Go-Live

**Objetivo:** Validación completa antes del lanzamiento público.
**Duración estimada:** 1 semana
**Responsable:** Arquitecto de Software + Staff Engineer

### Tarea 5.1 — Testing funcional

- [ ] 5.1.1 Verificar navegación completa: todas las rutas responden correctamente
- [ ] 5.1.2 Verificar formulario de contacto end-to-end (envío + recepción de email)
- [ ] 5.1.3 Verificar RSS feed: validar XML con feed validator
- [ ] 5.1.4 Verificar sitemap.xml: validar con sitemap validator
- [ ] 5.1.5 Verificar 0 enlaces rotos (internos y externos)
- [ ] 5.1.6 Verificar descarga de CV (PDF)
- [ ] 5.1.7 Verificar tema dark/light: persistencia y rendering correcto

### Tarea 5.2 — Testing cross-browser

- [ ] 5.2.1 Chrome desktop — navegación, formulario, tema
- [ ] 5.2.2 Firefox desktop — navegación, formulario, tema
- [ ] 5.2.3 Safari desktop — navegación, formulario, tema
- [ ] 5.2.4 Chrome Android — navegación, formulario, tema, menú mobile
- [ ] 5.2.5 Safari iOS — navegación, formulario, tema, menú mobile
- [ ] 5.2.6 Documentar y corregir bugs encontrados

### Tarea 5.3 — Lighthouse final

- [ ] 5.3.1 Ejecutar Lighthouse en Home — Score ≥ 90 en las 4 categorías
- [ ] 5.3.2 Ejecutar Lighthouse en About — Score ≥ 90
- [ ] 5.3.3 Ejecutar Lighthouse en Writing (listado) — Score ≥ 90
- [ ] 5.3.4 Ejecutar Lighthouse en un blog post — Score ≥ 90
- [ ] 5.3.5 Ejecutar Lighthouse en Projects — Score ≥ 90
- [ ] 5.3.6 Ejecutar Lighthouse en Contact — Score ≥ 90
- [ ] 5.3.7 Capturar screenshots de los scores como evidencia

### Tarea 5.4 — Validación SEO final

- [ ] 5.4.1 Verificar Open Graph con Facebook Sharing Debugger
- [ ] 5.4.2 Verificar Twitter Card con Twitter Card Validator
- [ ] 5.4.3 Verificar schema.org con Google Rich Results Test
- [ ] 5.4.4 Verificar que Google Search Console no reporta errores
- [ ] 5.4.5 Verificar que todas las páginas tienen title y description únicos

### Tarea 5.5 — Go / No-Go checklist

- [ ] 5.5.1 ✅ Dominio + HTTPS activo y funcional
- [ ] 5.5.2 ✅ Todas las páginas cargan correctamente
- [ ] 5.5.3 ✅ Contenido completo y revisado (mínimo 10 artículos, 5 proyectos)
- [ ] 5.5.4 ✅ Formulario de contacto operativo
- [ ] 5.5.5 ✅ Analítica registrando datos
- [ ] 5.5.6 ✅ Monitoreo de uptime activo
- [ ] 5.5.7 ✅ 0 enlaces rotos
- [ ] 5.5.8 ✅ Lighthouse ≥ 90 en todas las categorías
- [ ] 5.5.9 ✅ Cross-browser testing completado
- [ ] 5.5.10 ✅ Sin secrets en el repositorio
- [ ] 5.5.11 Decisión Go / No-Go (aprobación de Kristian)

**Definition of Done Fase 5:** Checklist Go/No-Go 100% completado, aprobación del sponsor para lanzamiento.

---

## Fase 6 — Lanzamiento y Difusión

**Objetivo:** Lanzar el sitio públicamente y generar tracción inicial.
**Duración estimada:** 1 semana
**Responsable:** Kristian López + Staff Engineer

### Tarea 6.1 — Lanzamiento técnico

- [ ] 6.1.1 Merge final de la rama `dev` a `main`
- [ ] 6.1.2 Verificar deploy automático exitoso
- [ ] 6.1.3 Verificar que `lopezkristian.com` sirve el contenido correcto
- [ ] 6.1.4 Monitorear estabilidad durante las primeras 24 horas
- [ ] 6.1.5 Hacer el repositorio público (si estaba privado)

### Tarea 6.2 — Difusión en redes

- [ ] 6.2.1 Publicar artículo introductorio en LinkedIn
- [ ] 6.2.2 Publicar anuncio en X/Twitter (si aplica)
- [ ] 6.2.3 Compartir en comunidades técnicas: Dev.to, Hashnode, Reddit
- [ ] 6.2.4 Actualizar perfil de LinkedIn con link al sitio
- [ ] 6.2.5 Actualizar perfil de GitHub con link al sitio

### Tarea 6.3 — Verificación post-lanzamiento

- [ ] 6.3.1 Verificar analítica: confirmar que se registran visitas reales
- [ ] 6.3.2 Verificar indexación en Google: buscar "site:lopezkristian.com"
- [ ] 6.3.3 Verificar que el formulario de contacto funciona en producción
- [ ] 6.3.4 Revisar logs de errores (si los hay)
- [ ] 6.3.5 Documentar incidentes post-lanzamiento (si los hay)

**Definition of Done Fase 6:** Sitio en producción sin incidentes por 72h, primeras visitas registradas, presencia en al menos 2 redes/comunidades.

---

## Fase 7 — Operación y Mejora Continua (Post-Lanzamiento)

**Objetivo:** Mantener, crecer y evolucionar sin convertirlo en segundo empleo.
**Duración:** Continua
**Responsable:** Kristian López

### Tarea 7.1 — Rutina editorial

- [ ] 7.1.1 Definir cadencia de publicación (recomendado: 2 artículos/mes)
- [ ] 7.1.2 Crear backlog de temas para los próximos 3 meses
- [ ] 7.1.3 Establecer proceso de redacción → revisión → publicación

### Tarea 7.2 — Mantenimiento técnico

- [ ] 7.2.1 Revisar y actualizar dependencias mensualmente
- [ ] 7.2.2 Revisar métricas de analítica mensualmente
- [ ] 7.2.3 Verificar uptime y performance mensualmente
- [ ] 7.2.4 Crear runbook de operación del sitio

### Tarea 7.3 — Backlog de features (priorizado por valor/esfuerzo)

| Prioridad | Feature | Valor | Esfuerzo |
|---|---|---|---|
| P1 | Newsletter (Resend + formulario de suscripción) | Alto | Bajo |
| P1 | Integración GitHub API (mostrar repos activos) | Alto | Bajo |
| P2 | Búsqueda en blog (Pagefind) | Medio | Bajo |
| P2 | Sección `/uses` (stack de herramientas) | Medio | Bajo |
| P2 | Página "Speaking" (charlas, talleres) | Medio | Bajo |
| P3 | Comentarios en blog (Giscus / GitHub Discussions) | Medio | Medio |
| P3 | Landing para consultoría (paquetes y entregables) | Medio | Medio |
| P4 | Sección de cursos o recursos descargables | Alto | Alto |
| P4 | Multiidioma (ES/EN) | Alto | Alto |
| P4 | Integración LinkedIn API | Medio | Alto |

### Tarea 7.4 — KPIs de seguimiento

| Métrica | Meta 30 días | Meta 90 días | Herramienta |
|---|---|---|---|
| Visitas únicas/mes | 100 | 500 | Analytics |
| Artículos publicados | 7 (5 existentes + 2 nuevos) | 12 | CMS |
| Indexación Google | Parcial | Completa | Search Console |
| Contactos recibidos | 2 | 10 | Formulario |
| Uptime | ≥ 99.5% | ≥ 99.5% | UptimeRobot |
| Lighthouse Performance | ≥ 90 | ≥ 95 | Lighthouse CI |

**Definition of Done Fase 7:** Runbook documentado, roadmap trimestral definido, rutina editorial establecida.

---

## Resumen de Fases y Timeline

```
Semana 1     → Fase 0: Auditoría y correcciones base
Semana 2     → Fase 1: Identidad de marca y design system
Semanas 3–4  → Fase 2: Mejoras de UX/UI y componentes
Semanas 5–7  → Fase 3: Contenido editorial (artículos + proyectos)
Semana 8     → Fase 4: Infraestructura y DevOps
Semana 9     → Fase 5: QA final y Go-Live checklist
Semana 10    → Fase 6: Lanzamiento y difusión
Continuo     → Fase 7: Operación y mejora continua
```

## Gestión de Riesgos

| # | Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|---|
| R1 | Scope creep (agregar features no planeadas) | Media | Alto | MVP estricto; features nuevas van al backlog Fase 7 |
| R2 | Falta de tiempo para redacción de contenido | Alta | Alto | Iniciar redacción en paralelo desde Fase 0; plantillas predefinidas |
| R3 | Deuda técnica por velocidad de entrega | Media | Medio | CI con linting y typecheck obligatorio; code review en PRs |
| R4 | Baja visibilidad post-lanzamiento | Alta | Medio | Plan de difusión activo en Fase 6; publicación regular de contenido |
| R5 | Dependencia de servicios externos (formulario, analytics) | Media | Medio | Definir alternativas y fallback para cada servicio |
| R6 | Caída del hosting (GitHub Pages) | Baja | Alto | Backup: Cloudflare Pages o Vercel como alternativa |

---

## Convenciones del Proyecto

```bash
# Branch strategy
main          → producción (protegido, solo PRs)
dev           → integración continua
feature/*     → nuevas funcionalidades
fix/*         → correcciones
content/*     → artículos y contenido editorial

# Commit message convention (Conventional Commits)
feat: agregar sección de proyectos con filtros
fix: corregir contraste en modo oscuro
content: publicar artículo sobre Hexagonal Architecture
style: ajustar tipografía en mobile
chore: actualizar dependencias Astro
docs: actualizar README con instrucciones de desarrollo

# Pull Request mínimo
- Descripción del cambio
- Screenshot si aplica (antes/después)
- Checklist de QA básico
```

---

*Documento consolidado: 2026-02-28*
*Fuentes: lopezkristian-plan-CLAUDE.md, lopezkristian-com_plan-openAI.md, lopezkristian-com_plan-GEMINI.md, plan-de-trabajo.md*
*Próxima revisión: Al cierre de Fase 0*
