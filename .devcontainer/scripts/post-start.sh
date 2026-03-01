#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# post-start.sh
# Se ejecuta CADA VEZ que el contenedor se inicia (resume o restart).
# Solo tareas ligeras que deben correr en cada arranque.
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

echo "▶️  [post-start] Iniciando entorno..."

# ── Verificar conexión a internet ──────────────────────────────────────────
if curl -s --max-time 3 https://registry.npmjs.org > /dev/null 2>&1; then
  echo "🌐 Conexión a internet: OK"
else
  echo "⚠️  Sin conexión a internet — algunas funciones pueden no estar disponibles"
fi

# ── Verificar si hay actualizaciones de dependencias ──────────────────────
if [ -f "/workspace/package.json" ]; then
  OUTDATED=$(cd /workspace && npm outdated --depth=0 2>/dev/null | wc -l)
  if [ "$OUTDATED" -gt 1 ]; then
    echo "📦 Hay $(($OUTDATED - 1)) dependencia(s) desactualizadas. Corre 'ncu' para ver cuáles."
  fi
fi

# ── Recordatorio: variables de entorno ────────────────────────────────────
if [ ! -f "/workspace/.env.local" ]; then
  echo "⚠️  .env.local no encontrado. Copia .env.example si existe."
fi

echo "✅ [post-start] Entorno listo."
