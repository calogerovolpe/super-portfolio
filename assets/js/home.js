/* Super-portfolio — accueil : parallaxe légère et apparitions au défilement.
   Le contenu reste visible sans JavaScript (amélioration progressive). */
(function () {
  'use strict';

  function mouvementReduit() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /* Parallaxe : les carrés du hero suivent légèrement le pointeur. */
  function parallaxe() {
    var zone = document.querySelector('.hero-visuel');
    if (!zone || mouvementReduit()) { return; }
    if (!window.matchMedia || !window.matchMedia('(pointer: fine)').matches) { return; }

    var calques = zone.querySelectorAll('[data-parallax]');
    if (!calques.length) { return; }

    var cibleX = 0, cibleY = 0, x = 0, y = 0, raf = null;

    function animer() {
      x += (cibleX - x) * 0.08;
      y += (cibleY - y) * 0.08;
      Array.prototype.forEach.call(calques, function (el) {
        var force = parseFloat(el.getAttribute('data-parallax')) || 0.04;
        el.style.transform = 'translate3d(' +
          (x * force * 100).toFixed(2) + 'px,' +
          (y * force * 100).toFixed(2) + 'px,0)';
      });
      if (Math.abs(cibleX - x) > 0.001 || Math.abs(cibleY - y) > 0.001) {
        raf = window.requestAnimationFrame(animer);
      } else {
        raf = null;
      }
    }

    zone.addEventListener('pointermove', function (e) {
      var r = zone.getBoundingClientRect();
      cibleX = (e.clientX - r.left) / r.width - 0.5;
      cibleY = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) { raf = window.requestAnimationFrame(animer); }
    });

    zone.addEventListener('pointerleave', function () {
      cibleX = 0;
      cibleY = 0;
      if (!raf) { raf = window.requestAnimationFrame(animer); }
    });
  }

  /* Apparitions progressives des blocs marqués data-reveal. */
  function apparitions() {
    var elements = document.querySelectorAll('[data-reveal]');
    if (!elements.length) { return; }

    if (mouvementReduit() || !('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(elements, function (el) {
        el.classList.add('est-visible');
      });
      return;
    }

    var observateur = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (entree) {
        if (entree.isIntersecting) {
          entree.target.classList.add('est-visible');
          observateur.unobserve(entree.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    Array.prototype.forEach.call(elements, function (el) {
      observateur.observe(el);
    });
  }

  function init() {
    parallaxe();
    apparitions();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
