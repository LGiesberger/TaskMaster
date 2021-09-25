import moment from 'moment';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasksAction } from '../../redux/actions/taskActions';
import plusSignIcon from '../../images/plus.svg';
import TaskList from '../TaskList/TaskList';
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const completedTasks = useSelector((state) => state.completedTasks);
  const ongoingTasks = useSelector((state) => state.ongoingTasks);
  const numericalDate = Number(moment().format('YYYYMMDD'));

  useEffect(() => {
    dispatch(getAllTasksAction(numericalDate));
  }, []);

  return (
    <div className="dashboard">
      <div className="header">
        <h4 className="header-title">{moment().format('MMMM Do')}</h4>
        <Link to="/create">
          <img className="icon" src={plusSignIcon}></img>
        </Link>
      </div>
      <TaskList tasks={completedTasks} listTitle={'Completed'} />
      <TaskList tasks={ongoingTasks} listTitle={'Ongoing'} />
    </div>
  );
}
