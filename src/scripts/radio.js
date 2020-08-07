'use strict';

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
