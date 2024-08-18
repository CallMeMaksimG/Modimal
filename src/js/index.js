import Swiper from 'swiper/bundle';
import mobileNav from './modules/mobile-nav.js';
import accordion from './modules/accordion.js';

import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 2,
  loop: true,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    780: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

// Мобильная навигация
mobileNav();

accordion();
