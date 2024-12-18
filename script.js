const $calendar = document.querySelector('.calendar');
const $frontPage = $calendar.querySelector('.front');
const $backRightPage = $calendar.querySelector('.back-right');
const $backLeftPage = $calendar.querySelector('.back-left');

const $front = {
  month: $frontPage.querySelector('.month'),
  bigDate: $frontPage.querySelector('.big-date'),
  dayOfWeek: $frontPage.querySelector('.day-of-week'),
  year: $frontPage.querySelector('.year'),
  minute: $frontPage.querySelector('.minute'),
  smallDate: $frontPage.querySelector('.small-date'),
};

const $backRight = {
  second: $backRightPage.querySelector('.second'),
  month: $backRightPage.querySelector('.month'),
};

const $backLeft = {
  hour: $backLeftPage.querySelector('.hour'),
  dayOfWeek: $backLeftPage.querySelector('.day-of-week'),
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const dayOfWeeks = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

let now = new Date();

setInterval(() => {
  const now = new Date();
  const month = now.getMonth();
  const date = now.getDate();
  const dayOfWeek = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const year = now.getFullYear();

  let seconds = now.getSeconds();

  $front.month.innerHTML = months[month];
  $front.bigDate.innerHTML = date;
  $front.dayOfWeek.innerHTML = dayOfWeeks[dayOfWeek];
  $front.minute.innerHTML = minute;
  $front.year.innerHTML = year;
  $front.smallDate.innerHTML = date;

  if (seconds >= 1 && seconds <= 9) {
    seconds = '0' + seconds;
  }

  $backRight.second.innerHTML = seconds;
  $backRight.month.innerHTML = months[month];
  $backLeft.hour.innerHTML = hour;
  $backLeft.dayOfWeek.innerHTML = dayOfWeeks[dayOfWeek];
}, 1000);

$calendar.addEventListener('mousedown', () => {
  $calendar.classList.add('full');
});

$calendar.addEventListener('touchstart', () => {
  $calendar.classList.add('full');
});

$calendar.addEventListener('mouseup', () => {
  $calendar.classList.remove('full');
});
