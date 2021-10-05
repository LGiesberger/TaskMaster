export default function setAuthenticatedAction(status) {
  return async (dispatch) => {
    dispatch({ type: 'IS_AUTHENTICATED', status });
  };
}
