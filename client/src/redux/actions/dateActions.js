import { getAllTasksForDay } from '../../api/task-api';
import { numericDateToISODate } from '../../utils/dates_helper';

export const nextDayAction = (numericalDate) => {
  return async (dispatch) => {
    const tasks = await getAllTasksForDay(numericalDate);
    dispatch({ type: 'NEXT_DATE', payload: tasks });
  };
};
export const previousDayAction = (numericalDate) => {
  return async (dispatch) => {
    const tasks = await getAllTasksForDay(numericalDate);
    dispatch({ type: 'PREVIOUS_DATE', payload: tasks });
  };
};
export const selectDateAction = (numericalDate) => {
  return async (dispatch) => {
    const tasks = await getAllTasksForDay(numericalDate);
    dispatch({
      type: 'SELECTED_DATE',
      payload: tasks,
      date: numericDateToISODate(numericalDate),
    });
  };
};
