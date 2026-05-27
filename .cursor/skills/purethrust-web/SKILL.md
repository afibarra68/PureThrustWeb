---
name: purethrust-web
description: >-
  Builds and extends the PureThrust promotional React TS site (purethrust.com):
  mobile-first UI, release targets, infrastructure diagram, readonly types and
  api.ts fetch layer. Use for PureThrustWeb, landing, releases, infra diagram,
  or PureThrust branding.
---

# PureThrust Web

## Instrucción maestra

Usa tipos readonly, hooks para datos, y `services/api.ts` para cualquier fetch. Diseña **móvil primero**; el diagrama de infra debe leerse en vertical en pantallas estrechas. No hardcodear releases en componentes — usar JSON o API configurada con `VITE_API_BASE`.

## Archivos clave

| Área | Ruta |
|------|------|
| Plan por fases | `.cursor/PLAN.md` |
| Releases mock | `public/api/releases.json` |
| Infra mock | `public/api/infrastructure.json` |
| Biometrics mock | `public/api/biometrics.json` |
| Productos (3) | `public/api/products.json` — parqueo, biometrics, videoRecognizing |
| Logo mark | `public/logos/pht.png` — icono **tp** |
| Logo wordmark | `public/logos/tp.png` — banner **pure.thrust** |
| Diagrama | `components/infra/InfrastructureDiagram.tsx` |

## Añadir un release target

1. Editar `public/api/releases.json`.
2. Verificar tipo `ReleaseTarget` en `src/types/releases.types.ts`.
3. UI se actualiza vía `useReleases` sin cambiar componentes.
