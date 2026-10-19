# Progress

## Jalons

| # | Jalon | État |
| --- | --- | --- |
| 1 | Fondations et conventions | ✅ Terminé |
| 2 | Coquille du site et accueil | ✅ Terminé |
| 3 | Pages projets : Bakery Bliss Café + Sosse | ⬜ À faire |
| 4 | Pages projets : Casa Urpi + L'îlot Câlins + flat design | ⬜ À faire |
| 5 | Page « HTML & CSS » + Tailwind | ⬜ À faire |
| 6 | Finitions | ⬜ À faire |

## Journal

### 2026-10-19 — Jalon 1

- Création du dépôt public `super-portfolio`.
- Documentation de structure : `README.md`, `.clinerules`, `memory-bank/`.
- Identité posée : jaune/noir/blanc, carrés et rectangles exclusivement.
- Page placeholder publiée, GitHub Pages activé et vérifié : `index.html` et
  `assets/css/style.css` répondent en HTTP 200, build GitHub Pages `built`.
- Décision : gros fichiers en liens externes ; flat design en page dédiée ;
  nom du dépôt `super-portfolio`.

### 2026-10-19 — Jalon 2

- Coquille complète : barre latérale repliable, menu bas responsive (≤ 959 px),
  footer en trois groupes, navigation précédent/suivant, lien d'évitement.
- `assets/css/style.css` réécrit : identité, composants, responsive et thème clair.
- `assets/css/print.css` ajouté.
- `assets/js/nav.js` (retour en haut, thème, copie d'e-mail, état de la barre),
  `assets/js/home.js` (parallaxe et apparitions), `assets/js/viewer.js` (lightbox).
- Accueil mémorable : hero animé, bandeau défilant, manifeste, projets, galerie
  réelle de L'îlot Câlins, outils, méthode, appel à l'action.
- Onze pages complémentaires : portfolio, démo HTML/CSS, à propos, contact,
  mentions légales, 404 et cinq fiches projets (structures à enrichir).
- Cinq visuels de L'îlot Câlins copiés dans `assets/img/lilot/`.
- Vérifications : JS valide, CSS équilibré, liens locaux OK, rendu desktop,
  mobile et thème clair contrôlé par captures Chrome, `scrollWidth` corrigé.
- Site en ligne : pages, CSS, JS et images en HTTP 200 ; accents vérifiés.
- Commit `0846ac0`.

## Points ouverts

- Hébergement des gros fichiers (GitHub Releases ou lien fourni).
- Sélection du contenu des PDF à présenter (jalons 3 et 4).
- Enrichissement des cinq fiches projets (textes, documents, galeries).
