document.addEventListener('DOMContentLoaded', () => {
  // --- 1. SCROLL REVEAL ANIMATIONS ---
  const reveals = document.querySelectorAll('.reveal');

  // Modified specifically to fix iOS Safari footer detection issues
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
    const navBrand = navWrapper.querySelector('.nav-brand');
    if (navBrand) {
      navBrand.addEventListener('click', (e) => {
        const isHome = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
        
        if (isHome) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.location.href = '/';
        }
      });
    }

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
