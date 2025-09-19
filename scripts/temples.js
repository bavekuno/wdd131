
// Hamburger menu functionality
const hamburgerButton = document.querySelector('.hamburger-button');
const navList = document.querySelector('.nav-list');

if (hamburgerButton && navList) {
    hamburgerButton.addEventListener('click', () => {
        navList.classList.toggle('show-menu');
        // Change button text to 'X' when menu is open, '☰' when closed
        if (navList.classList.contains('show-menu')) {
            hamburgerButton.textContent = '✖';
        } else {
            hamburgerButton.textContent = '☰';
        }
    });
}


// Get current year and set it in the footer
const currentYearSpan = document.getElementById('currentyear');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Get document last modified date and set it in the footer
const lastModifiedP = document.getElementById('lastModified');
if (lastModifiedP) {
    lastModifiedP.textContent = `Last modification: ${document.lastModified}`;
}
