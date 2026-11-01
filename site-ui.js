(() => {
  const bindMobileNavigation = () => {
    const toggle = document.querySelector('.mobile-nav-toggle');
    const menu = document.querySelector('.navbar-menu');

    if (!toggle || !menu) {
      return;
    }

    const setOpen = (isOpen) => {
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Cerrar navegación' : 'Abrir navegación');
      menu.classList.toggle('is-open', isOpen);
    };

    toggle.addEventListener('click', () => {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    });
    document.addEventListener('click', (event) => {
      if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        setOpen(false);
      }
    });
  };

  const bindBackToTop = () => {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.type = 'button';
    button.setAttribute('aria-label', 'Volver arriba');
    button.textContent = '↑';
    document.body.appendChild(button);

    let ticking = false;
    const updateVisibility = () => {
      button.classList.toggle('is-visible', window.scrollY > 560);
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    }, { passive: true });
    button.addEventListener('click', () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.scrollTo(0, 0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    bindMobileNavigation();
    bindBackToTop();
  });
})();