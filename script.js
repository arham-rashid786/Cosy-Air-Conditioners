// script.js

// Store selected products in localStorage
const compareButtons = document.querySelectorAll(".btn-card-2");

compareButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;

    // Get card data
    const product = {
      id: card.dataset.id,
      brand: card.dataset.brand,
      name: card.dataset.name,
      type: card.dataset.type,
      ton: card.dataset.ton,
      price: card.dataset.price,
      warranty: card.dataset.warranty
    };

    // Retrieve current comparison array
    let compareList = JSON.parse(localStorage.getItem("compareList")) || [];

    // Check if already added
    if (compareList.some(p => p.id === product.id)) {
      alert("Product already added for comparison!");
      return;
    }

    // Limit to 3 products
    if (compareList.length >= 3) {
      alert("You can only compare up to 3 products.");
      return;
    }

    compareList.push(product);
    localStorage.setItem("compareList", JSON.stringify(compareList));
    alert(`${product.name} added for comparison!`);
  });
});
