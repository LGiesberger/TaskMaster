import './Profile.css';
import user_icon from '../../images/user-solid.svg';
import user_thin_icon from '../../images/user-regular.svg';
import envelope_icon from '../../images/envelope-regular.svg';
import calendar_icon from '../../images/calendar-regular.svg';
import eye_icon from '../../images/eye-regular.svg';

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile-header">
        <h4 className="profile-title">Profile field</h4>
      </div>
      <div className="icon-container">
        <img src={user_icon} className="profile-icon" />
      </div>
      <div className="profile-body">
        <ul className="profile-field-list">
          <li className="profile-field-item">
            <img src={user_thin_icon} className="profile-field-icon" />
            <p className="profile-field-text">Lou Giesberger</p>
          </li>
          <li className="profile-field-item">
            <img src={calendar_icon} className="profile-field-icon" />
            <p className="profile-field-text">19-09-1999</p>
          </li>
          <li className="profile-field-item">
            <img src={envelope_icon} className="profile-field-icon" />
            <p className="profile-field-text">lougiesberger@gmail.com</p>
          </li>
          <li className="profile-field-item">
            <img src={eye_icon} className="profile-field-icon" />
            <p className="profile-field-text">loutje55</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
