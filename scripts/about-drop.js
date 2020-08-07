'use strict';

const dropDescription = document.querySelector('.description');

dropDescription.addEventListener('click', (event) => {
  const activeDrop = event.target.closest('.description__item');
  const arrow = activeDrop.firstElementChild;

  if (activeDrop) {
    if (activeDrop.classList.contains('description__item_closed')) {
      activeDrop.classList.remove('description__item_closed');
      activeDrop.classList.add('description__item_open');
      arrow.style = 'transform: rotate(180deg);';
    } else {
      activeDrop.classList.remove('description__item_open');
      activeDrop.classList.add('description__item_closed');
      arrow.style = 'transform: rotate(0deg);';
    }
  }
});
