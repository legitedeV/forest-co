#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

BACKUP_DIR=${BACKUP_DIR:-./backups}
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")
RETENTION_DAYS=${RETENTION_DAYS:-7}

mkdir -p "$BACKUP_DIR"

echo "==> Backing up Postgres databases"
docker compose exec -T postgres pg_dump -U "${POSTGRES_USER:-forest}" forest_medusa > "$BACKUP_DIR/medusa-$TIMESTAMP.sql"
docker compose exec -T postgres pg_dump -U "${POSTGRES_USER:-forest}" forest_strapi > "$BACKUP_DIR/strapi-$TIMESTAMP.sql"

echo "==> Backing up Strapi uploads"
docker compose exec -T strapi tar -czf - /opt/app/public/uploads > "$BACKUP_DIR/strapi-uploads-$TIMESTAMP.tar.gz"

echo "==> Cleaning old backups (> ${RETENTION_DAYS} days)"
find "$BACKUP_DIR" -type f -mtime "+${RETENTION_DAYS}" -delete
