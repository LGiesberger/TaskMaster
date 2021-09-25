import moment from 'moment';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasksAction } from '../../redux/actions/taskActions';
import plusSignIcon from '../../images/plus.svg';
import TaskList from '../TaskList/TaskList';
import './App.css';

export default function App() {
  // const tasks = useSelector((state) => state.taskReducer);
  const completedTasks = useSelector((state) => state.completedReducer);
  const ongoingTasks = useSelector((state) => state.ongoingReducer);
  const dispatch = useDispatch();
  const numericalDate = Number(moment().format('YYYYMMDD'));

  useEffect(() => {
    dispatch(getAllTasksAction(numericalDate));
  }, [dispatch, numericalDate, ongoingTasks, completedTasks]);

  return (
    <div className="dashboard">
      <div className="header">
        <h4 className="header-title">{moment().format('MMMM Do')}</h4>
        <Link to="/create">
          <img className="icon" src={plusSignIcon} alt="plus icon"></img>
        </Link>
      </div>
      <TaskList tasks={completedTasks} listTitle={'Completed'} />
      <TaskList tasks={ongoingTasks} listTitle={'Ongoing'} />
    </div>
  );
}
