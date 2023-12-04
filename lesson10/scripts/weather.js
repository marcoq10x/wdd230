// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=0f4ae5904674da05d482b5ef14addb3e';


async function apiFetch() {
    try {
        const response = await fetch(url); // Use the URL you've constructed
        if (response.ok) {
            const data = await response.json();
            console.log(data); // This is for testing, to see if data is being fetched correctly
            displayResults(data); // Uncomment this when ready to display the results
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching the data: ', error);
    }
}

apiFetch(); // This Invokes the function to perform the API fetch




// //Display the results Function. Will display the results in HTML
function displayResults(data) {
    // Displaying the temperature
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
  
    // Constructing the icon source URL
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  
    // Getting the description
    let desc = data.weather[0].description;
  
    // Setting attributes for the weather icon image
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
  
    // Updating the caption description
    captionDesc.textContent = capitalize(desc);
  }
  
  // Helper function to capitalize each word in the description
  function capitalize(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  