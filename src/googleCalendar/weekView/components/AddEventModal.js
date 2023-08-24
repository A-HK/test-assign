import {Modal, Button} from 'antd';
import React, {Component} from 'react';
import AddEvent from './AddEvent';

class AddEventModal extends Component {
  
  state = {
    title: '',
    going: false,
  };

  /**
   * To show the title auto fill and
   * re-initialize the title on adding new event
   */
  static getDerivedStateFromProps (nextProps) {
    if (nextProps.eventTitle) {
      return {
        title: nextProps.eventTitle,
      };
    } else {
      return {
        title: '',
      };
    }
  }

  /**
   * Sets the title in the state
   * @param {event} event - JS/React event
   */
  handleTitleChange = event => {
    this.setState ({
      title: event.target.value,
    });
  };

  /**
   * Updates the event
   */
  handleOk = () => {
    this.props.onOk (this.state.title);
  };

  handleGoingChange = () => {
    this.setState((prevState) => ({
      going: !prevState.going,
    }));
  };

  render () {
    const {title, going} = this.state;
    const eventColor = going ? 'green' : 'blue';

    return (
      <Modal
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.props.onClose}
        footer={[
          <Button key="back" onClick={this.props.onCancel}>
            {this.props.editMode ? 'Delete' : 'Cancel'}
          </Button>,
          <Button key="submit" type="primary" onClick={this.handleOk}>
            {this.props.editMode ? 'Update Event' : 'Add Event'}
          </Button>,
          
        ]}
      >
          <div style={{ color: eventColor }}>
          {/* Checkbox for "going" */}
          <label>
            <input
              type="checkbox"
              checked={going}
              onChange={this.handleGoingChange}
            />
            Going
          </label>
        <AddEvent
          title={title}
          onTitleChange={this.handleTitleChange}
          start={this.props.eventStart}
          end={this.props.eventEnd}
          onTimeChange={this.props.onTimeChange}
          going={going}
        />
            </div>
      </Modal>
    );
  }
}

export default AddEventModal;