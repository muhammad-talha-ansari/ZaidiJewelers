/* ==========================================================================
   ZAIDI JEWELERS - HOME PAGE INTERACTIVE SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Wishlist Button Toggle Handler
  const wishlistButtons = document.querySelectorAll('.zd-jw-prod-wish-47');
  
  wishlistButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      if (this.innerHTML === '♥') {
        this.innerHTML = '&#9825;';
        this.style.color = '#727877';
      } else {
        this.innerHTML = '&#9829;'; // Filled Heart
        this.style.color = '#D0A648';
      }
    });
  });

  // 2. Swatch Color Selection Indicator
  const swatches = document.querySelectorAll('.zd-jw-swatch-54');
  
  swatches.forEach(swatch => {
    swatch.addEventListener('click', function() {
      const parent = this.parentElement;
      parent.querySelectorAll('.zd-jw-swatch-54').forEach(s => s.style.outline = 'none');
      this.style.outline = '2px solid #000';
      this.style.outlineOffset = '1px';
    });
  });

  // 3. Smooth Intersection Observer Animation for Scroll Reveal
  const observerOptions = {
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply reveal to major cards
  const animatableCards = document.querySelectorAll('.zd-jw-prod-card-44, .zd-jw-cat-card-63, .zd-jw-ethos-card-83');
  
  animatableCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

});