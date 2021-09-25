import Task from '../Task/Task';
import './TaskList.css';

export default function TaskList({ tasks, listTitle }) {
  if (tasks.length) {
    return (
      <div className="tasklist">
        <h5 className="tasklist-title">{listTitle}</h5>
        {tasks.map((task) => {
          return <Task task={task} key={task._id} />;
        })}
      </div>
    );
  } else return null;
}
