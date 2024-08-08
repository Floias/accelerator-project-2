import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


const initHeroSlider = () => {
  const swiper = new Swiper('.hero__container', {
    modules: [Pagination],
    direction: 'horizontal',
    slidesPerView: 1,
    init: false,
    slideClass: 'hero__item',
    wrapperClass: 'hero__list',
    loop: true,
    pagination: {
      el: '.hero__pagination',
      clickable: true,
    },
  });

  const container = document.querySelector('.hero__container');

  if (container) {
    swiper.init(container);
  }
};

export { initHeroSlider };
