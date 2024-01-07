//Banner displaying Max_temp Scoots home page

document.addEventListener('DOMContentLoaded', function() {
    const tempBanner = document.getElementById('temp-banner');
    const tempMaxValue = document.getElementById('temp-max-value');
    const closeTempButton = document.querySelector('.close-temp-banner');

    // Fetch the weather data from OpenWeatherMap API
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.95&units=imperial&appid=0f4ae5904674da05d482b5ef14addb3e')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const tempMax = data.main.temp_max;
            tempMaxValue.textContent = `${tempMax.toFixed(1)}°F`; // Round the temperature to 1 decimal place
            tempBanner.style.display = 'block'; // Show the temperature banner
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            tempMaxValue.textContent = 'N/A'; // Display 'N/A' or any other default message
            tempBanner.style.display = 'block'; // Still show the banner, now with the default message
        });

    // Event listener for closing the temperature banner when the 'x' is clicked
    closeTempButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent any default action
        tempBanner.style.display = 'none'; // Hide the temperature banner
    });
});