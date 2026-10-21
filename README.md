# Super-portfolio — Volpe Calogero

Portfolio de design graphique et communication web : identités visuelles, chartes
graphiques, supports imprimés, sites web, datavisualisation et mascottes.
Site statique, publié sur GitHub Pages.

**En ligne :** https://calogerovolpe.github.io/super-portfolio/

## Langues et transparence

- **FR** à la racine, **NL** dans `nl/` : 14 pages traduites + `transparantie.html`.
- `assets/js/lang.js` détecte la langue du navigateur (`navigator.language`) et
  redirige un visiteur néerlandais vers `nl/`, sauf choix manuel mémorisé
  (`localStorage.lang`). Sélecteur FR/NL dans la barre latérale.
- Chaque page porte les liens `hreflang` `fr`, `nl` et `x-default`.
- Bandeau de transparence en haut de toutes les pages :
  - version NL : contenu généré à 100 % avec l'IA (niveau B2) ;
  - version FR : usage de l'IA pour pallier les lacunes, sans revendiquer
    que la page a été écrite par l'IA.
- Pages dédiées : `methode-ia.html` (FR) et `nl/transparantie.html` (NL),
  avec procédure en cinq étapes, exemples (JavaScript, traductions, Python)
  et méthode de vérification.

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
| Business plan Sosse | Business plan Illustrator, entreprise fictive | `business-plan-sosse.html` |
| Casa Urpi | Charte graphique (InDesign 2025) | `casa-urpi.html` |
| L'îlot Câlins | Charte graphique et mascotte — projet réel, diffusion autorisée | `lilot-calins.html` |
| Flat design | 2 illustrations SVG, mascotte likeandsee, dessins main levée | `flat-design.html` |
| Photographie | Portraits (Lightroom + Photoshop) et photo de rue | `photographie.html` |

## Pages transverses

- `index.html` — accueil : chiffres cliquables, parcours, projets, compétences
- `portfolio.html` — grille des sept projets (taille des cartes au choix : liste, moyen, grand) et page Compétences
- `html-css.html` — démonstrations HTML, CSS, JavaScript, Tailwind, formulaire de don, menu responsive, grille redimensionnable et outils web (dont Docker/VPS et Bash)
- `competences.html` — sept logiciels, onglets Graphiste / Développeur, matrice projets × outils et repères techniques
- `parcours.html` — section « Qui suis-je » avec photo, parcours professionnel et formations, savoir-faire et savoir-être pour les métiers de la communication, du design et du web
- `contact.html` — formule de contact orientée recrutement, disponibilité, carte et calcul de distance ; `mentions-legales.html`, `404.html`
- `methode-ia.html` — méthode d'usage de l'IA (FR) ; `nl/transparantie.html` — transparence complète (NL)
- `nl/` — version néerlandaise des 14 pages + page de transparence

## Structure du dépôt

```text
super-portfolio/
├── index.html               Accueil
├── *.html                   Pages projets et pages transverses (à plat)
├── methode-ia.html          Méthode d'usage de l'IA (FR)
├── nl/                      Version néerlandaise (14 pages + transparence)
├── favicon.svg              Icône vectorielle
├── favicon.ico              Icône 32×32
├── robots.txt               Directives d'indexation
├── sitemap.xml              Plan du site (28 URLs)
├── assets/
│   ├── css/style.css        Point d'entrée (@import des modules CSS)
│   ├── css/tokens.css       Variables et thèmes clair/sombre
│   ├── css/base.css         Reset, typographie, utilitaires
│   ├── css/layout.css       Structure, sidebar, en-tête, pied de page
│   ├── css/composants.css   Boutons, visionneuse, étiquettes
│   ├── css/pages.css        Styles des pages (accueil, projets, etc.)
│   ├── css/demo.css         Démonstrations (onglets, accordéon, don…)
│   ├── css/responsive.css   Media queries fusionnées
│   ├── css/print.css        Impression
│   ├── js/                  Navigation, thème, lightbox, démos, photos, compétences, projets
│   ├── img/                 Aperçus, image de partage et icône Apple
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
| 5 | Page « HTML & CSS » + Tailwind (compétences web) | ✅ Terminé |
| 6 | Page « Compétences » (logiciels + exemples interactifs) | ✅ Terminé |
| 7 | Finitions | ✅ Terminé |
| 8 | Page « Parcours » (savoir-faire & savoir-être) | ✅ Terminé |
| 9 | Accueil : synthèses Parcours & Compétences, cartes-affiches | ✅ Terminé |
| 10 | Refonte des demandes client (accueil, projets, démo, compétences, parcours, contact) | ✅ Terminé |
| 11 | Version NL, sélecteur de langue, détection automatique et transparence IA | ✅ Terminé |

Les trente pages sont en ligne (15 FR + 15 NL). Les fiches projets Bakery, Sosse,
Casa Urpi, L'îlot Câlins, Flat design et Photographie sont complètes : textes issus
des PDF, documents, galeries et lightbox.

## Publication

Dépôt public, branche `main`, dossier `/` (racine). Hébergement GitHub Pages.
Le fichier `.nojekyll` empêche le traitement Jekyll et garantit la publication
des dossiers commençant par un underscore.

## Mentions

© Volpe Calogero — tous droits réservés. Les projets présentés sont des travaux
de formation ou fictifs, à l'exception de L'îlot Câlins (présenté avec
autorisation) et de la mascotte likeandsee, réalisée pour l'ancienne
micro-entreprise de l'auteur.
