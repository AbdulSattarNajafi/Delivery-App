//For Swipping the main Content
function swipe(event) {
  const sliderBox1 = document.querySelector('.manager-1');
  const driverName = document.querySelector('#driver-name');
  const userIdentity = document.querySelector('#user-identity')
  const driverImg = document.querySelector('.driver-img');
  const logoText = document.querySelector('#logo-text');
  let touch = event.targetTouches[0];
  let px = touch.pageX;

  let midPoint = Math.floor(screen.width / 2);

  if(px < midPoint) {
    sliderBox1.style.marginLeft = '-100%';
    sliderBox1.style.transition = '0.3s';
    driverImg.style.display = 'none';
    logoText.style.display = 'flex';
    driverName.textContent = 'Calling All Drivers';
    userIdentity.style.visibility = 'hidden';
  }else{
    sliderBox1.style.marginLeft = '0px';
    driverName.textContent = 'Adam Sandler';
    driverImg.style.display = 'block';
    logoText.style.display = 'none';
    sliderBox1.style.transition = '0.3s';
    userIdentity.style.visibility = 'visible';
  }
}
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
