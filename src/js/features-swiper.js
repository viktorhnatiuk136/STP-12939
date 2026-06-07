import Swiper from 'swiper';
import 'swiper/css';

export function initFeaturesSwiper() {
  if (window.innerWidth < 1440) {
    new Swiper('.features-swiper', {
      slidesPerView: 'auto',
      centeredSlides: false,
      spaceBetween: 16,
    });
  }
}
