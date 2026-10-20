# Progress

## Jalons

| # | Jalon | État |
| --- | --- | --- |
| 1 | Fondations et conventions | ✅ Terminé |
| 2 | Coquille du site et accueil | ✅ Terminé |
| 3 | Pages projets : Bakery Bliss Café + Sosse | ✅ Terminé |
| 4 | Pages projets : Casa Urpi + L'îlot Câlins + flat design | ✅ Terminé |
| 5 | Page « HTML & CSS » + Tailwind (compétences web) | ✅ Terminé |
| 6 | Page « Compétences » (logiciels + exemples interactifs) | ✅ Terminé |
| 7 | Finitions | ✅ Terminé |

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

### 2026-10-19 — Jalon 5

- Page `html-css.html` réécrite : hero, « Le principe », « Les briques »
  (5 démonstrations), « Environnement & outils », `nav-fin`.
- Démonstrations : HTML sémantique (formulaire), CSS moderne (carte produit),
  JavaScript vanilla (accordéon), Tailwind (comparaison CSS maison/Tailwind),
  Git (timeline des commits).
- `assets/js/demo.js` : onglets ARIA (flèches, Home/End) et accordéon,
  amélioration progressive (sans JS, tous les contenus restent visibles).
- CSS : `.galerie-demo`, `.carte-demo`, `.demo-onglets`, `.demo-code`,
  `.demo-*`, `.timeline`, `.outil`.
- Tailwind Play CDN scopé : `prefix: 'tw-'`, `preflight: false`, couleurs
  `jaune`/`noir` ; vérifié en navigateur (`rgb(255, 213, 0)`).
- Carte portfolio « Démo » et README mis à jour.
- Validation : 418 références locales OK, balises équilibrées, `node --check`
  OK, Playwright 390/1440 sans débordement, onglets/accordéon au clavier,
  aucune image cassée. Seul 404 : `/favicon.ico` (favicon absent, Jalon 7).
- Commit `e4304da`.

### 2026-10-20 — Démo enrichie (pré-Jalon 6)

- Retrait de la démo Git et de sa timeline (`timeline` supprimé du CSS).
- Nouvelles cartes : formulaire de don (ponctuel/mensuel, 5/10/20/50/100 €
  + montant libre), menu responsive dans une fenêtre redimensionnable
  (container query au point de rupture), six exemples CSS, grille 4×3
  redimensionnable (reflow 4 → 3 → 2 → 1 colonnes).
- Logos monochromes des outils (WordPress, Elementor, Divi, VS Code, Cline,
  Git, GitHub) sur tuiles jaunes ; Divi converti en noir/transparent.
- JS : activation du champ « autre », récap du don, pilotage des largeurs
  (fenêtre + grille), compteur de colonnes.
- Textes : intro « Huit démonstrations », carte portfolio « 8 démonstrations »,
  README, `productContext.md` et `activeContext.md` mis à jour.
- Validation : 22 assertions Puppeteer OK (don, menu, grille), captures
  desktop/mobile, `node --check` OK, balises et accolades équilibrées,
  aucune erreur console.

### 2026-10-20 — Photographie (pré-Jalon 6)

- Nouvelle page projet `photographie.html` : 62 photos (20 portraits
  retouchés Lightroom + Photoshop ; 42 rue/voyage dont 9 retouchées
  Lightroom).
- Conversion des JPG en WebP (1000 px, qualité 82, orientation EXIF
  corrigée) dans `assets/img/photo/portraits/` et `assets/img/photo/voyage/`.
- Galerie UI/UX : filtres accessibles (Tout / Portraits / Voyage / Lightroom /
  Photoshop), compteur, grille responsive 4 → 3 → 2 → 1, badges de retouche,
  lightbox (`viewer.js`).
- `assets/js/photos.js` : filtres et compteur, amélioration progressive
  (sans JS, toutes les photos restent visibles).
- CSS : `.galerie-barre`, `.galerie-filtre`, `.galerie-compteur`,
  `.galerie-photo`, `.photo-badge`, `.couverture--photo`.
