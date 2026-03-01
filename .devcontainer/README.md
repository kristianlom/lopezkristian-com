# .devcontainer — lopezkristian.com

Entorno de desarrollo reproducible para **lopezkristian.com** usando [Dev Containers](https://containers.dev/) con VS Code.

## Requisitos

| Herramienta | Versión mínima |
|---|---|
| Docker Desktop | 4.x |
| VS Code | 1.85+ |
| Extension: Dev Containers | `ms-vscode-remote.remote-containers` |

## Cómo usar

```bash
# 1. Clonar el repositorio
git clone https://github.com/lopezkristian/lopezkristian-com.git
cd lopezkristian.com

# 2. Abrir en VS Code
code .

# 3. VS Code detecta automáticamente .devcontainer y muestra:
#    "Reopen in Container" → hacer clic
#    (o usar Cmd/Ctrl+Shift+P → "Dev Containers: Reopen in Container")
```

El primer arranque tarda ~3–5 minutos mientras construye la imagen. Los siguientes son instantáneos.

## Qué incluye

### Herramientas del sistema
| Herramienta | Uso |
|---|---|
| Node.js LTS | Runtime principal |
| npm | Package manager |
| pnpm | Package manager alternativo |
| Git (latest) | Control de versiones |
| GitHub CLI (`gh`) | Operaciones con GitHub desde terminal |
| AWS CLI v2 | Interacción con servicios AWS |
| Docker in Docker | Builds de imagen locales |

### Herramientas globales de frontend
| Herramienta | Uso |
|---|---|
| `astro` | CLI de Astro |
| `eslint` | Linting |
| `prettier` | Formato de código |
| `npm-check-updates` | Actualizar dependencias |
| `serve` | Servir builds estáticos |

### Extensiones de VS Code incluidas
| Extensión | Propósito |
|---|---|
| `astro-build.astro-vscode` | Soporte oficial Astro |
| `dbaeumer.vscode-eslint` | ESLint integrado |
| `esbenp.prettier-vscode` | Prettier integrado |
| `bradlc.vscode-tailwindcss` | Tailwind IntelliSense |
| `eamodio.gitlens` | GitLens |
| `unifiedjs.vscode-mdx` | Soporte MDX (blog) |
| `usernamehw.errorlens` | Errores inline |
| `ms-azuretools.vscode-docker` | Docker UI |
| `github.vscode-github-actions` | CI/CD en editor |
| + más | Spell checker, iconos, etc. |

## Puertos

| Puerto | Servicio |
|---|---|
| `4321` | Astro dev server → abre en browser automáticamente |
| `4322` | Astro preview (build) |
| `3000` | Reservado (herramientas auxiliares) |

## Variables de entorno

Copia `.env.example` a `.env.local` (se crea automáticamente al iniciar):

```bash
# Renombrar si .env.example existe
cp .env.example .env.local
```

El archivo `.env.local` **nunca** se commitea (está en `.gitignore`).

## Alias de terminal disponibles

```bash
dev        # npm run dev
build      # npm run build
preview    # npm run preview
lint       # npm run lint
tc         # npm run typecheck
ncu        # npx npm-check-updates (modo interactivo)
gs         # git status
gl         # git log --oneline --graph --all -20
gp         # git pull
gph        # git push
```

## Estructura del .devcontainer

```
.devcontainer/
├── devcontainer.json      ← Configuración principal
├── docker-compose.yml     ← Servicios y volúmenes
├── Dockerfile             ← Imagen del contenedor
├── scripts/
│   ├── on-create.sh       ← Ejecuta una sola vez al crear
│   ├── post-create.sh     ← Ejecuta post-creación (install deps)
│   └── post-start.sh      ← Ejecuta en cada arranque
└── README.md              ← Este archivo
```

## Troubleshooting

**El contenedor tarda mucho en iniciar:**
→ Normal en el primer build. Los siguientes son rápidos gracias a los volúmenes cacheados.

**`npm install` falla dentro del contenedor:**
→ Verificar conexión a internet: `curl https://registry.npmjs.org`

**AWS CLI no tiene credenciales:**
→ Agrega tus credenciales en `.env.local` o configura `~/.aws/credentials` localmente (se monta en el contenedor si descomentas el volumen en `docker-compose.yml`).

**El puerto 4321 no abre automáticamente:**
→ Abrirlo manualmente: `Cmd/Ctrl+Shift+P` → "Forward a Port" → `4321`

**Rebuild completo del contenedor:**
→ `Cmd/Ctrl+Shift+P` → "Dev Containers: Rebuild Container"
