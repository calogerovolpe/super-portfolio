/* Super-portfolio — visionneuse d'images, de documents et de galeries (lightbox).
   Tout élément [data-lightbox] ouvre son contenu dans une boîte modale.
   Types : "image" (défaut), "pdf", "galerie" (data-galerie="a|b|c").
   Galerie : navigation ← → et compteur, sans téléchargement.
   Fermeture : bouton, touche Échap ou clic sur le fond. */
(function () {
  'use strict';

  var NL = (document.documentElement.lang || '').toLowerCase().indexOf('nl') === 0;
  function t(fr, nl) { return NL ? nl : fr; }

  var boite = null;
  var contenu = null;
  var legende = null;
  var boutonFermer = null;
  var actions = null;
  var dernierFocus = null;

  var galerieImages = [];
  var galerieIndex = 0;
  var galerieLegende = '';

  function creer() {
    if (boite) { return; }

    boite = document.createElement('div');
    boite.className = 'visionneuse';
    boite.setAttribute('role', 'dialog');
    boite.setAttribute('aria-modal', 'true');
    boite.setAttribute('aria-label', t("Aperçu du document", 'Documentvoorbeeld'));
    boite.hidden = true;
    boite.innerHTML =
      '<div class="visionneuse-fond" data-fermer></div>' +
      '<div class="visionneuse-boite">' +
        '<button type="button" class="visionneuse-fermer" aria-label="' + t("Fermer l'aperçu", 'Voorbeeld sluiten') + '">×</button>' +
        '<div class="visionneuse-contenu"></div>' +
        '<p class="visionneuse-legende"></p>' +
        '<div class="visionneuse-actions" hidden></div>' +
      '</div>';

    document.body.appendChild(boite);
    contenu = boite.querySelector('.visionneuse-contenu');
    legende = boite.querySelector('.visionneuse-legende');
    boutonFermer = boite.querySelector('.visionneuse-fermer');
    actions = boite.querySelector('.visionneuse-actions');

    boutonFermer.addEventListener('click', fermer);
    boite.querySelector('[data-fermer]').addEventListener('click', fermer);

    document.addEventListener('keydown', function (e) {
      if (boite.hidden) { return; }
      if (e.key === 'Escape') { fermer(); return; }
      if (galerieImages.length < 2) { return; }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        afficherGalerie(galerieIndex - 1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        afficherGalerie(galerieIndex + 1);
      }
    });
  }

  function boutonNavigation(symbole, libelle, action, desactive) {
    var bouton = document.createElement('button');
    bouton.type = 'button';
    bouton.className = 'visionneuse-galerie-bouton';
    bouton.setAttribute('aria-label', libelle);
    bouton.textContent = symbole;
    bouton.disabled = desactive;
    bouton.addEventListener('click', action);
    return bouton;
  }

  function afficherGalerie(index) {
    if (!galerieImages.length) { return; }
    if (index < 0) { index = 0; }
    if (index > galerieImages.length - 1) { index = galerieImages.length - 1; }
    galerieIndex = index;

    contenu.innerHTML = '';
    var image = document.createElement('img');
    image.src = galerieImages[index];
    image.alt = galerieLegende + ' — ' + t('page', 'pagina') + ' ' + (index + 1) + ' / ' + galerieImages.length;
    contenu.appendChild(image);

    actions.innerHTML = '';
    var nav = document.createElement('div');
    nav.className = 'visionneuse-galerie-nav';
    nav.appendChild(boutonNavigation('←', t('Page précédente', 'Vorige pagina'), function () {
      afficherGalerie(galerieIndex - 1);
    }, index === 0));

    var compteur = document.createElement('span');
    compteur.className = 'visionneuse-galerie-compteur';
    compteur.textContent = (index + 1) + ' / ' + galerieImages.length;
    nav.appendChild(compteur);

    nav.appendChild(boutonNavigation('→', t('Page suivante', 'Volgende pagina'), function () {
      afficherGalerie(galerieIndex + 1);
    }, index === galerieImages.length - 1));

    actions.appendChild(nav);
    actions.hidden = false;

    legende.textContent = galerieLegende + ' — ' + t('page', 'pagina') + ' ' + (index + 1) + ' / ' + galerieImages.length;
  }

  function ouvrir(source, texte, type, galerie) {
    if (!source) { return; }
    creer();
    dernierFocus = document.activeElement;
    contenu.innerHTML = '';
    actions.innerHTML = '';
    actions.hidden = true;
    galerieImages = [];
    galerieIndex = 0;
    galerieLegende = texte || '';
    contenu.classList.toggle('visionneuse-contenu--galerie', type === 'galerie');

    if (type === 'galerie' && galerie) {
      galerieImages = galerie.split('|').filter(function (chemin) { return chemin; });
      afficherGalerie(0);
    } else if (type === 'pdf') {
      var cadre = document.createElement('iframe');
      cadre.src = source;
      cadre.title = texte || t('Document PDF', 'PDF-document');
      contenu.appendChild(cadre);

      var retour = document.createElement('button');
      retour.type = 'button';
      retour.className = 'visionneuse-retour';
      retour.textContent = '← ' + t('Retour vers le site', 'Terug naar de site');
      retour.addEventListener('click', fermer);

      var secours = document.createElement('a');
      secours.className = 'visionneuse-telecharger';
      secours.href = source;
      secours.setAttribute('download', '');
      secours.setAttribute('target', '_blank');
      secours.setAttribute('rel', 'noopener');
      secours.textContent = t('Télécharger le PDF', 'Download de pdf');

      actions.appendChild(retour);
      actions.appendChild(secours);
      actions.hidden = false;
    } else {
      var image = document.createElement('img');
      image.src = source;
      image.alt = texte || '';
      contenu.appendChild(image);
    }

    if (type !== 'galerie') {
      legende.textContent = texte || '';
    }
    boite.hidden = false;
    document.body.classList.add('visionneuse-ouverte');
    boutonFermer.focus();
  }

  function fermer() {
    if (!boite || boite.hidden) { return; }
    boite.hidden = true;
    contenu.innerHTML = '';
    actions.innerHTML = '';
    actions.hidden = true;
    galerieImages = [];
    galerieIndex = 0;
    contenu.classList.remove('visionneuse-contenu--galerie');
    document.body.classList.remove('visionneuse-ouverte');
    if (dernierFocus && dernierFocus.focus) { dernierFocus.focus(); }
  }

  function init() {
    document.addEventListener('click', function (e) {
      if (!e.target || !e.target.closest) { return; }
      var declencheur = e.target.closest('[data-lightbox]');
      if (!declencheur) { return; }
      e.preventDefault();
      ouvrir(
        declencheur.getAttribute('data-lightbox'),
        declencheur.getAttribute('data-legende') || declencheur.getAttribute('aria-label') || '',
        declencheur.getAttribute('data-type') || 'image',
        declencheur.getAttribute('data-galerie') || ''
      );
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
