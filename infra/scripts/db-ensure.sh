#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

POSTGRES_USER=${POSTGRES_USER:-forest}

ensure_db() {
  local db_name="$1"
  docker compose exec -T postgres psql -U "$POSTGRES_USER" -d postgres -v ON_ERROR_STOP=1 <<SQL
DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_database WHERE datname = '$db_name') THEN
    CREATE DATABASE $db_name;
  END IF;
END $$;
SQL
}

ensure_db "forest_medusa"
ensure_db "forest_strapi"
