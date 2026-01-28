#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> Pulling images"
docker compose pull --ignore-buildable

echo "==> Building and starting stack"
docker compose up -d --build

echo "==> Current service status"
docker compose ps
