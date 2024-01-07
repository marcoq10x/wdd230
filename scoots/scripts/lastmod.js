//JavaScript for Scoots Page
// Last Modification Function
document.addEventListener("DOMContentLoaded", function() {
    // Populate copyright year
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // Populate last modified date
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
});



// Hamburger Menu Toggle Function
const hamburger = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// Dark Mode Toggle Function
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("😎")) {
    body.classList.add("dark-mode");
    modeButton.textContent = "🌤";
  } else {
    body.classList.remove("dark-mode");
    modeButton.textContent = "😎";
  }
});


//Last Visit and messages for User
// Constants for time calculations
const MS_PER_DAY = 86400000; // (1000 ms/s * 60 s/m * 60 m/h * 24 h/day)

window.addEventListener('DOMContentLoaded', (event) => {
    //  last visit in localStorage
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    let message = "Welcome! Let us know if you have any questions.";

    if (lastVisit) {
        const daysSinceLastVisit = Math.floor((now - lastVisit) / MS_PER_DAY);

        if (daysSinceLastVisit < 1) {
            message = "Back so soon! Awesome!";
        } else {
            const dayOrDays = daysSinceLastVisit === 1 ? "day" : "days";
            message = `You last visited ${daysSinceLastVisit} ${dayOrDays} ago.`;
        }
    }

    // Display message in the sidebar content area
    const visitMessageElement = document.querySelector('.visit-message'); // Add this class to your HTML where you want to display the message
    if (visitMessageElement) {
        visitMessageElement.textContent = message;
    }

    // Update the last visit to now
    localStorage.setItem('lastVisit', now);
});












