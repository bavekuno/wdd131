
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




// Data array of temples
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Nairobi Kenya Temple",
        location: "Nairobi, Kenya",
        dedicated: "2021, July, 16",
        area: 10000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-60488-main.jpg"
    },
    {
        templeName: "Abidjan-ivory-coast-temple",
        location: "Abidjan, Ivory Coast",
        dedicated: "2025, March, 15",
        area: 15000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58993-main.jpg"
    },
    {
        templeName: "Accra-ghana-temple",
        location: "Accra, Ghana",
        dedicated: "2004, January, 8",
        area: 15000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
        templeName: "Bern-switzerland-temple",
        location: "Bern, Switzerland",
        dedicated: "1955, November, 8",
        area: 15000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
    },
    {
        templeName: "Brasilia-brazil-temple",
        location: "Brasilia, Brazil",
        dedicated: "2019, December, 15",
        area: 116642,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
    },
];




// ...existing code until the temples array...

// Function to create temple cards
function displayTemples(templeList) {
    const templesContainer = document.getElementById('temples-container');
    if (!templesContainer) return;

    templesContainer.innerHTML = ''; 

    templeList.forEach(temple => {
        const articleElement = document.createElement('article');
        articleElement.classList.add('temple-card');

        articleElement.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p class="location">Location: ${temple.location}</p>
            <p class="dedicated">Dedicated: ${temple.dedicated}</p>
            <p class="area">Size: ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" 
                 alt="The ${temple.templeName} Temple" 
                 loading="lazy">
        `;

        templesContainer.appendChild(articleElement);
    });
}

// Filter functions
function filterTemples(filter) {
    switch (filter) {
        case 'old':
            return temples.filter(temple => {
                const dedicatedYear = parseInt(temple.dedicated.split(', ')[0]);
                return dedicatedYear < 1900;
            });
        case 'new':
            return temples.filter(temple => {
                const dedicatedYear = parseInt(temple.dedicated.split(', ')[0]);
                return dedicatedYear > 2000;
            });
        case 'large':
            return temples.filter(temple => temple.area > 90000);
        case 'small':
            return temples.filter(temple => temple.area < 10000);
        default:
            return temples;
    }
}

// Event listeners for navigation
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const filter = event.target.id || 'home';
        const filteredTemples = filterTemples(filter);
        displayTemples(filteredTemples);
    });
});

// Initial display of all temples
document.addEventListener('DOMContentLoaded', () => {
    displayTemples(temples);
});
