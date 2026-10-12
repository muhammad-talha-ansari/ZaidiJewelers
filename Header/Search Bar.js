/* ==========================================
   ZAIDI SEARCH BAR - Live Predictive Search
   ========================================== */

(function initSearchBar() {
    "use strict";

    function init() {
        const searchOverlay = document.getElementById('zjSearchOverlay');
        const searchInput = document.getElementById('zjSearchInput');
        const searchCategory = document.getElementById('zjSearchCategory');
        const searchSubmit = document.getElementById('zjSearchSubmit');
        const suggestionsArea = document.getElementById('zjSearchSuggestions');

        if (!searchOverlay || !searchInput) return;

        const SEARCH_DATABASE = [
            { id: 1,  category: "ring",         brand: "ZAIDI",         title: "Cecilia Halo Engagement Ring, Oval Cut", price: 800,  image: "../../Assets/Rings.png", meta: "Lab-grown diamond · 14k yellow gold", swatches: ["#E6CA65", "#D8D8D8", "#E8B4A2"] },
            { id: 2,  category: "ring",         brand: "COSTAR",        title: "Lumiere Three Stone Ring, Pear Cut",    price: 1500, image: "../../Assets/Rings.png", meta: "Lab-grown diamond · 14k rose gold",  swatches: ["#E8B4A2", "#E6CA65"] },
            { id: 3,  category: "ring",         brand: "COSTAR",        title: "Isla Oval Solitaire Ring",              price: 1350, image: "../../Assets/Rings.png", meta: "Natural diamond · 14k white gold",    swatches: ["#D8D8D8", "#E6CA65"] },
            { id: 4,  category: "ring",         brand: "ZAIDI",         title: "Cecilia Halo Ring, Cushion Cut",        price: 900,  image: "../../Assets/Rings.png", meta: "Lab-grown diamond · 14k yellow gold", swatches: ["#E6CA65"] },
            { id: 5,  category: "ring",         brand: "ROSARIO NAVIA", title: "Selene Round Three Stone Ring",         price: 1980, image: "../../Assets/Rings.png", meta: "Natural diamond · Platinum",          swatches: ["#D8D8D8"] },
            { id: 9,  category: "earring",      brand: "ZAIDI",         title: "Cecilia Diamond Hoop Earrings",         price: 800,  image: "../../Assets/Rings.png", meta: "Lab-grown diamond · 14k yellow gold", swatches: ["#E6CA65"] },
            { id: 12, category: "necklace",     brand: "ZAIDI",         title: "Lunar Glow Drop Pendant",               price: 2100, image: "../../Assets/Necklaces Product Image.png", meta: "Lab-grown diamond · 14k yellow gold", swatches: ["#E6CA65"] }
        ];

        function renderDefaultSuggestions() {
            renderResults(SEARCH_DATABASE.slice(0, 5), '', true);
        }

        // Jab bhi search overlay open ho, default suggestions dikhayein
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    if (searchOverlay.classList.contains('active')) {
                        renderDefaultSuggestions();
                    }
                }
            });
        });
        observer.observe(searchOverlay, { attributes: true });

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            const category = searchCategory ? searchCategory.value : 'all';

            if (query === '') {
                renderDefaultSuggestions();
                return;
            }

            const filtered = SEARCH_DATABASE.filter(product => {
                const matchQuery = product.title.toLowerCase().includes(query) ||
                                   product.brand.toLowerCase().includes(query);
                const matchCategory = (category === 'all') || (product.category === category);
                return matchQuery && matchCategory;
            });

            renderResults(filtered, query);
        });

        function renderResults(products, query, isDefault = false) {
            if (!suggestionsArea) return;

            // Determine correct base path depending on whether we are in a subfolder or root
            const pathname = window.location.pathname;
            let basePath = './';
            if (pathname.includes('/Pages/')) {
                basePath = '../../';
            }

            if (products.length === 0) {
                suggestionsArea.innerHTML = `
                    <div class="zj-no-suggestions">
                        <span class="material-symbols-outlined">search_off</span>
                        <h4>No products found</h4>
                        <p>We couldn't find anything matching "${query}". Try a different search term.</p>
                    </div>
                `;
                return;
            }

            let html = isDefault ? `<h3>Need some inspiration?</h3>` : `<h3>Search results for "${query}"</h3>`;
            html += `<div class="zj-suggestions-grid">`;
            
            products.slice(0, 5).forEach(p => {
                // Fix image path based on current directory structure
                let imgPath = p.image;
                if (!pathname.includes('/Pages/') && imgPath.startsWith('../../')) {
                    imgPath = imgPath.replace('../../', './');
                }

                // Dynamic product detail page link with ID query parameter
                const productUrl = `${basePath}Pages/Products/Product.html?id=${p.id}`;

                html += `
                    <a href="${productUrl}" class="zj-suggestion-card">
                        <div class="zj-suggestion-img-box">
                            <span class="zj-suggestion-badge">TRENDING</span>
                            <img src="${imgPath}" alt="${p.title}" onerror="this.src='https://via.placeholder.com/300x300/f5f5f5/cccccc?text=Product'">
                        </div>
                        <span class="zj-suggestion-brand">${p.brand}</span>
                        <h4 class="zj-suggestion-title">${p.title}</h4>
                        <div class="zj-suggestion-price">$${p.price.toLocaleString()}</div>
                        <div class="zj-suggestion-meta">${p.meta}</div>
                        <div class="zj-suggestion-swatches">
                            ${p.swatches.map(c => `<span class="zj-suggestion-swatch" style="background-color: ${c};"></span>`).join('')}
                        </div>
                    </a>
                `;
            });
            html += `</div>`;
            suggestionsArea.html = html; // Fixed property assignment
            suggestionsArea.innerHTML = html;
        }
    }

    window.initZaidiSearchBar = init;
    if (document.readyState === 'complete') {
        init();
    }
})();
