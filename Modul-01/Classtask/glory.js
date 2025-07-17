document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
      type: 'carousel', // Slayt növü: 'carousel', 'slider', 'cover-flow'
      startAt: 0,       // Başlanğıc slayt indeksi
      perView: 1,       // Görünən slayd sayı
      autoplay: 3000,   // Avtomatik keçid (millisaniyə)
      hoverpause: true  // Keçid zamanı durdurma
    }).mount();
  });
  