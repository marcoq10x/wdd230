//Wind chill function (Chamber of Commerce)
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3.0) {
      return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    } else {
      return "N/A";
    }
  }
  
  function displayWindChill() {
    const tempSpan = document.getElementById('temp-value');
    const windSpeedSpan = document.getElementById('wind-speed-value');
    const windChillSpan = document.getElementById('wind-chill-value');
    
    const temperature = parseFloat(tempSpan.textContent);
    const windSpeed = parseFloat(windSpeedSpan.textContent);
    
    const windChill = calculateWindChill(temperature, windSpeed);
    
    windChillSpan.textContent = typeof windChill === "number" ? windChill.toFixed(2) + "°F" : windChill;
  }
  
  //displayWindChill function when the script loads
  displayWindChill();
  


//==========================Weather API week 10 Home Page left column in MAIN==========================================================
// Weather feature in our Chamber of Commerce of PB page with API in CARD 1 left side
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
    weatherIcon.setAttribute('alt', `Weather icon depicting ${desc}`); 
    captionDesc.textContent = capitalize(desc);
}

// Helper function to capitalize each word in the description
function capitalize(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


//==========================3 Day Forecast code week 10 Home Page 3 circles==========================================================
// ATTENTION: for the following code I used the help of AI due to the fact that I couldn'tfigure out how to do it.
//3 Day Forecast Function and code. What a real heachache this was!

// URL for 3 day forecast data
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=26.67&lon=80.26&units=imperial&appid=20e8740966e7fd3f1d9dbafeb9b1375b`;

// Function to create and return a weather icon element
function createIconElement(iconCode, description) {
    const iconImg = document.createElement('img');
    iconImg.src = `https://openweathermap.org/img/w/${iconCode}.png`;
    iconImg.alt = `Weather icon depicting ${description}`; 
    return iconImg;
}

// Function to display forecast
function displayForecast(forecastList) {
    const forecastContainer = document.getElementById('forecast-container');

    // Select only one reading per day (e.g., at 18:00:00) for 3 days
    const dailyForecast = forecastList.filter(reading => reading.dt_txt.includes("18:00:00")).slice(0, 3);

    forecastContainer.innerHTML = ""; // Clear previous content

    dailyForecast.forEach(day => {
        // Date element
        const date = document.createElement('h3');
        date.textContent = new Date(day.dt_txt).toDateString();

        // Weather icon
        const icon = createIconElement(day.weather[0].icon, day.weather[0].description);

        // Temperature
        const temp = document.createElement('p');
        temp.innerHTML = `<span>${day.main.temp.toFixed(0)}&deg;F</span>`;

        // Description
        const description = document.createElement('figcaption');
        description.textContent = day.weather[0].description.charAt(0).toUpperCase() + day.weather[0].description.slice(1);

        // Card container
        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.appendChild(date);
        card.appendChild(temp);
        card.appendChild(icon);
        card.appendChild(description);
        

        forecastContainer.appendChild(card);
    });
}

// Fetch 3 day forecast from API    
async function getForecastData() {
    try {
        const result = await fetch(forecastURL);
        if (!result.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await result.json();

        // Display forecast
        displayForecast(data.list);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Ensure DOM content is loaded before executing script
document.addEventListener('DOMContentLoaded', () => {
    getForecastData();
});

// Helper function to capitalize each word in the description
function capitalize(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}