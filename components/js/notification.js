const contactBtn = document.querySelector('#contact-btn');
const closeFormtBtn = document.querySelector('#close-form-btn');

const contactManagerForm = document.querySelector('.contact-manager-form');
const whiteLayer = document.querySelector('.white-layer');
const darkLayer = document.querySelector('.dark-layer');

contactBtn.addEventListener('click', () => {
  displayContactForm();
});

closeFormtBtn.addEventListener('click', () => {
    backToNoraml();
});

function displayContactForm () {
  contactManagerForm.classList.add('show-contact-form');
  whiteLayer.classList.add('show-contact-form');
  darkLayer.classList.add('show-contact-form');
};

function backToNoraml() {
  contactManagerForm.classList.remove('show-contact-form');
  whiteLayer.classList.remove('show-contact-form');
  darkLayer.classList.remove('show-contact-form');
};
//Opening the Notification page from other Pages
