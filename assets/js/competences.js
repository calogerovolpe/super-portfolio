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

  /* --- Onglets « La matrice » (Graphiste / Développeur) --- */
  function initialiserOnglets() {
    chaque(document.querySelectorAll('[role="tablist"]'), function (liste) {
      var onglets = liste.querySelectorAll('[role="tab"]');
      var panneaux = [];
      var valides = [];
      chaque(onglets, function (onglet) {
        var panneau = document.getElementById(onglet.getAttribute('aria-controls'));
        if (panneau) {
          valides.push(onglet);
          panneaux.push(panneau);
        }
      });
      if (!valides.length) { return; }

      function activer(index, focus) {
        chaque(valides, function (onglet, i) {
          var actif = i === index;
          onglet.setAttribute('aria-selected', actif ? 'true' : 'false');
          onglet.setAttribute('tabindex', actif ? '0' : '-1');
          if (panneaux[i]) { panneaux[i].hidden = !actif; }
        });
        if (focus && valides[index]) { valides[index].focus(); }
      }

      chaque(valides, function (onglet, index) {
        onglet.addEventListener('click', function () { activer(index, false); });
        onglet.addEventListener('keydown', function (evenement) {
          var cible = null;
          if (evenement.key === 'ArrowRight') { cible = (index + 1) % valides.length; }
          if (evenement.key === 'ArrowLeft') { cible = (index - 1 + valides.length) % valides.length; }
          if (evenement.key === 'Home') { cible = 0; }
          if (evenement.key === 'End') { cible = valides.length - 1; }
          if (cible !== null) {
            evenement.preventDefault();
            activer(cible, true);
          }
        });
      });

      activer(0, false);
    });
  }

  function initialiser() {
    initialiserFiltres();
    initialiserAccordeons();
    initialiserOnglets();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiser);
  } else {
    initialiser();
  }
})();
