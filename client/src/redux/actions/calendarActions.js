export const getAllDatesAction = (month) => {
  return async (dispatch) => {
    const dates = await getAllDates(month);
    dispatch({ type: 'GET_DATES', payload: dates });
  };
};

export const completeDateAction = (numericalDate) => {
  return async (dispatch) => {
    const date = await completeDate(numericalDate);
    dispatch({ type: 'COMPLETE_DATE', payload: date });
  };
};