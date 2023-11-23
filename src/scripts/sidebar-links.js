
const navToggle = document.getElementById('nav__toggle');
const sidebarOverlay = document.getElementById('nav__sidebar-overlay');

sidebarOverlay.addEventListener('click', () => {
  navToggle.checked = false;
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    navToggle.checked = false;
  }
})