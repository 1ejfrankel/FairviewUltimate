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
                    <li><a href="spaghetti-western.html">Spaghetti Western</a></li>
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
                    <li><a href="shop.html">Shop</a></li> -->
                    
                </ul>
            </div>
        </nav>
    `;

    document.getElementById('navigation-placeholder').innerHTML = navHTML;
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
