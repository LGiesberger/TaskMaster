import { loginUser, registerUser } from '../../api/user-api';
import history from '../../utils/history';

export function registerAction(credentials) {
  return async (dispatch) => {
    registerUser(credentials).then((res) => {
      localStorage.setItem('token', res.accessToken);
      dispatch({ type: 'LOGIN', status: res.auth, user: res.user });
      history.push('/');
    });
  };
}

export function loginAction(credentials) {
  return async (dispatch) => {
    loginUser(credentials).then((res) => {
      localStorage.setItem('token', res.accessToken);
      dispatch({ type: 'LOGIN', status: res.auth, user: res.user });
      history.push('/');
    });
  };
}

export function logoutAction() {
  return async (dispatch) => {
    localStorage.clear();
    dispatch({ type: 'LOGOUT', status: false });
  };
}
