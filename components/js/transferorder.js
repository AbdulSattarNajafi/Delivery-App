//Selecting the DOM element
const cardBgContainer = document.querySelector('.card-bg');
const instructions = document.querySelector('.instruction');
const transferTitle = document.querySelector('.transfer-title');
const overlay = document.querySelector('.overlay');
const closeTopBtnContainer = document.querySelector('.close-card-bg');
const cancelBtn = document.querySelector('#cancel-btn');
const cardBg = document.querySelector('.card-bg-container');

let cards = document.querySelectorAll('.transfer-card');
let selectBtns = document.querySelectorAll('.select-btn');
let cardFooters = document.querySelectorAll('.card-footer');
let carBgContainers = document.querySelectorAll('.card-bg-container');

//Getting the Height of the CardBg
let cardBgHeight = cardBg.clientHeight;

  window.addEventListener('DOMContentLoaded', function() {
    cardBg.style.height = 0;
  });
//Show the Background of Card
selectBtns.forEach(function(selectBtn) {
   selectBtn.addEventListener('click',function(elem) {
     let currentFooter = elem.currentTarget.parentElement;
     let currentCard = elem.currentTarget.parentElement.parentElement;
     cards.forEach(function(card) {
       if(card == currentCard) {
         card.classList.remove('hide-card');
       }else{
         card.classList.add('hide-card')
       }
       cardBgContainer.classList.add('show-card-bg');
       overlay.classList.add('show-overlay');
     });
     cardFooters.forEach(function(cardFooter) {
       if(currentFooter == cardFooter) {
        cardFooter.classList.add('hide-footer');
       }else{
         cardFooter.classList.remove('hide-footer');
       }
     })
     instructions.style.display = 'none';
     transferTitle.style.display = 'none';
     cardBg.style.height = `${cardBgHeight}px`;
     closeTopBtnContainer.style.display = 'block';
  })
});

//Back to Normal
cancelBtn.addEventListener('click', function() {
  backToNoraml();
});

//Back to noraml function
function backToNoraml() {
  cards.forEach(function(card) {
    card.classList.remove('hide-card');
    cardBgContainer.classList.remove('show-card-bg');
    overlay.classList.remove('show-overlay');
  });
  instructions.style.display = 'block';
  transferTitle.style.display = 'block';
  cardBg.style.height = `0px`;
  closeTopBtnContainer.style.display = 'none';
};
