(function initHeader() {
  // Mobile Drawer Elements
  const mobileMenuBtn = document.getElementById('zjMobileMenuBtn');
  const drawerCloseBtn = document.getElementById('zjDrawerCloseBtn');
  const drawerOverlay = document.getElementById('zjDrawerOverlay');
  const mobileDrawer = document.getElementById('zjMobileDrawer');

  // Open Drawer Function
  const openDrawer = () => {
    if (mobileDrawer) mobileDrawer.classList.add('zj-open');
    if (drawerOverlay) drawerOverlay.classList.add('zj-open');
    document.body.style.overflow = 'hidden';
  };

  // Close Drawer Function
  const closeDrawer = () => {
    if (mobileDrawer) mobileDrawer.classList.remove('zj-open');
    if (drawerOverlay) drawerOverlay.classList.remove('zj-open');
    document.body.style.overflow = '';
  };

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  // Esc Key Listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileDrawer && mobileDrawer.classList.contains('zj-open')) {
        closeDrawer();
      }
      if (engagementMegaMenu && engagementMegaMenu.classList.contains('zj-mega-active')) {
        engagementMegaMenu.classList.remove('zj-mega-active');
        if (engagementBtn) engagementBtn.classList.remove('zj-active');
      }
    }
  });

  // ==========================================
  // MEGA MENU & NAV LINKS TOGGLE LOGIC
  // ==========================================
  const navLinks = document.querySelectorAll('.zj-desktop-bottom-nav .zj-nav-link');
  const engagementBtn = document.getElementById('zjEngagementBtn');
  const engagementMegaMenu = document.getElementById('zjEngagementMegaMenu');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
      }

      const isEngagement = this === engagementBtn;

      // Unselect all other nav items
      navLinks.forEach(item => {
        if (item !== this) {
          item.classList.remove('zj-active');
        }
      });

      if (isEngagement) {
        // Toggle Engagement Mega Menu Display with Fade Up
        const isOpen = engagementMegaMenu && engagementMegaMenu.classList.contains('zj-mega-active');
        if (isOpen) {
          engagementMegaMenu.classList.remove('zj-mega-active');
          this.classList.remove('zj-active');
        } else if (engagementMegaMenu) {
          engagementMegaMenu.classList.add('zj-mega-active');
          this.classList.add('zj-active');
        }
      } else {
        // Close Mega Menu if clicking any other nav item
        if (engagementMegaMenu) {
          engagementMegaMenu.classList.remove('zj-mega-active');
        }
        this.classList.add('zj-active');
      }
    });
  });

  // Close Mega Menu when clicking outside of it
  document.addEventListener('click', (e) => {
    if (engagementMegaMenu && engagementBtn) {
      const isClickInside = engagementMegaMenu.contains(e.target) || engagementBtn.contains(e.target);
      if (!isClickInside && engagementMegaMenu.classList.contains('zj-mega-active')) {
        engagementMegaMenu.classList.remove('zj-mega-active');
        engagementBtn.classList.remove('zj-active');
      }
    }
  });
})();