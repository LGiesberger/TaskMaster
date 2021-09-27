export default function transformDateForInput(dateISO) {
  const hourInMilliseconds = 3600000;
  const timezoneOffset = new Date().getTimezoneOffset();
  const offsetInHours = -timezoneOffset / 60;

  return new Date(Date.parse(dateISO) + offsetInHours * hourInMilliseconds)
    .toISOString()
    .slice(0, -8);
}

// Dates are a tricky topic, hency why I'm choosing to not mess around with them too much, this function formats the dates in a way that will allow me to set the default value for the input fields on the creation and edit pages, including the correct timezoneOffset.
