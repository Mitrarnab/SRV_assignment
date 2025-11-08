window.addEventListener("scroll", function () {
  // header on scroll class change
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // hero slider
  const sliderConfigs = [
    { selector: ".slider1", reverse: false },
    { selector: ".slider2", reverse: true },
    { selector: ".slider3", reverse: false },
  ];

  const sliders = [];

  sliderConfigs.forEach((config) => {
    const swiper = new Swiper(config.selector, {
      direction: "vertical",
      slidesPerView: 1.5,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: config.reverse,
      },
      speed: 3000,
      breakpoints: {
        1400: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2.5,
        },
        0: {
          slidesPerView: 2.5,
        },
      },
    });

    // Pause autoplay on hover
    swiper.el.addEventListener("mouseenter", () => swiper.autoplay.stop());
    swiper.el.addEventListener("mouseleave", () => swiper.autoplay.start());

    sliders.push(swiper);
  });

  const mobileSlider = new Swiper(".mobile-slider", {
    direction: "horizontal",
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 3000,
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 4,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });

  mobileSlider.el.addEventListener("mouseenter", () => swiper.autoplay.stop());
  mobileSlider.el.addEventListener("mouseleave", () => swiper.autoplay.start());

  const schoolSliderltr = new Swiper(".school-slider-ltr", {
    slidesPerView: 6.3,
    spaceBetween: 10,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    freeMode: true,
    freeModeMomentum: false,
    grabCursor: true,
    allowTouchMove: false,

    breakpoints: {
      1600: {
        slidesPerView: 6.3,
      },
      1400: {
        slidesPerView: 5.3,
      },
      768: {
        slidesPerView: 3.3,
      },
      576: {
        slidesPerView: 2.3,
      },
      320: {
        slidesPerView: 1.5,
      },
    },
  });

  const schoolSliderrtl = new Swiper(".school-slider-rtl", {
    slidesPerView: 6.3,
    spaceBetween: 10,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
    grabCursor: true,
    allowTouchMove: false,

    breakpoints: {
      1600: {
        slidesPerView: 6.3,
      },
      1400: {
        slidesPerView: 5.3,
      },
      768: {
        slidesPerView: 4.3,
      },
      576: {
        slidesPerView: 2.3,
      },
      320: {
        slidesPerView: 1.5,
      },
    },
  });

  const schoolSliderEl = document.querySelector(".school-slider-ltr");
  schoolSliderEl.addEventListener("mouseenter", () =>
    schoolSliderrtl.autoplay.stop()
  );
  schoolSliderEl.addEventListener("mouseleave", () =>
    schoolSliderrtl.autoplay.start()
  );

  const schoolSliderEl1 = document.querySelector(".school-slider-ltr");
  schoolSliderEl1.addEventListener("mouseenter", () =>
    schoolSliderltr.autoplay.stop()
  );
  schoolSliderEl1.addEventListener("mouseleave", () =>
    schoolSliderltr.autoplay.start()
  );

  new Swiper(".school-book-slider", {
    slidesPerView: 1.3,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
    breakpoints: {
      768: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 25,
        allowTouchMove: false,
      },
    },
  });

  const exhibitionSlider = new Swiper(".exhibition-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".exhibition-next",
      prevEl: ".exhibition-prev",
    },
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      enabled: false,
    },

    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 25,
        autoplay: false,
        pagination: {
          enabled: false,
        },
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 22,
        autoplay: false,
        pagination: {
          enabled: false,
        },
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          enabled: true,
        },
      },
    },
  });

  const exhibitionContainer = document.querySelector(".exhibition-slider");

  exhibitionContainer.addEventListener("mouseenter", () => {
    if (window.innerWidth < 992 && exhibitionSlider.autoplay) {
      exhibitionSlider.autoplay.stop();
    }
  });

  exhibitionContainer.addEventListener("mouseleave", () => {
    if (window.innerWidth < 992 && exhibitionSlider.autoplay) {
      exhibitionSlider.autoplay.start();
    }
  });
});
