import Swiper from 'swiper';
import { toursSliderSettings } from '../data/data';
import { createSliderSettingsWithNavigation } from '../utils/utils';

const container = document.querySelector('.tours__slider');
const buttonPrev = container.querySelector('.tours__button--prev');
const buttonNext = container.querySelector('.tours__button--next');

const sliderOption = createSliderSettingsWithNavigation('tours', toursSliderSettings);

const initToursSlider = () => {
  const swiper = new Swiper('.tours__slider', {
    ...sliderOption,
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
