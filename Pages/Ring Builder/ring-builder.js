document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. HEADER & FOOTER AUTOMATIC LOAD
       ========================================== */
    // Ring Builder folder root se 2 step peeche hai
    fetch('../../Header/Header.html')
        .then(res => res.text())
        .then(data => document.getElementById('header-placeholder').innerHTML = data)
        .catch(err => console.error('Header load error:', err));

    fetch('../../Footer/Footer.html')
        .then(res => res.text())
        .then(data => document.getElementById('footer-placeholder').innerHTML = data)
        .catch(err => console.error('Footer load error:', err));


    /* ==========================================
       2. SHAPES DATA (With Image Paths)
       ========================================== */
    // Yahan har shape ke saath uska image path set kiya gaya hai
    // Aap apni images ka sahi path yahan daal dein
    const SHAPES = [
        { name: "Oval",     image: "../../Assets/Oval Cut.png" },
        { name: "Round",    image: "../../Assets/Round Cut.png" },
        { name: "Emerald",  image: "../../Assets/Emerald Cut.png" },
        { name: "Pear",     image: "../../Assets/Pear Cut.png" },
        { name: "Radiant",  image: "../../Assets/Radiant Cut.png" },
        { name: "Marquise", image: "../../Assets/Marquise Cut.png" },
        { name: "Cushion",  image: "../../Assets/Cushion Cut.png" },
        { name: "Heart",    image: "../../Assets/Heart Cut.png" },
        { name: "Princess", image: "../../Assets/Princess Cut.png" },
        { name: "Asscher",  image: "../../Assets/Asscher Cut.png" }
    ];


    /* ==========================================
       3. DEMO DIAMOND DATABASE
       ========================================== */
    const DIAMOND_DB = [
        { id: 1, shape: "Oval", carat: 1.21, color: "F", clarity: "VS1", cut: "Excellent", lab: "IGI", price: 2390, image: "https://via.placeholder.com/300x300/0A0A0A/ffffff?text=Diamond+1" },
        { id: 2, shape: "Oval", carat: 1.52, color: "F", clarity: "VS1", cut: "Excellent", lab: "IGI", price: 3180, image: "https://via.placeholder.com/300x300/0A0A0A/ffffff?text=Diamond+2" },
        { id: 3, shape: "Oval", carat: 1.70, color: "E", clarity: "VVS2", cut: "Ideal", lab: "IGI", price: 3850, image: "https://via.placeholder.com/300x300/0A0A0A/ffffff?text=Diamond+3" },
        { id: 4, shape: "Oval", carat: 1.85, color: "F", clarity: "VVS1", cut: "Ideal", lab: "IGI", price: 4020, image: "https://via.placeholder.com/300x300/0A0A0A/ffffff?text=Diamond+4" },
        { id: 5, shape: "Oval", carat: 2.01, color: "G", clarity: "VS2", cut: "Excellent", lab: "IGI", price: 4120, image: "https://via.placeholder.com/300x300/0A0A0A/ffffff?text=Diamond+5" },
        { id: 6, shape: "Oval", carat: 2.15, color: "F", clarity: "VS1", cut: "Excellent", lab: "IGI", price: 4690, image: "https://via.placeholder.com/300x300/0A0A0A/ffffff?text=Diamond+6" },
        { id: 7, shape: "Oval", carat: 2.30, color: "E", clarity: "VS1", cut: "Ideal", lab: "GCAL", price: 5210, image: "https://via.placeholder.com/300x300/0A0A0A/ffffff?text=Diamond+7" },
        { id: 8, shape: "Oval", carat: 2.50, color: "D", clarity: "VVS2", cut: "Ideal", lab: "IGI", price: 5890, image: "https://via.placeholder.com/300x300/0A0A0A/ffffff?text=Diamond+8" },
        // Round Shape
        { id: 9, shape: "Round", carat: 1.00, color: "D", clarity: "FL", cut: "Ideal", lab: "GIA", price: 4500, image: "https://via.placeholder.com/300x300/0A0A0A/ffffff?text=Round+1" },
        { id: 10, shape: "Round", carat: 1.50, color: "E", clarity: "VVS1", cut: "Excellent", lab: "GIA", price: 6200, image: "https://via.placeholder.com/300x300/0A0A0A/ffffff?text=Round+2" },
        // Emerald Shape
        { id: 11, shape: "Emerald", carat: 1.20, color: "F", clarity: "VS1", cut: "Ideal", lab: "IGI", price: 2800, image: "https://via.placeholder.com/300x300/0A0A0A/ffffff?text=Emerald+1" },
        { id: 12, shape: "Emerald", carat: 1.80, color: "G", clarity: "VS2", cut: "Excellent", lab: "IGI", price: 4100, image: "https://via.placeholder.com/300x300/0A0A0A/ffffff?text=Emerald+2" },
        // Pear Shape
        { id: 13, shape: "Pear", carat: 1.10, color: "E", clarity: "VS1", cut: "Ideal", lab: "IGI", price: 2650, image: "https://via.placeholder.com/300x300/0A0A0A/ffffff?text=Pear+1" },
        { id: 14, shape: "Pear", carat: 1.75, color: "F", clarity: "VVS2", cut: "Excellent", lab: "IGI", price: 3950, image: "https://via.placeholder.com/300x300/0A0A0A/ffffff?text=Pear+2" },
        // Radiant Shape
        { id: 15, shape: "Radiant", carat: 1.30, color: "F", clarity: "VS1", cut: "Ideal", lab: "IGI", price: 3100, image: "https://via.placeholder.com/300x300/0A0A0A/ffffff?text=Radiant+1" },
        { id: 16, shape: "Radiant", carat: 2.00, color: "E", clarity: "VVS1", cut: "Excellent", lab: "GCAL", price: 5200, image: "https://via.placeholder.com/300x300/0A0A0A/ffffff?text=Radiant+2" },
        // Cushion Shape
        { id: 17, shape: "Cushion", carat: 1.40, color: "G", clarity: "VS2", cut: "Ideal", lab: "IGI", price: 3300, image: "https://via.placeholder.com/300x300/0A0A0A/ffffff?text=Cushion+1" },
        { id: 18, shape: "Cushion", carat: 2.10, color: "F", clarity: "VS1", cut: "Excellent", lab: "IGI", price: 5400, image: "https://via.placeholder.com/300x300/0A0A0A/ffffff?text=Cushion+2" },
    ];


    /* ==========================================
       4. STATE
       ========================================== */
    const state = {
        selectedShape: "Oval",
        caratMin: 1.0,
        caratMax: 3.0,
        colorIndex: 3,
        clarityIndex: 2,
        cut: "Ideal",
        cert: "IGI",
        priceMax: 6000,
        selectedDiamondId: null,
        sort: "price-low",
        currentPage: 1,
        itemsPerPage: 8
    };


    /* ==========================================
       5. DOM REFERENCES
       ========================================== */
    const shapeGrid = document.getElementById('rbShapeGrid');
    const diamondList = document.getElementById('rbDiamondList');
    const detailSection = document.getElementById('rbDetailSection');
    const resultCount = document.getElementById('rbResultCount');
    const selectedShapeText = document.getElementById('rbSelectedShapeText');
    const showingText = document.getElementById('rbShowingText');
    const pageNumbers = document.getElementById('rbPageNumbers');

    // Sliders
    const caratSlider = document.getElementById('rbCaratSlider');
    const colourSlider = document.getElementById('rbColourSlider');
    const claritySlider = document.getElementById('rbClaritySlider');
    const priceSlider = document.getElementById('rbPriceSlider');

    // Value Labels
    const caratValue = document.getElementById('rbCaratValue');
    const colourValue = document.getElementById('rbColourValue');
    const clarityValue = document.getElementById('rbClarityValue');
    const priceValue = document.getElementById('rbPriceValue');

    // Sort
    const sortSelect = document.getElementById('rbSortSelect');


    /* ==========================================
       6. RENDER FUNCTIONS
       ========================================== */

    // 6a. Render Shape Buttons (WITH IMAGES)
    function renderShapes() {
        shapeGrid.innerHTML = SHAPES.map(shape => `
            <button class="rb-shape-btn ${shape.name === state.selectedShape ? 'active' : ''}" data-shape="${shape.name}">
                <img src="${shape.image}" alt="${shape.name}" class="rb-shape-icon-img" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <span class="material-symbols-outlined rb-shape-icon-fallback" style="display:none;">diamond</span>
                <span class="rb-shape-name">${shape.name}</span>
            </button>
        `).join('');

        document.querySelectorAll('.rb-shape-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                state.selectedShape = btn.dataset.shape;
                state.currentPage = 1;
                selectedShapeText.textContent = state.selectedShape;
                renderShapes();
                renderDiamonds();
            });
        });
    }

    // 6b. Filter Diamonds
    function getFilteredDiamonds() {
        return DIAMOND_DB.filter(d => {
            const shapeMatch = d.shape === state.selectedShape;
            const caratMatch = d.carat >= state.caratMin && d.carat <= state.caratMax;
            const priceMatch = d.price <= state.priceMax;
            const cutMatch = state.cut ? d.cut === state.cut : true;
            const certMatch = state.cert ? d.lab === state.cert : true;
            return shapeMatch && caratMatch && priceMatch && cutMatch && certMatch;
        });
    }

    // 6c. Sort Diamonds
    function sortDiamonds(list) {
        const sorted = [...list];
        switch (state.sort) {
            case 'price-high': sorted.sort((a, b) => b.price - a.price); break;
            case 'carat-low': sorted.sort((a, b) => a.carat - b.carat); break;
            case 'carat-high': sorted.sort((a, b) => b.carat - a.carat); break;
            case 'price-low':
            default: sorted.sort((a, b) => a.price - b.price); break;
        }
        return sorted;
    }

    // 6d. Render Diamond List
    function renderDiamonds() {
        const filtered = getFilteredDiamonds();
        const sorted = sortDiamonds(filtered);

        resultCount.textContent = sorted.length;

        const totalPages = Math.ceil(sorted.length / state.itemsPerPage) || 1;
        if (state.currentPage > totalPages) state.currentPage = totalPages;

        const startIndex = (state.currentPage - 1) * state.itemsPerPage;
        const endIndex = startIndex + state.itemsPerPage;
        const pageItems = sorted.slice(startIndex, endIndex);

        if (pageItems.length === 0) {
            diamondList.innerHTML = `<div style="padding:30px; text-align:center; color:var(--rb-text-muted);">No diamonds match your criteria.</div>`;
        } else {
            diamondList.innerHTML = pageItems.map(d => `
                <div class="rb-diamond-row ${d.id === state.selectedDiamondId ? 'active' : ''}" data-id="${d.id}">
                    <span class="rb-diamond-icon"><span class="material-symbols-outlined" style="font-size:16px;">diamond</span></span>
                    <span data-label="Shape">${d.shape}</span>
                    <span data-label="Carat">${d.carat.toFixed(2)} ct</span>
                    <span data-label="Colour">${d.color}</span>
                    <span data-label="Clarity">${d.clarity}</span>
                    <span data-label="Cut">${d.cut}</span>
                    <span data-label="Lab" class="rb-row-lab">${d.lab}</span>
                    <span data-label="Price" class="rb-row-price">$${d.price.toLocaleString()}</span>
                    <span><button class="rb-row-action-btn">VIEW</button></span>
                </div>
            `).join('');
        }

        document.querySelectorAll('.rb-diamond-row').forEach(row => {
            row.addEventListener('click', () => {
                const id = parseInt(row.dataset.id);
                selectDiamond(id);
            });
        });

        const showingStart = sorted.length === 0 ? 0 : startIndex + 1;
        const showingEnd = Math.min(endIndex, sorted.length);
        showingText.textContent = `Showing ${showingStart} – ${showingEnd} of ${sorted.length} Certified Diamonds`;

        renderPagination(totalPages);
    }

    // 6e. Pagination
    function renderPagination(totalPages) {
        let html = '';
        for (let i = 1; i <= totalPages; i++) {
            html += `<button class="rb-page-btn ${i === state.currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
        }
        pageNumbers.innerHTML = html;

        document.querySelectorAll('.rb-page-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                state.currentPage = parseInt(btn.dataset.page);
                renderDiamonds();
                document.querySelector('.rb-list-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }

    // 6f. Select Diamond & Show Detail
    function selectDiamond(id) {
        state.selectedDiamondId = id;
        renderDiamonds();

        const diamond = DIAMOND_DB.find(d => d.id === id);
        if (!diamond) return;

        detailSection.style.display = 'block';

        document.getElementById('rbDetailImage').src = diamond.image;
        document.getElementById('rbDetailPrice').textContent = '$' + diamond.price.toLocaleString();
        document.getElementById('rbDetailTitle').textContent = `${diamond.carat.toFixed(2)} CARAT ${diamond.shape.toUpperCase()} LAB GROWN DIAMOND`;
        document.getElementById('rbDetailType').textContent = `CERTIFIED TYPE IIA LAB-GROWN`;
        document.getElementById('rbDetailSku').textContent = `SKU: ZD-${diamond.carat * 100}-${diamond.shape.substring(0,2).toUpperCase()}-${diamond.id}${diamond.id}9`;

        document.getElementById('rbSpecMeasure').textContent = `${(diamond.carat * 6.5).toFixed(2)} × ${(diamond.carat * 4.8).toFixed(2)} × ${(diamond.carat * 3.1).toFixed(2)} mm`;
        document.getElementById('rbSpecRatio').textContent = `${(diamond.carat * 0.9).toFixed(2)} (Optimal Graceful ${diamond.shape})`;
        document.getElementById('rbSpecTable').textContent = `${(60 + diamond.id).toFixed(1)}%`;
        document.getElementById('rbSpecDepth').textContent = `${(58 + diamond.id).toFixed(1)}%`;
        document.getElementById('rbSpecPolish').textContent = `${diamond.cut} / ${diamond.cut}`;
        document.getElementById('rbSpecFluor').textContent = diamond.id % 2 === 0 ? 'None' : 'Faint';

        document.getElementById('rbSpecRemark').textContent = `"Exceptional optical fire, zero bow-tie effect, and crisp facet symmetry. Matches ideally with the ${document.getElementById('rbRingTitle').textContent} setting."`;

        detailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }


    /* ==========================================
       7. EVENT LISTENERS FOR FILTERS
       ========================================== */

    caratSlider.addEventListener('input', (e) => {
        state.caratMax = parseFloat(e.target.value);
        caratValue.textContent = `${state.caratMin.toFixed(2)}ct – ${state.caratMax.toFixed(2)}ct`;
        state.currentPage = 1;
        renderDiamonds();
    });

    colourSlider.addEventListener('input', (e) => {
        state.colorIndex = parseInt(e.target.value);
        const colors = ["D", "E", "F", "G", "H"];
        colourValue.textContent = `D – ${colors[state.colorIndex]} (Colorless)`;
        state.currentPage = 1;
        renderDiamonds();
    });

    claritySlider.addEventListener('input', (e) => {
        state.clarityIndex = parseInt(e.target.value);
        const clarities = ["FL", "VVS1", "VS1", "SI1"];
        clarityValue.textContent = `FL – ${clarities[state.clarityIndex]}`;
        state.currentPage = 1;
        renderDiamonds();
    });

    priceSlider.addEventListener('input', (e) => {
        state.priceMax = parseInt(e.target.value);
        priceValue.textContent = `$1,000 – $${state.priceMax.toLocaleString()}`;
        state.currentPage = 1;
        renderDiamonds();
    });

    document.querySelectorAll('#rbCutGroup .rb-btn-option').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#rbCutGroup .rb-btn-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.cut = btn.dataset.value;
            state.currentPage = 1;
            renderDiamonds();
        });
    });

    document.querySelectorAll('#rbCertGroup .rb-btn-option').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#rbCertGroup .rb-btn-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.cert = btn.dataset.value;
            state.currentPage = 1;
            renderDiamonds();
        });
    });

    sortSelect.addEventListener('change', (e) => {
        state.sort = e.target.value;
        state.currentPage = 1;
        renderDiamonds();
    });

    document.getElementById('rbSelectDiamondBtn').addEventListener('click', () => {
        alert('Diamond Selected! Proceeding to next step...');
    });


    /* ==========================================
       8. INITIALIZATION
       ========================================== */
    renderShapes();
    renderDiamonds();
});