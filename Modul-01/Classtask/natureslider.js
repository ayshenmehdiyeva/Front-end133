var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
      type: 'carousel', // Slayt növü: 'carousel', 'slider', 'cover-flow'
      startAt: 0,       // Başlanğıc slayt indeksi
      perView: 3,       // Görünən slayd sayı
      autoplay: 3000,   // Avtomatik keçid (millisaniyə)
      hoverpause: true  // Keçid zamanı durdurma
    }).mount();
  });
  
