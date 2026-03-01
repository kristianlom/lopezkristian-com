#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# post-create.sh
# Se ejecuta DESPUÉS de que el contenedor fue creado y el workspace montado.
# Aquí van las instalaciones pesadas del proyecto.
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

echo "🔧 [post-create] Preparando entorno de desarrollo..."

# ── Verificar versiones de herramientas ────────────────────────────────────
echo ""
echo "📋 Versiones instaladas:"
echo "  Node.js : $(node --version)"
echo "  npm     : $(npm --version)"
echo "  Git     : $(git --version)"
echo "  gh      : $(gh --version | head -1)"
echo "  aws     : $(aws --version)"
echo "  Docker  : $(docker --version 2>/dev/null || echo 'no disponible aún')"
echo ""

# Nota: npm install y husky se ejecutan en update-content.sh (updateContentCommand)

# ── Verificar que Astro CLI funciona ──────────────────────────────────────
echo ""
echo "🌟 Verificando Astro CLI..."
if [ -f "/workspace/node_modules/.bin/astro" ]; then
  npx astro --version 2>/dev/null && echo "✅ Astro CLI disponible (local)."
else
  echo "⚠️  Astro no encontrado — se instalará con 'npm install' al inicializar el proyecto."
fi

# ── Mensaje final con comandos útiles ─────────────────────────────────────
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🚀 lopezkristian.com — Dev Environment listo"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "  Comandos disponibles:"
echo "    npm run dev      → Servidor de desarrollo (localhost:4321)"
echo "    npm run build    → Build de producción"
echo "    npm run preview  → Preview del build"
echo "    npm run lint     → ESLint"
echo "    npm run typecheck → TypeScript check"
echo ""
echo "  Alias de terminal:"
echo "    dev, build, preview, lint, tc, gs, gl, gp, gph"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
