const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function() {
  menu.classList.add('show-menu');
});

function closeMenu() {
  menu.classList.remove('show-menu');
};