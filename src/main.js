import './js/burgerMenu';
import './js/playSteps';

const breakpoint = window.matchMedia('(min-width: 1440px)');
let swiperInstance;

function handleSwiper(e) {
  if (e.matches) {
    // Проверяем, существует ли инстанс, и уничтожаем его
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
    }
  } else {
    // Инициализируем Swiper заново, если ширина экрана меньше 1440px
    swiperInstance = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: false,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
}

// Слушаем изменения размера экрана
breakpoint.addListener(handleSwiper);
// Запускаем функцию сразу при загрузке страницы
handleSwiper(breakpoint);
