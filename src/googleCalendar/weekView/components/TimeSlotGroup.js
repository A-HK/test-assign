import React from 'react';
import {Row, Col} from 'antd';

const style = {
  col: {
    border: '#e0e0e0 1px solid',
  },
  weekDays: {
    height: 100,
  },
  weekDayName: {
    fontSize: 12,
    lineHeight: '32px',
    textTransform: 'capitalize',
    color: '#757575',
    marginLeft: 10,
  },
  slot: {
    height: 40,
    cursor: 'pointer',
  },
  time: {
    fontSize: 10,
    color: '#212121',
  },
};

function TimeSlotGroup (props) {
  return (
    <Row type="flex" key={props.time}>
      <Col style={{...style.col, ...style.slot}} span={3}>
        <span style={style.time}>{props.time}</span>
      </Col>
      {props.weekDays.map (day => (
        <Col
          key={day.dateStamp}
          style={{...style.col, ...style.slot}}
          span={3}
          onClick={() => props.openAddEventModal (day.dateStamp, props.time)}
        />
      ))}
    </Row>
  );
}

export default TimeSlotGroup;
