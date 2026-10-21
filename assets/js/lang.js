/* Super-portfolio — langue : détection automatique et sélecteur FR/NL.
   Amélioration progressive : le contenu reste lisible sans JavaScript.
   Chargé sans defer dans <head> pour éviter un clignotement lors de la
   redirection automatique. */
(function () {
  'use strict';

  var CLE = 'lang';
  var SPECIAL = {
    'methode-ia.html': 'transparantie.html',
    'transparantie.html': 'methode-ia.html'
  };

  function memorise() {
    try { return localStorage.getItem(CLE); } catch (e) { return null; }
  }

  function memoriser(valeur) {
    try { localStorage.setItem(CLE, valeur); } catch (e) {}
  }

  function nomFichier() {
    var nom = window.location.pathname.split('/').pop();
    return nom || 'index.html';
  }

  function estNL() {
    return window.location.pathname.indexOf('/nl/') !== -1;
  }

  function langueNavigateur() {
    var langues = (navigator.languages && navigator.languages.length) ?
      navigator.languages : [navigator.language || ''];
    return (langues[0] || '').toLowerCase();
  }

  function veutNL() {
    return langueNavigateur().indexOf('nl') === 0;
  }

  /* Cible dans l'autre langue : même nom de fichier, sauf la page IA. */
  function cible(versNL) {
    var nom = nomFichier();
    var autre = SPECIAL[nom] || nom;
    return versNL ? 'nl/' + autre : '../' + autre;
  }

  /* --- 1. Détection automatique ---
     - choix manuel mémorisé : on le respecte dans les deux sens ;
     - sinon, un navigateur néerlandais arrivé côté FR bascule vers NL ;
     - on ne renvoie jamais automatiquement un visiteur depuis NL vers FR
       (cela casserait l'indexation des pages néerlandaises). */
  var choix = memorise();
  var surNL = estNL();

  if (choix === 'nl' && !surNL) {
    window.location.replace(cible(true));
    return;
  }
  if (choix === 'fr' && surNL) {
    window.location.replace(cible(false));
    return;
  }
  if (!choix && veutNL() && !surNL) {
    window.location.replace(cible(true));
    return;
  }

  /* --- 2. Sélecteur FR / NL dans la barre latérale --- */
  function construireSelecteur() {
    var barre = document.querySelector('.site-sidebar');
    if (!barre) { return; }
    var nl = estNL();

    var boite = document.createElement('div');
    boite.className = 'lang-switch';
    boite.setAttribute('role', 'group');
    boite.setAttribute('aria-label', nl ? 'Taal kiezen' : 'Choisir la langue');

    var lienFR = document.createElement('a');
    lienFR.href = nl ? cible(false) : nomFichier();
    lienFR.textContent = 'FR';
    lienFR.lang = 'fr';
    lienFR.setAttribute('aria-label', nl ? 'Français' : 'Français (langue actuelle)');

    var lienNL = document.createElement('a');
    lienNL.href = nl ? nomFichier() : cible(true);
    lienNL.textContent = 'NL';
    lienNL.lang = 'nl';
    lienNL.setAttribute('aria-label', nl ? 'Nederlands (huidige taal)' : 'Nederlands');

    var actif = nl ? lienNL : lienFR;
    actif.classList.add('is-actif');
    actif.setAttribute('aria-current', 'true');

    [lienFR, lienNL].forEach(function (lien) {
      lien.addEventListener('click', function () {
        memoriser(lien === lienNL ? 'nl' : 'fr');
      });
    });

    boite.appendChild(lienFR);
    boite.appendChild(lienNL);

    var theme = barre.querySelector('.theme-toggle');
    if (theme) { barre.insertBefore(boite, theme); } else { barre.appendChild(boite); }
  }

  /* --- 3. Fermeture du bandeau de transparence --- */
  function construireBandeau() {
    var bandeau = document.querySelector('.bandeau-transparence');
    if (!bandeau) { return; }
    var bouton = bandeau.querySelector('.bandeau-transparence-fermer');
    if (!bouton) { return; }
    var ferme = false;
    try { ferme = sessionStorage.getItem('bandeau-transparence') === 'ferme'; } catch (e) {}
    if (ferme) { bandeau.hidden = true; return; }
    bouton.addEventListener('click', function () {
      bandeau.hidden = true;
      try { sessionStorage.setItem('bandeau-transparence', 'ferme'); } catch (e) {}
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      construireSelecteur();
      construireBandeau();
    });
  } else {
    construireSelecteur();
    construireBandeau();
  }
})();
