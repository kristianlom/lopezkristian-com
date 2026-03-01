#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# on-create.sh
# Se ejecuta UNA SOLA VEZ cuando el devcontainer es creado por primera vez.
# Ideal para configuraciones que no deben repetirse.
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

echo "🚀 [on-create] Iniciando configuración del devcontainer..."

# ── Configuración de Git ───────────────────────────────────────────────────
echo "📦 Configurando Git..."
git config --global core.autocrlf input
git config --global core.eol lf
git config --global pull.rebase false
git config --global init.defaultBranch main
git config --global push.autoSetupRemote true

# Colores en la terminal de git
git config --global color.ui auto
git config --global color.status auto
git config --global color.branch auto

# ── Configurar Conventional Commits helper ─────────────────────────────────
echo "📝 Configurando commitlint..."
if [ -f "/workspace/.commitlintrc.json" ]; then
  npm install --prefix /workspace -D @commitlint/cli @commitlint/config-conventional 2>/dev/null || true
fi

# Nota: npm install se ejecuta en post-create.sh (no duplicar aquí)

# ── Crear archivo .env.local si no existe ─────────────────────────────────
if [ ! -f "/workspace/.env.local" ]; then
  echo "🔧 Creando .env.local de ejemplo..."
  cat > /workspace/.env.local << 'EOF'
# ─── Variables de entorno locales ────────────────────────────────────────────
# NUNCA commitear este archivo. Está en .gitignore.

# Astro
PUBLIC_SITE_URL=http://localhost:4321

# Analytics (dejar vacío para deshabilitar tracking)
PUBLIC_ANALYTICS_ID=

# AWS (solo si usas AWS CLI localmente)
# AWS_DEFAULT_REGION=us-east-1
# AWS_ACCESS_KEY_ID=
# AWS_SECRET_ACCESS_KEY=
# AWS_PROFILE=

# Formulario de contacto (Resend, Formspree, etc.)
# RESEND_API_KEY=
EOF
fi

echo "✅ [on-create] Configuración inicial completada."
