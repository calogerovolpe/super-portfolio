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
| 8 | Page « Parcours » (savoir-faire & savoir-être) | ✅ Terminé |
| 9 | Accueil : synthèses Parcours & Compétences, cartes-affiches | ✅ Terminé |
| 10 | Refonte des demandes client (accueil, projets, démo, compétences, parcours, contact) | ✅ Terminé |

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

### 2026-10-20 — Jalon 8

- Page `parcours.html` : hero, profil (06 ans d'école d'art, 13 étapes,
  04 métiers), six savoir-faire, frise de treize étapes (emplois, formations,
  activité complémentaire, mobilité), six savoir-être, quatre métiers visés
  et appel à l'action.
- Contenu issu des pages `mes-realisations/parcours.html` (référence
  principale, mise à jour du 10 octobre 2026) et
  `mes-realisations-batiments/parcours.html` (compléments), sans invention.
- CSS : `.frise` (ligne verticale, marqueurs carrés, étiquettes de type,
  tags de compétences) et `.methode--metiers` (4 → 2 → 1 colonnes) ;
  `.frise-entree` en `break-inside: avoid` à l'impression.
- Intégration : « Parcours » dans la nav et le footer des 15 pages,
  `nav-fin` compétences → parcours → à propos, lien depuis `a-propos.html`,
  sitemap (14 URLs), README.
- Validation : balises équilibrées, liens locaux, `aria-current`, responsive
  390/1440, contrastes, 0 placeholder.
- Commit `b99b9ee`.

### 2026-10-20 — Jalon 9

- Accueil : suppression des couvertures abstraites de la section Projets ;
  les cartes deviennent des **affiches typographiques** (grand numéro carré,
  titre massif, métadonnées, bouton « Voir le projet → »).
- `portfolio.html` : même traitement pour les huit cartes, en conservant les
  portées `large/moyenne/etroite/large2`.
- `style.css` : `.carte-projet` (fond alterné, filet jaune supérieur),
  `.carte-titre` agrandi, `.carte-index` carré jaune, `.carte-bouton`,
  carte vedette jaune inversée ; suppression de `.couverture*`, `.cv*` et
  `.carte-lien`. `print.css` nettoyé.
- Accueil : nouvelle section **Parcours** (profil hybride, 06 / 13 / 04,
  bouton vers `parcours.html`) et section **Compétences** (intro, tags,
  bouton vers `competences.html`, méthode 3 étapes). L'ancienne section
  04 « Outils & méthode » est renommée et renumérotée.
- Validation : balises HTML équilibrées (accueil 51/51 `div`, 35/35 `a`,
  7/7 `section` ; portfolio 32/32 `div`, 33/33 `a`), accolades CSS 511/511
  et 15/15, aucune référence résiduelle à `.couverture`, `.cv` ou
  `.carte-lien`.
- Rendu contrôlé par captures Chrome headless : desktop 1440 px et mobile
  500 px (Chrome impose 500 px de largeur interne), sans débordement
  (`scrollWidth` 485 < 500).

### 2026-10-20 — Jalon 10

- **Accueil** : ajout de la photo de profil (`assets/img/photo-profil.jpg`,
  478×480) dans le hero, dans un cadre carré jaune ; les calques animés
  passent en `aria-hidden` pour laisser le portrait accessible.
- **portfolio.html** : fonds gris supprimés (seules les couleurs noir, blanc
  et jaune restent) ; projets triés par nature sous cinq titres de groupe
  (Identité & chartes, Édition & illustration, Web & code, Photographie,
  Savoir-faire) ; « Photo-Graphie » sur deux lignes pour éviter le
  chevauchement ; survol jaune.
- **html-css.html / demo.js** : formulaire de don centré, **remboursement
  fiscal à 66 %** affiché dynamiquement (y compris montant libre), contenus
  de cartes centrés, un seul logo GitHub, ajout de **Docker & VPS** et
  **Bash** (icônes `docker.svg`, `bash.svg`).
- **competences.html / competences.js** : « La matrice » devient deux onglets
  **Graphiste** (matrice projets × logiciels) et **Développeur** (HTML, CSS,
  JS, Tailwind, WordPress, Elementor, Divi, VS Code, Cline, GitHub Pages,
  Docker/VPS, Bash).
- **parcours.html** : cadre de contraste autour des étapes communication /
  graphisme (Bac+2 communication web, écriture, consultant marketing,
  école d'art) et section **Prochaine étape** (Python & SQL).
- **a-propos.html** supprimée ; liens retirés de la barre latérale et du
  footer des 14 pages ; `nav-fin` parcours → contact ; sitemap et README
  mis à jour.
- **contact.html / contact.js** : formulaire avec champ « Vous êtes ? »,
  mention « disponible immédiatement », carte Google de la place de
  Guignies et calcul de distance/durée par adresse d'entreprise (Photon +
  OSRM, sans clé API) ; un seul bouton « copier l'e-mail » (`nav.js`).
- Validation : `node --check` OK sur les quatre scripts, accolades CSS
  équilibrées (554/554), structure HTML validée sur les 14 pages.

### 2026-10-20 — Retour vers le site depuis les PDF

- **Constat mobile** : dans la lightbox PDF, l'`<iframe>` capte les gestes et
  le petit bouton `×` reste le seul retour ; le lien de téléchargement était
  placé dans la zone défilante.
- `assets/js/viewer.js` : nouvelle barre `.visionneuse-actions` placée **hors**
  de la zone défilante, contenant un bouton **« ← Retour vers le site »**
  (ferme la lightbox, rend le focus au déclencheur) et le lien
  « Télécharger le PDF ». La barre est masquée pour les images.
