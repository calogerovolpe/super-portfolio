/* Super-portfolio — visionneuse d'images et de documents (lightbox).
   Tout élément [data-lightbox] ouvre son contenu dans une boîte modale.
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
      if (e.key === 'Escape' && !boite.hidden) { fermer(); }
    });
  }

  function ouvrir(source, texte, type) {
    if (!source) { return; }
    creer();
    dernierFocus = document.activeElement;
    contenu.innerHTML = '';
    actions.innerHTML = '';
    actions.hidden = true;

    if (type === 'pdf') {
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

    legende.textContent = texte || '';
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
        declencheur.getAttribute('data-type') || 'image'
      );
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
