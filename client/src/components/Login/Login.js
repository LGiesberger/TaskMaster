import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginAction } from '../../redux/actions/userActions';
import './Login.css';

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(loginAction(state));
    setState({
      username: '',
      password: '',
    });
    history.push('/calendar');
  }

  function onUsernameChange({ target }) {
    setState((prevState) => ({
      ...prevState,
      username: target.value,
    }));
  }

  function onPasswordChange({ target }) {
    setState((prevState) => ({
      ...prevState,
      password: target.value,
    }));
  }

  return (
    <div className="login">
      <div className="login-content">
        <div className="login-header">
          <h4>Login</h4>
        </div>
        <div className="login-body">
          <form className="login-form" onSubmit={handleSubmit}>
            <label className="login-input-label">Username</label>
            <input
              className="login-input"
              type="text"
              value={state.username}
              onChange={onUsernameChange}
            ></input>
            <label className="login-input-label">password</label>
            <input
              className="login-input"
              type="password"
              value={state.password}
              onChange={onPasswordChange}
            ></input>
            <button className="login-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