- `assets/css/style.css` : styles `.visionneuse-actions`, `.visionneuse-retour`,
  `.visionneuse-telecharger` (jaune/noir/blanc, rectangles, aucun arrondi) ;
  sous 640 px, les actions passent en colonne pleine largeur (cible tactile).
- Validation : `node --check` OK ; test headless Chrome (ouverture du PDF,
  iframe présente, actions visibles, bouton hors zone défilante, fermeture au
  clic, actions nettoyées, aucune action sur les images) ;
  `verifier-jalon8.py` : 14 pages, 595 liens locaux OK, CSS OK.

### 2026-10-20 — Markdown dans la Démo et les Compétences

- `html-css.html` : nouvelle 9ᵉ carte de démonstration « Markdown » (onglets
  « Résultat / Code ») ; le rendu présente un titre 1, un titre 2, de
  l'italique, une citation, du code inline et un tableau ; le panneau Code
  contient le Markdown brut correspondant. Intro passée de « Huit » à
  « Neuf », descriptions et chapô mis à jour.
- `competences.html` : tuile `.dev-outil` « Markdown » (sigle MD) ajoutée dans
  l'onglet Développeur (12 → 13 outils) et « Markdown » ajouté au texte de la
  passerelle.
- `assets/css/style.css` : bloc `.demo-markdown` (titres, `em`, `code`,
  `blockquote`, `table`), scopé, sans arrondi ni couleur hors charte.
- Validation : `verifier-jalon8.py` (14 pages, 595 liens, CSS OK) ; test
  headless Chrome : onglets Markdown, retour Résultat, 2 lignes de tableau,
  Markdown brut présent, tuile Compétences visible, aucun débordement.

### 2026-10-20 — Câlins tristes et espacement de la frise

- **L'îlot Câlins** : copie de `calin triste voit enfant mourir.webp` et
  `pluieurs calins triste.webp` vers `assets/img/lilot/calin-triste.webp` et
  `calins-tristes.webp` (929×585) ; ajout de deux vignettes `.apercu--blanc`
  dans la galerie « Les mascottes » (légendes, alt, dimensions,
  `loading="lazy"`, lightbox) et mise à jour de l'intro.
- **Parcours** : `.frise-entree` reçoit
  `margin-bottom: clamp(2.4rem, 5vw, 3.4rem)` (et `margin-bottom: 0` sur
  `:last-child`), le `padding-bottom` étant retiré ; `.frise-entree--comm` ne
  conserve que son padding uniforme de cadre. La séparation est donc à
  l'extérieur de la bordure, pas à l'intérieur.
- Validation : `verifier-jalon8.py` (597 liens, CSS OK) ; Chrome headless :
  8/8 images chargées, lightbox du câlin triste OK, 0 débordement ;
  `margin_base` = `margin_comm` = 38,4 px, `padding_bottom` de base = 0,
  écart entre points = 170 px.

## Points ouverts

- Confirmer l'outil réel du business plan Sosse (Illustrator vs InDesign) —
  « Illustrator » est affiché partout depuis le Jalon 6.
- GitHub Pages : build `built` à revérifier après le push du Jalon 9.

### 2026-10-20 — Canva et documents de candidature

- `competences.html` : 7ᵉ carte `.carte-competence` « Canva » (sigle Ca,
  création rapide & réseaux sociaux) avec accordéon « Repères techniques » et
  lien vers `html-css.html#outils-titre` ; compteurs passés de six à sept
  (meta, og, hero, stat `07`, intro « Sept cartes »).
- `html-css.html` : 9ᵉ tuile `.outil` « Canva » dans « Environnement & outils »,
  logo monochrome `assets/img/outils/canva.svg` ; « Canva » ajouté au chapô et
  aux meta descriptions.
- Cohérence : `index.html` (hero-note « 7 logiciels », intro « Sept logiciels »,
  tag Canva), `portfolio.html` (carte Compétences, « 7 logiciels »), `README.md`.
- Documents de candidature : déplacement de `docs/CV Charge de com.pdf` et
  `docs/lettre motivation com gen.pdf` vers
  `assets/fichiers/candidature/cv-volpe-calogero.pdf` (123 Ko) et
  `lettre-motivation-volpe-calogero.pdf` (120 Ko), en kebab-case.
- `parcours.html` : bloc `.cta` « CV & lettre de motivation » juste après
  « Métiers visés », deux boutons (`.btn--noir` CV, `.btn--blanc` lettre) avec
  libellés explicites `(PDF, 123 Ko)` / `(PDF, 120 Ko)`.
- `contact.html` : bloc `.candidature` sous le formulaire, deux boutons
  `.btn--contour` avec les mêmes libellés ; CSS `.candidature`,
  `.candidature-actions`.
- Matrice « projets × outils » inchangée : Canva n'est utilisé dans aucun projet.

### 2026-10-20 — Mise à jour du CV et de la lettre de motivation

- Nouvelle version des deux PDF depuis `docs/CV communication.pdf` et
  `docs/Lettre motivation communication.pdf`, publiée sous les noms
  kebab-case `cv-volpe-calogero.pdf` (125 Ko) et
  `lettre-motivation-volpe-calogero.pdf` (448 Ko).
- Métadonnées corrigées : le titre interne (`/Title` et XMP `dc:title`)
  reprend le nom exact du fichier, au lieu de « Plan de travail 11 » /
  « Plan de travail 21 » affiché dans l'onglet du navigateur.
- Réécriture PyMuPDF contrôlée : texte et rendu 150 dpi strictement
  identiques aux sources ; une seule page par document.
- Libellés de taille mis à jour dans `parcours.html` et `contact.html`
  (`(PDF, 125 Ko)` / `(PDF, 448 Ko)`).


