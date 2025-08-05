document.addEventListener("DOMContentLoaded", () => {
  const messageEl = document.getElementById("visits-message");
  const lastVisit = localStorage.getItem("lastVisit");
  const currentVisit = Date.now();

  if (lastVisit) {
    const days = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
    messageEl.textContent = `Welcome back! It’s been ${days} day(s) since your last visit.`;
  } else {
    messageEl.textContent = "Welcome! This is your first visit.";
  }

  localStorage.setItem("lastVisit", currentVisit);

  fetch("data/discover-data.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.querySelector(".discover-grid");
      data.forEach((item) => {
        const card = document.createElement("article");
        card.innerHTML = `
          <img src="${item.image}" alt="${item.title}">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error loading discover data:", error);
    });
});
