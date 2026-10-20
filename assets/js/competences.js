/* Super-portfolio — page Compétences : accordéons et onglets.
   Amélioration progressive : sans JavaScript, tous les panneaux d'accordéon
   restent ouverts et le premier onglet de la matrice est lisible. */
(function () {
  'use strict';

  function chaque(liste, action) {
    Array.prototype.forEach.call(liste, action);
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
    initialiserAccordeons();
    initialiserOnglets();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiser);
  } else {
    initialiser();
  }
})();
