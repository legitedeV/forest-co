# Runbook

## Deploy

```bash
cd infra
./scripts/gen-secrets.sh
./scripts/deploy.sh
./scripts/db-ensure.sh
./scripts/seed-medusa.sh
./scripts/seed-strapi.sh
```

## Rollback

1. Zidentyfikuj poprzedni obraz lub tag.
2. W `infra/docker-compose.yml` ustaw odpowiedni tag.
3. Wykonaj `docker compose up -d --build`.

## Backup

```bash
cd infra
./scripts/backup.sh
```

## Restore

```bash
cd infra
./scripts/restore.sh backups/medusa-YYYYMMDD-HHMMSS.sql forest_medusa
./scripts/restore.sh backups/strapi-YYYYMMDD-HHMMSS.sql forest_strapi
```

Uploads Strapi przywrócisz poprzez rozpakowanie archiwum `strapi-uploads-*.tar.gz` do `/opt/app/public/uploads` w kontenerze Strapi.
