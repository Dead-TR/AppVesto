'use strict';

// radio checkers
const skillCheckers = document.querySelector('.skill-level');

skillCheckers.addEventListener('click', (event) => {
  if (event.target.classList.contains('skill-level__item')) {
    const activeLabel = event.target;

    activeLabel.classList.remove('skill-level_unchecked');
    activeLabel.classList.add('skill-level_checked');
   
    for (const i of [...skillCheckers.children]) {
      if (i !== activeLabel) {
        i.classList.add('skill-level_unchecked');
        i.classList.remove('skill-level_checked');
      }
    }
  };
});

// drop-menu
const dropDescription = document.querySelector('.description');

dropDescription.addEventListener('click', (event) => {
  let activeDrop;

  if (event.target.parentElement.classList.contains('description__item')) {
    activeDrop = event.target.parentElement;
  } else if (event.target.classList.contains('description__item')) {
    activeDrop = event.target;
  };

  if (activeDrop) {
    if (activeDrop.classList.contains('description__item_closed')) {
      activeDrop.classList.remove('description__item_closed');
      activeDrop.classList.add('description__item_open');
    } else {
      activeDrop.classList.remove('description__item_open');
      activeDrop.classList.add('description__item_closed');
    }
  }
});
