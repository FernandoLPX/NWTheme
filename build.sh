#!/bin/bash

set -e

echo ""
echo "╔════════════════════════════════════════════════╗"
echo "║         🐳 NWTheme Package Generator 🐋        ║"
echo "╚════════════════════════════════════════════════╝"
echo ""

echo "  📦 Gerando pacote VSIX..."
yes | docker compose run --rm vsce

echo ""
echo "  📁 Arquivos em dist/:"
ls -lh dist/

echo ""
echo "✅ Pacote gerado com sucesso!"
