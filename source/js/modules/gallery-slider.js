import Swiper from 'swiper';
import { gallerySliderSettings, BREAKPOINTS } from '../data/data';
import { createSliderSettingsWithNavigation } from '../utils/utils';

const container = document.querySelector('.gallery__slider');

const sliderOptions = createSliderSettingsWithNavigation('gallery', gallerySliderSettings);
let swiperGallery;

const initGallerySlider = () => {
  swiperGallery = new Swiper('.gallery__slider', sliderOptions);

  if (container) {
    swiperGallery.init(container);
  }
};

const destroyGallerySwiper = () => {
  if (swiperGallery) {
    swiperGallery.destroy(true, true);
    swiperGallery = null;
  }
};

const handleGalleryResize = () => {
  if (window.innerWidth < BREAKPOINTS.desktop) {
    if (!swiperGallery) {
      initGallerySlider();
    }
  } else {
    destroyGallerySwiper();
  }
};

export { handleGalleryResize };
