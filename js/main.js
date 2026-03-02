/* ============================================================
   ALV Landing Page – main.js
   ============================================================ */

/* --- Sticky Nav Shadow --------------------------------------- */
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 10);
  }, { passive: true });
})();

/* --- Mobile Nav Toggle --------------------------------------- */
(function () {
  const burger  = document.querySelector('.nav__burger');
  const mobileNav = document.querySelector('.nav__mobile');
  if (!burger || !mobileNav) return;
  burger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open);
  });
  // Close when a link is clicked
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('is-open'));
  });
})();

/* --- Scroll Reveal ------------------------------------------- */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
})();

/* --- Prozess Tabs -------------------------------------------- */
(function () {
  const steps   = document.querySelectorAll('.prozess__step');
  const screens = document.querySelectorAll('.prozess__screen');
  if (!steps.length) return;

  function activate(index) {
    steps.forEach((s, i) => s.classList.toggle('is-active', i === index));
    screens.forEach((s, i) => s.classList.toggle('is-active', i === index));
  }
  activate(0);
  steps.forEach((step, i) => step.addEventListener('click', () => activate(i)));
})();

/* --- FAQ Accordion ------------------------------------------- */
(function () {
  const items = document.querySelectorAll('.faq__item');
  items.forEach(item => {
    const question = item.querySelector('.faq__question');
    const answer   = item.querySelector('.faq__answer');
    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      // Close all
      items.forEach(i => {
        i.classList.remove('is-open');
        i.querySelector('.faq__answer').style.maxHeight = '0';
      });
      // Open clicked (if was closed)
      if (!isOpen) {
        item.classList.add('is-open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
})();

/* --- Smooth Scroll with Nav offset --------------------------- */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
