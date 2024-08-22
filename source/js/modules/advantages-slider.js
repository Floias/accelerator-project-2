import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const container = document.querySelector('.advantages__slider');
const slidesList = document.querySelector('.advantages__list');
const slides = document.querySelectorAll('.advantages__item');

const addsSlides = () => {
  slides.forEach((item) => {
    const clonedSlides = item.cloneNode(true);
    clonedSlides.classList.add('advantages__item--double');
    slidesList.appendChild(clonedSlides);
  });
};

const removeDuplicateSlides = () => {
  const duplicate = slidesList.querySelectorAll('.advantages__item--double');

  duplicate.forEach((item) => item.remove());
};

let swiper;

const initAdvantagesSlider = () => {
  swiper = new Swiper('.advantages__slider', {
    modules: [Navigation],
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    autoHeight: true,
    direction: 'horizontal',
    init: false,
    slideActiveClass: 'advantages__item--active',
    slideClass: 'advantages__item',
    wrapperClass: 'advantages__list',
    navigation: {
      nextEl: '.advantages__button--next',
      prevEl: '.advantages__button--prev',
    },
    loop: true,
    breakpoints: {
      1440: {
        slidesPerView: 'auto',
        slidesPerGroup: 2,
        spaceBetween: 30,
        allowTouchMove: false,
      }
    },
  });

  if (container) {
    addsSlides();
    swiper.init(container);
    swiper.slideTo(2);
  }
};

const destroyAdvantagesSwiper = () => {
  if (swiper) {
    swiper.destroy(true, true);
    swiper = null;
    removeDuplicateSlides();
  }
};

const handleResize = () => {
  if (window.innerWidth >= 1440) {
    if (!swiper) {
      initAdvantagesSlider();
    }
  } else {
    destroyAdvantagesSwiper();
  }
};

export { handleResize };
