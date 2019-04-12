var clock = document.getElementById('contest_timer');
var daysSpan = clock.querySelector('.timer-days').innerHTML;
var hoursSpan = clock.querySelector('.timer-hours').innerHTML;
var minutesSpan = clock.querySelector('.timer-minutes').innerHTML;
var secondsSpan = clock.querySelector('.timer-seconds').innerHTML;

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  console.log(t);
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.timer-days');
  var hoursSpan = clock.querySelector('.timer-hours');
  var minutesSpan = clock.querySelector('.timer-minutes');
  var secondsSpan = clock.querySelector('.timer-seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = 'June 23 2019 23:59:59 GMT+0200';
initializeClock('contest_timer', deadline);