'use strict';

const dropdownSelectElement = document.querySelector('.dropdown__select');

const dropdownSelectShow = (value) => { // rerender dropdown-select
  const dropList = [...document.querySelector('.dropdown__list').children];

  for (const dropUnit of dropList) {
    if (dropUnit.dataset.dropdownvalue === value) {
      dropdownSelectElement.setAttribute('data-dropdownvalue', `${value}`);
      dropdownSelectElement.innerText = dropUnit.innerText;
    }
  }
};

const dropLouver = (isOpen) => { // open, or closed drop-list
  if (isOpen === 'true') {
    return 'dropdown__list dropdown__list_open';
  }

  if (isOpen === 'false') {
    return 'dropdown__list dropdown__list_closed';
  }
};

dropdownSelectElement.addEventListener('click', () => { // drop-open listener
  const dropList = document.querySelector('.dropdown__list');
  const dropIco = document.querySelector('.dropdown__arrow');

  if (dropdownSelectElement.dataset.open === 'false') {
    dropdownSelectElement.setAttribute('data-open', 'true');
    dropIco.style = 'transform: rotate(-180deg);';
  } else {
    dropdownSelectElement.setAttribute('data-open', 'false');
    dropIco.style = 'transform: rotate(0deg);';
  }

  dropList.className = dropLouver(dropdownSelectElement.dataset.open);
});

const dropListParent = document.querySelector('.dropdown__list');

dropListParent.addEventListener('click', (event) => { // make choice listener
  const dropIco = document.querySelector('.dropdown__arrow');

  if (event.target.className === 'dropdown__item') {
    const dropItem = event.target;
    const dropDescription = document.querySelector('.description');

    // dropListParent - перебираю нащадків, у пошуках актуального, й вішаю йому сірий клас

    dropdownSelectElement.setAttribute('data-open', 'false');
    dropIco.style = 'transform: rotate(0deg);';
    dropListParent.className = dropLouver(dropdownSelectElement.dataset.open);
    dropdownSelectShow(event.target.dataset.dropdownvalue);

    // block active select:
    /*
    for (const i of [...dropListParent.children]) { // find active element
      if (i === dropItem) {
        i.classList.add('dropdown__item_active');
      }

      if (
        i !== dropItem && i.classList.contains('dropdown__item_active')
      ) {
        i.classList.remove('dropdown__item_active');
      }
    }
    */

    // open select drop-menu
    const dropOpen = (activeDrop, arrow, title, isOpen) => { // add/remove active class
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

    for (const element of [...dropDescription.children]) {
      const arrow = element.firstElementChild;
      const title = element.children[1];

      if (
        element.children[1].innerText === dropItem.dataset.dropdownvalue // find select drop-element
      ) {
        dropOpen(element, arrow, title, true);
      } else {
        dropOpen(element, arrow, title, false);
      };

      if (dropItem.dataset.dropdownvalue === 'All vacancies') {
        dropOpen(element, arrow, title, true);
      }
    }
  }
});

dropdownSelectShow('All vacancies');
