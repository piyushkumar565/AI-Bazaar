// Placeholder for AI product description generation
function generateDescription(productName) {
    return `This is a detailed AI-generated description for ${productName}.`;
}

// Apply AI descriptions after fetching products
fetch('products.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(product => {
            product.description = generateDescription(product.name);
        });
    });
