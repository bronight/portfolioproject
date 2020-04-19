import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Button, Modal, ModalBody, ModalHeader, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { postEvent } from '../redux/ActionCreators';
//import { Button } from 'react-bootstrap';
import moment from 'moment';
import '../styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const required = val => val && val.length;
const minLength = len => val => val && (val.length >= len);

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  toggleModal = () => {
    this.setState({isModalOpen: !this.state.isModalOpen});
  }

  handleSubmit(values) {
    this.toggleModal();
    this.props.postEvent(this.props.eventId, this.props.title, this.props.allDay, this.props.start, this.props.end);
  }

  render(){
    return(
        <React.Fragment>
            <Button onClick={this.toggleModal} variant="primary">
                <span className="fa fa-pencil" /> Add New Event
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}></ModalHeader>
                <ModalBody>
                  <LocalForm onSubmit={values => this.handleSubmit(values)}>
                      <Row className="form-group">
                          <Col md={12}>
                          <Control.text model=".title" id="title" name="title"
                                  placeholder="Add title"
                                  className="form-control"
                                  validators={{
                                      required, 
                                      minLength: minLength(2)
                                  }}
                              />
                              <Errors
                                  className="text-danger"
                                  model=".title"
                                  show="touched"
                                  component="div"
                                  messages={{
                                      required: 'Required',
                                      minLength: 'Must be at least 2 characters',
                                  }}
                              />
                          </Col>
                      </Row>
                      <Row className="form-group">
                        <Col>
                          <span className="fa fa-clock"></span>
                          <Control.custom type="date" id="eventStart" name="eventStart" value={new Date().toDateString()} />
                        </Col>
                      </Row>
                      <Row className="form-group">
                        <Col md={{size: 4, offset: 2}}>
                            <div className="form-check">
                                <Label check>
                                    <Control.checkbox
                                        model=".allDay"
                                        name="allDay"
                                        className="form-check-input"
                                    /> {' '}
                                    <strong>Is this an all day event?</strong>
                                </Label>
                            </div>
                        </Col>
                      </Row>
                      <Row className="form-group">
                        <Col md={12}>
                          <span className="fa fa-align-justify"></span>
                            <Control.textarea model=".text" id="text" name="text"
                                rows="6"
                                className="form-control"
                            />
                        </Col>
                      </Row>
                      <Button type="submit" color="primary">
                          Submit
                      </Button>
                  </LocalForm>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
  }
}

function TheCalendar(props) {
  console.log(props);
  return (
    <div>
      <div>
        <EventForm eventId={props.events[props.events.length + 1]}
         postEvent={postEvent} />
      </div>
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