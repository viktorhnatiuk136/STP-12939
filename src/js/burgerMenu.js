const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const overlayEl = document.querySelector('[data-overvisible]');

openBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'open';
  overlayEl.dataset.visible = 'open';
});

closeBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'close';
  overlayEl.dataset.visible = 'close';
});

overlayEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'close';
  overlayEl.dataset.visible = 'close';
});
