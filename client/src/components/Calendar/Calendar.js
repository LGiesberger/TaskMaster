import Month from '../Month/Month';
import { getDates, sortDates, formatMonth } from '../../utils/utils';

export default function CalendarPage() {
  const dates = getDates(new Date(), new Date(2022, 0, 1));
  const sortedDates = sortDates(dates);

  return (
    <div className="calendar">
      {Object.values(sortedDates).map((month) => {
        return month.length ? (
          <Month
            dates={month}
            key={month[0].getMonth()}
            title={formatMonth(month[0])}
          />
        ) : null;
      })}
    </div>
  );
}
