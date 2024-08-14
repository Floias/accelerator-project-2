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
    bulletElement: 'button type="button"',
  },
  breakpoints: {
    1440: {
      allowTouchMove: false,
    },
  },
};

const refreshesTab = (activeIndex) => {
  const allButtons = document.querySelectorAll('.hero__item-button');
  allButtons.forEach((button) => button.setAttribute('tabindex', -1));

  const activeSlideButton = document.querySelector(`.hero__item:nth-child(${activeIndex + 1}) .hero__item-button`);
  if (activeSlideButton) {
    activeSlideButton.setAttribute('tabindex', 0);
  }
};

const initHeroSlider = () => {
  const swiper = new Swiper('.hero__container', swiperOptions);

  const container = document.querySelector('.hero__container');

  if (container) {
    swiper.init(container);
  }
  swiper.on('slideChange', () => {
    refreshesTab(swiper.activeIndex);
  });

  refreshesTab(swiper.activeIndex);
};

export { initHeroSlider };
