let darkLayer = document.querySelector('#dark-layer');
let chat = document.querySelector('#chat');
function openChat() {
  darkLayer.style.display = "block";
  chat.style.display = "block";
};
function closeChat() {
  darkLayer.style.display = "none";
  chat.style.display = "none";
};