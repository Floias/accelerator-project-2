const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  desktop: 1440,
};

const commonSliderSettings = {
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
  autoHeight: true,
  direction: 'horizontal',
  init: false,
};

const advantagesSliderSettings = {
  loop: true,
  breakpoints: {
    1440: {
      slidesPerView: 'auto',
      slidesPerGroup: 2,
      spaceBetween: 30,
      allowTouchMove: false,
    }
  },
};

const gallerySliderSettings = {
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },
};

const heroSliderSettings = {
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    1440: {
      allowTouchMove: false,
    },
  },
};

const reviewsSliderSettings = {
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.2,
    },
    1440: {
      slidesPerView: 1.693,
      allowTouchMove: false,
    }
  },
};

const toursSliderSettings = {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: false,
    }
  },
};

const trainingSliderSettings = {
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
      allowTouchMove: false,
    }
  },
};

export { BREAKPOINTS, commonSliderSettings, advantagesSliderSettings, gallerySliderSettings, heroSliderSettings, reviewsSliderSettings, toursSliderSettings, trainingSliderSettings };
