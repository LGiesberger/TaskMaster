const taskReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_TASKS':
      return action.payload;
    case 'CREATE_TASK':
      return [action.payload].concat(state); // new task, concatenated with the state arrays
    case 'EDIT_TASK':
      return state.map((task) => ({
        ...task,
        title:
          task._id === action.payload.taskId
            ? action.payload.newTitle
            : task.title,
        date:
          task._id === action.payload.taskId ? action.payload.date : task.date,
      }));
    case 'CHANGE_STATUS':
      return state.map((task) => ({
        ...task,
        completed:
          task._id === action.payload._id ? !task.completed : task.completed,
      })); // invert the task's completed property
    case 'DELETE_TASK':
      return state.filter((task) => task._id !== action.taskId); // return all tasks without the deleted
    default:
      return state;
  }
};

export default taskReducer;
