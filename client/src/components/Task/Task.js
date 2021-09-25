import { useDispatch } from 'react-redux';
import {
  changeStatusAction,
  deleteTaskAction,
} from '../../redux/actions/taskActions';
import ellipsisIcon from '../../images/ellipsis-v-solid.svg';
import checkIcon from '../../images/check-solid.svg';
import circleIcon from '../../images/circle-regular.svg';
import trashIcon from '../../images/trash-solid (1).svg';
import { Link } from 'react-router-dom';
import './Task.css';

export default function Task({ task }) {
  const dispatch = useDispatch();

  function handleStatusChange(taskId) {
    dispatch(changeStatusAction(taskId));
  }

  function handleDelete(taskId) {
    dispatch(deleteTaskAction(taskId));
  }

  return (
    <div className="task">
      <div className="left-container">
        <img
          src={task.completed ? checkIcon : circleIcon}
          onClick={() => handleStatusChange(task._id)}
          className="status-icon"
          alt={task.completed ? 'completed icon' : 'not completed icon'}
        />

        <p className="task-title">{task.title}</p>
      </div>
      <div className="right-container">
        <Link
          to={{
            pathname: `/edit/${task._id}`,
            state: {
              title: task.title,
            },
          }}
        >
          <img src={ellipsisIcon} className="dropdown-icon" alt="three dots" />
        </Link>
        <img
          src={trashIcon}
          className="trash-icon"
          alt="delete icon"
          onClick={() => handleDelete(task._id)}
        />
      </div>
    </div>
  );
}
