import { useState } from 'react';
import { loginUser } from '../../api/user-api';
import './Login.css';

export default function Register() {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    loginUser(state);
    setState({
      username: '',
      password: '',
    });
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
    <div className="register">
      <div className="register-content">
        <div className="register-header">
          <h4>Register</h4>
        </div>
        <div className="register-body">
          <form className="register-form" onSubmit={handleSubmit}>
            <label className="register-input-label">Username</label>
            <input
              className="register-input"
              type="text"
              value={state.username}
              onChange={onUsernameChange}
            ></input>
            <label className="register-input-label">password</label>
            <input
              className="register-input"
              type="text"
              value={state.password}
              onChange={onPasswordChange}
            ></input>
            <button className="register-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
