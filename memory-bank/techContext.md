# Tech context

## Stack

- **HTML5** sémantique.
- **CSS maison** avec variables (`--jaune`, `--noir`, `--blanc`, `--font-*`).
- **JavaScript vanilla** : IIFE, `'use strict'`, amélioration progressive.
- **Tailwind CSS** via CDN, uniquement sur `html-css.html`.
- **Google Fonts** : Archivo + Space Mono.

## Outils de travail

- `git` et **GitHub CLI** (`gh`) pour le versionnement et la publication.
- **Node.js** et **npm** disponibles, mais aucun build nécessaire.
- **Python 3 + PyMuPDF** pour extraire le texte et les visuels des PDF.
- Éditeur : VS Code + Cline.

## Contraintes

- GitHub Pages : hébergement statique uniquement, pas de serveur.
- Limite GitHub : 100 Mo par fichier. Règle projet : au-delà de 15 Mo → lien externe.
- Poids et performances : éviter les dépendances lourdes.
- Accessibilité et responsive obligatoires.
- Les fichiers volumineux ne doivent jamais entrer dans l'historique Git.

## Déploiement

- Dépôt public : `calogerovolpe/super-portfolio`.
- GitHub Pages : branche `main`, dossier `/` (racine).
- `.nojekyll` présent pour désactiver Jekyll.
- URL : https://calogerovolpe.github.io/super-portfolio/

## Sources de contenu

- Dossier local `docs/`, ignoré par Git.
- Les visuels retenus sont copiés dans `assets/img/`, `assets/fichiers/` ou
  `assets/video/` au fil des jalons.
- Aperçus : PyMuPDF + Pillow → WebP (largeur 1000 px, qualité 82).
- Les gros fichiers sont publiés hors dépôt (liens externes), dans la release
  GitHub `livrables-volumineux`.
