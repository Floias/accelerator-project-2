import { changesMenuState } from './modules/menu';
import { initHeroSlider } from './modules/hero-slider';
import { initToursSlider } from './modules/tours-slider';
import { initTrainingSlider } from './modules/training-slider';
import { addsShadow } from './modules/about';
import { initReviewsSlider } from './modules/reviews-slider';
import { handleResize } from './modules/advantages-slider';
import { handleGalleryResize } from './modules/gallery-slider';
import { checkWebpFormat } from './utils/utils';
import { validatesForm } from './modules/validation';

document.addEventListener('DOMContentLoaded', () => {
  changesMenuState();
  initHeroSlider();
  initToursSlider();
  initTrainingSlider();
  addsShadow();
  initReviewsSlider();
  checkWebpFormat();
  validatesForm();

  window.addEventListener('resize', handleResize);
  window.addEventListener('load', handleResize);
  window.addEventListener('resize', handleGalleryResize);
  window.addEventListener('load', handleGalleryResize);
});
