//functions for Decline
const declineContainer = document.getElementById('decline');
function openDecline() {
  declineContainer.style.display = 'block';
};
function closeDecline() {
  declineContainer.style.display = 'none';
};
//Functions for Reschedule
const reschedule = document.getElementById('reschedule');
function openReschedule() {
  reschedule.style.display = 'block';
};
function closeReschedule() {
  reschedule.style.display = 'none';
};
//Chat
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