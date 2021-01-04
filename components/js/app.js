let height = document.documentElement.getBoundingClientRect().height;

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function() {
  menu.classList.toggle('show-menu');
  menu.style.height = `${height}px`;
});

function closeMenu() {
  menu.classList.remove('show-menu');
  menu.style.height = '100%';
};

//Menu links
const linkBtns = document.querySelectorAll('.menu-up');
const linksContainer = document.querySelectorAll('.menu-links-links');

linkBtns.forEach((linkBtn) => {
  linkBtn.addEventListener('click', (e) => {
    let currentContainer = e.currentTarget.parentElement.parentElement;
    currentContainer.classList.toggle('show-links');
  })
});

function instruction() {
  const instructionContainer = document.querySelector('.instruction-desc');
  const upBtn = document.querySelector('.hide');
  const downBtn = document.querySelector('.show');
  instructionContainer.classList.toggle('show-instruction')
  upBtn.classList.toggle('show-icon');
  downBtn.classList.toggle('hide-icon');
  
};