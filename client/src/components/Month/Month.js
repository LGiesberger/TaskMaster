export default function Month(props) {
  function handleClick(date) {
    // Button click functionality
  }

  return (
    <div className="month">
      <h4 className="month-title">{props.title}</h4>
      {props.dates.map((date) => {
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
  );
}
