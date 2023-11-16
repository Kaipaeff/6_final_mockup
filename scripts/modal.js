
const modal = document.querySelector('.phone-modal');
const modalBox = document.querySelector('.phone-modal__box');
const showModalBtn = document.querySelector('.control-list__item--phone-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

let isModalOpen = false;

showModalBtn.addEventListener('click', (event) => {
  modal.showModal();
  isModalOpen = true;
  event.stopPropagation();
});

closeModalBtn.addEventListener('click', (event) => {
  modal.close();
  isModalOpen = false;
});

document.addEventListener('click', (event) => {
  if (isModalOpen && !modalBox.contains(event.target)) {
    modal.close();
  }
});