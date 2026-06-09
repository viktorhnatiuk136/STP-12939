document.addEventListener('DOMContentLoaded', () => {
  const openBtnEl = document.querySelector('[data-action="open"]');
  const closeBtnEl = document.querySelector('[data-action="close"]');
  const burgerMenuEl = document.querySelector('[data-visible]');
  const navLinks = document.querySelectorAll('[data-nav-item]');

  openBtnEl.addEventListener('click', e => {
    burgerMenuEl.dataset.visible = 'open';
  });

  closeBtnEl.addEventListener('click', e => {
    burgerMenuEl.dataset.visible = 'close';
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerMenuEl.dataset.visible = 'close';
    });
  });
});
