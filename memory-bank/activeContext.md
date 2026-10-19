# Active context

## Jalon en cours

**Jalon 4 — Pages projets : Casa Urpi + L'îlot Câlins + flat design.** Terminé.

## Ce qui est en place

- Dépôt public `super-portfolio` et GitHub Pages (branche `main`, racine),
  statut `built`.
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

## Prochaine étape

**Jalon 5 — `html-css.html`** recentrée sur les compétences web
(WordPress, Elementor, Divi, VS Code, Cline) en plus de HTML/CSS/JS/Tailwind/Git.

## Ajouts de périmètre validés

- **Jalon 5 — `html-css.html`** : la page montrera surtout les compétences web
  (WordPress, Elementor, Divi, VS Code, Cline) en plus de HTML/CSS/JS/Tailwind/Git.
- **Jalon 6 — `competences.html`** : page complète dédiée à tous les logiciels
  maîtrisés (Photoshop, Illustrator, Lightroom, InDesign, Premiere Pro,
  After Effects, Figma, etc.), avec des exemples tirés des projets et des
  sections interactives (filtres, accordéons). Les finitions passent au Jalon 7.

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

## Points ouverts

- Confirmer l'outil réel du business plan Sosse (Illustrator vs InDesign).
- Fournir un exemple pour Lightroom (aucun livrable actuel).
- Construire `competences.html` (Jalon 6) et enrichir `html-css.html` (Jalon 5).
- GitHub Pages : build `built` (vérifié le 2026-10-19 après l'incident).
