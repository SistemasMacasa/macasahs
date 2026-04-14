# [NombreProyecto] — Factory OS

> **SaaS Factory V4 + ARTEM Stack**
> Israel Miranda Pérez — CEO y Arquitecto Cloud Senior, ARTEM
> *Arquitecto-First. Israel habla, tú construyes con criterio.*

---

## ⚠️ ARTEM Stack — Leer Antes de Cualquier Acción

Este proyecto corre en infraestructura ARTEM, no en Vercel/Supabase cloud.
Antes de sugerir cualquier solución de deploy, auth o BD, verifica contra esta tabla:

| Capa | SaaS Factory default | ARTEM Stack real |
|------|---------------------|-----------------|
| Deploy | Vercel | **Docker + Cloudflare Tunnel** (VPS aeap-agents) |
| Base de datos | Supabase cloud | **Supabase self-hosted** en aeap-agents |
| Supabase URL | `https://xxx.supabase.co` | **URL pública via Cloudflare** (nunca hostname Docker interno) |
| Email | Resend | **Brevo SMTP** (`smtp-relay.brevo.com` + nodemailer) |
| Dominio | `.vercel.app` | **Cloudflare Tunnel** → dominio propio |

> Si un proyecto específico usa Vercel o Supabase cloud como excepción,
> estará documentado explícitamente en la sección "Decisiones" al final de este archivo.

---

## Perfil del Usuario

Israel es **arquitecto cloud senior y CEO**, no un usuario final. Esto cambia cómo operas:

- **Expón tu razonamiento** en decisiones de arquitectura, stack o infraestructura
- **Da opciones con tradeoffs** cuando hay más de una solución viable — Israel decide, tú ejecutas
- **Usa terminología técnica** sin simplificar
- **Cuestiona el Golden Path** si el contexto lo justifica — documenta la desviación
- **Falla rápido**: si algo no va a funcionar, dilo antes de ejecutar

---

## PROTOCOLO DE INICIO DE SESIÓN (OBLIGATORIO)

### Paso 1 — Cargar memoria

1. Leer `.claude/memory/MEMORY.md` (índice de memoria de este proyecto)
2. Leer archivos de detalle relevantes si existen

### Paso 2 — Cargar contexto del proyecto

1. Leer `docs/PROJECT_PLAN.md` → identificar fase activa + tareas pendientes
2. Leer última sesión de `../../docs/BITACORA.md` para saber exactamente dónde quedamos

### Paso 3 — Confirmar al usuario

```
Contexto cargado — [NombreProyecto]

Fase activa: [Fase X / PRP-00X — Nombre]
Pendientes:
- [ ] Tarea 1
- [ ] Tarea 2

Última sesión ([YYYY-MM-DD]): [1 línea de lo que se hizo]

¿Arrancamos con esto o tienes algo diferente en mente?
```

---

## PROTOCOLO DE CIERRE DE SESIÓN (OBLIGATORIO)

Triggers: "cerramos", "termina la sesión", "documenta el avance", "hasta aquí", fin natural.

### Paso 1 — BITACORA.md

Insertar AL INICIO de `../../docs/BITACORA.md`:

```markdown
## Sesión YYYY-MM-DD — [NombreProyecto]: [Título descriptivo]

**Duración**: ~X horas
**Participantes**: Israel Miranda + Claude Sonnet 4.6
**Proyecto**: `apps/[nombre]` o `websites/[nombre]`

### Lo que se logró
[Bloques numerados. Detalles técnicos relevantes.]

### Bugs documentados
| Bug | Causa | Fix |
|-----|-------|-----|
*(omitir si no hubo bugs no obvios)*

### Decisiones tomadas
| Decisión | Razón |
|----------|-------|
*(omitir si no hubo decisiones de arquitectura)*

### Pendientes al cierre
- [ ] Pendiente 1
```

### Paso 2 — PROJECT_PLAN.md

1. Marcar completadas: `⬜` → `✅`
2. Agregar tareas nuevas (`⬜`)
3. Actualizar Resumen de Progreso
4. Agregar decisión a tabla de Decisiones

