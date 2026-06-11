/* ═══════════════════════════════════════════════════════════
   IMPULSION JM CONSULTING — Scripts principaux
   ═══════════════════════════════════════════════════════════ */

// Année dynamique dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menu hamburger (mobile)
const toggle = document.querySelector('.nav-toggle');
const nav    = document.getElementById('main-nav');

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open', !isOpen);
});

// Fermer le menu au clic sur un lien
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  });
});

// Marquer le lien actif selon la page courante
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-list a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});
