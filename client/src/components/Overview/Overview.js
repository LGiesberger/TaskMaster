export default function Overview({ tasks }) {
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
  } else return <h4>You haven't planned any tasks yet!</h4>;
}
