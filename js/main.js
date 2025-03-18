const swiper = new Swiper('.swiper-container', {
    // Настройки
    loop: true, 
    slidesPerView: 3.3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    autoplay: {
      delay: 3000,
    },
  });
  