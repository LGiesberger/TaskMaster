const dayInMilliseconds = 86400000;

const dateReducer = (state = new Date(), action) => {
  // Original state will always be the current day
  switch (action.type) {
    case 'NEXT_DATE':
      return new Date(Date.parse(state) + dayInMilliseconds);
    // We return a date string date has the milliseconds timestamp of the current date and we add the amount of milliseconds that are in a full day, making the new date in the state the next day.
    case 'PREVIOUS_DATE':
      return new Date(Date.parse(state) - dayInMilliseconds);
    case 'SELECTED_DATE':
      return action.date;
    default:
      return state;
  }
};

export default dateReducer;
