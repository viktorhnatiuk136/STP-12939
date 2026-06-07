import Swiper from 'swiper';
import 'swiper/css';

function checkResolution() {
  const width = window.innerWidth;

  const swiperTarget = document.querySelector('[data-box="swiper"]');
  const wrapper = document.querySelector('[data-wrap="swiper-wrap"]');
  const slides = document.querySelectorAll('[data-slide="swiper-slide"]');

  if (width >= 1440) {
    swiperTarget?.classList.remove('swiper');
    wrapper?.classList.remove('swiper-wrapper');
    slides.forEach(slide => slide.classList.remove('swiper-slide'));
    swiper.destroy(true, true);
  } else {
    swiperTarget?.classList.add('swiper');
    wrapper?.classList.add('swiper-wrapper');
    slides.forEach(slide => slide.classList.add('swiper-slide'));

    const swiper = new Swiper('#play-swiper', {
      direction: 'horizontal',
      loop: false,
      spaceBetween: 16,
    });
  }
}

window.addEventListener('load', checkResolution);
window.addEventListener('resize', checkResolution);
