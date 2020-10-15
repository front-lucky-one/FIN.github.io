"use strict";

var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 0,
  spaceBetween: 12,
  loop: true,
  updateOnWindowResize: true,
  initialSlide: 0,
  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  }
});