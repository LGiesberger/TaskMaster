import { getDates, formatMonth, numerifyDate } from '../../utils/dates_helper';
import rightArrowIcon from '../../images/chevron-right-solid.svg';
import leftArrowIcon from '../../images/chevron-left-solid.svg';
import { useEffect, useState } from 'react';
import './Calendar.css';
import { selectDateAction } from '../../redux/actions/dateActions';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Calendar() {
  const date = new Date();
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [dates, setDates] = useState(getDates(month, year));
  const history = useHistory();
  const dispatch = useDispatch();

  function handleClick(date) {
    dispatch(selectDateAction(Number(numerifyDate(date))));
    history.push('/');
  }

  function handleNext() {
    if (month === 11) {
      setYear((prevYear) => prevYear + 1);
      setMonth(0);
    } else setMonth((prevMonth) => prevMonth + 1);
  }

  function handlePrevious() {
    setMonth((prevMonth) => prevMonth - 1);
  }

  useEffect(() => {
    setDates(getDates(month, year));
  }, [month, year]);

  return (
    <div>
      <div className="header">
        <img
          src={leftArrowIcon}
          alt="arrow icon left"
          onClick={handlePrevious}
        />
        <h4 className="header-title">{formatMonth(dates[7])}</h4>
        <img src={rightArrowIcon} alt="arrow icon right" onClick={handleNext} />
      </div>
      <div className="calendar">
        <div className="weekdays">
          <p className="weekday">Mon</p>
          <p className="weekday">Tue</p>
          <p className="weekday">Wed</p>
          <p className="weekday">Thu</p>
          <p className="weekday">Fri</p>
          <p className="weekday">Sat</p>
          <p className="weekday">Sun</p>
        </div>
        <div className="month">
          {dates.map((date) => {
            return (
              <button
                key={numerifyDate(date)}
                className={
                  date.getDate() === new Date().getDate() &&
                  date.getMonth() === new Date().getMonth()
                    ? date.className + ' today'
                    : date.className
                }
                onClick={() => handleClick(date)}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
