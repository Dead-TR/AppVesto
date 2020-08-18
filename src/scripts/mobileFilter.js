'use strict';

let amountState = 0;
const checkedLevels = [];
const filter = document.querySelector('.mobile-filter');

filter.addEventListener('click', (event) => {
  const filterList = document.querySelector('.mobile-filter__list');

  if (event.target.className === 'mobile-filter__img') { // open filter list

    filterList.classList.toggle('mobile-filter__list_open');
  }

  if (event.target.closest('.mobile-filter__item')) { // checked/unchecked
    const amountItem = document.querySelector('.mobile-filter__amount'); // counter
    const filterItem = event.target.closest('.mobile-filter__item');
    const filterItemChild = [...filterItem.children];

    filterItemChild[0].checked = (!filterItemChild[0].checked);

    if (filterItemChild[0].checked) {
      filterItemChild[1].classList.add('mobile-filter__replace_check');
      filterItemChild[1].innerText = '✓';
      amountItem.innerText = `${++amountState}`;

      if (checkedLevels.indexOf(filterItemChild[0].value) === -1) {
        checkedLevels.push(filterItemChild[0].value);
      };
    } else {
      filterItemChild[1].classList.remove('mobile-filter__replace_check');
      filterItemChild[1].innerText = '';
      amountItem.innerText = `${--amountState} `;
      checkedLevels.splice(checkedLevels.indexOf(filterItemChild[0].value), 1);
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
      checkedLevels.splice(0, checkedLevels.length);
      event.target.classList.remove('mobile-filter__amount_show');
    }
  }

  const vacancy = document.querySelector('.description');

  for (const vacancyElement of [...vacancy.children]) {
    if (checkedLevels.length === 0) {
      vacancyElement.style = 'display: block;';
    } else if (checkedLevels.indexOf(vacancyElement.dataset.level) < 0) {
      vacancyElement.style = 'display: none;';
    } else {
      vacancyElement.style = 'display: block;';
    }
  }
  console.log("checkedLevels", checkedLevels)
});
