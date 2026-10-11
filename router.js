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

// NAYA FUNCTION: Yeh Header/Footer ke andar ke paths ko theek karega
function fixComponentPaths(containerId, basePath) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // 1. CSS Links ko theek karein (agar woh HTML ke andar hain)
    const links = container.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
        const href = link.getAttribute('href');
        // Agar path pehle se absolute (http ya /) nahi hai, toh basePath lagayein
        if (href && !href.startsWith('http') && !href.startsWith('/') && !href.startsWith(basePath)) {
            link.setAttribute('href', basePath + href);
        }
    });

    // 2. Images ko theek karein (Header/Footer ke logos, icons waghaira)
    const images = container.querySelectorAll('img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src && !src.startsWith('http') && !src.startsWith('/') && !src.startsWith(basePath)) {
            img.setAttribute('src', basePath + src);
        }
    });

    // 3. Links (a href) ko theek karein (jaise index.html, collection.html)
    const anchors = container.querySelectorAll('a');
    anchors.forEach(a => {
        const href = a.getAttribute('href');
        // Sirf un links ko badlein jo .html par khatam hote hain aur absolute nahi hain
        if (href && href.endsWith('.html') && !href.startsWith('http') && !href.startsWith('/') && !href.startsWith(basePath)) {
            a.setAttribute('href', basePath + href);
        }
    });
}

// Function to automatically load Header and Footer based on page location
async function initLayout() {
  // Check if current page is inside 'Pages' folder
  const isSubPage = window.location.pathname.includes('/Pages/');
  const basePath = isSubPage ? '../../' : './';

  // Load Header and Footer HTML
  await loadComponent('header-placeholder', `${basePath}Header/Header.html`);
  await loadComponent('footer-placeholder', `${basePath}Footer/Footer.html`);

  // Paths ko theek karein HTML load hone ke baad
  fixComponentPaths('header-placeholder', basePath);
  fixComponentPaths('footer-placeholder', basePath);

  // Load Header and Footer JS
  await loadScript(`${basePath}Header/header.js`);
  await loadScript(`${basePath}Footer/Footer.js`);
}

document.addEventListener('DOMContentLoaded', initLayout);