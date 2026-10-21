/* Super-portfolio — navigation, thème, retour en haut, copie d'e-mail.
   Amélioration progressive : les contrôles sont créés par JavaScript.
   La navigation, la barre latérale et le menu bas restent utilisables sans JS. */
(function () {
  'use strict';

  var NL = (document.documentElement.lang || '').toLowerCase().indexOf('nl') === 0;
  function t(fr, nl) { return NL ? nl : fr; }

  var ICO_CLAIR = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4" y="4" width="16" height="16"/><rect x="9" y="9" width="6" height="6" fill="currentColor"/></svg>';
  var ICO_SOMBRE = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4" y="4" width="16" height="16" fill="currentColor"/><rect x="12" y="4" width="8" height="16" fill="var(--fond)"/></svg>';
  var ICO_COPIE = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="8" y="8" width="12" height="12"/><path d="M4 16V4h12"/></svg>';
  var ICO_OK = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="5" y="5" width="14" height="14" fill="currentColor"/></svg>';

  function mouvementReduit() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /* --- Bouton retour en haut --- */
  function construireRetourHaut() {
    var bouton = document.createElement('button');
    bouton.type = 'button';
    bouton.className = 'back-to-top';
    bouton.setAttribute('aria-label', t('Retour en haut de page', 'Terug naar boven'));
    bouton.innerHTML = '↑ <span class="btn-libelle">' + t('Haut', 'Boven') + '</span>';
    document.body.appendChild(bouton);

    var enAttente = false;
    function majVisibilite() {
      bouton.classList.toggle('is-visible', window.scrollY > 400);
      enAttente = false;
    }
    window.addEventListener('scroll', function () {
      if (!enAttente) {
        enAttente = true;
        window.requestAnimationFrame(majVisibilite);
      }
    }, { passive: true });

    bouton.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: mouvementReduit() ? 'auto' : 'smooth' });
    });

    majVisibilite();
  }

  /* --- Thème clair / sombre --- */
  function construireTheme() {
    var barre = document.querySelector('.site-sidebar');
    if (!barre) { return; }
    var racine = document.documentElement;
    var mode = racine.getAttribute('data-theme') === 'clair' ? 'clair' : 'sombre';
    var bouton = document.createElement('button');
    bouton.type = 'button';
    bouton.className = 'theme-toggle';

    function rendre() {
      var clair = mode === 'clair';
      bouton.innerHTML = (clair ? ICO_CLAIR : ICO_SOMBRE) +
        '<span class="theme-libelle">' + t('Thème ', 'Thema ') +
        (clair ? t('sombre', 'donker') : t('clair', 'licht')) + '</span>';
      bouton.setAttribute('aria-label', clair ?
        t('Passer au thème sombre', 'Schakel naar donker thema') :
        t('Passer au thème clair', 'Schakel naar licht thema'));
      bouton.setAttribute('aria-pressed', clair ? 'true' : 'false');
    }

    bouton.addEventListener('click', function () {
      mode = mode === 'clair' ? 'sombre' : 'clair';
      if (mode === 'clair') {
        racine.setAttribute('data-theme', 'clair');
      } else {
        racine.removeAttribute('data-theme');
      }
      try { localStorage.setItem('theme', mode); } catch (e) {}
      rendre();
    });

    rendre();
    barre.appendChild(bouton);
  }

  /* --- Copie dans le presse-papiers --- */
  function copierTexte(texte) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(texte);
    }
    return new Promise(function (resolve, reject) {
      var zone = document.createElement('textarea');
      zone.value = texte;
      zone.setAttribute('readonly', '');
      zone.style.position = 'fixed';
      zone.style.top = '-9999px';
      document.body.appendChild(zone);
      zone.select();
      try {
        var ok = document.execCommand('copy');
        document.body.removeChild(zone);
        if (ok) { resolve(); } else { reject(new Error('Copie impossible')); }
      } catch (err) {
        document.body.removeChild(zone);
        reject(err);
      }
    });
  }

  function construireCopieEmail() {
    var liens = document.querySelectorAll('a[href^="mailto:"]');
    var lien = null;
    Array.prototype.forEach.call(liens, function (candidat) {
      if (lien) { return; }
      var href = candidat.getAttribute('href') || '';
      if (href.indexOf('?') === -1) { lien = candidat; }
    });
    if (!lien) { return; }

    var bouton = document.createElement('button');
    bouton.type = 'button';
    bouton.className = 'copy-email';
    bouton.innerHTML = ICO_COPIE;
    bouton.setAttribute('aria-label', t("Copier l'adresse e-mail", 'E-mailadres kopiëren'));
    lien.parentNode.insertBefore(bouton, lien.nextSibling);

    var minuterie = null;
    bouton.addEventListener('click', function () {
      var adresse = lien.getAttribute('href').replace('mailto:', '').split('?')[0];
      copierTexte(adresse).then(function () {
        bouton.innerHTML = ICO_OK;
        bouton.setAttribute('aria-label', t('Adresse e-mail copiée', 'E-mailadres gekopieerd'));
        if (minuterie) { clearTimeout(minuterie); }
        minuterie = setTimeout(function () {
          bouton.innerHTML = ICO_COPIE;
          bouton.setAttribute('aria-label', t("Copier l'adresse e-mail", 'E-mailadres kopiëren'));
        }, 2000);
      }).catch(function () {
        var selection = window.getSelection();
        var plage = document.createRange();
        plage.selectNodeContents(lien);
        selection.removeAllRanges();
        selection.addRange(plage);
      });
    });
  }

  /* --- État de la barre latérale --- */
  function memoriserBarre() {
    var bascule = document.getElementById('nav-reduit');
    if (!bascule) { return; }
    try {
      if (localStorage.getItem('barre') === 'reduite') { bascule.checked = true; }
      bascule.addEventListener('change', function () {
        localStorage.setItem('barre', bascule.checked ? 'reduite' : 'ouverte');
      });
    } catch (e) {}
  }

  /* --- Page courante --- */
  function marquerPageCourante() {
    var fichier = window.location.pathname.split('/').pop() || 'index.html';
    var liens = document.querySelectorAll('.site-nav a[href]');
    Array.prototype.forEach.call(liens, function (lien) {
      var cible = lien.getAttribute('href').split('#')[0];
      if (cible === fichier) { lien.setAttribute('aria-current', 'page'); }
    });
  }

  function init() {
    construireRetourHaut();
    construireTheme();
    construireCopieEmail();
    memoriserBarre();
    marquerPageCourante();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

