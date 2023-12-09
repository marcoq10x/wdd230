// //=====================================Banner Display  and Close Join, Meet and Greet Blue gradient ========================================
// //Banner for home page: functionality to close banner and display it on Monday, Tuesday, and Wednesday

document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // Sunday is 0, Monday is 1, and so on.

    const banner = document.querySelector('.event-banner');
    const closeButton = document.querySelector('.close-banner');

    // Display the banner Monday (1), Tuesday (2), and Wednesday (3) and I have to remember to check by 
    //changing the 3 to a different number till 7 when is notone of the 3 days mentioned
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        if (banner) {
            banner.style.display = 'block'; // Show the banner
        }
    } else {
        if (banner) {
            banner.style.display = 'none'; // Hide the banner if it's not Mon, Tue, or Wed
        }
    }

    // Set up the close button to hide the banner when clicked
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            if (banner) {
                banner.style.display = 'none';
            }
        });
    }
});


