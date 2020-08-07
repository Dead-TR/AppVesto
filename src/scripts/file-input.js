'use strict';

const fileInput = document.querySelector('#userSummary');

fileInput.addEventListener('change', () => {
  const fileLabel = document.querySelector('.e-form__file-label');

  fileLabel.lastElementChild.innerText = 'Ready to send';
});
