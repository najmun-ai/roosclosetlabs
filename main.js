document.addEventListener('DOMContentLoaded', () => {
  // --- 1. SCROLL REVEAL ANIMATIONS ---
  const reveals = document.querySelectorAll('.reveal');

  const observerOptions = {
    root: null,
    rootMargin: '0px', 
    threshold: 0.05 
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(reveal => {
    revealObserver.observe(reveal);
  });

  // --- 2. SMOOTH SCROLLING ---
  document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const isHome = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');

      if (targetId.startsWith('/#')) {
         if (!isHome) return; 
         e.preventDefault();
         const cleanId = targetId.replace('/', '');
         const targetElement = document.querySelector(cleanId);
         if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
         }
         return;
      }

      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- 3. DYNAMIC PINTEREST ISLAND INJECTION ---
  const navWrapper = document.querySelector('.nav-wrapper');
  
  if (navWrapper) {
    // Clear out the old HTML buttons and links, replace with the minimalist 3-block structure
    navWrapper.innerHTML = `
      <a href="#" class="pin-nav-btn" id="pin-top" aria-label="Scroll to top">
        <svg viewBox="0 0 24 24">
          <path d="M12 19V5M5 12l7-7 7 7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <a href="/" class="pin-nav-center" id="pin-home" aria-label="Home">RC</a>
      <a href="#founder" class="pin-nav-btn" id="pin-profile" aria-label="Founder Profile">
        <svg viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    `;

    // Hook up the new buttons
    const isHome = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');

    // 1. Scroll to top button
    document.getElementById('pin-top').addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 2. RC Center Logo
    document.getElementById('pin-home').addEventListener('click', (e) => {
      if (isHome) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    // 3. Profile Icon Button
    document.getElementById('pin-profile').addEventListener('click', (e) => {
      if (isHome) {
        e.preventDefault();
        const founderSection = document.querySelector('#founder');
        if (founderSection) {
          founderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // If on a legal page, let it naturally navigate back to index.html#founder
        window.location.href = '/#founder';
      }
    });
  }
});
