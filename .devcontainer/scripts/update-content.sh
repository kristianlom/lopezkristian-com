#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# update-content.sh
# Se ejecuta después de onCreateCommand y CADA VEZ que el contenido cambia
# (ej. git pull en prebuilds). Ideal para instalar dependencias.
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

echo "🔄 [update-content] Actualizando dependencias..."

# ── Instalar dependencias del proyecto ─────────────────────────────────────
if [ -f "/workspace/package.json" ]; then
  echo "📦 Instalando dependencias npm..."
  cd /workspace && npm install
  echo "✅ Dependencias instaladas."
else
  echo "⚠️  No se encontró package.json — recuerda correr 'npm install' después de inicializar el proyecto Astro."
fi

# ── Configurar husky (si está definido en package.json) ───────────────────
if [ -f "/workspace/package.json" ] && grep -q '"husky"' /workspace/package.json; then
  echo "🐶 Configurando Husky..."
  cd /workspace && npx husky 2>/dev/null || true
fi

echo "✅ [update-content] Dependencias listas."
