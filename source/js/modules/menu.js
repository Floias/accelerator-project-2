const menuButton = document.querySelector('.header__toggle');
const menu = document.querySelector('.header__navigation-list');

const isEscapeKey = (evt) => evt.key === 'Escape';

const onPressesKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    menuCloses();
  }
};

const menuOpens = () => {
  menu.classList.remove('header__navigation-list--close');
  document.addEventListener('keydown', onPressesKeydown);
};

const menuCloses = () => {
  menu.classList.add('header__navigation-list--close');
  document.removeEventListener('keydown', onPressesKeydown);
};

const onClickButton = () => {
  if (menu && menu.classList.contains('header__navigation-list--close')) {
    menuOpens();
    return;
  }
  if (menu && !menu.classList.contains('header__navigation-list--close')) {
    menuCloses();
  }
};

const changesMenuState = () => {
  menuButton?.addEventListener('click', onClickButton);
};

export { changesMenuState };
