document.querySelectorAll('.menu a').forEach(a => a.addEventListener('click', () => document.body.classList.remove('open')));
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.1 });
  document.querySelectorAll('.sec .wrap > *, .card').forEach(el => { el.classList.add('rv'); io.observe(el); });
}
