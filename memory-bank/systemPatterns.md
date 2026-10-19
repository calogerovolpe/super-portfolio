# System patterns

## Architecture

Site statique multi-pages, sans build. Les pages HTML sont à plat à la racine,
les ressources sont partagées dans `assets/`. Hébergement GitHub Pages,
branche `main`, dossier racine, fichier `.nojekyll` présent.

## Arborescence cible

```text
/
├── index.html
├── bakery-bliss-cafe.html
├── business-plan-sosse.html
├── casa-urpi.html
├── lilot-calins.html
├── flat-design.html
├── html-css.html
├── competences.html
├── a-propos.html
├── contact.html
├── mentions-legales.html
├── 404.html
├── assets/
│   ├── css/style.css
│   ├── css/print.css
│   ├── js/nav.js
│   ├── js/viewer.js
│   ├── js/home.js
│   ├── js/competences.js   (à venir, jalon 6)
│   ├── img/
│   ├── fichiers/
│   └── video/
├── memory-bank/
├── .clinerules
├── .gitignore
└── .nojekyll
```

## Composants transverses

### Barre latérale (`site-sidebar`)

- Repliable en CSS pur via une case à cocher `#nav-reduit`.
- Titre + sigle, navigation avec icônes SVG, bascule de thème (clair / sombre, mémorisée).
- L'indication de page courante se fait en HTML (`aria-current="page"`).

### Retour en haut (`back-to-top`)

- Bouton créé en JavaScript (aucun contrôle inopérant sans JS).
- Apparaît après 400 px de défilement, défilement doux, respecte
  `prefers-reduced-motion`.

### Menu bas responsive

- `position: fixed; bottom: 0;` avec `padding` intégrant
  `env(safe-area-inset-bottom)`.
- `scroll-padding-bottom` sur `html` pour ne jamais masquer le contenu.
- Le bouton retour en haut se place au-dessus du menu bas.

### Lightbox (`viewer`)

- Ouverture au clic sur une image ou un document.
- Fermeture : bouton, touche Échap, clic sur le fond.
- Focus géré, défilement du `body` bloqué pendant l'ouverture.

### Footer et navigation de fin

- Footer en groupes : « Sections », « Projets », « Informations ».
- `nav-fin` : navigation précédent / suivant en bas de chaque page.

## Implémentation (jalon 2)

- Barre latérale : `#nav-reduit` + `.site-sidebar`, repli à 4,75 rem, état
  mémorisé dans `localStorage`.
- Menu bas : `@media (max-width: 959px)`, `.site-nav` horizontal et bouton thème.
- Lightbox : `.visionneuse`, déclencheurs `[data-lightbox]`, fermeture par bouton,
  touche Échap ou clic sur le fond.
- Apparitions : `.js [data-reveal]` + `.est-visible` via `IntersectionObserver`.
- Thème : `[data-theme="clair"]`, préférence mémorisée, sans flash au chargement.
- Parallaxe : `[data-parallax]` dans `.hero-visuel`, pointeur fin uniquement.
- Débordement : `overflow-x: hidden` sur `html` et `body` (bandeau défilant).

## Implémentation (jalon 3)

- Pages projets : `.carte-livrable` (aperçu cliquable, numéro, méta, actions),
  `.badge` (PDF / Externe), `.doc-actions`, `.doc-vedette`, `.galerie-doc`.
- Aperçus WebP dans `assets/img/bakery/` et `assets/img/sosse/` ; documents
  légers dans `assets/fichiers/`.
- Gros fichiers : release GitHub `livrables-volumineux`, liens externes.
- Lightbox : `.visionneuse-telecharger`, lien de secours pour les PDF.

## Conventions de code

- Classes en français, kebab-case (`.carte-projet`, `.nav-fin`).
- Une seule feuille de style : `assets/css/style.css`.
- JavaScript découpé par rôle, IIFE, `'use strict'`, amélioration progressive.
- Attributs `data-*` pour les hooks JavaScript.
- Images : `width` / `height` explicites, `loading="lazy"`, `alt` descriptif.
- Variables CSS d'identité : `--jaune`, `--noir`, `--blanc`, `--font-display`,
  `--font-mono`, `--font-body`.

## Sécurité et sobriété

- Aucun script tiers hormis Google Fonts et Tailwind (page de démonstration).
- Aucun cookie, aucun traceur.
- Aucune dépendance npm requise pour publier.
