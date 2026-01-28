#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

docker compose pull --ignore-buildable
docker compose up -d --build

