# forest-co

Monorepo for ForestCo storefronts, CMS, and commerce backend.

## Structure

- `apps/` Next.js apps, Medusa, Strapi
- `packages/` shared UI/config
- `infra/` Docker Compose + Caddy + scripts
- `docs/` runbook and architecture

## Local setup

```bash
pnpm install
pnpm build
```

## Infrastructure

```bash
cd infra
./scripts/gen-secrets.sh
./scripts/deploy.sh
./scripts/db-ensure.sh
./scripts/seed-medusa.sh
./scripts/seed-strapi.sh
```
