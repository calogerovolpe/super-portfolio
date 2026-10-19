/* Super-portfolio — visionneuse d'images et de documents (lightbox).
   Tout élément [data-lightbox] ouvre son contenu dans une boîte modale.
   Fermeture : bouton, touche Échap ou clic sur le fond. */
(function () {
  'use strict';

  var boite = null;
  var contenu = null;
  var legende = null;
  var boutonFermer = null;
  var dernierFocus = null;

  function creer() {
    if (boite) { return; }

    boite = document.createElement('div');
    boite.className = 'visionneuse';
    boite.setAttribute('role', 'dialog');
    boite.setAttribute('aria-modal', 'true');
    boite.setAttribute('aria-label', "Aperçu du document");
    boite.hidden = true;
    boite.innerHTML =
      '<div class="visionneuse-fond" data-fermer></div>' +
      '<div class="visionneuse-boite">' +
        '<button type="button" class="visionneuse-fermer" aria-label="Fermer l\'aperçu">×</button>' +
        '<div class="visionneuse-contenu"></div>' +
        '<p class="visionneuse-legende"></p>' +
      '</div>';

    document.body.appendChild(boite);
    contenu = boite.querySelector('.visionneuse-contenu');
    legende = boite.querySelector('.visionneuse-legende');
    boutonFermer = boite.querySelector('.visionneuse-fermer');

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

    if (type === 'pdf') {
      var cadre = document.createElement('iframe');
      cadre.src = source;
      cadre.title = texte || 'Document PDF';
      contenu.appendChild(cadre);

      var secours = document.createElement('a');
      secours.className = 'visionneuse-telecharger';
      secours.href = source;
      secours.setAttribute('download', '');
      secours.setAttribute('target', '_blank');
      secours.setAttribute('rel', 'noopener');
      secours.textContent = 'Télécharger le PDF';
      contenu.appendChild(secours);
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
