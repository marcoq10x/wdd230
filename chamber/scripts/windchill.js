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
  