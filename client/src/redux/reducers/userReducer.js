const userReducer = (state = { status: false, user: {} }, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { status: action.status, user: action.user || {} };
    case 'LOGOUT':
      return { status: action.status, user: {} };
    case 'EDIT_USER':
      return { status: action.status, user: action.user };
    default:
      return state;
  }
};

export default userReducer;
