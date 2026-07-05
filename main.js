document.addEventListener('DOMContentLoaded', () => {
  // --- 1. SCROLL REVEAL ANIMATIONS ---
  const reveals = document.querySelectorAll('.reveal');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px', 
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Stop observing once revealed so it only animates once
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
      
      // Determine if we are on the homepage
      const isHome = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');

      // If it's a cross-page root anchor link (e.g. /#atlas) and we are on a legal subpage, let the browser navigate naturally.
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

      // Handle standard same-page # anchors
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // --- 3. DYNAMIC ISLAND & SCROLL-TO-TOP INJECTION ---
  const navWrapper = document.querySelector('.nav-wrapper');
  
  if (navWrapper) {
    // Make the 'RC' Logo icon act as a back-to-home / scroll-to-top trigger
    const navBrand = navWrapper.querySelector('.nav-brand');
    if (navBrand) {
      navBrand.addEventListener('click', (e) => {
        const isHome = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
        
        // If already on the homepage, smoothly scroll to top
        if (isHome) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          // Allow natural navigation back to home root
          window.location.href = '/';
        }
      });
    }

    // Inject the minimalist scroll-to-top arrow button on the right edge of the island
    const toTopBtn = document.createElement('div');
    toTopBtn.className = 'nav-to-top';
    toTopBtn.setAttribute('aria-label', 'Scroll to top');
    toTopBtn.setAttribute('role', 'button');
    toTopBtn.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5L12 19M12 5L6 11M12 5L18 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
    
    toTopBtn.addEventListener('click', () => {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    navWrapper.appendChild(toTopBtn);
  }
});
