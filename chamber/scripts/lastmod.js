//JS Chamber

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
    "/wdd230/chamber/images/clock.jpg",
    "/wdd230/chamber/images/umbrella.jpg",
    "/wdd230/chamber/images/ocean.jpg",
    "/wdd230/chamber/images/terrace.jpg"
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
