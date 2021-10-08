import moment from 'moment';

export function numerifyDate(dateISO) {
  return moment(dateISO).format('YYYYMMDD'); // Example: 20210927
}

export function numericToISO(numericalDate) {
  const string =
    typeof numericalDate === 'number' ? String(numericalDate) : numericalDate;
  return moment(string).format(); // '20210927  --> full date September 21st, 2021'
}

export function prettifyDate(numericalDate) {
  return moment(numericalDate).format('MMMM Do'); // Example: September 27th
}

export function checkCurrentDate(numericalDate) {
  const date = new Date();
  const year = numericalDate.slice(0, 4);
  const month = numericalDate.slice(4, 6) - 1;
  const day = numericalDate.slice(6, 8);
  return numericalDate === numerifyDate(date)
    ? date
    : addTwelveHours(new Date(year, month, day));
}

export function prettifyTime(date) {
  const time = moment(date).format('hh:mm A');
  return (
    <div className="time">
      <p>{time.slice(0, 5)}</p>
      <p>{time.slice(-2)}</p>
    </div>
  );
}
// example:
// 11:30
// AM

export function getDates(month, year) {
  const dates = [];
  const startDate = new Date(year, month, 1);
  const endDate =
    startDate.getMonth === 11 // if month = december
      ? new Date(year + 1, 0, 0) // endDate is the last date of the current year
      : new Date(year, month + 1, 0); // endDate is the last date of the current month
  let first = startDate.getDay() - 1; // get the current day, which returns a 0-based number, 0 being sunday, hency why the variable needs to be subtracted by 1
  let last = endDate.getDay() === 0 ? 0 : 7 - endDate.getDay(); // if getDay() is 0, the last date is a sunday, in which case we don't need any extra dates
  let currentDate = startDate;
  let firstLastDay = startDate;
  let lastLastDay = endDate;

  // Load all dates in a month
  while (currentDate <= endDate) {
    currentDate.className = 'calendar-tile';
    dates.push(currentDate);
    currentDate = addDays.call(currentDate, 1);
  }

  // Load all dates before the first day of the month, based on the number of days
  while (first > 0) {
    firstLastDay = addDays.call(firstLastDay, -1);
    firstLastDay.className = 'calendar-tile other-month';
    dates.unshift(firstLastDay);
    first--;
  }

  // Load all dates after the last day of the month, based on the number of days
  while (last > 0) {
    lastLastDay = addDays.call(lastLastDay, 1);
    lastLastDay.className = 'calendar-tile other-month';
    dates.push(lastLastDay);
    last--;
  }

  return dates;
  // dates is an array of objects between startDate - first and endDate + last
}

export function formatMonth(date) {
  const options = { month: 'long' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
  // example: September
}

function addTwelveHours(date) {
  const twelveHoursInMilliseconds = 1000 * 60 * 60 * 12; // second * minute * hour * 12
  return new Date(Date.parse(date) + twelveHoursInMilliseconds);
}

function addDays(days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

export function transformDateForInput(dateISO) {
  const hourInMilliseconds = 1000 * 60 * 60; // second * minute * hour
  const timezoneOffset = new Date().getTimezoneOffset();
  const offsetInHours = -timezoneOffset / 60; // the negative is there because .getTimezoneOffset() returns a negative number for positive offsets.

  return new Date(Date.parse(dateISO) + offsetInHours * hourInMilliseconds)
    .toISOString()
    .slice(0, -8);
}

// Dates are a tricky topic, hency why I'm choosing to not mess around with them too much, this function formats the dates in a way that will allow me to set the default value for the input fields on the creation and edit pages, including the correct timezoneOffset.
