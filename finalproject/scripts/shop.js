// shop.js

const products = [
    {
      id: 1,
      name: "Lemon Essential Oil",
      category: "essential-oils",
      price: 8.99,
      image: "images/lemon.webp",
      description: "Invigorating and cleansing. Boosts energy, supports mood, and purifies the air with a fresh citrus aroma."
    },
    {
      id: 2,
      name: "Sandalwood Essential Oil",
      category: "essential_oils",
      price: 10.99,
      image: "images/sandalwood.webp",
      description: "Grounding and balancing. Helps reduce stress and anxiety, enhances focus, and supports restful sleep when blended with Lavender or Orange."
    },
    {
      id: 3,
      name: "Jasmine Essential Oil",
      category: "essential_oils",
      price: 8.99,
      image: "images/Jasmine.webp",
      description: "Romantic and uplifting. Promotes emotional well-being, reduces anxiety, and enhances confidence and mood."
    },
    {
      id: 4,
      name: "Frankincense Essential Oil",
      category: "essential_oils",
      price: 16.99,
      image: "images/frankincense.webp",
      description: "Deeply calming and spiritual. Supports meditation, reduces inflammation, and promotes healthy skin and breathing."
    },
    {
      id: 5,
      name: "Chamomile Essential Oil",
      category: "essential_oils",
      price: 8.99,
      image: "images/Chamomile.webp",
      description: "Gentle and relaxing. Eases tension, encourages restful sleep, and soothes sensitive skin and digestive discomfort."
    },
    {
      id: 6,
      name: "Lavender Essential Oil",
      category: "essential_oils",
      price: 8.99,
      image: "images/lavender.webp",
      description: "Versatile and calming. Alleviates stress and anxiety, promotes relaxation, improves sleep, and soothes skin irritation."
    },
    {
      id: 7,
      name: "Essential Oil Diffuser",
      category: "wellness-products",
      price: 41.99,
      image: "images/diffuser.webp",
      description: "Ultrasonic diffuser to disperse essential oils into the air. Enhances mood, purifies the environment, and supports respiratory comfort."
    },
    {
      id: 8,
      name: "Aromatherapy Package",
      category: "wellness-products",
      price: 85.99,
      image: "images/aromatherapy pckg.webp",
      description: "A curated set of essential oils to promote balance, relaxation, and emotional wellness—perfect for daily self-care rituals or gifts."
    }
  ];
  
  const productList = document.getElementById("productList");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  
  let cart = [];
  
  function renderProducts(items) {
    productList.innerHTML = "";
  
    items.forEach(product => {
      // Create elements for the product card
      let card = document.createElement("div");
      let name = document.createElement("h3");
      let price = document.createElement("p");
      let description = document.createElement("p");
      let img = document.createElement("img");
      let button = document.createElement("button");
  
      // Set content and attributes
      name.textContent = product.name;
      price.textContent = `$${product.price.toFixed(2)}`;
      description.textContent = product.description;
      img.setAttribute("src", product.image);
      img.setAttribute("alt", product.name);
      button.textContent = "Add to Cart";
      button.setAttribute("onclick", `addToCart(${product.id})`);
  
      // Append elements to the card
      card.className = "product-card";
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(price);
      card.appendChild(description);
      card.appendChild(button);
  
      // Append card to the product list
      productList.appendChild(card);
    });
  }
  
  function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
  
    const filtered = products.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm);
      return matchesCategory && matchesSearch;
    });
  
    renderProducts(filtered);
  }
  
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    const item = cart.find((c) => c.id === productId);
  
    if (item) {
      item.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    updateCart();
  }
  
  function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
  
    cart.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} x${item.quantity}`;
      cartItems.appendChild(li);
      total += item.price * item.quantity;
    });
  
    cartTotal.textContent = total.toFixed(2);
  }
  
  // Event Listeners
  searchInput.addEventListener("input", filterProducts);
  categoryFilter.addEventListener("change", filterProducts);
  
  // Initial render
  renderProducts(products);
  