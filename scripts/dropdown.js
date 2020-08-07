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
    dropdownSelectElement.setAttribute('data-open', 'false');
    dropIco.style = 'transform: rotate(0deg);';
    dropListParent.className = dropLouver(dropdownSelectElement.dataset.open);
    dropdownSelectShow(event.target.dataset.dropdownvalue);
  }
});

dropdownSelectShow('1');
