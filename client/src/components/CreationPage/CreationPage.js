import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaskAction } from '../../redux/actions/taskActions';
import { Link, useHistory } from 'react-router-dom';
import closeIcon from '../../images/5299154331543238955.svg';
import './CreationPage.css';

export default function CreationPage() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addTaskAction(title));
    setTitle('');
    history.push('/');
  }

  function handleChange({ target }) {
    setTitle(target.value);
  }

  return (
    <div className="creation">
      <div className="creation-content">
        <div className="creation-header">
          <h4 className="creation-title">New Task</h4>
          <Link to="/">
            <img src={closeIcon} className="close-icon"></img>
          </Link>
        </div>
        <div className="creation-body">
          <form className="creation-form" onSubmit={handleSubmit}>
            <label className="creation-input-label">
              What are you planning?
            </label>
            <textarea
              onChange={handleChange}
              className="creation-input"
              value={title}
            />
            <button className="creation-button" type="submit">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
