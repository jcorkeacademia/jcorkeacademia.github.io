// Cross-fades the "Selected work" panels. Pauses while the visitor hovers or
// tabs into it, and doesn't auto-rotate for people who prefer reduced motion
// (the dots still work).
document.querySelectorAll('.showcase').forEach(function (box) {
  var slides = box.querySelectorAll('.slide');
  var dots = box.querySelectorAll('.dot');
  if (slides.length < 2) return;
  var i = 0, timer = null, paused = false;
  var ms = (parseFloat(box.dataset.interval) || 8) * 1000;
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setActive(el, on) {
    el.classList.toggle('active', on);
    if (on) el.removeAttribute('aria-hidden'); else el.setAttribute('aria-hidden', 'true');
    el.querySelectorAll('.slide-more, .slide-title a').forEach(function (a) {
      if (on) a.removeAttribute('tabindex'); else a.tabIndex = -1;
    });
  }
  function show(n) {
    setActive(slides[i], false); dots[i].classList.remove('active');
    i = (n + slides.length) % slides.length;
    setActive(slides[i], true); dots[i].classList.add('active');
  }
  function start() {
    if (still || timer) return;
    timer = setInterval(function () { if (!paused && !document.hidden) show(i + 1); }, ms);
  }

  dots.forEach(function (d) {
    d.addEventListener('click', function () { show(+d.dataset.index); clearInterval(timer); timer = null; start(); });
  });
  box.addEventListener('mouseenter', function () { paused = true; });
  box.addEventListener('mouseleave', function () { paused = false; });
  box.addEventListener('focusin', function () { paused = true; });
  box.addEventListener('focusout', function () { paused = false; });
  start();
});
