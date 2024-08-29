import Swiper from 'swiper';
import { createSliderSettingsWithPagination } from '../utils/utils';
import { heroSliderSettings } from '../data/data';

const indexCount = 1;
const tabindex = {
  on: 0,
  off: -1,
};

const swiperOptions = createSliderSettingsWithPagination('hero', heroSliderSettings);

const refreshesTab = (activeIndex) => {
  const allButtons = document.querySelectorAll('.hero__item-button');
  allButtons.forEach((button) => button.setAttribute('tabindex', tabindex.off));

  const activeSlideButton = document.querySelector(`.hero__item:nth-child(${activeIndex + indexCount}) .hero__item-button`);
  if (activeSlideButton) {
    activeSlideButton.setAttribute('tabindex', tabindex.on);
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
