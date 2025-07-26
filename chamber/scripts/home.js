
document.addEventListener("DOMContentLoaded", () => {
  loadSpotlights();
});

async function loadSpotlights() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  const eligible = data.members.filter(m => m.membership === "Gold" || m.membership === "Silver");

  const shuffled = eligible.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  const container = document.getElementById("spotlights");
  container.innerHTML = "";

  selected.forEach(member => {
    const card = document.createElement("div");
    card.className = "member-card";

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy" />
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <span class="membership-level">${member.membership}</span>
    `;

    container.appendChild(card);
  });
}
