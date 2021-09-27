import {
  getAllTasksForDay,
  createTask,
  deleteTask,
  setCompletedProp,
  editTask,
} from '../../api/api';

export const getAllTasksAction = (numericalDate) => {
  console.log('yo');
  return async (dispatch) => {
    const tasks = await getAllTasksForDay(numericalDate);
    dispatch({
      type: 'GET_ALL_TASKS',
      payload: tasks,
    });
  };
};

export const addTaskAction = ({ title, date }) => {
  return async (dispatch) => {
    const task = await createTask(title, date);
    dispatch({
      type: 'ADD_TASK',
      payload: task,
    });
  };
};

export const editTaskAction = (taskId, newTitle, date) => {
  return async (dispatch) => {
    await editTask(taskId, newTitle, date);
    dispatch({
      type: 'EDIT_TASK',
      payload: { taskId, newTitle, date },
    });
  };
};

export const changeStatusAction = (taskId) => {
  return async (dispatch) => {
    const task = await setCompletedProp(taskId);
    dispatch({
      type: 'CHANGE_STATUS',
      payload: task,
    });
  };
};

export const deleteTaskAction = (taskId) => {
  return async (dispatch) => {
    await deleteTask(taskId);
    dispatch({
      type: 'DELETE_TASK',
      taskId,
    });
  };
};
