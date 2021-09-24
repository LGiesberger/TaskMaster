import { useEffect } from 'react';
import moment from 'moment';
import Task from '../Task/Task';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasksAction } from '../../redux/actions/taskActions';
import { Link } from 'react-router-dom';
import plusSignIcon from '../../images/plus.svg';
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state);
  const numericalDate = Number(moment().format('YYYYMMDD'));

  useEffect(() => {
    dispatch(getAllTasksAction(numericalDate));
  }, [tasks]);

  return (
    // TODO: Create Done/Open tasks
    <div className="dashboard">
      <div className="header">
        <h4 className="header-title">{moment().format('MMMM Do')}</h4>
        <Link to="/create">
          <img className="icon" src={plusSignIcon}></img>
        </Link>
      </div>
      <div className="tasklist">
        {tasks.map((task) => {
          return <Task task={task} key={task._id} />;
        })}
      </div>
    </div>
  );
}
