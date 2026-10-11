(function initCollectionPage() {
  "use strict";

  /* ============================================================
     1. PRODUCT DATA (38 products with realistic attributes)
     ============================================================ */
  const ALL_PRODUCTS = [
    { id: 1,  brand: "Zaidi",         title: "Cecilia Halo Engagement Ring, Oval Cut",   price: 800,  diamond: "Lab-grown", shape: "Oval",    setting: "Halo",       metal: "14k yellow gold", availability: "Ready to ship", isTrending: true,  image: "../../Assets/Rings.png", swatches: ["#d4a955", "#e2e2e2", "#e8a7a1"] },
    { id: 2,  brand: "Zaidi",         title: "Aurora Solitaire Ring, Round Cut",        price: 1200, diamond: "Natural",   shape: "Round",   setting: "Solitaire",  metal: "14k white gold",  availability: "Made to order", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e2e2e2", "#d4a955"] },
    { id: 3,  brand: "CoStar",        title: "Lumiere Three Stone Ring, Pear Cut",      price: 1500, diamond: "Lab-grown", shape: "Pear",    setting: "Three stone",metal: "14k rose gold",   availability: "Ready to ship", isTrending: true,  image: "../../Assets/Rings.png", swatches: ["#e8a7a1", "#d4a955"] },
    { id: 4,  brand: "Rosario Navia", title: "Solene Bezel Ring, Cushion Cut",          price: 2100, diamond: "Natural",   shape: "Cushion", setting: "Bezel",      metal: "Platinum",        availability: "Made to order", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 5,  brand: "Zaidi",         title: "Nova Radiant Halo Ring",                  price: 950,  diamond: "Lab-grown", shape: "Radiant", setting: "Halo",       metal: "14k yellow gold", availability: "Ready to ship", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#d4a955", "#e2e2e2"] },
    { id: 6,  brand: "CoStar",        title: "Isla Oval Solitaire Ring",                price: 1350, diamond: "Natural",   shape: "Oval",    setting: "Solitaire",  metal: "14k white gold",  availability: "Ready to ship", isTrending: true,  image: "../../Assets/Rings.png", swatches: ["#e2e2e2", "#d4a955"] },
    { id: 7,  brand: "Zaidi",         title: "Mira Round Three Stone Ring",             price: 1780, diamond: "Lab-grown", shape: "Round",   setting: "Three stone",metal: "14k rose gold",   availability: "Made to order", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e8a7a1", "#d4a955"] },
    { id: 8,  brand: "Rosario Navia", title: "Elise Pear Bezel Ring",                   price: 2450, diamond: "Natural",   shape: "Pear",    setting: "Bezel",      metal: "Platinum",        availability: "Ready to ship", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 9,  brand: "Zaidi",         title: "Cecilia Halo Ring, Cushion Cut",          price: 900,  diamond: "Lab-grown", shape: "Cushion", setting: "Halo",       metal: "14k yellow gold", availability: "Ready to ship", isTrending: true,  image: "../../Assets/Rings.png", swatches: ["#d4a955"] },
    { id: 10, brand: "CoStar",        title: "Aria Radiant Solitaire Ring",             price: 1420, diamond: "Natural",   shape: "Radiant", setting: "Solitaire",  metal: "14k white gold",  availability: "Made to order", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 11, brand: "Zaidi",         title: "Lyra Oval Halo Ring",                     price: 1100, diamond: "Lab-grown", shape: "Oval",    setting: "Halo",       metal: "14k rose gold",   availability: "Ready to ship", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e8a7a1", "#d4a955"] },
    { id: 12, brand: "Rosario Navia", title: "Selene Round Three Stone Ring",           price: 1980, diamond: "Natural",   shape: "Round",   setting: "Three stone",metal: "Platinum",        availability: "Made to order", isTrending: true,  image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 13, brand: "Zaidi",         title: "Vera Pear Solitaire Ring",                price: 1050, diamond: "Lab-grown", shape: "Pear",    setting: "Solitaire",  metal: "14k yellow gold", availability: "Ready to ship", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#d4a955"] },
    { id: 14, brand: "CoStar",        title: "Nadia Cushion Bezel Ring",                price: 1620, diamond: "Natural",   shape: "Cushion", setting: "Bezel",      metal: "14k white gold",  availability: "Ready to ship", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 15, brand: "Zaidi",         title: "Ivy Radiant Three Stone Ring",            price: 1880, diamond: "Lab-grown", shape: "Radiant", setting: "Three stone",metal: "14k rose gold",   availability: "Made to order", isTrending: true,  image: "../../Assets/Rings.png", swatches: ["#e8a7a1"] },
    { id: 16, brand: "Rosario Navia", title: "Freya Oval Halo Ring",                    price: 2250, diamond: "Natural",   shape: "Oval",    setting: "Halo",       metal: "Platinum",        availability: "Made to order", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 17, brand: "Zaidi",         title: "Cora Round Solitaire Ring",               price: 780,  diamond: "Lab-grown", shape: "Round",   setting: "Solitaire",  metal: "14k yellow gold", availability: "Ready to ship", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#d4a955"] },
    { id: 18, brand: "CoStar",        title: "Bella Pear Bezel Ring",                   price: 1700, diamond: "Natural",   shape: "Pear",    setting: "Bezel",      metal: "14k white gold",  availability: "Ready to ship", isTrending: true,  image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 19, brand: "Zaidi",         title: "Dalia Cushion Halo Ring",                 price: 980,  diamond: "Lab-grown", shape: "Cushion", setting: "Halo",       metal: "14k rose gold",   availability: "Made to order", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e8a7a1", "#d4a955"] },
    { id: 20, brand: "Rosario Navia", title: "Eva Radiant Three Stone Ring",            price: 2600, diamond: "Natural",   shape: "Radiant", setting: "Three stone",metal: "Platinum",        availability: "Made to order", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 21, brand: "Zaidi",         title: "Fiona Oval Solitaire Ring",               price: 890,  diamond: "Lab-grown", shape: "Oval",    setting: "Solitaire",  metal: "14k yellow gold", availability: "Ready to ship", isTrending: true,  image: "../../Assets/Rings.png", swatches: ["#d4a955"] },
    { id: 22, brand: "CoStar",        title: "Gia Round Bezel Ring",                    price: 1480, diamond: "Natural",   shape: "Round",   setting: "Bezel",      metal: "14k white gold",  availability: "Ready to ship", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 23, brand: "Zaidi",         title: "Hana Pear Halo Ring",                     price: 1150, diamond: "Lab-grown", shape: "Pear",    setting: "Halo",       metal: "14k rose gold",   availability: "Made to order", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e8a7a1"] },
    { id: 24, brand: "Rosario Navia", title: "Ines Cushion Solitaire Ring",             price: 2050, diamond: "Natural",   shape: "Cushion", setting: "Solitaire",  metal: "Platinum",        availability: "Made to order", isTrending: true,  image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 25, brand: "Zaidi",         title: "Jade Radiant Halo Ring",                  price: 1280, diamond: "Lab-grown", shape: "Radiant", setting: "Halo",       metal: "14k yellow gold", availability: "Ready to ship", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#d4a955"] },
    { id: 26, brand: "CoStar",        title: "Kira Oval Three Stone Ring",              price: 1560, diamond: "Natural",   shape: "Oval",    setting: "Three stone",metal: "14k white gold",  availability: "Ready to ship", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 27, brand: "Zaidi",         title: "Lena Round Halo Ring",                    price: 1080, diamond: "Lab-grown", shape: "Round",   setting: "Halo",       metal: "14k rose gold",   availability: "Made to order", isTrending: true,  image: "../../Assets/Rings.png", swatches: ["#e8a7a1", "#d4a955"] },
    { id: 28, brand: "Rosario Navia", title: "Maya Pear Solitaire Ring",                price: 2380, diamond: "Natural",   shape: "Pear",    setting: "Solitaire",  metal: "Platinum",        availability: "Made to order", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 29, brand: "Zaidi",         title: "Nina Cushion Three Stone Ring",           price: 1320, diamond: "Lab-grown", shape: "Cushion", setting: "Three stone",metal: "14k yellow gold", availability: "Ready to ship", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#d4a955"] },
    { id: 30, brand: "CoStar",        title: "Orla Radiant Bezel Ring",                 price: 1720, diamond: "Natural",   shape: "Radiant", setting: "Bezel",      metal: "14k white gold",  availability: "Ready to ship", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 31, brand: "Zaidi",         title: "Petra Oval Halo Ring",                    price: 940,  diamond: "Lab-grown", shape: "Oval",    setting: "Halo",       metal: "14k yellow gold", availability: "Ready to ship", isTrending: true,  image: "../../Assets/Rings.png", swatches: ["#d4a955"] },
    { id: 32, brand: "CoStar",        title: "Quinn Round Three Stone Ring",            price: 1640, diamond: "Natural",   shape: "Round",   setting: "Three stone",metal: "14k white gold",  availability: "Made to order", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 33, brand: "Zaidi",         title: "Rhea Pear Bezel Ring",                    price: 1180, diamond: "Lab-grown", shape: "Pear",    setting: "Bezel",      metal: "14k rose gold",   availability: "Made to order", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e8a7a1"] },
    { id: 34, brand: "Rosario Navia", title: "Sara Cushion Halo Ring",                  price: 2180, diamond: "Natural",   shape: "Cushion", setting: "Halo",       metal: "Platinum",        availability: "Made to order", isTrending: true,  image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 35, brand: "Zaidi",         title: "Tara Radiant Solitaire Ring",             price: 1260, diamond: "Lab-grown", shape: "Radiant", setting: "Solitaire",  metal: "14k yellow gold", availability: "Ready to ship", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#d4a955"] },
    { id: 36, brand: "CoStar",        title: "Uma Oval Halo Ring",                      price: 1520, diamond: "Natural",   shape: "Oval",    setting: "Halo",       metal: "14k white gold",  availability: "Ready to ship", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 37, brand: "Zaidi",         title: "Veda Round Bezel Ring",                   price: 1010, diamond: "Lab-grown", shape: "Round",   setting: "Bezel",      metal: "14k rose gold",   availability: "Made to order", isTrending: true,  image: "../../Assets/Rings.png", swatches: ["#e8a7a1"] },
    { id: 38, brand: "Rosario Navia", title: "Willa Pear Three Stone Ring",             price: 2480, diamond: "Natural",   shape: "Pear",    setting: "Three stone",metal: "Platinum",        availability: "Made to order", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] }
  ];

  /* ============================================================
     2. STATE
     ============================================================ */
  const ITEMS_PER_PAGE = 12;

  const state = {
    filters: { brand: [], diamond: [], shape: [], setting: [], metal: [], availability: [] },
    sort: "best-selling",
    visibleCount: ITEMS_PER_PAGE
  };

  /* ============================================================
     3. DOM REFS
     ============================================================ */
  const productGrid     = document.getElementById("zjProductGrid");
  const foundCountEl    = document.getElementById("zjFoundCount");
  const activeTagsEl    = document.getElementById("zjActiveTags");
  const sortSelect      = document.getElementById("zjSortSelect");
  const loadMoreBtn     = document.getElementById("zjLoadMoreBtn");
  const showingCountEl  = document.getElementById("zjCurrentCount");
  const progressFill    = document.querySelector(".zj-progress-fill");

  const mobileFilterBtn = document.getElementById("zjMobileFilterBtn");
  const closeFilterBtn  = document.getElementById("zjCloseFilterBtn");
  const filterDrawer    = document.getElementById("zjFilterDrawer");
  const filterOverlay   = document.getElementById("zjFilterOverlay");

  const allCheckboxes   = document.querySelectorAll(".zj-filter-check");

  /* ============================================================
     4. CORE LOGIC
     ============================================================ */

  // 4a. Filter products based on state.filters
  function getFilteredProducts() {
    return ALL_PRODUCTS.filter(p => {
      return Object.keys(state.filters).every(group => {
        const selected = state.filters[group];
        if (!selected || selected.length === 0) return true;
        return selected.includes(p[group]);
      });
    });
  }

  // 4b. Sort products
  function sortProducts(list) {
    const sorted = [...list];
    switch (state.sort) {
      case "price-low":  sorted.sort((a, b) => a.price - b.price); break;
      case "price-high": sorted.sort((a, b) => b.price - a.price); break;
      case "newest":     sorted.sort((a, b) => b.id - a.id); break;
      case "best-selling":
      default:
        // Trending pehle, phir baaki
        sorted.sort((a, b) => (b.isTrending === true) - (a.isTrending === true));
        break;
    }
    return sorted;
  }

  // 4c. Render product card HTML
  function productCardHTML(item) {
    return `
      <div class="zj-product-card" data-id="${item.id}">
        <div class="zj-card-media">
          ${item.isTrending ? '<span class="zj-badge-trending">TRENDING</span>' : ""}
          <button class="zj-wishlist-btn" aria-label="Add to Wishlist">
            <span class="material-symbols-outlined">favorite</span>
          </button>
          <img src="${item.image}" alt="${item.title}"
               onerror="this.src='https://via.placeholder.com/300x300/faf8f5/888888?text=Ring+Image'" />
        </div>
        <div class="zj-card-info">
          <span class="zj-brand-tag">${item.brand.toUpperCase()}</span>
          <h3 class="zj-product-title">${item.title}</h3>
          <div class="zj-price">$${item.price.toLocaleString()}</div>
          <div class="zj-meta-details">${item.diamond} diamond · ${item.metal}</div>
          <div class="zj-swatches">
            ${item.swatches.map(c => `<span class="zj-swatch" style="border: 1px solid ${c}; background-color:${c}"></span>`).join("")}
          </div>
        </div>
      </div>
    `;
  }

  // 4d. Render products grid
  function renderProducts() {
    const filtered = getFilteredProducts();
    const sorted   = sortProducts(filtered);
    const visible  = sorted.slice(0, state.visibleCount);

    // Grid
    if (visible.length === 0) {
      productGrid.innerHTML = `
        <div class="zj-no-results">
          <p>No products match your filters.</p>
          <button id="zjNoResultsReset" class="zj-btn-outline">RESET FILTERS</button>
        </div>
      `;
      const resetBtn = document.getElementById("zjNoResultsReset");
      if (resetBtn) resetBtn.addEventListener("click", clearAllFilters);
    } else {
      productGrid.innerHTML = visible.map(productCardHTML).join("");
    }

    // Found count
    if (foundCountEl) foundCountEl.textContent = `${sorted.length} Products Found`;

    // Load more section
    const total   = sorted.length;
    const showing = Math.min(state.visibleCount, total);

    if (showingCountEl) showingCountEl.textContent = showing;

    if (total > showing) {
      loadMoreBtn.style.display = "inline-block";
    } else {
      loadMoreBtn.style.display = total === 0 ? "none" : "none";
    }

    // Progress bar
    if (progressFill) {
      const pct = total === 0 ? 0 : Math.round((showing / total) * 100);
      progressFill.style.width = pct + "%";
    }

    // Active filter tags
    renderActiveTags();
  }

  // 4e. Render active filter tags with remove ×
  function renderActiveTags() {
    if (!activeTagsEl) return;

    const tags = [];
    Object.keys(state.filters).forEach(group => {
      state.filters[group].forEach(val => {
        tags.push(
          `<span class="zj-tag" data-group="${group}" data-value="${val}">
            × ${val}
          </span>`
        );
      });
    });

    if (tags.length === 0) {
      activeTagsEl.innerHTML = "";
      return;
    }

    activeTagsEl.innerHTML = tags.join("") +
      `<button class="zj-remove-all-btn" id="zjRemoveAllBtn">Remove all</button>`;

    // Individual tag click → remove that filter
    activeTagsEl.querySelectorAll(".zj-tag").forEach(tag => {
      tag.addEventListener("click", () => {
        const group = tag.dataset.group;
        const value = tag.dataset.value;

        state.filters[group] = state.filters[group].filter(v => v !== value);

        // Uncheck corresponding checkbox
        allCheckboxes.forEach(cb => {
          if (cb.dataset.group === group && cb.value === value) cb.checked = false;
        });

        state.visibleCount = ITEMS_PER_PAGE; // reset pagination
        renderProducts();
      });
    });

    // Remove all button
    const removeAllBtn = document.getElementById("zjRemoveAllBtn");
    if (removeAllBtn) removeAllBtn.addEventListener("click", clearAllFilters);
  }

  // 4f. Clear all filters
  function clearAllFilters() {
    state.filters = { brand: [], diamond: [], shape: [], setting: [], metal: [], availability: [] };
    state.visibleCount = ITEMS_PER_PAGE;
    allCheckboxes.forEach(cb => (cb.checked = false));
    renderProducts();
  }

  /* ============================================================
     5. EVENT LISTENERS
     ============================================================ */

  // 5a. Checkbox change
  allCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      const group = cb.dataset.group;
      const value = cb.value;

      if (cb.checked) {
        if (!state.filters[group].includes(value)) state.filters[group].push(value);
      } else {
        state.filters[group] = state.filters[group].filter(v => v !== value);
      }

      state.visibleCount = ITEMS_PER_PAGE; // reset pagination
      renderProducts();
    });
  });

  // 5b. Sort change
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      state.sort = sortSelect.value;
      renderProducts();
    });
  }

  // 5c. Load More
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      state.visibleCount += ITEMS_PER_PAGE;
      renderProducts();
    });
  }

  // 5d. Mobile drawer open/close
  const openDrawer = () => {
    if (filterDrawer) filterDrawer.classList.add("zj-drawer-open");
    if (filterOverlay) filterOverlay.classList.add("zj-active");
    document.body.style.overflow = "hidden";
  };
  const closeDrawer = () => {
    if (filterDrawer) filterDrawer.classList.remove("zj-drawer-open");
    if (filterOverlay) filterOverlay.classList.remove("zj-active");
    document.body.style.overflow = "";
  };

  if (mobileFilterBtn) mobileFilterBtn.addEventListener("click", openDrawer);
  if (closeFilterBtn)  closeFilterBtn.addEventListener("click", closeDrawer);
  if (filterOverlay)   filterOverlay.addEventListener("click", closeDrawer);

  /* ============================================================
     6. INIT
     ============================================================ */
  renderProducts();
})();