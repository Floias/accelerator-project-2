import Swiper from 'swiper';
import { trainingSliderSettings } from '../data/data';
import { createSliderSettingsWithNavigation } from '../utils/utils';

const container = document.querySelector('.training__slider');
const buttonPrev = container.querySelector('.training__button--prev');
const buttonNext = container.querySelector('.training__button--next');

const sliderOptions = createSliderSettingsWithNavigation('training', trainingSliderSettings);

const initTrainingSlider = () => {
  const swiper = new Swiper('.training__slider', {
    ...sliderOptions,
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
