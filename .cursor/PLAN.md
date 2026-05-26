# PureThrust Web — Plan por procesos

Sitio promocional **mobile-first** (React + TS) para **thrustpure.com**: releases, targets de infraestructura y diagrama de arquitectura. Backend desacoplado vía capa `services/api`.

## Fases

| Fase | Objetivo | Estado |
|------|----------|--------|
| **P0** | Fundación: Vite, TS, tokens CSS móvil, logos SVG | ✅ En curso |
| **P1** | Datos: JSON mock (`/api/*.json`) + hooks + tipos readonly | ✅ En curso |
| **P2** | UI: Hero, Biometrics, Release Targets, diagrama infra | ✅ En curso |
| **P3** | Backend real: Supabase / Strapi / Quarkus (env `VITE_API_BASE`) | Pendiente |
| **P4** | Tablet/desktop: grid 2-col, diagrama horizontal | Pendiente |
| **P5** | CI, dominio thrustpure.com, assets oficiales de marca | Pendiente |

## Proceso de trabajo (para Cursor)

1. **Leer** `.cursor/PLAN.md` y skill `@purethrust-web` antes de tocar UI o API.
2. **Tipos primero** en `src/types/` — no inventar campos en componentes.
3. **Mobile-first**: estilos base en `@media (min-width: 768px)` para ampliar.
4. **Datos**: solo `src/services/api.ts` hace `fetch`; componentes usan hooks.
5. **Contenido**: editar `public/api/releases.json` e `infrastructure.json` (o CMS después).
6. **Logos**: `pht.png` (mark) y `tp.png` (wordmark) en `public/logos/` — fuente `purethrust.com/`.

## Backend libre (opciones documentadas)

| Opción | Uso | Costo |
|--------|-----|-------|
| JSON estático (actual) | MVP, demo, GitHub Pages | Gratis |
| [JSON Server](https://github.com/typicode/json-server) | CRUD local `npm run api:mock` | Gratis |
| [Supabase](https://supabase.com) REST | Producción con auth | Free tier |
| VThreads / Quarkus propio | Misma org que MvpProjects | Self-hosted |

## Entregables por sprint

- **Sprint 1 (ahora):** landing móvil + diagrama + targets mock.
- **Sprint 2:** formulario contacto, animaciones suaves, dark/light.
- **Sprint 3:** API real + estados loading/error unificados.

## Invocación en Cursor

- `@purethrust-web` — skill maestro
- Reglas: `.cursor/rules/mobile-first.mdc`, `api-layer.mdc`
