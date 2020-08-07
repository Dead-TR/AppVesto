'use strict';

let amountState = 0;
const filter = document.querySelector('.mobile-filter');

filter.addEventListener('click', (event) => {
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
