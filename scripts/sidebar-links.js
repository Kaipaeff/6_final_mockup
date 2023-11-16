
const navToggle = document.getElementById('nav__toggle');
const sidebarOverlay = document.getElementById('nav__sidebar-overlay');

sidebarOverlay.addEventListener('click', () => {
  navToggle.checked = false;
})