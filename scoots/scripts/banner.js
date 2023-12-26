// //=====================================Banner Display  and Close Join, Meet and Greet Blue gradient ========================================
// //Banner for home page: functionality to close banner and display it on Monday, Tuesday, and Wednesday

// document.addEventListener('DOMContentLoaded', function() {
//     const today = new Date();
//     const dayOfWeek = today.getDay(); // Sunday is 0, Monday is 1, and so on.

//     const banner = document.querySelector('.event-banner');
//     const closeButton = document.querySelector('.close-banner');

//     // Display the banner Monday (1), Tuesday (2), and Wednesday (3) and I have to remember to check by 
//     //changing the 3 to a different number till 7 when is notone of the 3 days mentioned
//     if (dayOfWeek >= 1 && dayOfWeek <= 3) {
//         if (banner) {
//             banner.style.display = 'block'; // Show the banner
//         }
//     } else {
//         if (banner) {
//             banner.style.display = 'none'; // Hide the banner if it's not Mon, Tue, or Wed
//         }
//     }

//     // Set up the close button to hide the banner when clicked
//     if (closeButton) {
//         closeButton.addEventListener('click', function() {
//             if (banner) {
//                 banner.style.display = 'none';
//             }
//         });
//     }
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const tempBanner = document.getElementById('temp-banner');
//     const closeTempButton = document.querySelector('.close-temp-banner');

//     // Fetch the weather data from OpenWeatherMap API
//     fetch('https://api.openweathermap.org/data/2.5/weather?lat=26.67&lon=80.26&units=imperial&appid=0f4ae5904674da05d482b5ef14addb3e')
//         .then(response => response.json())
//         .then(data => {
//             const tempMax = data.main.temp_max;
//             document.getElementById('temp-max-value').textContent = tempMax.toFixed(1); // Rounded to no decimal places
//             tempBanner.style.display = 'block'; // Show the temperature banner
//         })
//         .catch(error => {
//             console.error('Error fetching weather data:', error);
//             // Handle any errors here, such as displaying a default message
//         });

//     // Close the temperature banner when the close button is clicked
//     closeTempButton.addEventListener('click', function() {
//         tempBanner.style.display = 'none'; // Hide the temperature banner
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const tempBanner = document.getElementById('temp-banner');
    const tempMaxValue = document.getElementById('temp-max-value');
    const closeTempButton = document.querySelector('.close-temp-banner');

    // Fetch the weather data from OpenWeatherMap API
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=26.67&lon=80.26&units=imperial&appid=0f4ae5904674da05d482b5ef14addb3e')
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