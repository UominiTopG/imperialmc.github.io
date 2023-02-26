var swiper = new Swiper(".swiper-cont", {
    slidesPerView: 3,
    spaceBetween: 30,
    centerSlide: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3,
        },
    },
});