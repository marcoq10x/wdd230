document.addEventListener("DOMContentLoaded", function() {
    // Populate copyright year
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // Populate last modified date
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
});

function toggleMenu() {
    const navItems = document.getElementById("mainNav");
    if (navItems.style.display === "none" || navItems.style.display === "") {
        navItems.style.display = "flex";
        document.getElementById("hamburger").innerText = 'X';  // Change to 'X' for close
    } else {
        navItems.style.display = "none";
        document.getElementById("hamburger").innerText = '≡';  // Change back to '≡'
    }
}
