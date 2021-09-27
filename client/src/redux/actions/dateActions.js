import { getAllTasksForDay } from '../../api/api';

export const nextDayAction = (numericalDate) => {
  return async (dispatch) => {
    console.log('clicked');
    const tasks = await getAllTasksForDay(numericalDate);
    dispatch({ type: 'NEXT_DATE', payload: tasks, date: numericalDate });
  };
};
export const previousDayAction = (numericalDate) => {
  return async (dispatch) => {
    const tasks = await getAllTasksForDay(numericalDate);
    dispatch({ type: 'PREVIOUS_DATE', payload: tasks, date: numericalDate });
  };
};
export const selectDayAction = (numericalDate) => {
  return async (dispatch) => {
    const tasks = await getAllTasksForDay(numericalDate);
    dispatch({ type: 'SELECTED_DATE', payload: tasks, date: numericalDate });
  };
};
