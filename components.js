// Navigation component - dynamically loaded on all pages
function loadNavigation() {
    const navHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <a href="index.html" class="logo">
                    <img src="images/fairview-logo.png" alt="Fairview">
                    <span>FHS Ultimate</span>
                </a>
                <button class="menu-toggle" onclick="toggleMenu()">☰</button>
                <ul class="nav-links" id="navLinks">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="registration.html">Registration</a></li>
                    <li><a href="schedule.html">Schedule</a></li>
<!--                    <li class="dropdown">
                        <a href="teams.html">Teams</a>
                        <div class="dropdown-content">
                            <a href="team-spring-girl-matching.html">Spring Girl-Matching</a>
                            <a href="team-spring-a.html">Spring A</a>
                            <a href="team-spring-b.html">Spring B</a>
                            <a href="team-fall-a.html">Fall A</a>
                            <a href="team-fall-b.html">Fall B</a>
                            <a href="team-fall-open.html">Fall Open</a>
                        </div>
                    </li>
                    <li><a href="alumni.html">Alumni</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="spaghetti-western.html">Spaghetti Western</a></li> -->

                </ul>
            </div>
        </nav>
    `;

    document.getElementById('navigation-placeholder').innerHTML = navHTML;
}

// Footer component - dynamically loaded on all pages
function loadFooter() {
    const footerHTML = `
        <div class="footer">
            <p class="footer-tagline">Go Knights!</p>
            <p class="footer-subtitle">Fairview High School Ultimate Frisbee Team</p>
            <a href="https://www.instagram.com/fhs.ultimate/" target="_blank" class="social-link">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Follow us @fhs.ultimate</span>
            </a>
        </div>
    `;

    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}

// Toggle mobile menu
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Mobile dropdown functionality
function initMobileDropdown() {
    const dropdown = document.querySelector('.dropdown > a');
    if (dropdown && window.innerWidth <= 1100) {
        dropdown.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownContent = this.nextElementSibling;
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadNavigation();
    loadFooter();
    initMobileDropdown();

    // Re-initialize dropdown on window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            initMobileDropdown();
        }, 250);
    });
});
