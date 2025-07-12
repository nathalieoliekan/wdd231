const membersContainer = document.getElementById("members");
const gridBtn = document.getElementById("gridView");
const listBtn = document.getElementById("listView");

async function getMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  membersContainer.innerHTML = ""; // Clear previous content

  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("member-card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy" />
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <span class="membership-level">${member.membership}</span>
    `;

    membersContainer.appendChild(card);
  });
}

gridBtn.addEventListener("click", () => {
  membersContainer.classList.add("grid-view");
  membersContainer.classList.remove("list-view");
});

listBtn.addEventListener("click", () => {
  membersContainer.classList.add("list-view");
  membersContainer.classList.remove("grid-view");
});

getMembers();
