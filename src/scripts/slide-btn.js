'use strict';

const buttonSlideMenu = document.querySelector('.header__button-side-menu');

buttonSlideMenu.addEventListener('click', () => {
  const mobileNav = document.querySelector('.mobile-content');

  buttonSlideMenu.classList.toggle('header__button-side-menu_flipped');
  mobileNav.classList.toggle('mobile-content_hide');
});
