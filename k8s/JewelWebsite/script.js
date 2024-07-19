var swiper = new Swiper(".mySwiperNewProduct", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        740: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1224: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});

var swiper = new Swiper(".mySwiperTestimonials", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});


window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (this.window.scrollY > 0) {
        header.classList.add('header-fix');
    } else {
        header.classList.remove('header.fix');
    }
});