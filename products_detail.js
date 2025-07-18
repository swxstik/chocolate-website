// Read product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'), 10);
const currentPage = parseInt(urlParams.get('page')) || 1;

// Find product by ID


// Find product by ID
const product = products.find(p => p.id === productId);

if (!product) {
  document.getElementById('product-detail-container').innerHTML = '<p>Product not found.</p>';
} else {
  document.getElementById('productImage').src = product.image;
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productCode').textContent = product.code;
  document.getElementById('productWeight').textContent = product.weight;

  // Rich description (longer)
  document.getElementById('productDescription').textContent = 
    `Chocolate in ${product.name.toLowerCase()} packaging combines elegance, playfulness, and indulgence... Perfect for gifting, festive occasions, or as a unique keepsake.`;

  // Add thumbnails (repeat image for now)
  const thumbnails = document.getElementById('thumbnails');
  for (let i = 0; i < 3; i++) {
    const thumb = document.createElement('img');
    thumb.src = product.image;
    thumb.className = 'thumbnail-image';
    thumb.onclick = () => {
      document.getElementById('productImage').src = product.image;
    };
    thumbnails.appendChild(thumb);
  }

  // Related products
  const relatedContainer = document.getElementById('relatedProducts');
  const related = products.filter(p => p.id !== productId).slice(0, 3);
  related.forEach(p => {
    const card = document.createElement('div');
    card.className = 'related-product-card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <div>${p.name}</div>
      <div>${p.weight}</div>
      <a href="product_detail.html?id=${p.id}&page=${currentPage}">View</a>
    `;
    relatedContainer.appendChild(card);
  });
}
