import moment from 'moment';

export function numerifyDate(dateISO) {
  return moment(dateISO).format('YYYYMMDD'); // Example: 20210927
}

export function numericToISO(numericalDate) {
  const string =
    typeof numericalDate === 'number' ? String(numericalDate) : numericalDate;
  return moment(string).format();
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

export function createFirstAndLastDates(month, year) {
  const gotDates = getDates(month, year);
  const first = gotDates[0].getDay() - 1;
  const last =
    gotDates[gotDates.length - 1].getDay() === 0
      ? 0
      : 7 - gotDates[gotDates.length - 1].getDay();
  return { first, last };
}

export function getDates(month, year, firstAmount, secondAmount) {
  const dates = [];
  const startDate = new Date(year, month, 1);
  const endDate =
    startDate.getMonth === 11
      ? new Date(year + 1, 0, 0)
      : new Date(year, month + 1, 0);
  let currentDate = startDate;
  let firstLastDay = startDate;
  let lastLastDay = endDate;

  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = addDays.call(currentDate, 1);
  }

  while (firstAmount > 0) {
    firstLastDay = addDays.call(firstLastDay, -1);
    dates.unshift(firstLastDay);
    firstAmount--;
  }
  while (secondAmount > 0) {
    lastLastDay = addDays.call(lastLastDay, 1);
    dates.push(lastLastDay);
    secondAmount--;
  }

  return dates;
}

export function formatMonth(date) {
  const options = { month: 'long' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
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
