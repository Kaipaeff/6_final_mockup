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
    delay: 10000,
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
  breakpoints: {
    320: {
      slidesPerView: 1.15,
    },
    340: {
      slidesPerView: 1.3,
    },
    380: {
      slidesPerView: 1.4,
    },
    420: {
      slidesPerView: 1.5,
    },
    460: {
      slidesPerView: 1.6,
    },
    500: {
      slidesPerView: 1.8,
    },
    540: {
      slidesPerView: 2.2,
    },
    600: {
      slidesPerView: 2.3,
    },
    640: {
      slidesPerView: 2.4,
    },
    680: {
      slidesPerView: 2.5,
    },
    720: {
      slidesPerView: 2.6,
    },
    767: {
      slidesPerView: 2.7,
    },
  }

});