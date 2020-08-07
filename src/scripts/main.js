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

// drop-description: about vacations
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

// file download
const fileInput = document.querySelector('#userSummary');

fileInput.addEventListener('change', () => {
  const fileLabel = document.querySelector('.e-form__file-label');

  fileLabel.lastElementChild.innerText = 'Ready to send';
});

// Dropdown-menu
const dropdownSelectElement = document.querySelector('.dropdown__select');

const dropdownSelectShow = (value) => { // rerender dropdown-select
  const dropList = [...document.querySelector('.dropdown__list').children];

  for (const dropUnit of dropList) {
    if (dropUnit.dataset.dropdownvalue === value) {
      dropdownSelectElement.setAttribute('data-dropdownValue', `${value}`)
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

// Filter
let amountState = 0;
const filter = document.querySelector('.mobile-filter');

filter.addEventListener('click', (event)=> {

  if (event.target.className === 'mobile-filter__img') { // open filter list
    const filterList = document.querySelector('.mobile-filter__list');

    filterList.classList.toggle('mobile-filter__list_open');
  }

  if (event.target.closest('.mobile-filter__item')) { // checked/unchecked
    const amountItem = document.querySelector('.mobile-filter__amount');
    const filterItem = event.target.closest('.mobile-filter__item');
    const filterItemChild = [...filterItem.children];

    filterItemChild[0].checked = (!filterItemChild[0].checked);

    if (filterItemChild[0].checked) {
      filterItemChild[1].classList.add('mobile-filter__replace_check');
      filterItemChild[1].innerText = '✓';
      amountItem.innerText = `${++amountState}`;
    } else {
      filterItemChild[1].classList.remove('mobile-filter__replace_check');
      filterItemChild[1].innerText = '';
      amountItem.innerText = `${--amountState} `;
    }

    if (amountState > 0) {
      amountItem.classList.add('mobile-filter__amount_show');
    } else {
      amountItem.classList.remove('mobile-filter__amount_show');
    }
  }

  if (event.target.classList.contains('mobile-filter__amount')) { // unchecked all
    const filterList = [
      ...document.querySelector('.mobile-filter__list').children,
    ];

    for (const listItem of filterList) {
      const filterItemChild = [...listItem.children];

      filterItemChild[0].checked = false;
      filterItemChild[1].innerText = '';
      filterItemChild[1].classList.remove('mobile-filter__replace_check');
      amountState = 0;
      event.target.classList.remove('mobile-filter__amount_show');
    }
  }
});

// mobile main menu:
const buttonSlideMenu = document.querySelector('.header__button-side-menu');

buttonSlideMenu.addEventListener('click', () => {
  const mobileNav = document.querySelector('.mobile-content');

  buttonSlideMenu.classList.toggle('header__button-side-menu_flipped');
  mobileNav.classList.toggle('mobile-content_hide');
});

// General functions:
dropdownSelectShow('1'); // first render dropdown-select element
