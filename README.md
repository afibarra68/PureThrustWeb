# PureThrust Web

Landing **mobile-first** (React + TypeScript) para **thrustpure.com**: release targets, diagrama de infraestructura y marca ThrustPure.

## Arranque rápido

```bash
cd PureThrustWeb
npm install
npm run dev
```

Abrir http://localhost:5173

## Plan y Cursor

| Recurso | Descripción |
|---------|-------------|
| [`.cursor/PLAN.md`](.cursor/PLAN.md) | Fases P0–P5 y proceso de trabajo |
| `@purethrust-web` | Skill maestro |
| `.cursor/rules/` | mobile-first, api-layer |

## Contenido (backend libre)

Editar sin tocar React:

- `public/api/releases.json` — targets de release
- `public/api/products.json` — parking, compras, banking gateway, biometrics, publish, VideoRecognizing
- `public/api/banking.json` — incentivo de compras y orquestación de pagos
- `public/api/publish.json` — incentivación, signage, móvil y web
- `public/api/compras.json` — carrito Redis y checkout
- `public/api/biometrics.json` — detalle biométrico (planeación)
- `public/api/infrastructure.json` — capas del diagrama
- `public/logos/pht.png` — marca **tp** (header, favicon)
- `public/logos/tp.png` — wordmark **thrust.pure** (hero)

## API real (fase P3)

Definir `VITE_API_BASE` apuntando a Supabase REST, Strapi o tu backend Quarkus. Mantener la misma forma JSON que los archivos mock.

## Scripts

| Comando | Uso |
|---------|-----|
| `npm run dev` | Desarrollo |
| `npm run build` | Producción |
| `npm run preview` | Preview del build |

## Diseño

- **Móvil primero:** layout vertical, CTA apilados, diagrama en columna.
- **≥768px:** grid de releases y diagrama horizontal por capas.
