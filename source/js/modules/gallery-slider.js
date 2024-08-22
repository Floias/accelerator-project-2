import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const container = document.querySelector('.gallery__slider');

let swiperGallery;

const initGallerySlider = () => {
  swiperGallery = new Swiper('.gallery__slider', {
    modules: [Navigation],
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    autoHeight: true,
    direction: 'horizontal',
    loop: true,
    init: false,
    slideActiveClass: 'gallery__item--active',
    slideClass: 'gallery__item',
    wrapperClass: 'gallery__list',
    navigation: {
      nextEl: '.gallery__button--next',
      prevEl: '.gallery__button--prev',
    },
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
  });

  if (container) {
    swiperGallery.init(container);
  }
};

const destroyGallerySwiper = () => {
  if (swiperGallery) {
    swiperGallery.destroy(true, true);
    swiperGallery = null;
  }
};

const handleGalleryResize = () => {
  if (window.innerWidth < 1440) {
    if (!swiperGallery) {
      initGallerySlider();
    }
  } else {
    destroyGallerySwiper();
  }
};

export { handleGalleryResize };
