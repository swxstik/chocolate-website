// Example array from product_detail.js
const products = [
    { id: 1, name: "Bucket Bouquet", category: "Baskets", image: "categories/bucket_bouquet.png" },
    { id: 2, name: "Rama Basket", category: "Baskets", image: "categories/rama_basket.png" },
    { id: 3, name: "Oval Basket", category: "Baskets", image: "categories/oval_basket.png" },
    { id: 4, name: "Paper Mache Round Basket", category: "Baskets", image: "categories/paper_mache_round_basket.png" },
    { id: 5, name: "MDF Basket", category: "Baskets", image: "categories/mdf_basket.png" },
    { id: 6, name: "Lily Basket", category: "Baskets", image: "categories/lily_basket.png" },
    { id: 7, name: "MDF Basket 385", category: "Baskets", image: "categories/mdf_basket_385.png" },
    { id: 8, name: "Teddy Basket", category: "Baskets", image: "categories/teddy_basket.png" },
    { id: 9, name: "Purse", category: "Baskets", image: "categories/purse.png" },
  ];
  
  // Function to get query parameter from URL
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  // Function to display items based on category
  function displayCategoryItems(category) {
    const categoryItemsContainer = document.getElementById("category-items");
    categoryItemsContainer.innerHTML = ""; // Clear previous items
  
    // Filter items by category
    const filteredItems = products.filter(product => product.category === category);
  
    // Generate HTML for each item
    filteredItems.forEach(item => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("category-item");
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="category-img">
        <p>${item.name}</p>
      `;
      categoryItemsContainer.appendChild(itemElement);
    });
  }
  
  // Get category from URL and display items
  document.addEventListener("DOMContentLoaded", () => {
    const category = getQueryParam("category");
    if (category) {
      document.getElementById("category-title").textContent = `Category: ${category}`;
      displayCategoryItems(category);
    } else {
      document.getElementById("category-title").textContent = "Category not found";
    }
  });