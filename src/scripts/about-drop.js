'use strict';

const dropDescription = document.querySelector('.description');
// const contactBtn = document.querySelector('.contact__button-item');

const dropOpen = (activeDrop, arrow, title, isOpen) => {
  if (isOpen) {
    activeDrop.classList.remove('description__item_closed');
    activeDrop.classList.add('description__item_open');
    arrow.style = 'transform: rotate(180deg);';
    title.classList.add('description__title_active');
  } else {
    activeDrop.classList.remove('description__item_open');
    activeDrop.classList.add('description__item_closed');
    arrow.style = 'transform: rotate(0deg);';
    title.classList.remove('description__title_active');
  }
};

const scrolls = (activeDrop, arrow, title) => {
  for (const element of [...dropDescription.children]) {
    if (
      element.classList.contains('description__item_open')
        && element !== activeDrop
    ) {
      const elementArrow = element.firstElementChild;
      const elementTitle = element.children[1];

      dropOpen(element, elementArrow, elementTitle, false);
    }
  }

  if (activeDrop) {
    if (activeDrop.classList.contains('description__item_closed')) {
      dropOpen(activeDrop, arrow, title, true);
    } else {
      dropOpen(activeDrop, arrow, title, false);
    }
  }
};

dropDescription.addEventListener('click', (event) => {
  if (
    !event.target.classList.contains('contact__call')
      && !event.target.classList.contains('contact__button-item')
      && !event.target.closest('.description__vacancy')
  ) {
    const activeDrop = event.target.closest('.description__item');
    const arrow = activeDrop.firstElementChild;
    const title = activeDrop.children[1];

    scrolls(activeDrop, arrow, title);
  }

  if (event.target.classList.contains('contact__button-item')) {
    console.log("send to server script")
  }
});

const allBtn = document.querySelector('.main__wiew-all button');

allBtn.addEventListener('click', () => {
  for (const element of [...dropDescription.children]) {
    const elementArrow = element.firstElementChild;
    const elementTitle = element.children[1];

    dropOpen(element, elementArrow, elementTitle, true);
  }
});
