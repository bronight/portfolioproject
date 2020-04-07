import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import '../styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const mapStateToProps = state => {
    return {
        events: state.events
    };
};

class TheCalendar extends Component {
    render() {
        return (
          <div>
            <p>
              <h2>The Family Calendar</h2>
            </p>
            <div className="calendarStyle" style={{ height: '500pt'}}>
              <Calendar
                events={this.props.events}
                startAccessor="start"
                endAccessor="end"
                defaultDate={moment().toDate()}
                localizer={localizer}
              />
            </div>
          </div>
        );
      }
}

export default withRouter(connect(mapStateToProps)(TheCalendar));