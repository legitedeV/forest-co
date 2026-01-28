#!/usr/bin/env bash
set -euo pipefail

BACKUP_DIR=${BACKUP_DIR:-/var/backups/forest}
TIMESTAMP=$(date +%Y%m%d%H%M%S)

mkdir -p "$BACKUP_DIR"

docker compose exec -T postgres pg_dump -U "${POSTGRES_USER:-forest}" "${POSTGRES_DB:-forest}" > "$BACKUP_DIR/postgres-$TIMESTAMP.sql"

tar -czf "$BACKUP_DIR/uploads-$TIMESTAMP.tar.gz" /var/lib/docker/volumes 2>/dev/null || true

ls -1t "$BACKUP_DIR" | tail -n +15 | xargs -I {} rm -f "$BACKUP_DIR/{}" || true
