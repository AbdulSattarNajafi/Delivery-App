$('.owl-carousel').owlCarousel({
  autoWidth:true,
  loop:false,
  dots:false,
  autoplay:false,
  margin:7,
  items:7,
});
//Weekly Earnings
const dailyBtn = document.querySelector('#daily');
const weeklyBtn = document.querySelector('#weekly');
const graphBtn = document.querySelector('#graph-btn');
const bdefaultBtn = document.querySelector('#bdefault-btn');
const weeklyEarn = document.querySelector('.earning-desc');
const chartContainer = document.querySelector('.chart-container');
const dailyContainer = document.querySelector('.daily-earning');
const weeklyContainer = document.querySelector('.weekly-earning');

dailyBtn.addEventListener('click', () => {
  weeklyBtn.classList.remove('active');
  dailyBtn.classList.add('active');
  weeklyContainer.style.display = 'none';
  dailyContainer.style.display = 'block';
  chartContainer.style.display = 'none';
});

weeklyBtn.addEventListener('click', () => {
  dailyBtn.classList.remove('active');
  weeklyBtn.classList.add('active');
  dailyContainer.style.display = 'none';
  chartContainer.style.display = 'none';
  weeklyContainer.style.display = 'block';
  weeklyEarn.style.display = 'block';
  graphBtn.style.display = 'block';
  bdefaultBtn.style.display = 'none';
});

graphBtn.addEventListener('click', () => {
  graphBtn.style.display = 'none';
  bdefaultBtn.style.display = 'block';
  weeklyEarn.style.display = 'none';
  chartContainer.style.display = 'block';
});

bdefaultBtn.addEventListener('click', () => {
  graphBtn.style.display = 'block';
  bdefaultBtn.style.display = 'none';
  weeklyEarn.style.display = 'block';
  chartContainer.style.display = 'none';
});