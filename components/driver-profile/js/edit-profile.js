const showBtn = document.querySelector('.btn-arrow-up');
let nationaInsurance = document.querySelector('.national-insurance');

showBtn.addEventListener('click', () => {
  nationaInsurance.classList.toggle('show-national-insurance');
});