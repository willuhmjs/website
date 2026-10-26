#!/usr/bin/env bash
# Detached-sign every blog post. Copies each source file to public/pgp/signed/
# and writes <file>.asc next to it, so readers can run:
#   gpg --verify <slug>.md.asc <slug>.md
# Re-signs only posts whose source changed. Usage: scripts/sign-posts.sh [KEYID]
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
out="$root/public/pgp/signed"
key=()
[ -n "${1:-}" ] && key=(--local-user "$1")
mkdir -p "$out"
for f in "$root"/src/content/blog/*/index.md*; do
  slug="$(basename "$(dirname "$f")")"
  ext="${f##*.}"
  dest="$out/$slug.$ext"
  if [ -f "$dest.asc" ] && cmp -s "$f" "$dest"; then continue; fi
  cp "$f" "$dest"
  gpg --batch --yes --armor --detach-sign "${key[@]}" --output "$dest.asc" "$dest"
  echo "signed $slug"
done
