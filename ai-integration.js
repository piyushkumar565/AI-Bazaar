// Dummy AI description generator
function generateAIDescription(productName) {
  return `The ${productName} is a smart choice with advanced AI-driven features, ensuring top performance and great value in India.`;
}

// Add AI description when page loads
document.addEventListener("DOMContentLoaded", () => {
  const productCards = document.querySelectorAll(".product");

  productCards.forEach((card) => {
    const name = card.querySelector("h3").textContent;
    const desc = card.querySelector(".description");
    desc.textContent = generateAIDescription(name);
  });
});

// Simple AI Recommendation
function recommendProducts(query, products) {
  return products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("search");
  const productContainer = document.querySelector(".products");

  fetch("products.json")
    .then(res => res.json())
    .then(products => {
      searchBox.addEventListener("input", (e) => {
        const results = recommendProducts(e.target.value, products);
        productContainer.innerHTML = results.map(p => `
          <div class="product">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="description">${generateAIDescription(p.name)}</p>
            <p class="price">${p.price}</p>
          </div>
        `).join("");
      });
    });
});
