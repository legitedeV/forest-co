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
cp env.example .env
./scripts/deploy.sh
```
