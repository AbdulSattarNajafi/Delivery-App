$('.owl-carousel').owlCarousel({
  autoWidth:true,
  loop:true,
  dots:false,
  autoplay:false,
  margin:7,
  items:7,
});
//Weekly Earnings
const weekly = [{
  week:38,
  basicPay: "Basic Pay (40 hrs)",
  basicAmount: "£400",
  bonus: 'Bonus',
  bonusAmount: '£100',
  insurance: 'Less:  Insurance',
  insuranceAmount: '-£80',
  deducation: 'Deduction',
  deducationAmount: '-£70',
  total: '£400'
},
{
  week:39,
  basicPay: "Basic Pay (300 hrs)",
  basicAmount: "£300",
  bonus: 'Bonus',
  bonusAmount: '£10',
  insurance: 'Less:  Insurance',
  insuranceAmount: '-£50',
  deducation: 'Deduction',
  deducationAmount: '-£40',
  total: '£260'
},
{
  week:40,
  basicPay: "Basic Pay (30 hrs)",
  basicAmount: "£300",
  bonus: 'Bonus',
  bonusAmount: '£10',
  insurance: 'Less:  Insurance',
  insuranceAmount: '-£50',
  deducation: 'Deduction',
  deducationAmount: '-£40',
  total: '£260'
},
{
  week:41,
  basicPay: "Basic Pay (38 hrs)",
  basicAmount: "£380",
  bonus: 'Bonus',
  bonusAmount: '£40',
  insurance: 'Less:  Insurance',
  insuranceAmount: '-£80',
  deducation: 'Deduction',
  deducationAmount: '-£70',
  total: '£360'
},
{
  week:42,
  basicPay: "Basic Pay (40 hrs)",
  basicAmount: "£400",
  bonus: 'Bonus',
  bonusAmount: '£100',
  insurance: 'Less:  Insurance',
  insuranceAmount: '-£80',
  deducation: 'Deduction',
  deducationAmount: '-£70',
  total: '£400'
},
{
  week:43,
  basicPay: "Basic Pay (30 hrs)",
  basicAmount: "£300",
  bonus: 'Bonus',
  bonusAmount: '£10',
  insurance: 'Less:  Insurance',
  insuranceAmount: '-£50',
  deducation: 'Deduction',
  deducationAmount: '-£40',
  total: '£260'
},
{
  week:44,
  basicPay: "Basic Pay (40 hrs)",
  basicAmount: "£400",
  bonus: 'Bonus',
  bonusAmount: '£100',
  insurance: 'Less:  Insurance',
  insuranceAmount: '-£80',
  deducation: 'Deduction',
  deducationAmount: '-£70',
  total: '£400'
},
{
  week:45,
  basicPay: "Basic Pay (38 hrs)",
  basicAmount: "£380",
  bonus: 'Bonus',
  bonusAmount: '£40',
  insurance: 'Less:  Insurance',
  insuranceAmount: '-£80',
  deducation: 'Deduction',
  deducationAmount: '-£70',
  total: '£360'
},
{
  week:46,
  basicPay: "Basic Pay (30 hrs)",
  basicAmount: "£300",
  bonus: 'Bonus',
  bonusAmount: '£10',
  insurance: 'Less:  Insurance',
  insuranceAmount: '-£50',
  deducation: 'Deduction',
  deducationAmount: '-£40',
  total: '£260'
}
];

const dailyBtn = document.querySelector('#daily');
const weeklyBtn = document.querySelector('#weekly');
const dailyContainer = document.querySelector('.daily-earning');
const weeklyContainer = document.querySelector('.weekly-earning');

dailyBtn.addEventListener('click', () => {
  weeklyBtn.classList.remove('active');
  dailyBtn.classList.add('active');
  weeklyContainer.style.display = 'none';
  dailyContainer.style.display = 'block';
});

weeklyBtn.addEventListener('click', () => {
  dailyBtn.classList.remove('active');
  weeklyBtn.classList.add('active');
  dailyContainer.style.display = 'none';
  weeklyContainer.style.display = 'block';
});