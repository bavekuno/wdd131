
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



// Define static variables for temperature and wind speed.
// These match the values in the wireframe examples.
const temperature = 10; // in °C
const windSpeed = 5; // in km/h

// Select the element where the windchill factor will be displayed.
const windChillElement = document.getElementById('windChill');

/**
 * Calculates the windchill factor using the metric formula.
 * @param {number} temp The air temperature in degrees Celsius (°C).
 * @param {number} wind The wind speed in kilometers per hour (km/h).
 * @returns {number} The calculated windchill factor.
 */
function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

// Check if the conditions for a viable windchill calculation are met.
if (temperature <= 10 && windSpeed > 4.8) {
    // If conditions are met, calculate the windchill factor.
    const windChill = calculateWindChill(temperature, windSpeed);
    // Display the result, rounded to one decimal place.
    windChillElement.textContent = `${windChill.toFixed(1)}°C`;
} else {
    // If conditions are not met, display "N/A".
    windChillElement.textContent = 'N/A';
}