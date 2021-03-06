import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTaskAction } from '../../redux/actions/taskActions';
import { Link, useHistory } from 'react-router-dom';
import closeIcon from '../../images/5299154331543238955.svg';
import './CreationPage.css';
import {
  checkCurrentDate,
  dateToNumericalDate,
  transformDateForInput,
} from '../../utils/dates_helper';

export default function CreationPage() {
  const numericalDate = useSelector((state) =>
    Number(dateToNumericalDate(state.dateReducer))
  );

  const dispatch = useDispatch();
  const history = useHistory();
  const defaultDateTime = transformDateForInput(
    checkCurrentDate(String(numericalDate))
  );
  const [state, setState] = useState({ title: '', date: defaultDateTime });

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createTaskAction(state));
    history.push('/');
  }

  function handleTitleChange({ target }) {
    setState((prevState) => {
      return { ...prevState, title: target.value };
    });
  }

  function handleDateChange({ target }) {
    setState((prevState) => {
      return { ...prevState, date: target.value };
    });
  }

  return (
    <div className="creation">
      <div className="creation-content">
        <div className="creation-header">
          <h4 className="creation-title">New Task</h4>
          <Link to="/">
            <img src={closeIcon} className="close-icon" alt="close icon"></img>
          </Link>
        </div>
        <div className="creation-body">
          <form className="creation-form" onSubmit={handleSubmit}>
            <label className="creation-input-label">
              What are you planning?
            </label>
            <textarea
              onChange={handleTitleChange}
              className="creation-input"
              value={state.title}
              required
            />
            <label className="creation-input-label">
              When are you planning to do this?
            </label>
            <input
              onChange={handleDateChange}
              type="datetime-local"
              className="creation-input"
              value={state.date}
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
