/* Super-portfolio — démonstrations HTML/CSS : onglets et accordéon.
   Amélioration progressive : sans JavaScript, tous les contenus restent visibles. */
(function () {
  'use strict';

  function chaque(liste, action) {
    Array.prototype.forEach.call(liste, action);
  }

  function initialiserOnglets(carte) {
    var onglets = carte.querySelectorAll('[role="tab"]');
    var panneaux = carte.querySelectorAll('[role="tabpanel"]');
    if (!onglets.length || !panneaux.length) { return; }

    function activer(index, focus) {
      chaque(onglets, function (onglet, i) {
        var actif = i === index;
        onglet.setAttribute('aria-selected', actif ? 'true' : 'false');
        onglet.setAttribute('tabindex', actif ? '0' : '-1');
        if (panneaux[i]) { panneaux[i].hidden = !actif; }
      });
      if (focus && onglets[index]) { onglets[index].focus(); }
    }

    chaque(onglets, function (onglet, index) {
      onglet.addEventListener('click', function () { activer(index, false); });
      onglet.addEventListener('keydown', function (evenement) {
        var cible = null;
        if (evenement.key === 'ArrowRight') { cible = (index + 1) % onglets.length; }
        if (evenement.key === 'ArrowLeft') { cible = (index - 1 + onglets.length) % onglets.length; }
        if (evenement.key === 'Home') { cible = 0; }
        if (evenement.key === 'End') { cible = onglets.length - 1; }
        if (cible !== null) {
          evenement.preventDefault();
          activer(cible, true);
        }
      });
    });

    activer(0, false);
  }

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
    chaque(document.querySelectorAll('.carte-demo'), function (carte) {
      if (carte.querySelector('[role="tab"]')) { initialiserOnglets(carte); }
    });
    initialiserAccordeons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiser);
  } else {
    initialiser();
  }
})();
