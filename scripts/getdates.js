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





// // Select HTML elements in the document
// const currentTemp = document.querySelector('#current-temp');
// const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('figcaption');

// // API URL
// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=26.67&lon=80.26&units=imperial&appid=0f4ae5904674a05d482b5ef14addb3e';

// async function apiFetch() {
//     try {
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             console.log(data); // For testing
//             displayResults(data);
//         } else {
//             throw Error(await response.text());
//         }
//     } catch (error) {
//         console.error('Error fetching the data: ', error);
//     }
// }

// apiFetch();

// function displayResults(data) {
//     currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
//     const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//     let desc = data.weather[0].description;
//     weatherIcon.setAttribute('src', iconsrc);
//     weatherIcon.setAttribute('alt', desc);
//     captionDesc.textContent = capitalize(desc);
// }

// function capitalize(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }


// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// URL for API request - Palm Beach, Florida
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=26.67&lon=80.26&units=imperial&appid=0f4ae5904674da05d482b5ef14addb3e';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // For testing
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching the data: ', error);
    }
}

apiFetch();

// Function to display the results in HTML
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = capitalize(desc);
}

// Helper function to capitalize each word in the description
function capitalize(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
