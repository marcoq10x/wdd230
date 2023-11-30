//JavaScript for Chamber of Commerce of Palm Beach

// Last Modification Function
document.addEventListener("DOMContentLoaded", function() {
    // Populate copyright year
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // Populate last modified date
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
});


// Hero Image Slideshow Function
let currentImageIndex = 0;
const heroImages = [
    "/wdd230/chamber/images/clockL.webp",
    "/wdd230/chamber/images/umbrellaL.webp",
    "/wdd230/chamber/images/oceanL.webp",
    "/wdd230/chamber/images/terraceL.webp"
];

function changeHeroImage() {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundImage = `url(${heroImages[currentImageIndex]})`;
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    }
}

setInterval(changeHeroImage, 3000); // Change image every 3 seconds



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

//==========================Directory Page==========================

// Fetch the members data and display it
async function fetchMembers() {
    try {
        const response = await fetch('/wdd230/chamber/data/members.json');
        const membersData = await response.json();
        displayMembers(membersData);
    } catch (error) {
        console.error('Error fetching members data: ', error);
    }
}

// Display members in the directory container
function displayMembers(membersData) {
    const directoryContainer = document.getElementById('directoryContainer');
    // Clear existing entries
    directoryContainer.innerHTML = '';

    membersData.forEach(member => {
        const memberSection = document.createElement('section');
        memberSection.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Website</a>
        `;
        directoryContainer.appendChild(memberSection);
    });
}

// Toggle view functions
function toggleGridView() {
    const directoryContainer = document.getElementById('directoryContainer');
    directoryContainer.classList.add('grid');
    directoryContainer.classList.remove('list');
}

function toggleListView() {
    const directoryContainer = document.getElementById('directoryContainer');
    directoryContainer.classList.add('list');
    directoryContainer.classList.remove('grid');
}

// Event listeners for view buttons
document.getElementById('grid').addEventListener('click', toggleGridView);
document.getElementById('list').addEventListener('click', toggleListView);

// Initial fetch and display
document.addEventListener('DOMContentLoaded', () => {
    fetchMembers();
    // Other DOMContentLoaded event content
});





