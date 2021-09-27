import plusSignIcon from '../../images/plus (1).svg';
import rightArrowIcon from '../../images/chevron-right-solid.svg';
import leftArrowIcon from '../../images/chevron-left-solid.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TaskList from '../TaskList/TaskList';
import { getAllTasksAction } from '../../redux/actions/taskActions';
import {
  nextDayAction,
  previousDayAction,
} from '../../redux/actions/dateActions';
import { numerifyDate, prettifyDate } from '../../utils/utils';

export default function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.taskReducer);
  const completedTasks = useSelector((state) => state.completedReducer);
  const ongoingTasks = useSelector((state) => state.ongoingReducer);
  const numericalDate = useSelector((state) =>
    Number(numerifyDate(state.dateReducer))
  );

  // JSON.stringify causes the array to be turned into a string, making it easier to do a strict equality comparison, therefore the useEffect method will not loop infinitely.
  const completedTasksString = JSON.stringify(completedTasks);
  const ongoingTasksString = JSON.stringify(ongoingTasks);

  const prettyDate = prettifyDate(String(numericalDate));

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
        <h4 className="header-title">{prettyDate}</h4>
        <img
          src={rightArrowIcon}
          alt="arrow icon right"
          onClick={() => dispatch(nextDayAction(numericalDate))}
        />
      </div>
      <div className="dashboard-body">
        <div className="lists">
          {tasks.length ? (
            <div>
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
        </div>
        <div className="footer">
          <Link to="/create">
            <img className="icon" src={plusSignIcon} alt="plus icon"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
