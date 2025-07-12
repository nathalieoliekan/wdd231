document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu");
  const navMenu = document.getElementById("navMenu").querySelector("ul");

  if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
});