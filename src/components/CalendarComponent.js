import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function TheCalendar(props) {
  return (
    <div>
      <p>
        <h2>The Family Calendar</h2>
      </p>
      <div className="calendarStyle" style={{ height: '500pt'}}>
        <Calendar
          events={props.events}
          startAccessor="start"
          endAccessor="end"
          defaultDate={moment().toDate()}
          localizer={localizer}
        />
      </div>
    </div>
  );
}

export default TheCalendar;