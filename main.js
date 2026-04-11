/* ===========================
   main.js — Portfolio Interactions
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ----- Nav scroll shadow ----- */
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* ----- Smooth scroll for anchor links ----- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ----- Scroll Reveal ----- */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ----- Staggered reveal for card groups ----- */
  document.querySelectorAll('[data-stagger]').forEach(group => {
    const children = group.querySelectorAll('.reveal');

    const groupObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 120);
          });
          groupObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    groupObserver.observe(group);
  });

  /* ----- Active nav link on scroll (index page) ----- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav ul li a');

  if (sections.length > 0) {
    const highlightNav = () => {
      const scrollY = window.scrollY + 120;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach(link => {
            link.classList.remove('is-active');
            const href = link.getAttribute('href');
            if (href === `#${id}` || href.endsWith(`#${id}`)) {
              link.classList.add('is-active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', highlightNav);
    highlightNav();
  }

});
