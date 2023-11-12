// const inputs = document.querySelectorAll('input[name="sidebar-tabs"]');
// const sidebar = document.querySelector('.nav__sidebar');
// const navToggle = document.getElementById('nav__toggle');



// inputs.forEach((input) => {
//   input.addEventListener('change', () => {
//     if (input.checked) {
//       sidebar.style.transform = 'translateX(-350px)';
//       navToggle.checked = false;
//       // window.location.href = '#services-section';
//     }
//   });
// });

const navToggle = document.getElementById('nav__toggle');
const sidebarOverlay = document.getElementById('nav__sidebar-overlay');

sidebarOverlay.addEventListener('click', () => {
  navToggle.checked = false;
})