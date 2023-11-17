
const modal = document.querySelector('.modal');
const showModalBtn = document.querySelectorAll('.control-list__item--phone-modal');
const closeModalBtn = document.querySelectorAll('.modal__close-btn');
const overlay = document.querySelector('.header__modal-overlay')
const navToggleIntoModal = document.getElementById('nav__toggle');

let isModalOpen = false;

showModalBtn.forEach((el) => {
  el.addEventListener('click', (event) => {
    modal.classList.add('show');
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'visiblePainted';
    isModalOpen = true;
    navToggleIntoModal.checked = false;
    event.stopPropagation();
  });
})

closeModalBtn.forEach((el) => {
  el.addEventListener('click', (event) => {
    modal.classList.remove('show');
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    isModalOpen = false;
    navToggleIntoModal.checked = false;
    event.stopPropagation();
  });
})

document.addEventListener('click', (event) => {
  if (isModalOpen && !modal.contains(event.target)) {
    modal.classList.remove('show');
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    event.stopPropagation();
  }
});