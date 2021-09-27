import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTaskAction } from '../../redux/actions/taskActions';
import { Link } from 'react-router-dom';
import closeIcon from '../../images/5299154331543238955.svg';
import './EditPage.css';
import { useHistory, useLocation, useParams } from 'react-router';
import { transformDateForInput } from '../../utils/utils';

export default function EditPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { taskId } = useParams();
  const { originalTitle, originalDate } = location.state;
  const formattedDate = transformDateForInput(originalDate);
  const [state, setState] = useState({
    taskId,
    title: originalTitle,
    date: formattedDate,
  });

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(editTaskAction(state));
    history.push('/');
  }

  return (
    <div className="edit">
      <div className="edit-content">
        <div className="edit-header">
          <h4 className="edit-title">Edit Task</h4>
          <Link to="/">
            <img src={closeIcon} className="close-icon" alt="close icon" />
          </Link>
        </div>
        <div className="edit-body">
          <form className="edit-form" onSubmit={handleSubmit}>
            <label className="edit-input-label">What are you planning?</label>
            <textarea
              onChange={({ target }) =>
                setState((prevState) => {
                  return { ...prevState, title: target.value };
                })
              }
              className="edit-input"
              value={state.title}
            />
            <label>When are you planning to do this?</label>
            <input
              className="edit-input"
              type="datetime-local"
              value={state.date}
              onChange={({ target }) => {
                setState((prevState) => {
                  return { ...prevState, date: target.value };
                });
              }}
            />
            <button className="edit-button" type="submit">
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
