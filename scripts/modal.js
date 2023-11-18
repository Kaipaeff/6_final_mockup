
const modal = document.querySelector('.modal');
const showModalBtn = document.querySelectorAll('.phone-modalBtn, .modal__close-btn, .feedback-modalBtn');
const overlay = document.querySelector('.header__modal-overlay');
const navToggleCheckbox = document.getElementById('nav__toggle');

let isModalOpen = false;

// Функция обновления стилей оверлея
function updateOverlayStyles(isOpen) {
  overlay.style.opacity = isOpen ? '1' : '0';
  overlay.style.pointerEvents = isOpen ? 'visiblePainted' : 'none';
}

// Функция переключения модального окна
function toggleModal(isOpen) {
  modal.classList.toggle('show', isOpen);
  updateOverlayStyles(isOpen);
  isModalOpen = isOpen;
  navToggleCheckbox.checked = false;
}

// Обработчик клика по кнопкам открытия модального окна
showModalBtn.forEach((el) => {
  const isOpenAction = el.classList.contains('phone-modalBtn') || el.classList.contains('feedback-modalBtn');
  el.addEventListener('click', (event) => {
    toggleModal(isOpenAction);
    event.stopPropagation();
  });
});

// Обработчик клика на документе для закрытия модального окна
document.addEventListener('click', (event) => {
  if (isModalOpen && !modal.contains(event.target)) {
    toggleModal(false);
  }
});

// Обработчик нажатия клавиши Escape при открытом модальном окне для его закрытия
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && isModalOpen) {
    event.preventDefault();
    toggleModal(false);
  }
})

