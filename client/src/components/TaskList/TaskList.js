import Task from '../Task/Task';
import './TaskList.css';

export default function TaskList({ tasks, listTitle }) {
  const sortedTasks = tasks.slice().sort((a, b) => {
    return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
  });
  if (tasks.length) {
    return (
      <div className="tasklist">
        <h5 className="tasklist-title">{listTitle}</h5>
        {sortedTasks.map((task) => {
          return <Task task={task} key={task._id} />;
        })}
      </div>
    );
  } else return null;
}
