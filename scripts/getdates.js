document.addEventListener("DOMContentLoaded", function() {
    // Populate copyright year
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // Populate last modified date
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
});

function toggleMenu() {
    const navItems = document.getElementById("mainNav");
    if (navItems.style.display === "none" || navItems.style.display === "") {
        navItems.style.display = "flex";
        document.getElementById("hamburger").innerText = 'X';  // Change to 'X' for close
    } else {
        navItems.style.display = "none";
        document.getElementById("hamburger").innerText = '≡';  // Change back to '≡'
    }
}


// page visitor counter
// Starts display element variable
const visitsDisplay = document.querySelector(".visits");

// Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// Determiner of the first visit / display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// Increment the number of visits by one.
numVisits++;

// Store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);
