/* Super-portfolio — page Contact : formulaire (mailto) et calcul de distance.
   Amélioration progressive : sans JavaScript, le formulaire reste un lien mailto
   classique et la carte Google reste visible. */
(function () {
  'use strict';

  var NL = (document.documentElement.lang || '').toLowerCase().indexOf('nl') === 0;
  function t(fr, nl) { return NL ? nl : fr; }

  var DOMICILE = { lat: 50.547375, lon: 3.366812 };

  /* --- Formulaire de contact : ouvre la messagerie avec le message prérempli --- */
  function initialiserFormulaire() {
    var formulaire = document.getElementById('contact-form');
    if (!formulaire) { return; }
    var note = document.getElementById('contact-form-note');

    formulaire.addEventListener('submit', function (evenement) {
      evenement.preventDefault();
      var nom = formulaire.elements.nom.value.trim();
      var email = formulaire.elements.email.value.trim();
      var profil = formulaire.elements.profil.value;
      var message = formulaire.elements.message.value.trim();
      if (!nom || !email || !profil || !message) {
        if (note) { note.textContent = t('Merci de compléter tous les champs.', 'Vul alle velden in.'); }
        return;
      }
      var sujet = 'Contact — ' + profil + ' — ' + nom;
      var corps = t('Nom : ', 'Naam: ') + nom + '\n' + t('E-mail : ', 'E-mail: ') + email +
        '\n' + t('Profil : ', 'Profiel: ') + profil + '\n\n' + message;
      var lien = 'mailto:contact@calogero-volpe.eu?subject=' +
        encodeURIComponent(sujet) + '&body=' + encodeURIComponent(corps);
      if (note) { note.textContent = t('Votre messagerie va s’ouvrir avec le message prérempli.', 'Uw e-mailprogramma opent met het vooraf ingevulde bericht.'); }
      window.location.href = lien;
    });
  }

  function formaterDuree(secondes) {
    var minutes = Math.round(secondes / 60);
    if (minutes < 60) { return minutes + ' min'; }
    var heures = Math.floor(minutes / 60);
    var reste = minutes % 60;
    return heures + ' h ' + (reste < 10 ? '0' + reste : reste);
  }

  /* --- Distance et durée entre l'entreprise et Guignies --- */
  function initialiserDistance() {
    var formulaire = document.getElementById('contact-distance');
    if (!formulaire) { return; }
    var champ = document.getElementById('contact-adresse');
    var sortie = document.getElementById('contact-distance-resultat');
    var lienSortie = document.getElementById('contact-distance-lien');
    var bouton = formulaire.querySelector('button[type="submit"]');

    function afficher(message) {
      if (sortie) { sortie.textContent = message; }
    }

    formulaire.addEventListener('submit', function (evenement) {
      evenement.preventDefault();
      var adresse = champ ? champ.value.trim() : '';
      if (!adresse) { afficher(t('Indiquez une adresse.', 'Geef een adres op.')); return; }
      if (lienSortie) { lienSortie.hidden = true; lienSortie.innerHTML = ''; }
      afficher(t('Calcul en cours…', 'Berekening bezig…'));
      if (bouton) { bouton.disabled = true; }

      var geoUrl = 'https://photon.komoot.io/api/?limit=1&q=' + encodeURIComponent(adresse);
      fetch(geoUrl).then(function (reponse) {
        if (!reponse.ok) { throw new Error('géocodage impossible'); }
        return reponse.json();
      }).then(function (donnees) {
        if (!donnees.features || !donnees.features.length) {
          throw new Error('adresse introuvable');
        }
        var coords = donnees.features[0].geometry.coordinates;
        var lon = coords[0];
        var lat = coords[1];
        var osrm = 'https://router.project-osrm.org/route/v1/driving/' +
          DOMICILE.lon + ',' + DOMICILE.lat + ';' + lon + ',' + lat + '?overview=false';
        return fetch(osrm).then(function (reponse) {
          if (!reponse.ok) { throw new Error('itinéraire impossible'); }
          return reponse.json();
        });
      }).then(function (donnees) {
        if (!donnees.routes || !donnees.routes.length) {
          throw new Error('aucun itinéraire trouvé');
        }
        var route = donnees.routes[0];
        var km = Math.round(route.distance / 1000);
        var duree = formaterDuree(route.duration);
        afficher(t('≈ ', '≈ ') + km + ' km · ' + duree +
          t(' en voiture jusqu’à Guignies (estimation OpenStreetMap).', ' met de auto naar Guignies (schatting OpenStreetMap).'));
        if (lienSortie) {
          lienSortie.hidden = false;
          lienSortie.innerHTML = '<a href="https://www.google.com/maps/dir/?api=1&destination=' +
            encodeURIComponent('Place de Guignies, Belgique') + '&origin=' +
            encodeURIComponent(adresse) + '" target="_blank" rel="noopener">' +
            t('Ouvrir l’itinéraire dans Google Maps →', 'Route openen in Google Maps →') + '</a>';
        }
      }).catch(function (erreur) {
        afficher(t('Calcul impossible : ', 'Berekening onmogelijk: ') + erreur.message +
          t('. Vérifiez l’adresse ou réessayez.', '. Controleer het adres of probeer opnieuw.'));
      }).then(function () {
        if (bouton) { bouton.disabled = false; }
      });
    });
  }

  function initialiser() {
    initialiserFormulaire();
    initialiserDistance();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiser);
  } else {
    initialiser();
  }
})();
