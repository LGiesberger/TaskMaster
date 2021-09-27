import moment from 'moment';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasksAction } from '../../redux/actions/taskActions';
import plusSignIcon from '../../images/plus (1).svg';
import rightArrowIcon from '../../images/chevron-right-solid.svg';
import leftArrowIcon from '../../images/chevron-left-solid.svg';
import TaskList from '../TaskList/TaskList';
import './App.css';
import {
  nextDayAction,
  previousDayAction,
} from '../../redux/actions/dateActions';

export default function App() {
  const completedTasks = useSelector((state) => state.completedReducer);
  const ongoingTasks = useSelector((state) => state.ongoingReducer);
  const numericalDate = useSelector((state) => state.dateReducer);
  const completedTasksString = JSON.stringify(completedTasks);
  const ongoingTasksString = JSON.stringify(ongoingTasks);
  // JSON.stringify causes the array to be turned into a string, making it easier to do a strict equality comparison, therefore the useEffect method will not loop infinitely.
  const dateFormatted = moment(String(numericalDate)).format('MMMM Do');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasksAction(numericalDate));
  }, [dispatch, numericalDate, ongoingTasksString, completedTasksString]);

  return (
    <div className="dashboard">
      <div className="header">
        <img
          src={leftArrowIcon}
          alt="arrow icon left"
          onClick={() => dispatch(previousDayAction(numericalDate))}
        />
        <h4 className="header-title">{dateFormatted}</h4>
        <img
          src={rightArrowIcon}
          alt="arrow icon right"
          onClick={() => dispatch(nextDayAction(numericalDate))}
        />
      </div>
      <div className="dashboard-body">
        <div className="lists">
          <TaskList tasks={completedTasks} listTitle={'Completed'} />
          <TaskList tasks={ongoingTasks} listTitle={'Ongoing'} />
        </div>
        <div className="footer">
          <Link to="/create">
            <img className="icon" src={plusSignIcon} alt="plus icon2"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
