let products = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

// Modal Elements
const modal = document.getElementById("productModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

async function loadProducts() {
  try {
    const response = await fetch("data/products.json");
    products = await response.json();
    renderProducts(products);
    updateCart();
  } catch (err) {
    console.error("Error loading products:", err);
  }
}

function renderProducts(items) {
  productList.innerHTML = "";

  items.forEach(product => {
    productList.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onclick="openModal(${product.id})" style="cursor:pointer;" />
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <p>${product.description}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}


function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  const filtered = products.filter(product => {
    const matchesCategory = category === "all" || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  renderProducts(filtered);
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const item = cart.find(c => c.id === productId);

  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = cart.reduce((sum, item) => {
    cartItems.innerHTML += `<li>${item.name} x${item.quantity}</li>`;
    return sum + item.price * item.quantity;
  }, 0);

  cartTotal.textContent = total.toFixed(2);
}

// Modal functions
function openModal(productId) {
  const product = products.find(p => p.id === productId);
  modalContent.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="modal-img">
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
    <button onclick="addToCart(${product.id}); closeModal();">Add to Cart</button>
  `;
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

modalClose.addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Event Listeners
searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

// Init
loadProducts();
