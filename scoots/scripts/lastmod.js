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

// This fetches member data and displays it on the page.

// Asynchronously fetch member data from the given JSON file.
async function fetchMembers() {
    try {
        // Attempt to fetch the JSON data from the specified path.
        const response = await fetch('/wdd230/chamber/data/members.json');
        
        // If the fetch request fails, log an error and exit the function.
        if (!response.ok) {
            throw new Error('Oops! There was a problem fetching the data.');
        }

        // Parse the JSON data into a JavaScript object.
        const membersData = await response.json();

        // Pass the members data to be displayed on the page.
        displayMembers(membersData.members);
    } catch (error) {
        // If there's an error during the fetch or data parsing, log it to the console.
        console.error('Yikes! We ran into this issue:', error);
    }
}

// Function  creates and displays member cards on the page.
function displayMembers(members) {
    // Get the container where member cards will be added.
    const directoryContainer = document.getElementById('directoryContainer');

    // Clear out existing content in the container.
    directoryContainer.innerHTML = '';

    // Loop through each member object in the array.
    members.forEach(member => {
        // Create a new card element for each member.
        let card = document.createElement('section');
        card.className = 'member-card'; 

   // Image element for the member's logo. This is our JavaScript in case we want to use it to display pictures(comment).
        let image = document.createElement('img');
        image.src = member.icon; // Set the source of the image.
        image.alt = 'Logo of ' + member.name; // Provide alt text for accessibility.
        card.appendChild(image);

        // Create an element for the member's name and add it to the card.
        let name = document.createElement('h2');
        name.textContent = member.name; // Set the text content to the member's name.
        card.appendChild(name); // Add the name to the card.

        // Same process as above for address and phone number.
        let address = document.createElement('p');
        address.textContent = member.address;
        card.appendChild(address);

        let phone = document.createElement('p');
        phone.textContent = member.phone;
        card.appendChild(phone);
        
    
        // Create a link element for the member's website.
        let website = document.createElement('a');
        website.href = member.url; // Set the hyperlink reference.
        website.textContent = 'Visit Website'; // Set the link text.
        website.target = '_blank'; // Ensure it opens in a new tab/window.
        card.appendChild(website);

        // Finally, add the fully constructed card to the directory container.
        directoryContainer.appendChild(card);
    });
}
// Wait for the DOM to fully load before fetching and displaying members.
document.addEventListener('DOMContentLoaded', fetchMembers);


//functions to toggle between grid and list views
function toggleGridView() {
    const directoryContainer = document.getElementById('directoryContainer');
    directoryContainer.classList.add('grid');
    directoryContainer.classList.remove('list');
    // Ensure cards have the correct class for grid layout
    let cards = directoryContainer.querySelectorAll('section');
    cards.forEach(card => card.classList.add('member-card-grid'));
}

function toggleListView() {
    const directoryContainer = document.getElementById('directoryContainer');
    directoryContainer.classList.add('list');
    directoryContainer.classList.remove('grid');
    // be certain that cards have the correct class for list layout
    let cards = directoryContainer.querySelectorAll('section');
    cards.forEach(card => card.classList.add('member-card-list'));
}

// Event listeners for view buttons
document.getElementById('grid').addEventListener('click', toggleGridView);
document.getElementById('list').addEventListener('click', toggleListView);

// Call fetchMembers on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    fetchMembers();
    toggleGridView(); // Set default view to grid on page load
});




