import { commonSliderSettings } from '../data/data';
import { Navigation, Pagination } from 'swiper/modules';

const checkWebpFormat = () => {
  const webP = new Image();
  webP.src =
    'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

  webP.onload = webP.onerror = () => {
    if (webP.height === 2) {
      document.body.classList.add('js-webp');
    } else {
      document.body.classList.remove('js-webp');
    }
  };
};

const createSliderSettingsWithNavigation = (sliderName, sliderOptions) => ({
  ...commonSliderSettings,
  ...sliderOptions,
  modules: [Navigation],
  slideActiveClass: `${sliderName}__item--active`,
  slideClass: `${sliderName}__item`,
  wrapperClass: `${sliderName}__list`,
  navigation: {
    nextEl: `.${sliderName}__button--next`,
    prevEl: `.${sliderName}__button--prev`,
  },
});

const createSliderSettingsWithPagination = (sliderName, sliderOptions) => ({
  ...commonSliderSettings,
  ...sliderOptions,
  modules: [Pagination],
  slideActiveClass: `${sliderName}__item--active`,
  slideClass: `${sliderName}__item`,
  wrapperClass: `${sliderName}__list`,
  pagination: {
    el: `.${sliderName}__pagination`,
    clickable: true,
    bulletElement: 'button type="button"',
  },
});

export { checkWebpFormat, createSliderSettingsWithNavigation, createSliderSettingsWithPagination };
