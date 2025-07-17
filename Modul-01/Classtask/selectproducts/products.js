document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll("nav ul li");
    const products = document.querySelectorAll(".product");
  
    // Kateqoriya düyməsinə klik edildikdə
    categoryButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Aktiv kateqoriya stilini yenilə
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        const selectedCategory = button.getAttribute("data-category");
  
        // Məhsulları filtr et
        products.forEach(product => {
          if (product.getAttribute("data-category") === selectedCategory) {
            product.classList.add("active");
          } else {
            product.classList.remove("active");
          }
        });
      });
    });
  
    // İlk kateqoriyanın məhsullarını göstər
    document.querySelector("[data-category='hot']").classList.add("active");
  });
  