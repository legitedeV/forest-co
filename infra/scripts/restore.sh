#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

DUMP_FILE=${1:-}
DB_NAME=${2:-}

if [[ -z "${DUMP_FILE}" || -z "${DB_NAME}" ]]; then
  echo "Usage: restore.sh path/to/dump.sql database_name"
  exit 1
fi

docker compose exec -T postgres psql -U "${POSTGRES_USER:-forest}" "${DB_NAME}" < "$DUMP_FILE"
