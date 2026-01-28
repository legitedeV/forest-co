#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

if [ -f .env ]; then
  echo ".env already exists. Remove it to regenerate secrets."
  exit 0
fi

rand() {
  openssl rand -base64 32 | tr -d '\n'
}

APP_KEYS="$(rand)","$(rand)","$(rand)","$(rand)"
API_TOKEN_SALT="$(rand)"
ADMIN_JWT_SECRET="$(rand)"
JWT_SECRET="$(rand)"
TRANSFER_TOKEN_SALT="$(rand)"
ENCRYPTION_KEY="$(rand)"
CMS_PASSWORD_HASH="$(openssl passwd -apr1 "${CMS_PASSWORD:-admin}" )"

cat > .env <<ENV
CADDY_EMAIL=${CADDY_EMAIL:-ops@forestco.pl}
POSTGRES_USER=${POSTGRES_USER:-forest}
POSTGRES_PASSWORD=${POSTGRES_PASSWORD:-forest}
POSTGRES_DB=${POSTGRES_DB:-postgres}
STRAPI_DATABASE_NAME=${STRAPI_DATABASE_NAME:-forest_strapi}
MEDUSA_DATABASE_URL=${MEDUSA_DATABASE_URL:-postgres://forest:forest@postgres:5432/forest_medusa?sslmode=disable}
MEDUSA_REDIS_URL=${MEDUSA_REDIS_URL:-redis://redis:6379}
MEDUSA_PUBLIC_URL=${MEDUSA_PUBLIC_URL:-http://medusa:9000}
STRAPI_PUBLIC_URL=${STRAPI_PUBLIC_URL:-http://strapi:1337}
STRAPI_APP_KEYS="$APP_KEYS"
STRAPI_API_TOKEN_SALT="$API_TOKEN_SALT"
STRAPI_ADMIN_JWT_SECRET="$ADMIN_JWT_SECRET"
STRAPI_JWT_SECRET="$JWT_SECRET"
STRAPI_TRANSFER_TOKEN_SALT="$TRANSFER_TOKEN_SALT"
STRAPI_ENCRYPTION_KEY="$ENCRYPTION_KEY"
CMS_USER=${CMS_USER:-admin}
CMS_PASSWORD_HASH="$CMS_PASSWORD_HASH"
ENV

echo ".env generated in infra/.env"
