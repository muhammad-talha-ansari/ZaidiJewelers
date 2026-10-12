// router.js

async function loadComponent(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    if (response.ok) {
      const html = await response.text();
      const el = document.getElementById(elementId);
      if (el) el.innerHTML = html;
    } else {
      console.error(`Error loading ${filePath}: ${response.statusText}`);
    }
  } catch (error) {
    console.error(`Fetch error for ${filePath}:`, error);
  }
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.body.appendChild(script);
  });
}

function loadStylesheet(href) {
  if (!document.querySelector(`link[href="${href}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }
}

function fixComponentPaths(containerId, basePath) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // CSS links fix
    const links = container.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('/') && !href.startsWith(basePath)) {
            link.setAttribute('href', basePath + href);
        }
    });

    // Images fix (jaise search overlay ka logo)
    const images = container.querySelectorAll('img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src && !src.startsWith('http') && !src.startsWith('/') && !src.startsWith(basePath)) {
            img.setAttribute('src', basePath + src);
        }
    });

    // Anchors fix
    const anchors = container.querySelectorAll('a');
    anchors.forEach(a => {
        const href = a.getAttribute('href');
        if (href && href.endsWith('.html') && !href.startsWith('http') && !href.startsWith('/') && !href.startsWith(basePath)) {
            a.setAttribute('href', basePath + href);
        }
    });
}

async function initLayout() {
  const isSubPage = window.location.pathname.includes('/Pages/');
  const basePath = isSubPage ? '../../' : './';

  // Inject required CSS files dynamically for subpages
  loadStylesheet(`${basePath}Header/Search Bar.css`);
  loadStylesheet(`${basePath}Header/header.css`);

  // Load Header and Footer HTML
  await loadComponent('header-placeholder', `${basePath}Header/Header.html`);
  await loadComponent('footer-placeholder', `${basePath}Footer/Footer.html`);

  // Fix internal paths for subpages
  fixComponentPaths('header-placeholder', basePath);
  fixComponentPaths('footer-placeholder', basePath);

  // Load JS files with correct paths
  await loadScript(`${basePath}Header/header.js`);
  await loadScript(`${basePath}Header/Search Bar.js`);
  await loadScript(`${basePath}Footer/Footer.js`);
}

document.addEventListener('DOMContentLoaded', initLayout);
