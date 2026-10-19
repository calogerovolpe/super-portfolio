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

  /* --- Formulaire de don --- */
  function initialiserDon() {
    var formulaire = document.querySelector('.demo-don');
    if (!formulaire) { return; }
    var recap = formulaire.querySelector('#demo-don-recap');
    var champLibre = formulaire.querySelector('#demo-don-montant-libre');
    var frequences = formulaire.querySelectorAll('input[name="frequence"]');
    var montants = formulaire.querySelectorAll('input[name="montant"]');

    function frequenceChoisie() {
      var choisi = formulaire.querySelector('input[name="frequence"]:checked');
      return choisi && choisi.value === 'mensuel' ? 'mensuel' : 'ponctuel';
    }

    function montantChoisi() {
      var choisi = formulaire.querySelector('input[name="montant"]:checked');
      if (!choisi) { return null; }
      if (choisi.value === 'autre') {
        var valeur = champLibre ? champLibre.value.trim() : '';
        return valeur ? valeur + ' €' : null;
      }
      return choisi.value + ' €';
    }

    function rendre() {
      if (!recap) { return; }
      var montant = montantChoisi();
      recap.textContent = montant ?
        'Don ' + frequenceChoisie() + ' de ' + montant :
        'Don ' + frequenceChoisie() + ' — montant libre à saisir';
    }

    function majChampLibre() {
      var autre = formulaire.querySelector('input[name="montant"][value="autre"]');
      var actif = autre && autre.checked;
      if (champLibre) {
        champLibre.disabled = !actif;
        if (actif) { champLibre.focus(); }
      }
      rendre();
    }

    chaque(montants, function (radio) {
      radio.addEventListener('change', majChampLibre);
    });
    chaque(frequences, function (radio) {
      radio.addEventListener('change', rendre);
    });
    if (champLibre) {
      champLibre.addEventListener('input', rendre);
    }
    formulaire.addEventListener('submit', function (evenement) {
      evenement.preventDefault();
      if (!recap) { return; }
      var montant = montantChoisi();
      recap.textContent = montant ?
        'Merci ! Don ' + frequenceChoisie() + ' de ' + montant + ' (démonstration)' :
        'Merci ! Don ' + frequenceChoisie() + ' — montant libre à saisir';
    });

    majChampLibre();
  }

  /* --- Fenêtre de démonstration redimensionnable --- */
  function initialiserFenetre() {
    var fenetre = document.getElementById('demo-fenetre');
    var curseur = document.getElementById('demo-menu-largeur');
    var sortie = document.getElementById('demo-menu-largeur-valeur');
    if (!fenetre || !curseur) { return; }

    function appliquer() {
      var valeur = parseInt(curseur.value, 10) || 640;
      fenetre.style.setProperty('--largeur-fenetre', valeur + 'px');
      if (sortie) { sortie.textContent = valeur + ' px'; }
    }

    curseur.addEventListener('input', appliquer);
    appliquer();
  }

  /* --- Grille redimensionnable --- */
  function initialiserGrille() {
    var grille = document.querySelector('.demo-grille');
    var curseur = document.getElementById('demo-grille-largeur');
    var sortie = document.getElementById('demo-grille-largeur-valeur');
    var colonnes = document.getElementById('demo-grille-colonnes');
    if (!grille || !curseur) { return; }

    function compterColonnes() {
      var valeur = window.getComputedStyle(grille).gridTemplateColumns;
      if (!valeur || valeur === 'none') { return 1; }
      return valeur.split(' ').filter(function (item) { return item; }).length;
    }

    function majColonnes() {
      if (!colonnes || grille.offsetParent === null) { return; }
      var nombre = compterColonnes();
      colonnes.textContent = nombre + ' colonne' + (nombre > 1 ? 's' : '');
    }

    function appliquer() {
      var valeur = parseInt(curseur.value, 10) || 480;
      grille.style.setProperty('--largeur-grille', valeur + 'px');
      if (sortie) { sortie.textContent = valeur + ' px'; }
      majColonnes();
    }

    curseur.addEventListener('input', appliquer);
    window.addEventListener('resize', majColonnes);
    grille.addEventListener('transitionend', function (evenement) {
      if (evenement.propertyName === 'width') { majColonnes(); }
    });
    appliquer();
  }

  function initialiser() {
    chaque(document.querySelectorAll('.carte-demo'), function (carte) {
      if (carte.querySelector('[role="tab"]')) { initialiserOnglets(carte); }
    });
    initialiserAccordeons();
    initialiserDon();
    initialiserFenetre();
    initialiserGrille();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiser);
  } else {
    initialiser();
  }
})();
