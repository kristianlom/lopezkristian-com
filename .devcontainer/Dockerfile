# ─────────────────────────────────────────────────────────────────────────────
# lopezkristian.com — Dev Container Image
# Base: Node.js LTS oficial (Debian Bookworm slim)
# ─────────────────────────────────────────────────────────────────────────────
FROM mcr.microsoft.com/devcontainers/javascript-node:1-20-bookworm

# ── Variables de build ────────────────────────────────────────────────────────
ARG DEBIAN_FRONTEND=noninteractive

# ── Sistema base ──────────────────────────────────────────────────────────────
RUN apt-get update && apt-get install -y --no-install-recommends \
    # Utilidades esenciales (git, gh y aws-cli se instalan via Features)
    curl \
    wget \
    unzip \
    zip \
    jq \
    tree \
    htop \
    # Build tools (por si alguna dependencia nativa lo requiere)
    build-essential \
    python3 \
    python3-pip \
    # Fuentes y locales
    locales \
    # Limpieza
    && apt-get autoremove -y \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# ── Locale en español ─────────────────────────────────────────────────────────
RUN sed -i '/es_MX.UTF-8/s/^# //g' /etc/locale.gen && locale-gen
ENV LANG=es_MX.UTF-8
ENV LC_ALL=es_MX.UTF-8

# ── Node.js — herramientas globales legítimas ─────────────────────────────────
# Solo herramientas que son genuinamente globales.
# eslint, prettier y astro deben venir de devDependencies del proyecto.
RUN npm install -g \
    pnpm \
    npm-check-updates \
    serve \
    source-map-explorer

# ── Configuración de npm global para usuario node ────────────────────────────
USER node
RUN mkdir -p /home/node/.npm-global \
    && npm config set prefix '/home/node/.npm-global'
ENV PATH="/home/node/.npm-global/bin:$PATH"

# ── Alias útiles en bash ──────────────────────────────────────────────────────
RUN echo '\n\
# ── lopezkristian.com dev aliases ──\n\
alias dev="npm run dev"\n\
alias build="npm run build"\n\
alias preview="npm run preview"\n\
alias lint="npm run lint"\n\
alias tc="npm run typecheck"\n\
alias ncu="npx npm-check-updates -i"\n\
alias gs="git status"\n\
alias gl="git log --oneline --graph --all -20"\n\
alias gp="git pull"\n\
alias gph="git push"\n\
' >> /home/node/.bashrc

# ── Working directory ─────────────────────────────────────────────────────────
WORKDIR /workspace

# ── Healthcheck básico ────────────────────────────────────────────────────────
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD node --version || exit 1
