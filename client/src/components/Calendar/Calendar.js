import { getDates, formatMonth } from '../../utils/utils';
import rightArrowIcon from '../../images/chevron-right-solid.svg';
import leftArrowIcon from '../../images/chevron-left-solid.svg';
import { useEffect, useState } from 'react';
import './Calendar.css';
import { useDispatch } from 'react-redux';
import { getAllDatesAction } from '../../redux/actions/calendarActions';

export default function CalendarPage() {
  const dispatch = useDispatch();
  const date = new Date();
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [dates, setDates] = useState(
    month === 11
      ? getDates(new Date(year, month, 1), new Date(year + 1, 0, 0))
      : getDates(new Date(year, month, 1), new Date(year, month + 1, 0))
  );

  function handleClick(date) {
    console.log(date);
    // Button click functionality
  }

  useEffect(() => {
    dispatch(getAllDatesAction(month));
  }, []);

  return (
    <div>
      <div className="header">
        <img src={leftArrowIcon} alt="arrow icon left" />
        <h4 className="header-title">{formatMonth(date)}</h4>
        <img src={rightArrowIcon} alt="arrow icon right" />
      </div>
      <div className="calendar">
        <div className="month">
          {dates.map((date) => {
            return (
              <button
                key={date.getDate()}
                className="calendar-tile"
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
