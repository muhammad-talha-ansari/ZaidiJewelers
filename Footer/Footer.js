(function initFooter() {
  // Mobile Accordion Toggle Logic
  const accordionHeaders = document.querySelectorAll('.zj-accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      // Check if current screen is mobile size
      if (window.innerWidth <= 768) {
        const currentItem = this.parentElement;
        const isOpen = currentItem.classList.contains('zj-accordion-open');

        // Close all other accordion items
        document.querySelectorAll('.zj-accordion-item').forEach(item => {
          item.classList.remove('zj-accordion-open');
          const btn = item.querySelector('.zj-accordion-header');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });

        // Toggle clicked item
        if (!isOpen) {
          currentItem.classList.add('zj-accordion-open');
          this.setAttribute('aria-expanded', 'true');
        }
      }
    });
  });

  // Smooth scroll for internal anchor links
  const footerLinks = document.querySelectorAll('.zj-site-footer a[href^="#"]');
  footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#' && document.querySelector(targetId)) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
})();