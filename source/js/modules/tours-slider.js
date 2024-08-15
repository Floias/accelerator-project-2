import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const container = document.querySelector('.tours__slider');
const buttonPrev = container.querySelector('.tours__button--prev');
const buttonNext = container.querySelector('.tours__button--next');

const initToursSlider = () => {
  const swiper = new Swiper('.tours__slider', {
    modules: [Navigation],
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    direction: 'horizontal',
    init: false,
    slideActiveClass: 'tours__item--active',
    slideClass: 'tours__item',
    wrapperClass: 'tours__list',
    navigation: {
      nextEl: '.tours__button--next',
      prevEl: '.tours__button--prev',
    },
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

export { initToursSlider };
