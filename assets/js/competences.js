/* Super-portfolio — page Compétences : filtres de preuves et accordéons.
   Amélioration progressive : sans JavaScript, toutes les preuves restent
   visibles et tous les panneaux d'accordéon restent ouverts. */
(function () {
  'use strict';

  function chaque(liste, action) {
    Array.prototype.forEach.call(liste, action);
  }

  /* --- Filtres des preuves par logiciel --- */
  function initialiserFiltres() {
    var filtres = document.querySelectorAll('[data-filtre-preuve]');
    var preuves = document.querySelectorAll('.preuve');
    var compteur = document.querySelector('[data-compteur-preuves]');
    if (!filtres.length || !preuves.length) { return; }

    function compter(visibles) {
      if (!compteur) { return; }
      compteur.textContent = visibles + ' preuve' + (visibles > 1 ? 's' : '') +
        ' affichée' + (visibles > 1 ? 's' : '');
    }

    function appliquer(valeur) {
      var visibles = 0;
      chaque(preuves, function (preuve) {
        var logiciels = (preuve.getAttribute('data-logiciel') || '').split(/\s+/);
        var montrer = valeur === 'tout' || logiciels.indexOf(valeur) !== -1;
        preuve.hidden = !montrer;
        if (montrer) { visibles++; }
      });
      compter(visibles);
    }

    chaque(filtres, function (filtre) {
      filtre.addEventListener('click', function () {
        chaque(filtres, function (autre) {
          autre.setAttribute('aria-pressed', 'false');
        });
        filtre.setAttribute('aria-pressed', 'true');
        appliquer(filtre.getAttribute('data-filtre-preuve'));
      });
    });

    appliquer('tout');
  }

  /* --- Accordéons « Repères techniques » --- */
  function initialiserAccordeons() {
    chaque(document.querySelectorAll('[data-accordeon]'), function (bouton) {
      var panneau = document.getElementById(bouton.getAttribute('aria-controls'));
      if (!panneau) { return; }
      bouton.setAttribute('aria-expanded', 'false');
      panneau.hidden = true;
      bouton.addEventListener('click', function () {
        var ouvert = bouton.getAttribute('aria-expanded') === 'true';
        bouton.setAttribute('aria-expanded', ouvert ? 'false' : 'true');
        panneau.hidden = ouvert;
      });
    });
  }

  function initialiser() {
    initialiserFiltres();
    initialiserAccordeons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiser);
  } else {
    initialiser();
  }
})();
