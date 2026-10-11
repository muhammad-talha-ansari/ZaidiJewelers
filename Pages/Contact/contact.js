document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. HEADER & FOOTER AUTOMATIC LOAD
       ========================================== */
    fetch('../../Header/Header.html')
        .then(res => res.text())
        .then(data => document.getElementById('header-placeholder').innerHTML = data)
        .catch(err => console.error('Header load error:', err));

    fetch('../../Footer/Footer.html')
        .then(res => res.text())
        .then(data => document.getElementById('footer-placeholder').innerHTML = data)
        .catch(err => console.error('Footer load error:', err));


    /* ==========================================
       2. CONTACT FORM SUBMISSION
       ========================================== */
    const contactForm = document.getElementById('ctContactForm');
    const successMsg = document.getElementById('ctSuccessMsg');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validate required fields
            const firstName = document.getElementById('ctFirstName').value.trim();
            const lastName = document.getElementById('ctLastName').value.trim();
            const email = document.getElementById('ctEmail').value.trim();
            const message = document.getElementById('ctMessage').value.trim();

            if (!firstName || !lastName || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Simulate form submission
            const submitBtn = contactForm.querySelector('.ct-submit-btn');
            submitBtn.textContent = 'SENDING...';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Hide form, show success message
                contactForm.style.display = 'none';
                successMsg.style.display = 'block';
                
                // Scroll to success message
                successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 1000);
        });
    }

});