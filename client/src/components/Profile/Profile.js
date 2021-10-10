import './Profile.css';
import user_icon from '../../images/user-solid.svg';
import user_thin_icon from '../../images/user-regular.svg';
import envelope_icon from '../../images/envelope-regular.svg';
import calendar_icon from '../../images/calendar-regular.svg';
import eye_icon from '../../images/eye-regular.svg';
import { useSelector } from 'react-redux';
import moment from 'moment';

export default function Profile() {
  const { status, user } = useSelector((state) => state.userReducer);
  if (status) console.log(user);
  return (
    <div className="profile">
      <div className="profile-header">
        <h4 className="profile-title">{user.firstName}</h4>
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
          <li className="profile-field-item">
            <img
              alt="password icon"
              src={eye_icon}
              className="profile-field-icon"
            />
            <p className="profile-field-text">{user.password}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
