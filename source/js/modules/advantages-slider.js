import Swiper from 'swiper';
import { createSliderSettingsWithNavigation } from '../utils/utils';
import { advantagesSliderSettings, BREAKPOINTS } from '../data/data';

const container = document.querySelector('.advantages__slider');
const slidesList = document.querySelector('.advantages__list');
const slides = document.querySelectorAll('.advantages__item');
const startSlide = 2;

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

const sliderOptions = createSliderSettingsWithNavigation('advantages', advantagesSliderSettings);

const initAdvantagesSlider = () => {
  swiper = new Swiper('.advantages__slider', sliderOptions);

  if (container) {
    addsSlides();
    swiper.init(container);
    swiper.slideTo(startSlide);
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
  if (window.innerWidth >= BREAKPOINTS.desktop) {
    if (!swiper) {
      initAdvantagesSlider();
    }
  } else {
    destroyAdvantagesSwiper();
  }
};

export { handleResize };
