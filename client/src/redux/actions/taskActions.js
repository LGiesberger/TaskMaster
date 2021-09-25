import {
  getAllTasksForDay,
  createTask,
  deleteTask,
  setCompletedProp,
  editTask,
} from '../../api/api';

export const getAllTasksAction = (numericalDate) => {
  return async (dispatch) => {
    const tasks = await getAllTasksForDay(numericalDate);
    dispatch({
      type: 'GET_ALL_TASKS',
      payload: tasks,
    });
  };
};

export const addTaskAction = (title) => {
  return async (dispatch) => {
    const task = await createTask(title);
    dispatch({
      type: 'ADD_TASK',
      payload: task,
    });
  };
};

export const editTaskAction = (taskId, newTitle) => {
  return async (dispatch) => {
    await editTask(taskId, newTitle);
    dispatch({
      type: 'EDIT_TASK',
      payload: { taskId, newTitle },
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
