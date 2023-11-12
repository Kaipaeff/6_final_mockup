new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: false,
  },

  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: true,
  // },

  // mousewheel: {
  //   sensitivity: 1,
  //   eventsTarget: ".swiper-container"
  // },

  slidesPerView: 1.25,

  spaceBetween: 16,

  centeredSlides: false,

  autoplay: {
    delay: 9000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },

  loop: true,

  speed: 1000,

  // effect: 'fade',

  // fadeEffect: {
  //   crossFade: true
  // },

  // effect: 'flip',

  // flipEffect: {
  //   //! Тень
  //   slideShadows: true,
  //   //! Показ только активного слайда
  //   limitRotation: true,
  // },

  // effect: 'cube',

  // cubeEffect: {
  //   slideShadows: true,
  //   shadow: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94,
  // },

  // effect: 'coverflow',
  //! (для этого свойства   slidesPerView: 1.25 лучше указать в значении 3 )

  // coverflowEffect: {
  //   rotate: 20,
  //   stretch: 50,
  //   slideShadows: true,
  // },

  //! листание
  // effect: 'slide',


  // //! Адаптив, ширина экрана
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1.25,
  //   },
  //   480: {
  //     slidesPerView: 1.4,
  //   },
  //   992: {
  //     slidesPerView: 3,
  //   },
  // }

});