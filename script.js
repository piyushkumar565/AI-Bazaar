const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search');

let products = [];

fetch('products.json')
    .then(res => res.json())
    .then(data => {
        products = data;
        displayProducts(products);
    });

function displayProducts(list) {
    productList.innerHTML = '';
    list.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <p>${product.description}</p>
        `;
        productList.appendChild(card);
    });
}

searchInput.addEventListener('input', () => {
    const filtered = products.filter(p => p.name.toLowerCase().includes(searchInput.value.toLowerCase()));
    displayProducts(filtered);
});
