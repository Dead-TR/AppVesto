'use strict';

// enter email
const formInput = document.querySelector('.join__form').firstElementChild;

if (document.body.offsetWidth <= 360) {
  formInput.placeholder = 'Your email';
}
