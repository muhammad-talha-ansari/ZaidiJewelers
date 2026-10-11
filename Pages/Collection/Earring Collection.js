(function initCollectionPage() {
  "use strict";

  /* ============================================================
     1. PRODUCT DATA (38 Earrings with realistic attributes)
     ============================================================ */
  const ALL_PRODUCTS = [
    { id: 1,  brand: "Zaidi",         title: "Cecilia Diamond Hoop Earrings",            price: 800,  diamond: "Lab-grown", style: "Hoop",       closure: "Hinged Snap", metal: "14k yellow gold", availability: "Ready to ship", isTrending: true,  image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#d4a955", "#e2e2e2", "#e8a7a1"] },
    { id: 2,  brand: "Zaidi",         title: "Aurora Solitaire Stud Earrings",           price: 1200, diamond: "Natural",   style: "Stud",       closure: "Push Back",   metal: "14k white gold",  availability: "Made to order", isTrending: false, image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#e2e2e2", "#d4a955"] },
    { id: 3,  brand: "CoStar",        title: "Lumiere Three Stone Drop Earrings",        price: 1500, diamond: "Lab-grown", style: "Drop",       closure: "Lever Back",  metal: "14k rose gold",   availability: "Ready to ship", isTrending: true,  image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#e8a7a1", "#d4a955"] },
    { id: 4,  brand: "Rosario Navia", title: "Solene Bezel Huggie Earrings",             price: 2100, diamond: "Natural",   style: "Huggie",     closure: "Hinged Snap", metal: "Platinum",        availability: "Made to order", isTrending: false, image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#e2e2e2"] },
    { id: 5,  brand: "Zaidi",         title: "Nova Radiant Cluster Earrings",            price: 950,  diamond: "Lab-grown", style: "Cluster",    closure: "Push Back",   metal: "14k yellow gold", availability: "Ready to ship", isTrending: false, image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#d4a955", "#e2e2e2"] },
    { id: 6,  brand: "CoStar",        title: "Isla Oval Solitaire Studs",                price: 1350, diamond: "Natural",   style: "Stud",       closure: "Screw Back",  metal: "14k white gold",  availability: "Ready to ship", isTrending: true,  image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#e2e2e2", "#d4a955"] },
    { id: 7,  brand: "Zaidi",         title: "Mira Round Three Stone Hoops",             price: 1780, diamond: "Lab-grown", style: "Hoop",       closure: "Lever Back",  metal: "14k rose gold",   availability: "Made to order", isTrending: false, image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#e8a7a1", "#d4a955"] },
    { id: 8,  brand: "Rosario Navia", title: "Elise Pear Bezel Drops",                   price: 2450, diamond: "Natural",   style: "Drop",       closure: "Lever Back",  metal: "Platinum",        availability: "Ready to ship", isTrending: false, image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#e2e2e2"] },
    { id: 9,  brand: "Zaidi",         title: "Cecilia Cushion Halo Studs",               price: 900,  diamond: "Lab-grown", style: "Stud",       closure: "Push Back",   metal: "14k yellow gold", availability: "Ready to ship", isTrending: true,  image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#d4a955"] },
    { id: 10, brand: "CoStar",        title: "Aria Radiant Solitaire Earrings",          price: 1420, diamond: "Natural",   style: "Stud",       closure: "Screw Back",  metal: "14k white gold",  availability: "Made to order", isTrending: false, image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#e2e2e2"] },
    { id: 11, brand: "Zaidi",         title: "Lyra Oval Huggie Earrings",                price: 1100, diamond: "Lab-grown", style: "Huggie",     closure: "Hinged Snap", metal: "14k rose gold",   availability: "Ready to ship", isTrending: false, image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#e8a7a1", "#d4a955"] },
    { id: 12, brand: "Rosario Navia", title: "Selene Round Three Stone Drops",           price: 1980, diamond: "Natural",   style: "Drop",       closure: "Lever Back",  metal: "Platinum",        availability: "Made to order", isTrending: true,  image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#e2e2e2"] },
    { id: 13, brand: "Zaidi",         title: "Vera Pear Solitaire Studs",                price: 1050, diamond: "Lab-grown", style: "Stud",       closure: "Push Back",   metal: "14k yellow gold", availability: "Ready to ship", isTrending: false, image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#d4a955"] },
    { id: 14, brand: "CoStar",        title: "Nadia Cushion Bezel Hoops",                price: 1620, diamond: "Natural",   style: "Hoop",       closure: "Hinged Snap", metal: "14k white gold",  availability: "Ready to ship", isTrending: false, image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#e2e2e2"] },
    { id: 15, brand: "Zaidi",         title: "Ivy Radiant Cluster Earrings",             price: 1880, diamond: "Lab-grown", style: "Cluster",    closure: "Push Back",   metal: "14k rose gold",   availability: "Made to order", isTrending: true,  image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#e8a7a1"] },
    { id: 16, brand: "Rosario Navia", title: "Freya Oval Halo Drops",                    price: 2250, diamond: "Natural",   style: "Drop",       closure: "Lever Back",  metal: "Platinum",        availability: "Made to order", isTrending: false, image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#e2e2e2"] },
    { id: 17, brand: "Zaidi",         title: "Cora Round Solitaire Studs",               price: 780,  diamond: "Lab-grown", style: "Stud",       closure: "Push Back",   metal: "14k yellow gold", availability: "Ready to ship", isTrending: false, image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#d4a955"] },
    { id: 18, brand: "CoStar",        title: "Bella Pear Bezel Drops",                   price: 1700, diamond: "Natural",   style: "Drop",       closure: "Lever Back",  metal: "14k white gold",  availability: "Ready to ship", isTrending: true,  image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#e2e2e2"] },
    { id: 19, brand: "Zaidi",         title: "Dalia Cushion Halo Hoops",                 price: 980,  diamond: "Lab-grown", style: "Hoop",       closure: "Hinged Snap", metal: "14k rose gold",   availability: "Made to order", isTrending: false, image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#e8a7a1", "#d4a955"] },
    { id: 20, brand: "Rosario Navia", title: "Eva Radiant Three Stone Studs",            price: 2600, diamond: "Natural",   style: "Stud",       closure: "Screw Back",  metal: "Platinum",        availability: "Made to order", isTrending: false, image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#e2e2e2"] },
    { id: 21, brand: "Zaidi",         title: "Fiona Oval Solitaire Hoops",               price: 890,  diamond: "Lab-grown", style: "Hoop",       closure: "Lever Back",  metal: "14k yellow gold", availability: "Ready to ship", isTrending: true,  image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#d4a955"] },
    { id: 22, brand: "CoStar",        title: "Gia Round Bezel Huggies",                  price: 1480, diamond: "Natural",   style: "Huggie",     closure: "Hinged Snap", metal: "14k white gold",  availability: "Ready to ship", isTrending: false, image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#e2e2e2"] },
    { id: 23, brand: "Zaidi",         title: "Hana Pear Halo Drops",                     price: 1150, diamond: "Lab-grown", style: "Drop",       closure: "Lever Back",  metal: "14k rose gold",   availability: "Made to order", isTrending: false, image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#e8a7a1"] },
    { id: 24, brand: "Rosario Navia", title: "Ines Cushion Solitaire Studs",             price: 2050, diamond: "Natural",   style: "Stud",       closure: "Screw Back",  metal: "Platinum",        availability: "Made to order", isTrending: true,  image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#e2e2e2"] },
    { id: 25, brand: "Zaidi",         title: "Jade Radiant Cluster Hoops",               price: 1280, diamond: "Lab-grown", style: "Cluster",    closure: "Push Back",   metal: "14k yellow gold", availability: "Ready to ship", isTrending: false, image: "../../Assets/Best Selling Hoops Earrings.png", swatches: ["#d4a955"] },
    { id: 26, brand: "CoStar",        title: "Kira Oval Three Stone Drops",              price: 1560, diamond: "Natural",   style: "Drop",       closure: "Lever Back",  metal: "14k white gold",  availability: "Ready to ship", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 27, brand: "Zaidi",         title: "Lena Round Halo Studs",                    price: 1080, diamond: "Lab-grown", style: "Stud",       closure: "Push Back",   metal: "14k rose gold",   availability: "Made to order", isTrending: true,  image: "../../Assets/Rings.png", swatches: ["#e8a7a1", "#d4a955"] },
    { id: 28, brand: "Rosario Navia", title: "Maya Pear Solitaire Drops",                price: 2380, diamond: "Natural",   style: "Drop",       closure: "Lever Back",  metal: "Platinum",        availability: "Made to order", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 29, brand: "Zaidi",         title: "Nina Cushion Three Stone Hoops",           price: 1320, diamond: "Lab-grown", style: "Hoop",       closure: "Hinged Snap", metal: "14k yellow gold", availability: "Ready to ship", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#d4a955"] },
    { id: 30, brand: "CoStar",        title: "Orla Radiant Bezel Studs",                 price: 1720, diamond: "Natural",   style: "Stud",       closure: "Screw Back",  metal: "14k white gold",  availability: "Ready to ship", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 31, brand: "Zaidi",         title: "Petra Oval Halo Huggies",                  price: 940,  diamond: "Lab-grown", style: "Huggie",     closure: "Hinged Snap", metal: "14k yellow gold", availability: "Ready to ship", isTrending: true,  image: "../../Assets/Rings.png", swatches: ["#d4a955"] },
    { id: 32, brand: "CoStar",        title: "Quinn Round Three Stone Drops",            price: 1640, diamond: "Natural",   style: "Drop",       closure: "Lever Back",  metal: "14k white gold",  availability: "Made to order", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 33, brand: "Zaidi",         title: "Rhea Pear Bezel Hoops",                    price: 1180, diamond: "Lab-grown", style: "Hoop",       closure: "Hinged Snap", metal: "14k rose gold",   availability: "Made to order", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e8a7a1"] },
    { id: 34, brand: "Rosario Navia", title: "Sara Cushion Halo Drops",                  price: 2180, diamond: "Natural",   style: "Drop",       closure: "Lever Back",  metal: "Platinum",        availability: "Made to order", isTrending: true,  image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 35, brand: "Zaidi",         title: "Tara Radiant Solitaire Studs",             price: 1260, diamond: "Lab-grown", style: "Stud",       closure: "Push Back",   metal: "14k yellow gold", availability: "Ready to ship", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#d4a955"] },
    { id: 36, brand: "CoStar",        title: "Uma Oval Halo Hoops",                      price: 1520, diamond: "Natural",   style: "Hoop",       closure: "Hinged Snap", metal: "14k white gold",  availability: "Ready to ship", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] },
    { id: 37, brand: "Zaidi",         title: "Veda Round Bezel Huggies",                 price: 1010, diamond: "Lab-grown", style: "Huggie",     closure: "Hinged Snap", metal: "14k rose gold",   availability: "Made to order", isTrending: true,  image: "../../Assets/Rings.png", swatches: ["#e8a7a1"] },
    { id: 38, brand: "Rosario Navia", title: "Willa Pear Three Stone Drops",             price: 2480, diamond: "Natural",   style: "Drop",       closure: "Lever Back",  metal: "Platinum",        availability: "Made to order", isTrending: false, image: "../../Assets/Rings.png", swatches: ["#e2e2e2"] }
  ];

  /* ============================================================
     2. STATE
     ============================================================ */
  const ITEMS_PER_PAGE = 12;

  const state = {
    // Ab 'shape' aur 'setting' ki jagah 'style' aur 'closure' use hoga
    filters: { brand: [], diamond: [], style: [], closure: [], metal: [], availability: [] },
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
        sorted.sort((a, b) => (b.isTrending === true) - (a.isTrending === true));
        break;
    }
    return sorted;
  }

  // 4c. Render product card HTML (Ab clickable link ke saath)
  function productCardHTML(item) {
    // Product page ka path yahan set kiya gaya hai
    const productLink = `../../Pages/Products/Product.html?id=${item.id}`;
    
    return `
      <a href="${productLink}" class="zj-product-card-link">
        <div class="zj-product-card" data-id="${item.id}">
          <div class="zj-card-media">
            ${item.isTrending ? '<span class="zj-badge-trending">TRENDING</span>' : ""}
            <button class="zj-wishlist-btn" aria-label="Add to Wishlist" onclick="event.preventDefault();">
              <span class="material-symbols-outlined">favorite</span>
            </button>
            <img src="${item.image}" alt="${item.title}"
                 onerror="this.src='https://via.placeholder.com/300x300/faf8f5/888888?text=Earring+Image'" />
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
      </a>
    `;
  }

  // 4d. Render products grid
  function renderProducts() {
    const filtered = getFilteredProducts();
    const sorted   = sortProducts(filtered);
    const visible  = sorted.slice(0, state.visibleCount);

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

    if (foundCountEl) foundCountEl.textContent = `${sorted.length} Products Found`;

    const total   = sorted.length;
    const showing = Math.min(state.visibleCount, total);

    if (showingCountEl) showingCountEl.textContent = showing;

    if (total > showing) {
      loadMoreBtn.style.display = "inline-block";
    } else {
      loadMoreBtn.style.display = total === 0 ? "none" : "none";
    }

    if (progressFill) {
      const pct = total === 0 ? 0 : Math.round((showing / total) * 100);
      progressFill.style.width = pct + "%";
    }

    renderActiveTags();
  }

  // 4e. Render active filter tags
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

    activeTagsEl.querySelectorAll(".zj-tag").forEach(tag => {
      tag.addEventListener("click", () => {
        const group = tag.dataset.group;
        const value = tag.dataset.value;

        state.filters[group] = state.filters[group].filter(v => v !== value);

        allCheckboxes.forEach(cb => {
          if (cb.dataset.group === group && cb.value === value) cb.checked = false;
        });

        state.visibleCount = ITEMS_PER_PAGE;
        renderProducts();
      });
    });

    const removeAllBtn = document.getElementById("zjRemoveAllBtn");
    if (removeAllBtn) removeAllBtn.addEventListener("click", clearAllFilters);
  }

  // 4f. Clear all filters
  function clearAllFilters() {
    state.filters = { brand: [], diamond: [], style: [], closure: [], metal: [], availability: [] };
    state.visibleCount = ITEMS_PER_PAGE;
    allCheckboxes.forEach(cb => (cb.checked = false));
    renderProducts();
  }

  /* ============================================================
     5. EVENT LISTENERS
     ============================================================ */
  allCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      const group = cb.dataset.group;
      const value = cb.value;

      if (cb.checked) {
        if (!state.filters[group].includes(value)) state.filters[group].push(value);
      } else {
        state.filters[group] = state.filters[group].filter(v => v !== value);
      }

      state.visibleCount = ITEMS_PER_PAGE;
      renderProducts();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      state.sort = sortSelect.value;
      renderProducts();
    });
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      state.visibleCount += ITEMS_PER_PAGE;
      renderProducts();
    });
  }

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