- Intégration : footer « Projets » (toutes les pages), carte 07 dans
  `portfolio.html`, compteurs de l'accueil (6 projets / 7 cartes),
  `nav-fin` flat-design → photographie → html-css.
- Validation : `node --check` OK, 62 boutons, 0 placeholder, accents UTF-8.
- Commit `85e9b1e`.

### 2026-10-20 — Jalon 6

- Page `competences.html` : hero, méthode (06 logiciels / 06 projets /
  68 pages InDesign / 62 photos), six cartes logiciels avec accordéons
  « Repères techniques », matrice projets × outils (6 lignes + totaux),
  13 preuves filtrables et passerelle vers la page Démo.
- `assets/js/competences.js` : filtres `data-filtre-preuve` (compteur
  `aria-live`, `aria-pressed`), accordéons `data-accordeon`
  (`aria-expanded`) ; sans JavaScript, tout reste visible.
- CSS (+353 lignes) : `.competences`, `.carte-competence`, `.matrice`,
  `.preuves`, `.preuve`, `.preuve-badge`, `.couverture--competences`,
  `.visuellement-cache` ; `.demo-accordeon*` renommé `.accordeon*`
  (`html-css.html` mis à jour ; `demo.js` inchangé car il cible l'attribut).
- Intégration : lien « Compétences » dans la nav et le footer des 14 pages,
  carte 08 du portfolio, compteurs de l'accueil, `nav-fin`
  html-css → compétences → à propos, README (14 pages).
- Sosse : « Illustrator » appliqué dans l'accueil, le portfolio, la fiche
  projet et le README (confirmation encore attendue).
- Correction responsive trouvée à la validation : `.galerie-apercu` et
  `.galerie-dessins` passent à `minmax(0, 1fr)` sous 820/640 px ; les SVG
  de 1920 px et les dessins de 963 px débordaient à 390 px sur
  `flat-design.html`.
- Validation : `node --check` OK sur les 6 JS ; 14 pages × 390/1440 px sans
  débordement ; 0 image cassée ; 0 `id` double ; `aria-current` correct ;
  filtre Photoshop = 2 preuves et compteur « 2 preuves affichées » ;
  accordéon de la page Démo OK ; console vide ; 21 références `assets/`
  de la page Compétences existent.
- Commit `1ebb95c`.

### 2026-10-20 — Jalon 7

- Favicon complet : `favicon.svg` (monogramme VC en rectangles, trois couleurs),
  `favicon.ico` (32×32) et `assets/img/apple-touch-icon.png` (180×180) ;
  liens + `theme-color` dans les 14 pages. Le 404 `/favicon.ico` est résolu.
- Image de partage `assets/img/og-image.png` (1200×630) et métadonnées
  `og:image`, `og:image:width/height/alt`, `twitter:card` sur toutes les pages.
- `robots.txt` et `sitemap.xml` (13 URLs, 404 exclue) ; XML valide et toutes
  les pages du sitemap existent.
- Nettoyage : 10 styles inline remplacés par `.marge-haut`, `.marge-haut-1`,
  `.marge-haut-2`, `.marge-haut-075`, `.actions-ligne`, `.cadre-image--blanc`
  et `.texte-legal` ; `loading="lazy"` ajouté à l'image 404 ; description 404
  allongée. Les variables `--largeur-*` de `html-css.html` restent inline.
- Robustesse : `.competences` et `.preuves` passent aussi à `minmax(0, 1fr)`
  sous 640 px.
- Validation : audit statique 14/14 (lang, h1, description, alt, width/height,
  loading, ids, noopener, pas de lorem), HTTP réel 14/14 (aucun 404, console
  vide, pas de débordement 390/1440, 2 icônes par page), contrastes WCAG AA OK
  sur index, compétences, à propos, contact et portfolio.
- Commit `e6715e8`.

## Points ouverts

- Confirmer l'outil réel du business plan Sosse (Illustrator vs InDesign) —
  « Illustrator » est affiché partout depuis le Jalon 6.
- GitHub Pages : build `built` à revérifier après le push du Jalon 7.
