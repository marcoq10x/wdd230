document.addEventListener('DOMContentLoaded', function() {
    const temperature = parseFloat(document.getElementById('temperature').textContent);
    const windSpeed = parseFloat(document.getElementById('windSpeed').textContent);

    let windChill = 'N/A';

    if (temperature <= 50 && windSpeed > 3) {
        windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        windChill = windChill.toFixed(2) + '°F';
    }

    document.getElementById('windChill').textContent = windChill;
});
