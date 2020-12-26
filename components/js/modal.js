
const viewModal = document.querySelector('.view-modal');
const closeBtn = document.querySelector('#close-modal');
let modalContainer = document.querySelector('.qr-modal');

viewModal.addEventListener('click', () => {
  modalContainer.style.display = 'flex';
});
closeBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});
