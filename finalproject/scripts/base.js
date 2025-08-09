document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuButton.addEventListener("click", () => {
        if (navMenu.style.display === "block") {
            navMenu.style.display = "none";
            menuButton.textContent = "☰";
        } else {
            navMenu.style.display = "block";
            menuButton.textContent = "✖";
        }
    });
});

// Dynamically insert current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modified date of the document
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