### Paso 3 — Memoria si aplica

Patrón útil a nivel monorepo → `.claude/memory/reference/` via `memory-manager`.

### Paso 4 — Confirmar

```
Sesión documentada ✓

Bitácora: entrada agregada
Plan: [N] tareas completadas
[Si nuevas]: [N] tareas nuevas agregadas
[Si memoria]: Guardado en .claude/memory/reference/[archivo]

Próxima sesión:
- [ ] Pendiente 1
```

---

## Registro en Tiempo Real (DURANTE la sesión)

- **Bug no obvio resuelto** → agregar fix en PROJECT_PLAN.md bajo la tarea relacionada
- **Decisión de arquitectura** → agregar a tabla Decisiones en PROJECT_PLAN.md inmediatamente
- **Tarea nueva surgida** → agregar en PROJECT_PLAN.md con estado `⬜`

**Regla:** No acumular para el cierre. PROJECT_PLAN.md refleja la realidad en todo momento.

---

## Filosofía: Arquitecto-First

```
NUNCA le digas a Israel que ejecute un comando.
NUNCA le pidas que edite un archivo.
EXPÓN tu razonamiento en decisiones de arquitectura.
DA opciones con tradeoffs cuando hay más de una solución viable.
TÚ haces TODO. Él aprueba o redirige.
```

---

## Decision Tree

```
Israel dice algo
    │
    ├── "Quiero crear una app / negocio / producto"
    │       → /new-app (entrevista → BUSINESS_LOGIC.md)
    │
    ├── "Necesito login / registro / autenticación"
    │       → /add-login (Supabase self-hosted auth completo)
    │
    ├── "Necesito pagos / cobrar / suscripciones"
    │       → /add-payments (Polar + webhooks)
    │
    ├── "Necesito emails / correos transaccionales"
    │       → /add-emails (Brevo SMTP + nodemailer — NO Resend)
    │
    ├── "Necesito PWA / notificaciones push"
    │       → /add-mobile (PWA + push + iOS)
    │
    ├── "Necesito landing page / scroll animation"
    │       → /website-3d (cinemático Apple-style)
    │
    ├── "Quiero agregar [feature compleja]" (DB + UI + API)
    │       → /prp → Israel aprueba → /bucle-agentico
    │
    ├── "Quiero agregar IA / chat / vision / RAG"
    │       → /ai [template] (Vercel AI SDK v5 + OpenRouter)
    │
    ├── "Revisa que funcione / testea / hay un bug"
    │       → /qa (Playwright CLI)
    │
    ├── "Necesito algo de BD / tabla / query / migración"
    │       → skill supabase (self-hosted — URL pública siempre)
    │
    ├── "Genera una imagen / thumbnail / logo"
    │       → /image-generation (OpenRouter + Gemini)
    │
    ├── "métricas SaaS" / "MRR" / "CAC" / "churn" / "diagnóstica"
    │       → /pm-analysis
    │
    ├── "análisis competitivo" / "posicionamiento" / "PLG" / "growth"
    │       → /pm-analysis
    │
    ├── "diseña la arquitectura de" / "cómo estructurarías" / "evalúa si"
    │       → Modo Arquitectura: opciones con tradeoffs → Israel decide → ejecutar
    │
    ├── "deploy" / "sube a producción" / "Docker" / "Cloudflare" / "VPS"
    │       → Modo Infraestructura: verificar tabla ARTEM Stack arriba → ejecutar via SSH
    │
    ├── "Recuerda" / "Guarda" / "En qué quedamos" / "No olvides"
    │       → memory-manager
    │
    ├── "Cerramos" / "Hasta aquí" / "Documenta el avance"
    │       → PROTOCOLO DE CIERRE
    │
    └── No encaja en nada
            → Leer codebase, entender patrones, ejecutar con criterio.
            → Ambigüedad técnica genuina: dos opciones con tradeoffs, no pregunta abierta.
```

---

## Golden Path — Stack de Este Proyecto

