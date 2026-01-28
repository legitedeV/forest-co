#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "Pobieram aktualizacje 0%"

echo "Pobieram aktualizacje 50%"

git pull origin main
echo "Pobieram aktualizacje 99%"
echo "Pobrano aktualizacje - 100%"

echo "==> Pulling images"
docker compose pull --ignore-buildable

echo "==> Building and starting stack"
docker compose up -d --build

echo "==> Current service status"
docker compose ps
