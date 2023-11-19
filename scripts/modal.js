
const modal = document.querySelector('.modal');
const showModalBtn = document.querySelectorAll('.phone-modalBtn, .feedback-modalBtn, .modal__close-btn');
const overlay = document.querySelector('.header__modal-overlay');
const navToggleCheckbox = document.getElementById('nav__toggle');

const phoneContent = document.querySelector('.phone-content')
const writeContent = document.querySelector('.write-content')

let isModalOpen = false;

// Функция обновления стилей оверлея
function updateOverlayStyles(isOpen) {
  overlay.style.opacity = isOpen ? '1' : '0';
  overlay.style.pointerEvents = isOpen ? 'visiblePainted' : 'none';
}

// Функция переключения видимости модального окна "Показать/Скрыть"
function toggleModal(isOpen) {
  modal.classList.toggle('show', isOpen);
  updateOverlayStyles(isOpen);
  isModalOpen = isOpen;
  navToggleCheckbox.checked = false;
}

// Обработчик клика по кнопкам открытия модального окна
showModalBtn.forEach((el) => {
  el.addEventListener('click', (event) => {
    const isOpenAction = el.classList.contains('phone-modalBtn') || el.classList.contains('feedback-modalBtn');
    const phoneModalBtn = el.classList.contains('phone-modalBtn');
    const writeModalBtn = el.classList.contains('feedback-modalBtn');
    toggleModal(isOpenAction);

    if (phoneModalBtn) {
      showPhoneContent();
    } else if (writeModalBtn) {
      showWriteContent();
    }

    event.stopPropagation();
  });
});

// Функция закрытия модального окна, исходя из типа события
function handleModalClose(event) {
  if (isModalOpen) {
    if (event.type === 'click' && !modal.contains(event.target)) {
      toggleModal(false);
    } else if (event.type === 'keydown' && event.key === 'Escape') {
      event.preventDefault();
      toggleModal(false);
      document.activeElement.blur(); // Убрать фокус с текущего активного элемента
    }
  }
}

function showPhoneContent() {
  phoneContent.style.display = 'block';
  writeContent.style.display = 'none';
}

function showWriteContent() {
  phoneContent.style.display = 'none';
  writeContent.style.display = 'block';
}

// Обработчик клика и кнопки Escape для закрытия модального окна
document.addEventListener('click', handleModalClose);
document.addEventListener('keydown', handleModalClose);

