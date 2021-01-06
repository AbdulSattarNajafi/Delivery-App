$('.owl-carousel').owlCarousel({
  loop:false,
  dots:false,
  autoplay:false,
  margin:12,
  items:1,
});

const currentWeekContainer = document.querySelector('.current-week');
const nextWeekContainer = document.querySelector('.shift-week');
function nextWeek() {
  currentWeekContainer.classList.add('hide-current-week');
  nextWeekContainer.classList.add('show-shift-week');
};
function currentWeek() {
  currentWeekContainer.classList.remove('hide-current-week');
  nextWeekContainer.classList.remove('show-shift-week');
};