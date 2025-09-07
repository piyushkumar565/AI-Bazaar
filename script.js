const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search');

let products = [];

async function loadProducts() {
  const res = await fetch('products.json');
  products = await res.json();

  // AI descriptions add karo
  applyAIDescriptions(products);

  displayProducts(products);
}

function displayProducts(list) {
  productList.innerHTML = '';
  list.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <p class="desc">${product.description || ''}</p>
    `;
    productList.appendChild(card);
  });
}

searchInput.addEventListener('input', () => {
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  displayProducts(filtered);
});

function applyAIDescriptions(productsArr) {
  if (typeof generateDescriptionLocal === 'function') {
    productsArr.forEach(p => {
      p.description = generateDescriptionLocal(p.name, p);
    });
  }
}

loadProducts();
