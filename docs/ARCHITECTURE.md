# Architecture

## Routing

- `forestco.pl` -> `web-forestco`
- `forestcatering.pl` -> `web-forestcatering`
- `forestbar.pl` -> `web-forestbar`
- `api.forestco.pl` -> `medusa`
- `cms.forestco.pl` -> `strapi` (BasicAuth)

## Data flow

- Strapi -> Next.js (ForestCatering / ForestBar): treści stron i sekcje.
- Medusa -> Next.js (ForestCo): produkty do sklepu i detale.

## Services

- Caddy: TLS i reverse proxy.
- Postgres: bazy `forest_medusa` i `forest_strapi`.
- Redis: cache dla Medusa.
- Medusa: API produktów.
- Strapi: CMS dla treści.
