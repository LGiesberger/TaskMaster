import { loginUser, registerUser, persistUser } from '../../api/user-api';
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
    const res = await loginUser(credentials);
    localStorage.setItem('token', res.accessToken);
    dispatch({ type: 'LOGIN', status: res.auth, user: res.user });
    history.push('/');
  };
}

export function logoutAction() {
  return async (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT', status: false });
  };
}

export function persistUserAction() {
  return async (dispatch) => {
    const res = await persistUser();
    dispatch({ type: 'LOGIN', status: res.auth, user: res.user });
  };
}
