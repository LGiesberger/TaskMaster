const ongoingReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_TASKS':
      return action.payload.filter((task) => {
        return task.completed === false;
      });
    default:
      return state;
  }
};

export default ongoingReducer;
