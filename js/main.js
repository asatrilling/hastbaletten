/* Hästbaletten – enkel interaktivitet
   Mobilmeny: öppna/stäng navigationen på små skärmar. */
(function () {
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Stäng menyn när en länk klickas (mobil)
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') links.classList.remove('open');
    });
  }

  // Markera aktiv sida i menyn utifrån filnamn
  var here = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav__links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === here || (here === '' && href === 'index.html')) a.classList.add('active');
  });
})();

// Sadelgalleri: klick på miniatyr byter huvudbild
(function () {
  document.querySelectorAll('.gal').forEach(function (g) {
    var main = g.querySelector('.gal__main');
    g.querySelectorAll('.gal__t').forEach(function (t) {
      t.addEventListener('click', function () {
        if (t.dataset.full) main.src = t.dataset.full;
        g.querySelectorAll('.gal__t').forEach(function (x) { x.classList.remove('is-active'); });
        t.classList.add('is-active');
      });
    });
  });
})();
