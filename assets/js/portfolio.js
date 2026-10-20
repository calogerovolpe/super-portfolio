/* Super-portfolio — page Projets : choix de la taille des cartes.
   Amélioration progressive : sans JavaScript, la grille garde sa taille par défaut. */
(function () {
  'use strict';

  var VUES = ['grande', 'moyenne', 'liste'];

  function initialiser() {
    var grille = document.querySelector('.grille-projets--categories');
    var boutons = document.querySelectorAll('[data-vue-choix]');
    if (!grille || !boutons.length) { return; }

    function appliquer(vue, memoriser) {
      if (VUES.indexOf(vue) === -1) { vue = 'grande'; }
      grille.setAttribute('data-vue', vue);
      Array.prototype.forEach.call(boutons, function (bouton) {
        var actif = bouton.getAttribute('data-vue-choix') === vue;
        bouton.setAttribute('aria-pressed', actif ? 'true' : 'false');
      });
      if (memoriser) {
        try { localStorage.setItem('vue-projets', vue); } catch (e) {}
      }
    }

    Array.prototype.forEach.call(boutons, function (bouton) {
      bouton.addEventListener('click', function () {
        appliquer(bouton.getAttribute('data-vue-choix'), true);
      });
    });

    var memorisee = null;
    try { memorisee = localStorage.getItem('vue-projets'); } catch (e) {}
    appliquer(memorisee || grille.getAttribute('data-vue') || 'grande', false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiser);
  } else {
    initialiser();
  }
})();
