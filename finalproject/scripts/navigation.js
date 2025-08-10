document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu");
  const navMenu = document.getElementById("navMenu").querySelector("ul");

  if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
