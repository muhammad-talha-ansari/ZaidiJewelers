// ==========================================
// PRODUCT DATA STORE (Demo Database)
// ==========================================
const productDatabase = {
    "1": {
        title: "Cecilia Halo Engagement Ring, Oval Cut",
        price: 800,
        image: "../../Assets/Rings.png",
        metal: "14k yellow gold",
        desc: "Lab-grown diamond · 14k yellow gold"
    },
    "2": {
        title: "Leena Solitaire Ring",
        price: 600,
        image: "../../Assets/Leena Solitaire.png",
        metal: "14k white gold",
        desc: "Lab-grown diamond · 14k white gold"
    },
    "3": {
        title: "Lunar Glow Drop Pendant",
        price: 2100,
        image: "../../Assets/Necklaces Product Image.png",
        metal: "Platinum",
        desc: "Lab-grown diamond · Platinum"
    }
};

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. DYNAMIC DATA LOADING (URL se ID nikalna)
       ========================================== */
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    let basePrice = 1180; // Default fallback price

    if (productId && productDatabase[productId]) {
        const product = productDatabase[productId];

        // Title update karein
        document.querySelector('.product-title').textContent = product.title;
        
        // Base Price set karein (Pricing engine isi ko use karega)
        basePrice = product.price;
        
        // Price UI update karein
        document.getElementById('productPrice').textContent = '$' + basePrice.toLocaleString();
        
        // Main Image update karein
        document.getElementById('mainImg').src = product.image;
        
        // Thumbnails update karein (Demo ke liye same image 3 baar)
        const thumbs = document.querySelectorAll('.thumb');
        if(thumbs.length > 0) {
            thumbs[0].src = product.image;
            thumbs[1].src = product.image; 
            thumbs[2].src = product.image;
        }
    } else {
        console.warn("Product ID nahi mili ya ghalat hai. Default data dikhaya ja raha hai.");
    }


    /* ==========================================
       2. HEADER & FOOTER AUTOMATIC LOAD
       ========================================== */
    
    // Product.js Pages/Products/ mein hai. Root tak jane ke liye ../../ use hoga.
    fetch('../../Header/Header.html')
        .then(response => {
            if (!response.ok) throw new Error("Header file not found");
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));

    // Same tarah Footer ke liye bhi ../../ use hoga
    fetch('../../Footer/Footer.html')
        .then(response => {
            if (!response.ok) throw new Error("Footer file not found");
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));


    /* ==========================================
       3. IMAGE GALLERY SWITCHING
       ========================================== */
    window.changeImage = function(element, newSrc) {
        document.getElementById('mainImg').src = newSrc;
        document.querySelectorAll('.thumb').forEach(thumb => thumb.classList.remove('active'));
        element.classList.add('active');
    };


    /* ==========================================
       4. PRICE CALCULATION ENGINE
       ========================================== */
    let currentPrice = basePrice;
    
    function updatePrice() {
        document.getElementById('productPrice').textContent = '$' + currentPrice.toLocaleString();
    }

    // --- Swatches (Metal) Logic ---
    const metalSwatches = document.querySelectorAll('#metalSwatches .swatch');
    metalSwatches.forEach(swatch => {
        swatch.addEventListener('click', function() {
            metalSwatches.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('metalName').textContent = this.dataset.name;
            calculateTotal();
        });
    });

    // --- Button Groups Logic ---
    function setupButtonGroup(groupId, nameSpanId) {
        const group = document.getElementById(groupId);
        if(!group) return;
        
        const buttons = group.querySelectorAll('.btn-option');
        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                buttons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                if(nameSpanId) {
                    document.getElementById(nameSpanId).textContent = this.dataset.name;
                }

                // Diamond Type Special Logic
                if(groupId === 'diamondTypeGroup') {
                    const labGrownGroup = document.getElementById('labGrownTypeGroup');
                    if(this.dataset.name === 'Natural') {
                        labGrownGroup.style.display = 'none';
                    } else {
                        labGrownGroup.style.display = 'flex';
                    }
                }
                calculateTotal();
            });
        });
    }

    setupButtonGroup('diamondTypeGroup', 'diamondTypeName');
    setupButtonGroup('centerStoneGroup', 'centerStoneName');
    setupButtonGroup('ringSizeGroup', 'ringSizeName');
    
    // Lab Grown Type
    const labGrownGroup = document.getElementById('labGrownTypeGroup');
    if(labGrownGroup) {
        const buttons = labGrownGroup.querySelectorAll('.btn-option');
        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                buttons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                document.getElementById('labGrownName').textContent = this.dataset.name;
                calculateTotal();
            });
        });
    }

    // --- Total Price Calculator ---
    function calculateTotal() {
        let total = basePrice; // Ab yeh dynamic basePrice use karega

        const activeMetal = document.querySelector('#metalSwatches .swatch.active');
        if(activeMetal) total += parseInt(activeMetal.dataset.price);

        const activeDiamond = document.querySelector('#diamondTypeGroup .btn-option.active');
        if(activeDiamond) total += parseInt(activeDiamond.dataset.price);

        if(activeDiamond && activeDiamond.dataset.name === 'Lab-grown') {
            const activeLabGrown = document.querySelector('#labGrownTypeGroup .btn-option.active');
            if(activeLabGrown) total += parseInt(activeLabGrown.dataset.price);
        }

        const activeCenter = document.querySelector('#centerStoneGroup .btn-option.active');
        if(activeCenter) total += parseInt(activeCenter.dataset.price);

        currentPrice = total;
        updatePrice();
    }


    /* ==========================================
       5. ACCORDIONS LOGIC
       ========================================== */
    const accordions = document.querySelectorAll('.accordion-header');
    
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            const parent = this.parentElement;
            
            // Toggle active class
            parent.classList.toggle('active');
            
            // Toggle content height
            const content = this.nextElementSibling;
            if (parent.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });

});