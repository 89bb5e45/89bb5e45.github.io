#!/bin/bash

# CONFIG
ALFOLIO_REPO="https://github.com/alshedivat/al-folio.git"
VERSION_FILE=".alfolio-version"

# Ensure version file exists
if [ ! -f "$VERSION_FILE" ]; then
  echo "[ERROR] $VERSION_FILE not found. Add the current version (e.g., v0.14.3) to it."
  exit 1
fi

CURRENT_VERSION=$(cat "$VERSION_FILE")
echo "[INFO] Current al-folio version: $CURRENT_VERSION"

# Get the latest version tag from GitHub
LATEST_VERSION=$(git ls-remote --tags "$ALFOLIO_REPO" | \
  grep -o 'refs/tags/v[0-9]\+\.[0-9]\+\.[0-9]\+$' | \
  sed 's#refs/tags/##' | \
  sort -V | tail -n1)

if [ -z "$LATEST_VERSION" ]; then
  echo "[ERROR] Failed to fetch latest version tag."
  exit 1
fi

echo "[INFO] Latest al-folio version: $LATEST_VERSION"

# Compare versions
if [ "$CURRENT_VERSION" = "$LATEST_VERSION" ]; then
  echo "[INFO] You're already using the latest version of al-folio."
  exit 0
fi

echo "[UPDATE] New version available: $LATEST_VERSION"

# TEMP DIR for latest download
TMP_DIR=$(mktemp -d)
echo "[INFO] Cloning latest al-folio into $TMP_DIR..."
git clone --depth 1 --branch "$LATEST_VERSION" "$ALFOLIO_REPO" "$TMP_DIR"

# Optionally overwrite or diff
echo "[ACTION] Review the changes in $TMP_DIR"
echo "You can run:"
echo "    meld . $TMP_DIR"
echo "Or:"
echo "    cp -r $TMP_DIR/* .    # to overwrite"
echo "    rm -rf $TMP_DIR"

# Update stored version
echo "$LATEST_VERSION" > "$VERSION_FILE"
echo "[INFO] Updated $VERSION_FILE to $LATEST_VERSION"
