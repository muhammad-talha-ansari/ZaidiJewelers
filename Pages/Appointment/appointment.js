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
       2. CALENDAR LOGIC
       ========================================== */
    let currentDate = new Date(2026, 8, 1); // September 2026 (Month is 0-indexed)
    let selectedDate = null;
    let selectedTime = null;

    const monthYearDisplay = document.getElementById('apCurrentMonthYear');
    const calendarDaysContainer = document.getElementById('apCalendarDays');
    const prevMonthBtn = document.getElementById('apPrevMonth');
    const nextMonthBtn = document.getElementById('apNextMonth');
    const timeSlotsContainer = document.getElementById('apTimeSlots');
    const continueBtn = document.getElementById('apContinueBtn');
    const errorMsg = document.getElementById('apErrorMsg');

    const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        monthYearDisplay.textContent = `${months[month]} ${year}`;

        const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Sunday
        // Adjust to Monday start (0=Mon, 6=Sun)
        const startDay = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;
        
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let daysHtml = '';

        // Empty cells for days before the 1st
        for (let i = 0; i < startDay; i++) {
            daysHtml += `<div class="ap-day empty"></div>`;
        }

        // Days of the month
        const today = new Date();
        today.setHours(0,0,0,0);

        for (let day = 1; day <= daysInMonth; day++) {
            const dateObj = new Date(year, month, day);
            const isPast = dateObj < today;
            const isSelected = selectedDate && dateObj.toDateString() === selectedDate.toDateString();
            
            // Disable past dates and Sundays (0)
            const isSunday = dateObj.getDay() === 0;

            let classes = 'ap-day';
            if (isPast || isSunday) classes += ' disabled';
            if (isSelected) classes += ' selected';

            daysHtml += `<div class="${classes}" data-day="${day}" data-month="${month}" data-year="${year}">${day}</div>`;
        }

        calendarDaysContainer.innerHTML = daysHtml;

        // Add click events to days
        document.querySelectorAll('.ap-day:not(.disabled):not(.empty)').forEach(dayEl => {
            dayEl.addEventListener('click', () => {
                const day = parseInt(dayEl.dataset.day);
                const month = parseInt(dayEl.dataset.month);
                const year = parseInt(dayEl.dataset.year);
                
                selectedDate = new Date(year, month, day);
                selectedTime = null; // Reset time on date change
                
                renderCalendar();
                renderTimeSlots();
                hideError();
            });
        });
    }

    // Month Navigation
    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });


    /* ==========================================
       3. TIME SLOTS LOGIC
       ========================================== */
    const ALL_TIME_SLOTS = [
        "10:00 am – 11:00 am",
        "11:00 am – 12:00 pm",
        "01:00 pm – 02:00 pm",
        "02:30 pm – 03:30 pm",
        "04:00 pm – 05:00 pm",
        "05:30 pm – 06:00 pm"
    ];

    // Demo: Some slots are disabled/booked
    const DISABLED_SLOTS = ["11:00 am – 12:00 pm", "05:30 pm – 06:00 pm"];

    function renderTimeSlots() {
        if (!selectedDate) {
            timeSlotsContainer.innerHTML = `<p style="grid-column:1/-1; font-size:12px; color:var(--ap-text-muted);">Please select a date first.</p>`;
            return;
        }

        timeSlotsContainer.innerHTML = ALL_TIME_SLOTS.map(slot => {
            const isDisabled = DISABLED_SLOTS.includes(slot);
            const isSelected = slot === selectedTime;
            
            let classes = 'ap-timeslot';
            if (isDisabled) classes += ' disabled';
            if (isSelected) classes += ' selected';

            return `<div class="${classes}" data-time="${slot}">${slot}</div>`;
        }).join('');

        // Click events
        document.querySelectorAll('.ap-timeslot:not(.disabled)').forEach(slotEl => {
            slotEl.addEventListener('click', () => {
                selectedTime = slotEl.dataset.time;
                renderTimeSlots();
                hideError();
            });
        });
    }


    /* ==========================================
       4. STEP NAVIGATION & VALIDATION
       ========================================== */
    const step1 = document.getElementById('apBookingStep1');
    const step2 = document.getElementById('apBookingStep2');
    const successBox = document.getElementById('apSuccessBox');
    const backBtn = document.getElementById('apBackBtn');
    const bookNowBtn = document.getElementById('apBookNowBtn');

    function showError(msg) {
        errorMsg.textContent = msg;
        errorMsg.style.display = 'block';
    }

    function hideError() {
        errorMsg.style.display = 'none';
    }

    continueBtn.addEventListener('click', () => {
        if (!selectedDate && !selectedTime) {
            showError('Please pick a date and a time slot so our team can reach out to you.');
            return;
        } else if (!selectedDate) {
            showError('Please pick a date so our team can reach out to you.');
            return;
        } else if (!selectedTime) {
            showError('Please pick a time slot so our team can reach out to you.');
            return;
        }

        // All good - move to Step 2
        hideError();
        step1.style.display = 'none';
        step2.style.display = 'block';

        // Populate Step 2 Info
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const dateStr = selectedDate.toLocaleDateString('en-US', options);
        document.getElementById('apConfirmDate').textContent = `${dateStr} | ${selectedTime}`;
        document.getElementById('apConfirmTimezone').textContent = `Pacific Time (US & Canada) (GMT-08:00)`;
        
        // Scroll to top of booking section
        document.getElementById('booking').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    backBtn.addEventListener('click', () => {
        step2.style.display = 'none';
        step1.style.display = 'block';
        document.getElementById('booking').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });


    /* ==========================================
       5. FORM SUBMISSION
       ========================================== */
    const bookingForm = document.getElementById('apBookingForm');
    const countrySelect = document.getElementById('apCountrySelect');
    const flagImg = document.getElementById('apFlagImg');
    const countryCode = document.getElementById('apCountryCode');

    // Country Flag Change
    countrySelect.addEventListener('change', (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        const flagCode = selectedOption.dataset.flag;
        countryCode.textContent = selectedOption.value;
        flagImg.src = `https://flagcdn.com/w20/${flagCode}.png`;
    });

    bookNowBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Validate form
        const firstName = document.getElementById('apFirstName').value.trim();
        const lastName = document.getElementById('apLastName').value.trim();
        const phone = document.getElementById('apPhone').value.trim();
        const email = document.getElementById('apEmail').value.trim();

        if (!firstName || !lastName || !phone || !email) {
            alert('Please fill in all required fields.');
            return;
        }

        // Simulate API call
        bookNowBtn.textContent = 'BOOKING...';
        bookNowBtn.disabled = true;

        setTimeout(() => {
            // Hide form, show success
            step2.style.display = 'none';
            successBox.style.display = 'block';
            document.getElementById('apSuccessEmail').textContent = email;
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 1000);
    });


    /* ==========================================
       6. INITIALIZATION
       ========================================== */
    renderCalendar();
    renderTimeSlots();
});