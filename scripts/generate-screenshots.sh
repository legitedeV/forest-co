#!/usr/bin/env bash
set -euo pipefail

OUTPUT_DIR=${1:-artifacts}
mkdir -p "$OUTPUT_DIR"

for site in forestco forestcatering forestbar; do
  for page in home sklep oferta; do
    printf "Placeholder screenshot for %s %s\n" "$site" "$page" > "$OUTPUT_DIR/${site}-${page}.txt"
  done
done
