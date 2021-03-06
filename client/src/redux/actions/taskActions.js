import {
  getAllTasksForDay,
  createTask,
  deleteTask,
  setTaskCompletedProp,
  editTask,
  getAllTasks,
} from '../../api/task-api';

export const getAllTasksAction = () => {
  return async (dispatch) => {
    const tasks = await getAllTasks();
    dispatch({ type: 'GET_ALL_TASKS', payload: tasks });
  };
};

export const getAllTasksForDayAction = (numericalDate) => {
  return async (dispatch) => {
    const tasks = await getAllTasksForDay(numericalDate);
    dispatch({
      type: 'GET_ALL_TASKS_FOR_DAY',
      payload: tasks,
    });
  };
};

export const createTaskAction = ({ title, date }) => {
  return async (dispatch) => {
    const task = await createTask(title, date);
    dispatch({
      type: 'CREATE_TASK',
      payload: task,
    });
  };
};

export const editTaskAction = ({ taskId, title, date }) => {
  return async (dispatch) => {
    await editTask(taskId, title, date);
    dispatch({
      type: 'EDIT_TASK',
      payload: { taskId, title, date },
    });
  };
};

export const changeStatusAction = (taskId) => {
  return async (dispatch) => {
    const task = await setTaskCompletedProp(taskId);
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
