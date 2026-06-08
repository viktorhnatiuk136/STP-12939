import Swiper from 'swiper';
import 'swiper/css';

function checkResolution() {
  const width = window.innerWidth;

  const swiperTargets = document.querySelectorAll('[data-box="swiper"]');
  const wrappers = document.querySelectorAll('[data-wrap="swiper-wrap"]');
  const slides = document.querySelectorAll('[data-slide="swiper-slide"]');

  if (width >= 1440) {
    swiperTargets.forEach(swiperTarget =>
      swiperTarget.classList.remove('swiper')
    );
    wrappers.forEach(wrapper => wrapper.classList.remove('swiper-wrapper'));
    slides.forEach(slide => slide.classList.remove('swiper-slide'));
  } else {
    swiperTargets.forEach(swiperTarget => swiperTarget.classList.add('swiper'));
    wrappers.forEach(wrapper => wrapper.classList.add('swiper-wrapper'));
    slides.forEach(slide => slide.classList.add('swiper-slide'));

    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: false,
      spaceBetween: 16,
    });
  }
}

window.addEventListener('DOMContentLoaded', checkResolution);
window.addEventListener('resize', checkResolution);
