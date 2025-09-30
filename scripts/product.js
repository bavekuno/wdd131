const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];



// Get the select element for product names
const productNameSelect = document.getElementById('product-name');

// Loop through the products array and create an option for each product
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productNameSelect.appendChild(option);
});


const countDisplayElement = document.getElementById('reviewCountDisplay');

// Get the current count from localStorage. 
let reviewCount = localStorage.getItem('reviewCount');
reviewCount = reviewCount ? parseInt(reviewCount) : 0;

// Function to update review count
function updateReviewCount() {
    // Increment the count
    reviewCount++;

    // Store the new count in localStorage
    localStorage.setItem('reviewCount', reviewCount);

    // Update the display element
    if (countDisplayElement) {
        countDisplayElement.textContent = `You have completed ${reviewCount} review(s).`;
    }

    console.log(`Review count is now: ${reviewCount}`);
}

// Get current year and set it in the footer
const currentYearSpan = document.getElementById('currentyear');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Get document last modified date and set it in the footer
const lastModifiedP = document.getElementById('lastModified');
if (lastModifiedP) {
    lastModifiedP.textContent = `Last modified: ${document.lastModified}`;
}
