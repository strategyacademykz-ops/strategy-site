const closeMenu = () => document.body.classList.remove('open');
document.querySelectorAll('.menu a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('click', e => {
  if (document.body.classList.contains('open') && !e.target.closest('.menu') && !e.target.closest('.burger')) closeMenu();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.05, rootMargin: '0px 0px -5% 0px' });
  document.querySelectorAll('.sec .wrap > *, .card').forEach(el => { el.classList.add('rv'); io.observe(el); });
}
