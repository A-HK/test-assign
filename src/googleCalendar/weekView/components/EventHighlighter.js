import React, {Component} from 'react';
import moment from 'moment';
import AddEventModal from './AddEventModal';
import {generateWeekViewCoordinates} from '../../utils';
import {eventHighlighter} from '../styles';
import mockData from '../../../mockData';

class EventHighlighter extends Component {


  state = {
    showEditEventModal: false,
    eventNewStart: null,
    eventNewEnd: null,
    test: false,
    isPrivate: false,
    // normalEvent: true,
    // stretchingEvent: false,
    // allDayaEvent: false
  };

 

  /**
   * Deletes the event from the event list
  */
  deleteEvent = () => {
    this.props.onEventDelete (this.props.event.id);
    this.setState ({
      showEditEventModal: false,
    });
  };

  /**
   * Updates the event
   * @param {string} title - Updated title of the event
   */
  updateEvent = title => {
    this.props.onEventUpdate (this.props.event.id, {
      title,
      start: this.state.eventNewStart,
      end: this.state.eventNewEnd,
    });
    this.setState ({
      showEditEventModal: false,
    });
  };

  /**
   * Open the edit event modal and initializes the start and end time
   */
  openEditEventModal = () => {
    console.log (this.props.event.title);
    this.setState ({
      showEditEventModal: true,
      eventNewStart: this.props.event.start,
      eventNewEnd: this.props.event.end,
    });
  };

  /**
   * Set the updated start and end times the state of the event being edited
   * @param {arr: moment, moment} - Array containing start and end date of the event
   */
  onCurrentEventTimeChange = dates => {
    console.log ('called');
    this.setState ({
      eventNewStart: +dates[0],
      eventNewEnd: +dates[1],
    });
  };

  handleGoingChange = () => {
    this.setState((prevState) => ({
      test: !prevState.test,
    }));
  };

  handlePrivateChange = () => {
    this.setState((prevState) => ({
      isPrivate: !prevState.isPrivate,
    }));
  };

  /**
   * Closes modal and does nothing more!
   */
  closeModal = () => {
    this.setState ({
      showEditEventModal: false,
    });
  };


  render () {
    const {showEditEventModal, eventNewStart, eventNewEnd, test, isPrivate} = this.state;
  //  const test = true;
    return (
      <React.Fragment>
        <AddEventModal
          editMode={true}
          eventTitle={this.props.event.title}
          visible={showEditEventModal}
          onCancel={this.deleteEvent}
          onClose={this.closeModal}
          onOk={this.updateEvent}
          eventStart={eventNewStart}
          eventEnd={eventNewEnd}
          onTimeChange={this.onCurrentEventTimeChange}
        />
        {/* {mockData.events.map((event) => {
          return (
            <div
            onClick={this.openEditEventModal}
        
          >
            {event.title} <br />
            <span style={{fontSize: 10}}>
              {moment (event.start).format ('hh:mm a')}
              {' '}
              -
              {' '}
              {moment (event.end).format ('hh:mm a')}
            </span>
          </div>
          )
        })

        } */}
        
        <div
       
          style={{
            ...generateWeekViewCoordinates (
              this.props.event,
              this.props.startDate
            ),
            ...eventHighlighter,
            
            "backgroundColor" : test? "green" : "blue",
            "height" : "70px"
          }}
        >
          
          {!isPrivate && this.props.event.title} <br />
          <span style={{fontSize: 10}}>
            {moment (this.props.event.start).format ('hh:mm a')}
            {' '}
            -
            {' '}
            {moment (this.props.event.end).format ('hh:mm a')}
          </span>
          <br />
          <button
           onClick={()=>{
            this.openEditEventModal();
          }}
          style={{
            "backgroundColor": "black"
          }}
          >Update event
          </button>
          <button
           onClick={()=>{
            this.handlePrivateChange();
          }}
          style={{
            "backgroundColor": "black"
          }}
          >Mark as private
          </button>
          <button
          onClick={()=>{
            this.handleGoingChange(test)
          }}
          style={{
            "backgroundColor": "black"
          }}
          >Mark as going
          </button>
        </div>

       
      </React.Fragment>
    );
  }
}

export default EventHighlighter;
