import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchEvents = () => dispatch => {    
    return fetch(baseUrl + 'events')
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                throw error;
            }
        },
        error => {
            var errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(events => dispatch(addEvents(events)))
    .catch(error => dispatch(eventsFailed(error.message)));
};

export const eventsFailed = errMess => ({
    type: ActionTypes.EVENTS_FAILED,
    payload: errMess
});

export const addEvent = event => ({
    type: ActionTypes.ADD_EVENT,
    payload: event
});

export const addEvents = events => ({
    type: ActionTypes.ADD_EVENTS,
    payload: events
});