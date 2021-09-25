const taskReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_TASKS':
      return action.payload;
    case 'ADD_TASK':
      return [action.payload].concat(state);
    case 'EDIT_TASK':
      return state.map((task) => ({
        ...task,
        title:
          task.id === action.payload.taskId
            ? action.payload.newTitle
            : task.title,
      }));
    case 'CHANGE_STATUS':
      return state.map((task) => ({
        ...task,
        completed:
          task.id === action.payload._id ? !task.completed : task.completed,
      }));
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.taskId);
    default:
      return state;
  }
};

export default taskReducer;
