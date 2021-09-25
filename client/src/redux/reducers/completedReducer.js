const completedReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_TASKS':
      return action.payload.filter((task) => {
        return task.completed === true;
      });
    default:
      return state;
  }
};

export default completedReducer;
