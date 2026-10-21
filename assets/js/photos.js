/* Super-portfolio — galerie photo : filtres par série et par logiciel.
   Amélioration progressive : sans JavaScript, toutes les photos restent visibles. */
(function () {
  'use strict';

  var NL = (document.documentElement.lang || '').toLowerCase().indexOf('nl') === 0;
  function t(fr, nl) { return NL ? nl : fr; }

  function initialiser() {
    var filtres = document.querySelectorAll('.galerie-filtre');
    var cartes = document.querySelectorAll('.galerie-photo .apercu');
    var compteur = document.querySelector('.galerie-compteur');
    if (!filtres.length || !cartes.length) { return; }

    function compter(visibles) {
      if (!compteur) { return; }
      compteur.textContent = NL ?
        (visibles + ' foto' + (visibles > 1 ? "'s" : '') + ' weergegeven') :
        (visibles + ' photo' + (visibles > 1 ? 's' : '') + ' affichée' + (visibles > 1 ? 's' : ''));
    }

    function appliquer(valeur) {
      var visibles = 0;
      Array.prototype.forEach.call(cartes, function (carte) {
        var serie = carte.getAttribute('data-serie') || '';
        var retouches = (carte.getAttribute('data-retouches') || '').split(' ');
        var montrer;
        if (valeur === 'tout') {
          montrer = true;
        } else if (valeur === 'portrait' || valeur === 'voyage') {
          montrer = serie === valeur;
        } else {
          montrer = retouches.indexOf(valeur) !== -1;
        }
        carte.hidden = !montrer;
        if (montrer) { visibles++; }
      });
      compter(visibles);
    }

    Array.prototype.forEach.call(filtres, function (filtre) {
      filtre.addEventListener('click', function () {
        Array.prototype.forEach.call(filtres, function (autre) {
          autre.setAttribute('aria-pressed', 'false');
        });
        filtre.setAttribute('aria-pressed', 'true');
        appliquer(filtre.getAttribute('data-filtre'));
      });
    });

    appliquer('tout');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiser);
  } else {
    initialiser();
  }
})();
