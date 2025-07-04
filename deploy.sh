#!/bin/bash

echo "🧹 Nettoyage Gatsby..."
npx gatsby clean

echo "🔨 Build Gatsby..."
npx gatsby build

echo "📦 Ajout des fichiers..."
git add .

echo "📝 Commit automatique..."
git commit -m "🚀 Déploiement auto $(date '+%Y-%m-%d %H:%M:%S')"

echo "📤 Push vers main..."
git push origin main

echo "✅ Terminé."