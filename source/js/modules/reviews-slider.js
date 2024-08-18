import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const container = document.querySelector('.reviews__slider');
const buttonPrev = container.querySelector('.reviews__button--prev');
const buttonNext = container.querySelector('.reviews__button--next');

const initReviewsSlider = () => {
  const swiper = new Swiper('.reviews__slider', {
    modules: [Navigation],
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    direction: 'horizontal',
    init: false,
    slideActiveClass: 'reviews__item--active',
    slideClass: 'reviews__item',
    wrapperClass: 'reviews__list',
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 1,
        spaceBetween: 120,
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

export { initReviewsSlider };
