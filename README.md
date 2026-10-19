# Super-portfolio — Volpe Calogero

Portfolio de design graphique et communication web : identités visuelles, chartes
graphiques, supports imprimés, sites web, datavisualisation et mascottes.
Site statique, publié sur GitHub Pages.

**En ligne :** https://calogerovolpe.github.io/super-portfolio/

## Identité visuelle

- **Trois couleurs uniquement** : jaune `#FFD500`, noir `#0B0B0B`, blanc `#FFFFFF`.
  La hiérarchie passe par l'opacité du noir ou du blanc, jamais par une quatrième teinte.
- **Formes** : exclusivement des carrés et des rectangles — aucun cercle, triangle
  ni arrondi (`border-radius: 0`). Les carrés peuvent se superposer.
- **Typographies** : Archivo (titres), Space Mono (métadonnées), système (corps).
- **Ton** : éditorial, graphique, contrasté, mémorable.

## Projets

| Projet | Nature | Page |
| --- | --- | --- |
| Bakery Bliss Café | Étude, charte graphique, prototype, vidéo, datavisualisation, affiche, dépliant | `bakery-bliss-cafe.html` |
| Business plan Sosse | Business plan InDesign, entreprise fictive | `business-plan-sosse.html` |
| Casa Urpi | Charte graphique (InDesign 2025) | `casa-urpi.html` |
| L'îlot Câlins | Charte graphique et mascotte — projet réel, diffusion autorisée | `lilot-calins.html` |
| Flat design | 2 illustrations SVG, mascotte likeandsee, dessins main levée | `flat-design.html` |

## Pages transverses

- `index.html` — accueil mémorable
- `portfolio.html` — grille des six projets
- `html-css.html` — démonstrations HTML, CSS et Tailwind
- `a-propos.html`, `contact.html`, `mentions-legales.html`, `404.html`

## Structure du dépôt

```text
super-portfolio/
├── index.html               Accueil
├── *.html                   Pages projets et pages transverses (à plat)
├── assets/
│   ├── css/style.css        Feuille de style unique (tokens + composants)
│   ├── css/print.css        Impression
│   ├── js/                  Navigation, retour en haut, thème, lightbox
│   ├── img/                 Aperçus et visuels optimisés
│   ├── fichiers/            PDF légers
│   └── video/               Vidéos légères
├── memory-bank/             Contexte et avancement du projet
├── .clinerules              Règles de collaboration avec Cline
├── .nojekyll                Désactive Jekyll sur GitHub Pages
└── docs/                    Sources locales, non publiées (voir .gitignore)
```

## Règles de publication

- Chaque modification est **`git add` → `git commit` → `git push`** immédiatement.
- Le site doit rester consultable en ligne après chaque push.
- Les fichiers de plus de 15 Mo sont exclus du dépôt et **liés en externe**
  (`.fig` 125 Mo, datavisualisation 30 Mo, vidéo 18 Mo).
- Tout le contenu est fictif, **sauf L'îlot Câlins** (diffusion autorisée).

## Jalons

| # | Jalon | État |
| --- | --- | --- |
| 1 | Fondations, conventions, dépôt, GitHub Pages | ✅ Terminé |
| 2 | Coquille du site, identité visuelle, accueil mémorable | ✅ Terminé |
| 3 | Pages projets : Bakery Bliss Café + Sosse | ✅ Terminé |
| 4 | Pages projets : Casa Urpi + L'îlot Câlins + flat design | ✅ Terminé |
| 5 | Page « HTML & CSS » + Tailwind (compétences web) | ⬜ À faire |
| 6 | Page « Compétences » (logiciels + exemples interactifs) | ⬜ À faire |
| 7 | Finitions | ⬜ À faire |

Les douze pages sont en ligne. Les fiches projets Bakery, Sosse, Casa Urpi,
L'îlot Câlins et Flat design sont complètes : textes issus des PDF, documents,
galeries et lightbox.

## Publication

Dépôt public, branche `main`, dossier `/` (racine). Hébergement GitHub Pages.
Le fichier `.nojekyll` empêche le traitement Jekyll et garantit la publication
des dossiers commençant par un underscore.

## Mentions

© Volpe Calogero — tous droits réservés. Les projets présentés sont des travaux
de formation ou fictifs, à l'exception de L'îlot Câlins (présenté avec
autorisation) et de la mascotte likeandsee, réalisée pour l'ancienne
micro-entreprise de l'auteur.
