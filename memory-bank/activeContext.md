# Active context

## Jalon en cours

**Jalon 3 — Pages projets : Bakery Bliss Café + Sosse.** Terminé.

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
- Jalon 3 : pages **Bakery Bliss Café** (9 livrables) et **Business plan
  Sosse** (10 pages) complètes, avec lightbox PDF/image.
- 15 aperçus WebP dans `assets/img/bakery/` et `assets/img/sosse/` ;
  7 PDF légers dans `assets/fichiers/bakery/` et `assets/fichiers/sosse/`.
- Release GitHub `livrables-volumineux` : `.fig` (125 Mo), vidéo (18 Mo),
  datavisualisation (30 Mo) — liens externes intégrés.
- Nouveaux composants : `.carte-livrable`, `.badge`, `.doc-actions`,
  `.doc-vedette`, `.galerie-doc`, `.note`, `.visionneuse-telecharger`.

## Prochaine étape

**Jalon 4 — Pages projets : Casa Urpi + L'îlot Câlins + flat design.**

1. Lire `charge graphique Casa Urpi.pdf`, la charte L'îlot Câlins et le SVG flat design.
2. Rédiger les textes et sélectionner les visuels.
3. Intégrer les documents légers et les galeries.
4. Vérifier, commit et push.

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
- Flat design : page dédiée (`flat-design.html`).
- Nom du dépôt : `super-portfolio` (public).
- Menu bas responsive à partir de 959 px ; thème clair/sombre mémorisé.
- Le contenu de L'îlot Câlins peut être publié (autorisation).
- Jalon 3 : aperçus WebP (1000 px, qualité 82) ; étude & conception (13,2 Mo)
  conservée dans le dépôt ; gros fichiers dans la release GitHub
  `livrables-volumineux`.
- Sosse : le PDF est signé **Adobe Illustrator 28.4** (2024), pas InDesign ;
  la page affiche donc « Adobe Illustrator » (à confirmer par Calogero).
- Lightbox : lien « Télécharger le PDF » ajouté en secours de l'iframe.

## Points ouverts

- Confirmer l'outil réel du business plan Sosse (Illustrator vs InDesign).
- Fournir un exemple pour Lightroom (aucun livrable actuel).
- Sélection du contenu des PDF du Jalon 4 (Casa Urpi, L'îlot Câlins, flat design).
- Construire `competences.html` (Jalon 6) et enrichir `html-css.html` (Jalon 5).
