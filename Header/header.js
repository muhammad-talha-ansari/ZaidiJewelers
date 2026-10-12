(function initHeader() {
  // Mobile Drawer Elements
  const mobileMenuBtn = document.getElementById('zjMobileMenuBtn');
  const drawerCloseBtn = document.getElementById('zjDrawerCloseBtn');
  const drawerOverlay = document.getElementById('zjDrawerOverlay');
  const mobileDrawer = document.getElementById('zjMobileDrawer');

  // Search Overlay Elements
  const searchOpenBtn = document.getElementById('zjHeaderSearchBtn');
  const searchCloseBtn = document.getElementById('zjSearchClose');
  const searchOverlay = document.getElementById('zjSearchOverlay');
  const mobileSearchTrigger = document.getElementById('zjMobileSearchTrigger');

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

  // Search Open/Close Handlers
  const openSearch = () => {
    if (searchOverlay) searchOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const input = document.getElementById('zjSearchInput');
      if (input) input.focus();
    }, 150);
  };

  const closeSearch = () => {
    if (searchOverlay) searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (searchOpenBtn) {
    searchOpenBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openSearch();
    });
  }

  if (searchCloseBtn) {
    searchCloseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeSearch();
    });
  }

  if (mobileSearchTrigger) {
    mobileSearchTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      closeDrawer();
      openSearch();
    });
  }

  // Esc Key Listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileDrawer && mobileDrawer.classList.contains('zj-open')) {
        closeDrawer();
      }
      if (searchOverlay && searchOverlay.classList.contains('active')) {
        closeSearch();
      }
    }
  });

  // Mega Menu Logic
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
      navLinks.forEach(item => {
        if (item !== this) item.classList.remove('zj-active');
      });

      if (isEngagement && engagementMegaMenu) {
        engagementMegaMenu.classList.toggle('zj-mega-active');
        this.classList.toggle('zj-active');
      } else if (engagementMegaMenu) {
        engagementMegaMenu.classList.remove('zj-mega-active');
        this.classList.add('zj-active');
      }
    });
  });

  // Initialize Search Bar JS functionality
  if (typeof window.initZaidiSearchBar === 'function') {
    window.initZaidiSearchBar();
  }
})();
