//==========================Weather API week 10==========================================================
// Weather feature in our Chamber of Commerce of PB page with API in CARD 1 left side
// Select HTML elements in the document
// Select HTML elements in the document

// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const currentHumidity = document.querySelector('#current-humidity');
const nextDayTemp = document.querySelector('#next-day-temp');
const nextDayHumidity = document.querySelector('#next-day-humidity');
const weatherIcon = document.querySelector('#weather-icon');
const nextDayIcon = document.querySelector('#next-day-icon');
const currentCaption = document.querySelector('#current-weather-card figcaption');
const nextDayCaption = document.querySelector('#next-day-forecast-card figcaption');

// URLs for API requests
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=26.67&lon=80.26&units=imperial&appid=0f4ae5904674da05d482b5ef14addb3e';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=26.67&lon=80.26&units=imperial&appid=0f4ae5904674da05d482b5ef14addb3e';

async function apiFetch() {
    try {
        // Fetch current weather data
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        // Fetch forecast data
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        // Display current weather
        displayCurrentWeather(weatherData);

        // Display forecast for next day
        displayNextDayForecast(forecastData);
    } catch (error) {
        console.error('Error fetching the data: ', error);
    }
}

// Function to display current weather results in HTML
function displayCurrentWeather(data) {
    currentTemp.innerHTML = `Current Temp: ${data.main.temp.toFixed(0)}&deg;F`;
    currentHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', data.weather[0].description); 
    currentCaption.textContent = capitalize(data.weather[0].description);
}

// Function to display next day's forecast
function displayNextDayForecast(data) {
    const nextDayForecast = data.list.filter(forecast => {
        const date = new Date(forecast.dt_txt);
        return date.getHours() === 15 && date.getDate() === new Date().getDate() + 1;
    })[0];

    if (nextDayForecast) {
        nextDayTemp.innerHTML = `Next Day's Temp at 3 PM: ${nextDayForecast.main.temp.toFixed(0)}&deg;F`;
        nextDayHumidity.innerHTML = `Humidity: ${nextDayForecast.main.humidity}%`;
        const nextDayIconSrc = `https://openweathermap.org/img/w/${nextDayForecast.weather[0].icon}.png`;
        nextDayIcon.setAttribute('src', nextDayIconSrc);
        nextDayIcon.setAttribute('alt', nextDayForecast.weather[0].description);
        nextDayCaption.textContent = capitalize(nextDayForecast.weather[0].description);
    }
}

// Helper function to capitalize each word in the description
function capitalize(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

apiFetch();
