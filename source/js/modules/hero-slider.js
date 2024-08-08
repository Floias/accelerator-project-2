import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


const initHeroSlider = () => {
  const swiper = new Swiper('.hero__container', {
    direction: 'vertical',
    init: false,
    slideClass: 'hero__item',
    wrapperClass: 'hero__list',
    loop: true,
    modules: [Pagination],
    pagination: {
      el: '.hero__pagination',
    },
  });

  const container = document.querySelector('.hero__container');

  if (container) {
    swiper.init(container);
  }
};

export { initHeroSlider };
