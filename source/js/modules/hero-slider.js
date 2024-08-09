import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const swiperOptions = {
  modules: [Pagination],
  direction: 'horizontal',
  slidesPerView: 1,
  init: false,
  slideActiveClass: 'hero__item--active',
  slideClass: 'hero__item',
  wrapperClass: 'hero__list',
  loop: true,
  pagination: {
    el: '.hero__pagination',
    clickable: true,
  },
  breakpoints: {
    1440: {
      allowTouchMove: false,
    },
  },
};

const initHeroSlider = () => {
  const swiper = new Swiper('.hero__container', swiperOptions);

  const container = document.querySelector('.hero__container');

  if (container) {
    swiper.init(container);
  }
};

export { initHeroSlider };
