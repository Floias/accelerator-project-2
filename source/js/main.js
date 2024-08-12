// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { changesMenuState } from './modules/menu';
import { initHeroSlider } from './modules/hero-slider';
import { initToursSlider } from './modules/tours-slider';

changesMenuState();
initHeroSlider();
initToursSlider();
