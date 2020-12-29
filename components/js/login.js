
function gettime() {
  const hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let day = new Date();
  let hour = day.getHours();
  let minute = day.getMinutes();
  //Formating the time
  function format(item) {
    if(item < 10) {
      return `0${item}`;
    }else{
      return item;
    }
  };
  hours.textContent = format(hour);
  minutes.textContent = format(minute);
}
setInterval(gettime, 1000);
gettime();

function greetinText() {
  let greeting;
  let time = new Date().getHours();
  if (time < 12) {
    greeting = "Morning";
  } else if (time < 17) {
    greeting = "Afternoon";
  } else if(time < 20) {
    greeting = "Evening";
  }else{
    greeting = "Night";
  }
  document.getElementById("greeting").innerHTML = greeting;
};
greetinText();