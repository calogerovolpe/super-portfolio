# Active context

## Jalon en cours

**Jalon 2 — Coquille du site et accueil mémorable.** Terminé.

## Ce qui est en place

- Dépôt public `super-portfolio` et GitHub Pages (branche `main`, racine).
- Douze pages HTML : accueil, portfolio, démo HTML/CSS, à propos, contact,
  mentions légales, 404 et cinq fiches projets.
- Coquille commune : barre latérale repliable, retour en haut, menu bas
  responsive, footer en trois groupes, navigation précédent/suivant.
- Identité : jaune `#FFD500`, noir `#0B0B0B`, blanc `#FFFFFF`, carrés et
  rectangles exclusivement ; Archivo + Space Mono.
- `assets/css/style.css` (tokens, composants, responsive, thème clair) et
  `assets/css/print.css`.
- `assets/js/nav.js` (retour en haut, thème, copie d'e-mail, état de la barre),
  `assets/js/home.js` (parallaxe, apparitions), `assets/js/viewer.js` (lightbox).
- Accueil mémorable : hero animé, bandeau défilant, projets, galerie réelle de
  L'îlot Câlins, outils, méthode, appel à l'action.
- Cinq visuels de L'îlot Câlins dans `assets/img/lilot/`.
- Site en ligne vérifié : pages, CSS, JS et images en HTTP 200.

## Prochaine étape

**Jalon 3 — Pages projets : Bakery Bliss Café + Sosse.**

1. Lire les PDF concernés avec PyMuPDF et sélectionner les contenus à présenter.
2. Rédiger les textes descriptifs à partir des documents réels.
3. Intégrer les images et documents légers dans `assets/`.
4. Mettre en place la galerie et la lightbox sur les deux pages.
5. Traiter les gros fichiers (`.fig`, datavisualisation, vidéo) par liens externes.
6. Vérifier, commit et push.

## Décisions récentes

- Gros fichiers (`.fig` 125 Mo, datavisualisation 30 Mo, vidéo 18 Mo) : liens
  externes, jamais dans le dépôt.
- Flat design : page dédiée (`flat-design.html`).
- Nom du dépôt : `super-portfolio` (public).
- Menu bas responsive à partir de 959 px ; thème clair/sombre mémorisé.
- Le contenu de L'îlot Câlins peut être publié (autorisation).

## Points ouverts

- Hébergement exact des gros fichiers : GitHub Releases ou lien fourni.
- Sélection du contenu des PDF (jalons 3 et 4).
- Enrichissement des cinq fiches projets.
