/* ================= API SETUP ================= */
const API_URL = "https://fakestoreapi.com/products/";
const container = document.getElementById("productContainer");
const statusText = document.getElementById("status");

let allProducts = [];

/* ================= FETCH API ================= */
fetch(API_URL)
  .then((res) => {
    if (!res.ok) throw new Error("Network error");
    return res.json();
  })
  .then((data) => {
    statusText.style.display = "none";
    allProducts = data;

    populateCategories(data);
    displayProducts(data);
  })
  .catch((err) => {
    statusText.innerText = "Failed to load data";
    console.error(err);
  });

/* ================= DISPLAY PRODUCTS ================= */
function displayProducts(data) {
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<p>No products found</p>";
    return;
  }

  data.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title.substring(0, 50)}</h3>
      <p><strong>$${product.price}</strong></p>
      <p>${product.description.substring(0, 60)}...</p>

      <button onclick="viewMore(${product.id})">View More</button>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    container.appendChild(card);
  });
}

/* ================= VIEW MORE ================= */
function viewMore(id) {
  const product = allProducts.find((p) => p.id === id);

  alert(
    `Title: ${product.title}
Price: $${product.price}
Description: ${product.description}`,
  );
}

/* ================= SEARCH ================= */
document.getElementById("search").addEventListener("input", function () {
  const value = this.value.toLowerCase();

  const filtered = allProducts.filter((p) =>
    p.title.toLowerCase().includes(value),
  );

  displayProducts(filtered);
});

/* ================= CATEGORY ================= */
function populateCategories(data) {
  const categories = [...new Set(data.map((p) => p.category))];
  const select = document.getElementById("categoryFilter");

  categories.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat;
    option.innerText = cat;
    select.appendChild(option);
  });
}

document
  .getElementById("categoryFilter")
  .addEventListener("change", function () {
    const value = this.value;

    const filtered =
      value === "all"
        ? allProducts
        : allProducts.filter((p) => p.category === value);

    displayProducts(filtered);
  });

/* ================= SORT ================= */
document.getElementById("sort").addEventListener("change", function () {
  const value = this.value;

  let sorted = [...allProducts];

  if (value === "low") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (value === "high") {
    sorted.sort((a, b) => b.price - a.price);
  }

  displayProducts(sorted);
});

/* ================= ADD TO CART ================= */
function addToCart(id) {
  const product = allProducts.find((p) => p.id === id);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Prevent duplicate items
  const exists = cart.find((item) => item.id === id);

  if (exists) {
    alert("Item already in cart!");
    return;
  }

  // Store only required fields
  const cartItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
  };

  cart.push(cartItem);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart!");
}
