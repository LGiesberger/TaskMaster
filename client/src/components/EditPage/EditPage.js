import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTaskAction } from '../../redux/actions/taskActions';
import { Link } from 'react-router-dom';
import closeIcon from '../../images/5299154331543238955.svg';
import './EditPage.css';
import { useHistory, useLocation, useParams } from 'react-router';

export default function EditPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { taskId } = useParams();
  const { title } = location.state;
  const [newTitle, setNewTitle] = useState(title);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(editTaskAction(taskId, newTitle));
    history.push('/');
  }

  function handleChange({ target }) {
    setNewTitle(target.value);
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
              onChange={handleChange}
              className="edit-input"
              value={newTitle}
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