| Capa | Tecnología | Notas |
|------|-----------|-------|
| Framework | Next.js 16 + React 19 + TypeScript | App Router |
| Estilos | Tailwind CSS 3.4 + shadcn/ui | Sin CSS custom |
| Backend | Supabase self-hosted (Auth + PostgreSQL + RLS) | VPS aeap-agents |
| AI Engine | Vercel AI SDK v5 + OpenRouter | Fallback multi-modelo |
| Validación | Zod | Todos los inputs |
| Estado | Zustand | Estado global |
| Testing | Playwright CLI | Post-feature siempre |
| Deploy | Docker + Cloudflare Tunnel | NO Vercel salvo excepción documentada |
| Email | Brevo SMTP + nodemailer | NO Resend para transaccional |

### Comandos npm

```bash
npm run dev          # Auto-detecta puerto 3000-3006
npm run build
npm run lint
npm run typecheck
```

### Deploy — Checklist Docker (aeap-agents)

```bash
# Construir y levantar sin afectar otros servicios
docker compose up -d --no-deps --build <servicio>
# Agregar ingress en /etc/cloudflared/config.yml del VPS
# NEXT_PUBLIC_SUPABASE_URL = URL pública (nunca hostname Docker interno)
```

---

## Reglas de Código

- Archivos max 500 líneas, funciones max 50 líneas
- `camelCase` variables/hooks | `PascalCase` components | `kebab-case` files
- NUNCA `any` → usar `unknown`
- SIEMPRE validar inputs con Zod
- SIEMPRE habilitar RLS en tablas Supabase
- NUNCA exponer secrets (`.env` siempre, nunca en repo)
- Conventional Commits: `feat(scope):`, `fix(scope):`, `chore(scope):`
- Montos en MXN | Fechas en `America/Mexico_City` | Meses en español
- NUNCA leer archivos `.png`, `.jpg`, `.webp`, `.svg` como contexto

---

## MCPs Disponibles

```bash
# Playwright
npx playwright navigate http://localhost:3000
npx playwright screenshot http://localhost:3000 --output screenshot.png

# Supabase MCP
execute_sql, apply_migration, list_tables, get_advisors

# Next.js DevTools — conectado via /_next/mcp
```

---

## Auto-Blindaje

El mismo error NUNCA ocurre dos veces.

| Dónde documentar | Cuándo |
|-----------------|--------|
| Este CLAUDE.md | Errores específicos de esta app |
| Skill relevante en `.claude/skills/` | Errores que aplican a múltiples proyectos |
| `.claude/memory/reference/` | Aprendizajes para todo el monorepo |

### Aprendizajes de Este Proyecto

*(Se agregan aquí durante el desarrollo — no pre-poblar)*

---

## Decisiones de Arquitectura

| Fecha | Decisión | Razón |
|-------|---------|-------|
| *(se agregan durante el desarrollo)* | | |

---

*SaaS Factory V4 + ARTEM Stack — Arquitecto-First.*

---
## Contexto Específico de Este Proyecto

# macasahs — Sitio Web MACASA HS


---

## Que es este proyecto

Sitio web informativo profesional para MACASA HS, distribuidor tecnologico B2B.
Reemplaza un e-commerce obsoleto con un sitio estatico de presencia informativa.
Ver `BUSINESS_LOGIC.md` para contexto completo de negocio.

| Capa | Detalle |
|------|---------|
| Framework | Next.js 16 + React 19 + TypeScript |
| Backend | Supabase self-hosted (formulario de contacto) |
| Deploy | Docker en `aeap-agents` |
| Dominio | `https://aeap-macasa.artem.com.mx` |

## Negocio (resumen)

- Distribuidor TI B2B: hardware, software, licenciamiento, consultoria, cloud, virtualizacion
- Partners: Dell, HP, Lenovo, Apple, Microsoft y otros
- Usuarios: Gerentes TI y directores de compras de empresas medianas y PyMEs
- Contacto: formulario → notificacion a `contacto01@macasahs.com.mx`
- Sin base de datos por ahora (sitio estatico informativo)

## Notas tecnicas

- `settings.local.json` con permisos extendidos para Playwright y operaciones con imagenes/logos
- Sin e-commerce — NO agregar funcionalidad de tienda sin autorizacion explicita
