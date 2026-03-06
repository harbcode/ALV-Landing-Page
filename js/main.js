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

/* --- Autoplay Videos on Scroll ------------------------------- */
(function () {
  const videos = document.querySelectorAll('.prozess__autoplay-video');
  if (!videos.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.play();
      } else {
        e.target.pause();
      }
    });
  }, { threshold: 0.4 });
  videos.forEach(v => observer.observe(v));
})();

/* --- Video Gate ---------------------------------------------- */
(function () {
  const ACCESS_CODE = 'DEMO2025'; // Zugangscode hier ändern

  const modal      = document.getElementById('vgateModal');
  if (!modal) return;

  const backdrop   = modal.querySelector('.vgate-modal__backdrop');
  const closeBtn   = modal.querySelector('.vgate-modal__close');
  const gateEl     = modal.querySelector('.vgate-modal__gate');
  const videoEl    = modal.querySelector('.vgate-modal__video');
  const preview    = modal.querySelector('.vgate-modal__preview');
  const codeInput  = document.getElementById('vgateCode');
  const submitBtn  = document.getElementById('vgateSubmit');
  const errorEl    = document.getElementById('vgateError');
  const player     = modal.querySelector('.vgate-modal__player');

  let currentVideoSrc = '';

  function openModal(gate) {
    const src   = gate.dataset.video || '';
    const alt   = gate.dataset.alt || '';
    const img   = gate.querySelector('img');
    currentVideoSrc = src;

    preview.src = img ? img.src : '';
    preview.alt = alt;
    codeInput.value = '';
    codeInput.classList.remove('is-error');
    errorEl.hidden = true;
    gateEl.hidden = false;
    videoEl.hidden = true;
    player.src = '';
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => codeInput.focus(), 50);
  }

  function closeModal() {
    player.pause();
    player.src = '';
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  function tryCode() {
    const entered = codeInput.value.trim().toUpperCase();
    if (entered === ACCESS_CODE.toUpperCase()) {
      gateEl.hidden = true;
      videoEl.hidden = false;
      player.src = currentVideoSrc;
      player.play();
    } else {
      codeInput.classList.add('is-error');
      errorEl.hidden = false;
      codeInput.select();
    }
  }

  // Play-Buttons in den Prozessschritten
  document.querySelectorAll('.video-gate').forEach(gate => {
    gate.querySelector('.video-gate__play').addEventListener('click', () => openModal(gate));
  });

  submitBtn.addEventListener('click', tryCode);
  codeInput.addEventListener('keydown', e => { if (e.key === 'Enter') tryCode(); });
  codeInput.addEventListener('input', () => {
    codeInput.classList.remove('is-error');
    errorEl.hidden = true;
  });
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) closeModal();
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
