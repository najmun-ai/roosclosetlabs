document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Custom Magnetic/Expanding Cursor
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');
  const hoverTargets = document.querySelectorAll('.hover-target, a');

  // Check if device supports hover (ignores mobile/touch devices)
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice && cursorDot && cursorOutline) {
    window.addEventListener('mousemove', (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      // Dot follows exactly
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      // Outline follows with slight delay using animate API for smoothness
      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 500, fill: "forwards" });
    });

    // Expand cursor over interactive elements
    hoverTargets.forEach(target => {
      target.addEventListener('mouseenter', () => {
        cursorOutline.classList.add('hover');
        cursorDot.style.backgroundColor = 'transparent';
      });
      target.addEventListener('mouseleave', () => {
        cursorOutline.classList.remove('hover');
        cursorDot.style.backgroundColor = 'var(--brand-emerald)';
      });
    });
  }

  // 2. Intersection Observer for Scroll Reveals
  const revealElements = document.querySelectorAll('.reveal-up');

  const revealOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px', // Triggers slightly before coming into view
    threshold: 0.1
  };

  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // 3. Smooth Anchor Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if(targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

});
