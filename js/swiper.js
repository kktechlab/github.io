
// var swiper = new Swiper(".swiper-container", {
//   // slidesPerView: 1,
//   // spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     // clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});