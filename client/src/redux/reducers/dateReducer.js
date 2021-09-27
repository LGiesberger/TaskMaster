import moment from 'moment';

const dateReducer = (state = Number(moment().format('YYYYMMDD')), action) => {
  switch (action.type) {
    case 'NEXT_DATE':
      return () => {};
    case 'PREVIOUS_DATE':
      return action.date - 1;
    case 'SELECTED_DATE':
      return action.date;
    default:
      return state;
  }
};

export default dateReducer;
