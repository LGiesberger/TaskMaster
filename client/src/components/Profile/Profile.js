import './Profile.css';
import user_icon from '../../images/user-solid.svg';
import user_thin_icon from '../../images/user-regular.svg';
import envelope_icon from '../../images/envelope-regular.svg';
import calendar_icon from '../../images/calendar-regular.svg';
import card_icon from '../../images/id-card-regular.svg';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useEffect } from 'react';
import { getAllTasksAction } from '../../redux/actions/taskActions';

export default function Profile() {
  const { status, user } = useSelector((state) => state.userReducer);
  const tasks = useSelector((state) => state.taskReducer);
  const dispatch = useDispatch();
  if (status) console.log(user);

  useEffect(() => {
    dispatch(getAllTasksAction());
  }, [dispatch]);
  return (
    <div className="profile">
      <div className="profile-header">
        <h4 className="profile-title">{user.name}</h4>
      </div>
      <div className="icon-container">
        <img alt="usericon" src={user_icon} className="profile-icon" />
      </div>
      <div className="profile-body">
        <ul className="profile-field-list">
          <li className="profile-field-item">
            <img
              alt="user icon"
              src={user_thin_icon}
              className="profile-field-icon"
            />
            <p className="profile-field-text">{user.username}</p>
          </li>
          <li className="profile-field-item">
            <img
              alt="email icon"
              src={card_icon}
              className="profile-field-icon"
            />
            <p className="profile-field-text">{user.name}</p>
          </li>
          <li className="profile-field-item">
            <img
              alt="date icon"
              src={calendar_icon}
              className="profile-field-icon"
            />
            <p className="profile-field-text">
              {moment(user.birthday).format('DD MMMM YYYY')}
            </p>
          </li>
          <li className="profile-field-item">
            <img
              alt="email icon"
              src={envelope_icon}
              className="profile-field-icon"
            />
            <p className="profile-field-text">{user.email}</p>
          </li>
        </ul>
      </div>
      <div className="button-container">
        <button className="completed-profile button">
          Completed: {tasks.filter((task) => task.completed).length}
        </button>
        <button className="ongoing-profile button">
          Ongoing: {tasks.filter((task) => !task.completed).length}
        </button>
      </div>
    </div>
  );
}
