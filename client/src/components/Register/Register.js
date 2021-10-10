import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { registerAction, logoutAction } from '../../redux/actions/userActions';
import './Register.css';

export default function Register() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    username: '',
    password: '',
    email: '',
    name: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(registerAction(state));
    setState({
      username: '',
      password: '',
      email: '',
      name: '',
      birthday: '',
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

  function onEmailChange({ target }) {
    setState((prevState) => ({
      ...prevState,
      email: target.value,
    }));
  }

  function onNameChange({ target }) {
    setState((prevState) => ({
      ...prevState,
      name: target.value,
    }));
  }

  function onBirthdayChange({ target }) {
    setState((prevState) => ({
      ...prevState,
      birthday: target.value,
    }));
  }

  useEffect(() => {
    dispatch(logoutAction());
  }, [dispatch]);

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
              required
            ></input>
            <label className="register-input-label">password</label>
            <input
              className="register-input"
              type="password"
              value={state.password}
              onChange={onPasswordChange}
              required
            ></input>
            <label className="register-input-label">Email address</label>
            <input
              className="register-input"
              type="email"
              value={state.email}
              onChange={onEmailChange}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            ></input>
            <label className="register-input-label">Birthday</label>
            <input
              className="register-input"
              type="date"
              value={state.birthday}
              onChange={onBirthdayChange}
              required
            ></input>
            <label className="register-input-label">Name</label>
            <input
              className="register-input"
              type="text"
              value={state.name}
              onChange={onNameChange}
              required
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
