const userReducer = (state = false, action) => {
  switch (action.type) {
    case 'IS_AUTHENTICATED':
      return action.status;
    default:
      return state;
  }
};

export default userReducer;
