#!/usr/bin/env bash
# Export the public key to public/pgp/ (run after creating the key, and again
# after extending its expiry). Usage: scripts/pgp-publish.sh <FINGERPRINT> [--current]
set -euo pipefail
fpr="${1:?usage: pgp-publish.sh <FINGERPRINT> [--current]}"
dir="$(cd "$(dirname "$0")/.." && pwd)/public/pgp"
mkdir -p "$dir"
gpg --armor --export "$fpr" > "$dir/$fpr.asc"
[ "${2:-}" = "--current" ] && cp "$dir/$fpr.asc" "$dir/pubkey.asc"
echo "wrote $dir/$fpr.asc"
echo "update src/pgp.ts (fingerprint, created, expires, status)"
