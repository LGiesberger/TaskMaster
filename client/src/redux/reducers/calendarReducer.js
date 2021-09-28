const calendarReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_DATES':
      return action.payload.concat(state);
    case 'COMPLETE_DATE':
      return [action.date].concat(state);
    default:
      return state;
  }
};

export default calendarReducer;
