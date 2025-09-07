// Local AI-style description generator (no API needed)
function generateDescriptionLocal(name, product = {}) {
  const short = `${name} — high quality at an affordable price. Perfect for Indian customers.`;
  const bullets = [
    `Reliable performance`,
    `Value for ₹${product.price}`,
    `Fast delivery & easy returns`
  ];
  return `${short}\n\n• ${bullets.join('\n• ')}`;
}

window.generateDescriptionLocal = generateDescriptionLocal;
