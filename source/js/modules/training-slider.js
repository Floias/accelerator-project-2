import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const container = document.querySelector('.training__slider');
const buttonPrev = container.querySelector('.training__button--prev');
const buttonNext = container.querySelector('.training__button--next');

const initTrainingSlider = () => {
  const swiper = new Swiper('.training__slider', {
    modules: [Navigation],
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    direction: 'horizontal',
    init: false,
    slideActiveClass: 'training__item--active',
    slideClass: 'training__item',
    wrapperClass: 'training__list',
    navigation: {
      nextEl: '.training__button--next',
      prevEl: '.training__button--prev',
    },
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
    on: {
      slideChange: () => {
        if (swiper.isBeginning) {
          buttonPrev.disabled = true;
        } else {
          buttonPrev.disabled = false;
        }

        if (swiper.isEnd) {
          buttonNext.disabled = true;
        } else {
          buttonNext.disabled = false;
        }
      },
    },
  });

  if (container) {
    swiper.init(container);
  }
};

export { initTrainingSlider };
