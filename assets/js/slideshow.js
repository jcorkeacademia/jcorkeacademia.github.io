// Rotates the homepage project images. Pauses on hover/focus and when
// the visitor prefers reduced motion (they can still click the dots).
document.querySelectorAll('.showcase').forEach(function (box) {
  var slides = box.querySelectorAll('.slide');
  var dots = box.querySelectorAll('.dot');
  var caption = box.querySelector('.caption-link');
  if (slides.length < 2) return;
  var i = 0, timer = null, paused = false;
  var ms = (parseFloat(box.dataset.interval) || 5) * 1000;
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function show(n) {
    slides[i].classList.remove('active'); dots[i].classList.remove('active');
    slides[i].setAttribute('aria-hidden', 'true'); slides[i].tabIndex = -1;
    i = (n + slides.length) % slides.length;
    slides[i].classList.add('active'); dots[i].classList.add('active');
    slides[i].removeAttribute('aria-hidden'); slides[i].removeAttribute('tabindex');
    caption.textContent = slides[i].dataset.title;
    caption.href = slides[i].getAttribute('href');
  }
  function start() { if (!still && !timer) timer = setInterval(function () { if (!paused) show(i + 1); }, ms); }

  dots.forEach(function (d) {
    d.addEventListener('click', function () { show(+d.dataset.index); clearInterval(timer); timer = null; start(); });
  });
  box.addEventListener('mouseenter', function () { paused = true; });
  box.addEventListener('mouseleave', function () { paused = false; });
  box.addEventListener('focusin', function () { paused = true; });
  box.addEventListener('focusout', function () { paused = false; });
  start();
});
