import Swiper from 'swiper';
import { reviewsSliderSettings } from '../data/data';
import { createSliderSettingsWithNavigation } from '../utils/utils';

const container = document.querySelector('.reviews__slider');
const buttonPrev = container.querySelector('.reviews__button--prev');
const buttonNext = container.querySelector('.reviews__button--next');

const sliderOptions = createSliderSettingsWithNavigation('reviews', reviewsSliderSettings);

const initReviewsSlider = () => {
  const swiper = new Swiper('.reviews__slider', {
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

export { initReviewsSlider };
