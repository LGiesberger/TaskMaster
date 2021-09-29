const ongoingReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_TASKS':
      return action.payload.filter((task) => {
        return task.completed === false;
      }); // return all tasks with false completed status
    case 'CHANGE_STATUS':
      return state.map((task) => ({
        ...task,
        completed:
          task._id === action.payload._id ? !task.completed : task.completed,
      }));
    case 'DELETE_TASK':
      return state.filter((task) => task._id !== action.taskId); // return all tasks without the deleted
    default:
      return state;
  }
};

export default ongoingReducer;
