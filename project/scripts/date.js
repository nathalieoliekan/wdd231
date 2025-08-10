document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const lastModified = document.getElementById("lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (lastModified) {
    lastModified.textContent = `Last modified: ${document.lastModified}`;
  }
});