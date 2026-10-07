// Scroll reveal. Content is fully visible without this script; the .js class only arms the effect.
(function () {
  var root = document.documentElement;
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !items.length) return;
  root.classList.add('js');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach(function (el) { io.observe(el); });
})();
