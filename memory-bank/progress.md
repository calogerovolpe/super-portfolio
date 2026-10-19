# Progress

## Jalons

| # | Jalon | État |
| --- | --- | --- |
| 1 | Fondations et conventions | ✅ Terminé |
| 2 | Coquille du site et accueil | ✅ Terminé |
| 3 | Pages projets : Bakery Bliss Café + Sosse | ✅ Terminé |
| 4 | Pages projets : Casa Urpi + L'îlot Câlins + flat design | ✅ Terminé |
| 5 | Page « HTML & CSS » + Tailwind (compétences web) | ⬜ À faire |
| 6 | Page « Compétences » (logiciels + exemples interactifs) | ⬜ À faire |
| 7 | Finitions | ⬜ À faire |

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

### 2026-10-19 — Jalon 3

- Lecture des PDF avec PyMuPDF (texte et métadonnées) : étude 33 p., charte
  15 p., site 2 p., vidéo 3 p., dataviz 2 p., affiche 1 p., dépliant 2 p.,
  business plan Sosse 10 p.
- 15 aperçus WebP générés (largeur 1000 px, qualité 82) dans
  `assets/img/bakery/` et `assets/img/sosse/`.
- 7 PDF légers copiés dans `assets/fichiers/bakery/` et
  `assets/fichiers/sosse/`.
- 3 gros fichiers (`.fig` 125 Mo, `.mp4` 18 Mo, dataviz 30 Mo) publiés dans
  la release GitHub `livrables-volumineux` ; liens de téléchargement intégrés.
- Page Bakery : hero, « Le projet », grille des 9 livrables, extraits de la
  charte, navigation précédent/suivant.
- Page Sosse : hero, « Le projet », chiffres clés, document et galerie de
  pages, navigation précédent/suivant.
- CSS : `.carte-livrable`, `.badge`, `.doc-actions`, `.doc-vedette`,
  `.galerie-doc`, `.note`, `.visionneuse-telecharger`.
- `viewer.js` : lien de téléchargement de secours pour les PDF.
- Validation : balises OK, 42 + 26 références locales OK, images avec `alt`
  et dimensions, HTTP 200 (HTML, CSS, JS, PDF `application/pdf`, WebP).
- Décisions : WebP ; étude 13,2 Mo conservée ; gros fichiers en release
  GitHub ; Sosse affiché « Adobe Illustrator » car le PDF est signé
  Illustrator 28.4, malgré la mention InDesign du plan.
- Ajouts de périmètre : `html-css.html` recentrée sur les compétences web
  (WordPress, Elementor, Divi, VS Code, Cline) ; nouvelle page
  `competences.html` prévue au Jalon 6.
- Commit `2f49ebd`.
- Déploiement GitHub Pages différé : incident GitHub du 2026-10-19
  (Actions / Pages / Webhooks `degraded`), build `waiting` puis `errored`.
  Code poussé (`e6b31d6`) ; relancer le build après rétablissement et vérifier
  les pages et les assets en ligne.

### 2026-10-19 — Jalon 4

- Retrait du site Bakery : carte « Site web » supprimée (9 → 8 livrables),
  stats `08`, titre « Les 8 livrables », renumérotation 01-08, suppression de
  `assets/fichiers/bakery/site-web.pdf` et `assets/img/bakery/site-web.webp`.
- Casa Urpi : charte graphique 15 p. (InDesign 2025) ; PDF copié et 6 aperçus
  WebP (couverture, logo, couleurs, motifs, déclinaisons, typographie).
- L'îlot Câlins : charte 10 p. (avril 2024) ; PDF copié, 4 aperçus WebP
  (couverture, logo, couleurs, mascottes) et 4 nouveaux visuels
  (carte-monde, hero-site-web, tête blanche, câlin blanc).
- Flat design : 2 SVG copiés + rasters WebP (Playwright/Chrome), 7 visuels
  likeandsee et 4 dessins main levée/tablette convertis en WebP.
- Pages complètes : Casa Urpi, L'îlot Câlins, Flat design, avec galeries,
  lightbox, `nav-fin` et textes issus des PDF.
- CSS : `.apercu--mascotte` et `.galerie-dessins`.
- Validation : 416 références locales OK, balises équilibrées, HTTP 200 avec
  types MIME corrects (PDF, WebP, SVG), Playwright 390/1440 sans débordement,
  lightbox image + PDF (ouverture/Échap), aucune image cassée.
- Captures desktop/mobile dans `docs/captures/` (non publiées).
- Décisions : likeandsee = ancienne micro-entreprise ; L'îlot 2024 ; SVG direct
  + WebP ; visuels « triste » écartés.
- Commit `f60194f`.

## Points ouverts

- Confirmer l'outil réel du business plan Sosse (Illustrator vs InDesign).
- Fournir un exemple pour Lightroom (aucun livrable actuel).
- Construire `competences.html` (Jalon 6) et enrichir `html-css.html` (Jalon 5).
- GitHub Pages : build `built` après l'incident du 2026-10-19.
