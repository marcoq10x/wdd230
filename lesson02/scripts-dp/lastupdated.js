document.addEventListener("DOMContentLoaded", function() {
    let currentDateTime = new Date();
    let formattedDate = (currentDateTime.getMonth() + 1).toString().padStart(2, '0') + "/"
        + currentDateTime.getDate().toString().padStart(2, '0') + "/"
        + currentDateTime.getFullYear();

    let formattedTime = currentDateTime.getHours().toString().padStart(2, '0') + ":"
        + currentDateTime.getMinutes().toString().padStart(2, '0') + ":"
        + currentDateTime.getSeconds().toString().padStart(2, '0');

    let footerContent = `Copyright © 2023 .:|:. Marco Quintero .:|:.Last Updated: ${formattedDate}  ${formattedTime}`;
    
    document.querySelector("footer").innerHTML = footerContent;
});
