import plusSignIcon from '../../images/plus (1).svg';
import rightArrowIcon from '../../images/chevron-right-solid.svg';
import leftArrowIcon from '../../images/chevron-left-solid.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TaskList from '../TaskList/TaskList';
import { getAllTasksForDayAction } from '../../redux/actions/taskActions';
import {
  nextDayAction,
  previousDayAction,
} from '../../redux/actions/dateActions';
import {
  dateToNumericalDate,
  prettifyMonthDate,
} from '../../utils/dates_helper';

export default function App() {
  const dispatch = useDispatch();
  const completedTasks = useSelector((state) => state.completedReducer);
  const ongoingTasks = useSelector((state) => state.ongoingReducer);
  const numericalDate = useSelector((state) =>
    Number(dateToNumericalDate(state.dateReducer))
  );

  // JSON.stringify causes the array to be turned into a string, making it easier to do a strict equality comparison, therefore the useEffect method will not loop infinitely.
  const completedTasksString = JSON.stringify(completedTasks);
  const ongoingTasksString = JSON.stringify(ongoingTasks);

  const prettyDate = prettifyMonthDate(String(numericalDate));

  useEffect(() => {
    dispatch(getAllTasksForDayAction(numericalDate));
  }, [dispatch, numericalDate, ongoingTasksString, completedTasksString]);

  return (
    <div className="dashboard">
      <div className="header">
        <img
          src={leftArrowIcon}
          alt="arrow icon left"
          onClick={() => dispatch(previousDayAction(numericalDate))}
        />

        <h4 className="header-title">{prettyDate}</h4>

        <img
          src={rightArrowIcon}
          alt="arrow icon right"
          onClick={() => dispatch(nextDayAction(numericalDate))}
        />
      </div>
      <div className="dashboard-body">
        <div className="calendar-button-container">
          <Link to="/calendar">
            <button className="calendar-button">Calendar</button>
          </Link>
        </div>

        {completedTasks.length || ongoingTasks.length ? (
          <div className="lists">
            <TaskList tasks={completedTasks} listTitle={'Completed'} />
            <TaskList tasks={ongoingTasks} listTitle={'Ongoing'} />
          </div>
        ) : (
          <div>
            <h4 className="empty-title">
              You haven't planned any tasks for this day yet!
            </h4>
          </div>
        )}
        <div className="footer">
          <Link to="/create">
            <img className="icon" src={plusSignIcon} alt="plus icon"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
