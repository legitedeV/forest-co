#!/usr/bin/env bash
set -euo pipefail

DUMP_FILE=$1

if [[ -z "${DUMP_FILE}" ]]; then
  echo "Usage: restore.sh path/to/dump.sql"
  exit 1
fi

docker compose exec -T postgres psql -U "${POSTGRES_USER:-forest}" "${POSTGRES_DB:-forest}" < "$DUMP_FILE"
