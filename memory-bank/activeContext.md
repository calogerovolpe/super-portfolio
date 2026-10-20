# Active context

## Jalon en cours

**Jalon 10 — Refonte des demandes client (photo de profil, tri des projets, démo, onglets compétences, parcours, contact).** Terminé et validé. Le projet compte quatorze pages (la page « À propos » a été supprimée).

## Ce qui est en place

- Dépôt public `super-portfolio` et GitHub Pages (branche `main`, racine),
  statut `built`.
- Quatorze pages HTML : accueil, portfolio, démo HTML/CSS, compétences,
  parcours, contact, mentions légales, 404 et six fiches projets
  (Bakery Bliss Café, Sosse, Casa Urpi, L'îlot Câlins, flat design,
  photographie).
- Coquille commune : barre latérale repliable, retour en haut, menu bas
  responsive, footer en trois groupes, navigation précédent/suivant.
- Identité : jaune `#FFD500`, noir `#0B0B0B`, blanc `#FFFFFF`, carrés et
  rectangles exclusivement ; Archivo + Space Mono.
- `assets/css/style.css` (tokens, composants, responsive, thème clair) et
  `assets/css/print.css`.
- `assets/js/nav.js` (retour en haut, thème, copie d'e-mail, état de la barre),
  `assets/js/home.js` (parallaxe, apparitions), `assets/js/viewer.js` (lightbox).
- Accueil mémorable : hero animé, bandeau défilant, projets en **cartes-affiches
  typographiques** (grand numéro, titre massif, bouton), galerie réelle de
  L'îlot Câlins, synthèse **Parcours** (profil hybride + stats + lien), synthèse
  **Compétences** (tags + lien + méthode), appel à l'action.
- Jalon 3 : pages **Bakery Bliss Café** (désormais **8 livrables**) et
  **Business plan Sosse** (10 pages), avec lightbox PDF/image.
- Jalon 4 : pages **Casa Urpi** (charte graphique 15 p., InDesign 2025),
  **L'îlot Câlins** (charte 10 p., avril 2024, + galerie mascottes) et
  **Flat design** (2 SVG, mascotte likeandsee, dessins main levée/tablette).
- Assets : `assets/fichiers/casa-urpi/charte-graphique.pdf` (573 Ko),
  `assets/fichiers/lilot/charte-graphique.pdf` (753 Ko), 10 aperçus WebP
  Casa Urpi + L'îlot, 2 SVG flat + rasters WebP, 11 visuels
  likeandsee/dessins.
- Retrait du site Bakery : carte « Site web » supprimée, livrables passés de
  9 à 8, `site-web.pdf` et `site-web.webp` supprimés.
- CSS : `.apercu--mascotte` (mascottes transparentes sur noir) et
  `.galerie-dessins` (ratio naturel, 4 → 2 → 1 colonnes).
- Release GitHub `livrables-volumineux` : `.fig` (125 Mo), vidéo (18 Mo),
  datavisualisation (30 Mo) — liens externes intégrés.
- Composants : `.carte-livrable`, `.badge`, `.doc-actions`, `.doc-vedette`,
  `.galerie-doc`, `.galerie-apercu`, `.note`, `.visionneuse-telecharger`.
- Jalon 5 : page **Démo** (`html-css.html`) — **8 cartes interactives**
  (HTML sémantique, CSS moderne, plus d'exemples CSS, JavaScript vanilla,
  Tailwind, formulaire de don, menu responsive, grille redimensionnable),
  onglets « Résultat / Code » et accordéon accessibles.
- Environnement & outils : **WordPress, Elementor, Divi, VS Code, Cline,
  GitHub Pages, Docker & VPS, Bash** présentés en cartes avec logos
  monochromes.
- `assets/js/demo.js` (onglets ARIA, accordéon, don, fenêtre redimensionnable,
  grille, amélioration progressive) ; CSS `.demo-*`, `.outil`, `.outil-logo`.
- Tailwind Play CDN chargé uniquement sur cette page, **préfixe `tw-`** et
  `preflight` désactivé pour ne pas toucher au CSS maison.
- **Photographie** (pré-Jalon 6) : page `photographie.html` — 62 photos
  (20 portraits retouchés Lightroom + Photoshop ; 42 rue/voyage dont 9
  Lightroom), galerie filtrable (`assets/js/photos.js`), lightbox, WebP
  dans `assets/img/photo/`.
- **Jalon 6** : page `competences.html` — hero, méthode, six cartes logiciels
  (Photoshop, Lightroom, Illustrator, InDesign, After Effects, Figma) avec
  accordéons « Repères techniques », matrice projets × outils (6 projets,
  tfoot des totaux), **13 preuves filtrables** par logiciel et passerelle web.
- `assets/js/competences.js` : filtres par logiciel (compteur live, `aria-pressed`)
  et accordéons (`aria-expanded`), amélioration progressive sans JavaScript.
- CSS : `.competences`, `.carte-competence`, `.matrice`, `.preuves`, `.preuve`,
  `.preuve-badge`, `.preuve-schema`, `.couverture--competences`,
  `.visuellement-cache` ; composant d'accordéon générique `.accordeon`.
- Intégration : lien « Compétences » dans la barre latérale et le footer de
  toutes les pages, carte 08 dans `portfolio.html`, compteurs de l'accueil,
  `nav-fin` html-css → compétences → à propos.
- Impression : `print.css` masque les filtres, évite les coupures et affiche
  les 13 preuves même filtrées.
- **Jalon 7 — favicon** : `favicon.svg` (monogramme VC géométrique),
  `favicon.ico` (32×32 PNG dans un conteneur ICO) et
  `assets/img/apple-touch-icon.png` (180×180), liés dans les 14 pages avec
  `theme-color`.
- **Jalon 7 — partage social** : `assets/img/og-image.png` (1200×630) et
  métadonnées `og:image` + `twitter:card` sur toutes les pages.
- **Jalon 7 — SEO** : `robots.txt` et `sitemap.xml` (12 URLs après retrait d'`a-propos.html` au Jalon 10, 404 exclue).
- **Jalon 7 — propreté** : styles inline résiduels remplacés par des classes
  utilitaires (`.marge-haut*`, `.actions-ligne`, `.cadre-image--blanc`,
  `.texte-legal`) ; seules les variables CSS de démonstration restent inline
  sur `html-css.html`. `loading="lazy"` ajouté à l'image 404.
- **Jalon 8 — parcours.html** : page dédiée au parcours professionnel et aux
  formations, orientée savoir-faire et savoir-être pour les métiers de la
  communication, du graphisme, du web design et du graphisme multimédia.
  Contenu repris des pages `mes-realisations/parcours.html` (référence
  principale) et `mes-realisations-batiments/parcours.html` (compléments),
  sans invention.
- Contenu : hero, profil (06 ans d'école d'art, 13 étapes, 04 métiers),
  six savoir-faire, frise de treize étapes (emplois, formations, activité
  complémentaire, mobilité), six savoir-être, quatre métiers visés et
  appel à l'action.
- CSS : composant `.frise` (ligne verticale, marqueurs carrés, étiquettes
  Emploi/Formation/Activité/Mobilité, tags de compétences) et
  `.methode--metiers` (4 → 2 → 1 colonnes) ; `.frise-entree` en
  `break-inside: avoid` à l'impression.
- Intégration : « Parcours » dans la barre latérale et le footer des 14 pages,
  `nav-fin` compétences → parcours → contact (a-propos retirée au Jalon 10),
  sitemap, README.

## Jalon 10 — Refonte des demandes client

- Accueil : photo de profil carrée (`assets/img/photo-profil.jpg`) dans le
  hero, calques décoratifs en `aria-hidden`.
- `portfolio.html` : fonds gris supprimés, tri des projets par nature
  (Identité & chartes, Édition & illustration, Web & code, Photographie,
  Savoir-faire), titre « Photo-Graphie » sur deux lignes, survol jaune.
- `html-css.html` : formulaire de don centré, **remboursement fiscal 66 %**
  calculé par `demo.js`, contenus de cartes centrés, un seul logo GitHub,
  ajout **Docker & VPS** et **Bash** (`docker.svg`, `bash.svg`).
- `competences.html` : « La matrice » en **onglets Graphiste / Développeur**
  (`competences.js`) ; l'onglet Développeur liste HTML, CSS, JS, Tailwind,
  WordPress, Elementor, Divi, VS Code, Cline, GitHub Pages, Docker/VPS, Bash.
- `parcours.html` : cadre de contraste autour des étapes communication /
  graphisme (`.frise-entree--comm`) et section **Prochaine étape**
  (Python & SQL).
- `a-propos.html` supprimée, liens retirés des 14 pages, `nav-fin`
  parcours → contact, sitemap et README mis à jour.
- `contact.html` : formulaire (« Vous êtes ? »), disponibilité immédiate,
  carte Google de Guignies et calcul distance/durée (Photon + OSRM,
  `contact.js`) ; un seul bouton « copier l'e-mail » via `nav.js`.
- CSS : `.hero-portrait`, `.grille-groupe-titre`, `.carte-projet--pleine`,
  `.demo-don-fiscal`, `.matrice-panneau`, `.dev-outil*`,
  `.frise-entree--comm`, `.contact-*`.

## Correctif — retour vers le site (PDF)

- Demande client : sur mobile, une fois un PDF ouvert, la navigation retour
  était difficile (l'`iframe` capte les gestes tactiles, le bouton `×` est
  petit et le lien de téléchargement était dans la zone défilante).
- `viewer.js` ajoute une barre `.visionneuse-actions` **hors de la zone
  défilante**, avec un bouton **« ← Retour vers le site »** (ferme la lightbox
  et rend le focus au déclencheur) et le lien « Télécharger le PDF ».
- La barre n'apparaît que pour les PDF ; sous 640 px, les deux actions sont
  empilées en pleine largeur pour une cible tactile confortable.
- Validation : test headless Chrome (ouverture, visibilité, fermeture,
  nettoyage, absence sur les images) + `verifier-jalon8.py` (14 pages,
  595 liens locaux, CSS OK).

## Prochaine étape

**Projet complet.** Les dix jalons sont terminés. La suite relève de la
maintenance : mise à jour des contenus, confirmation de l'outil Sosse et
surveillance du déploiement GitHub Pages.

## Ajouts de périmètre validés

- **Jalon 5 — `html-css.html`** : la page montrera surtout les compétences web
  (WordPress, Elementor, Divi, VS Code, Cline) en plus de HTML/CSS/JS/Tailwind/Git.
- **Jalon 6 — `competences.html`** : page complète dédiée à tous les logiciels
  maîtrisés (Photoshop, Illustrator, Lightroom, InDesign, Premiere Pro,
  After Effects, Figma, etc.), avec des exemples tirés des projets et des
  sections interactives (filtres, accordéons). Les finitions passent au Jalon 7.
  Retenu finalement : **six logiciels** (Premiere Pro écarté, aucune preuve
  dans les projets) et des preuves par livrables plutôt que des notes de maîtrise.

## Décisions récentes

- Gros fichiers (`.fig` 125 Mo, datavisualisation 30 Mo, vidéo 18 Mo) : liens
  externes, jamais dans le dépôt.
- Flat design : page dédiée (`flat-design.html`) enrichie de la mascotte
  likeandsee et des dessins main levée/tablette.
- Nom du dépôt : `super-portfolio` (public).
- Menu bas responsive à partir de 959 px ; thème clair/sombre mémorisé.
- Le contenu de L'îlot Câlins peut être publié (autorisation).
- Jalon 3 : aperçus WebP (1000 px, qualité 82) ; étude & conception (13,2 Mo)
  conservée dans le dépôt ; gros fichiers dans la release GitHub
  `livrables-volumineux`.
- Sosse : le PDF est signé **Adobe Illustrator 28.4** (2024), pas InDesign ;
  la page affiche donc « Adobe Illustrator » (à confirmer par Calogero).
- Lightbox : lien « Télécharger le PDF » ajouté en secours de l'iframe.
- **Retour vers le site** : bouton explicite ajouté dans la lightbox PDF,
  hors de la zone défilante, pour la navigation mobile.
- **Jalon 4 — retrait du site Bakery** : suppression de toute la carte
  « Site web » (9 → 8 livrables), et non du seul lien mort.
- **likeandsee** = ancienne micro-entreprise de Calogero Volpe : la mascotte
  et la charte L'îlot Câlins (réalisée au sein de LIKEANDSEE) sont ses propres
  travaux, publiés sans restriction.
- **Flat design** : les SVG sont affichés en vectoriel direct **et** doublés
  d'aperçus WebP rasterisés (les deux techniques).
- **L'îlot Câlins** : année **2024** (PDF daté 04/2024) ; visuels « triste »
  écartés (`calin triste voit enfant mourir`, `pluieurs calins triste`).
- **Casa Urpi** : **charte graphique** (et non « charge graphique »),
  InDesign 2025.
- **Jalon 5** : Tailwind Play CDN **scopé** (`prefix: 'tw-'`,
  `preflight: false`) — aucun impact sur le CSS maison.
- **Démo** : onglets ARIA et accordéon en JS vanilla (`demo.js`) ;
  sans JavaScript, tous les contenus restent visibles.
- La page Démo met en avant **WordPress, Elementor, Divi, VS Code et Cline**
  en plus de HTML/CSS/JS/Tailwind/Git.
- **Démo — modifications pré-Jalon 6** : retrait de la carte Git (timeline) ;
  ajout du formulaire de don (ponctuel/mensuel, montants fixes + libre),
  du menu responsive dans une fenêtre redimensionnable (container query),
  de six exemples CSS et d'une grille 4×3 redimensionnable ; logos d'outils
  monochromes sur tuiles jaunes.
- **Jalon 6 — six logiciels retenus** : Photoshop, Lightroom, Illustrator,
  InDesign, After Effects, Figma. Premiere Pro écarté, faute de livrable
  l'attestant dans les projets.
- **Jalon 6 — preuves, pas de notes** : la page n'affiche pas de pourcentages
  de maîtrise, mais 13 livrables réels, filtrables et reliés aux fiches projets.
- **Jalon 6 — accordéon mutualisé** : `.demo-accordeon*` renommé `.accordeon*`
  pour servir la page Démo et la page Compétences (`demo.js` cible toujours
  `[data-accordeon]`).
- **Jalon 6 — business plan Sosse** : « Illustrator » appliqué dans l'accueil,
  le portfolio, la fiche projet et le README (en attente de confirmation).
- **Jalon 6 — correction responsive** : `.galerie-apercu` et `.galerie-dessins`
  passent de `1fr` à `minmax(0, 1fr)` sous 640/820 px ; les SVG à grande
  largeur intrinsèque ne débordent plus sur mobile (flat-design).
- **Jalon 7 — favicon et OG** : monogramme « VC » construit uniquement en
  rectangles (V en deux rectangles pivotés, C en trois rectangles), trois
  couleurs, aucun arrondi ; image OG 1200×630 dans le même langage.
- **Jalon 7 — sitemap** : 13 URLs publiques, `404.html` exclue ; `robots.txt`
  pointe vers le sitemap.
- **Jalon 7 — styles** : les espacements ponctuels passent en classes
  utilitaires dans `style.css` ; les variables inline de `html-css.html`
  restent (configuration des démos, pas de style).
- **Jalon 9 — cartes-affiches** : les couvertures abstraites (`.couverture`,
  `.cv--1/2/3`, variantes par projet) sont supprimées de l'accueil et du
  portfolio. Les cartes reposent désormais sur le **titre en grand**, un
  **grand numéro carré jaune**, les métadonnées et un **bouton jaune**
  (`.carte-bouton`), avec fonds alternés (`:nth-child(even)`) et carte
  vedette jaune inversée. Les classes de portée `large/moyenne/etroite/
  large2/vedette` sont conservées pour le rythme éditorial.
- **Jalon 9 — synthèses d'accueil** : nouvelle section **Parcours**
  (06 ans d'école d'art, 13 étapes, 04 métiers visés, bouton vers
  `parcours.html`) ; l'ancienne section « Outils & méthode » devient
  **Compétences** (intro, tags, bouton vers `competences.html`, méthode
  3 étapes). Numérotation des sections : 01 Méthode, 02 Projets,
  03 Aperçu réel, 04 Parcours, 05 Compétences.

## Points ouverts

- Confirmer l'outil réel du business plan Sosse (Illustrator vs InDesign) —
  « Illustrator » est affiché partout depuis le Jalon 6.
- GitHub Pages : build `built` à revérifier après le push du Jalon 9.
