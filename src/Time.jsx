import React, {Component} from 'react';
var dateFormat = require('dateformat');

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/**
 * Displays the current time
 */
class Time extends Component {
  constructor(props) {
    super();
    this.state = {
      time: new Date()
    };

    // Update the time every second
    setInterval(this.updateTime.bind(this), 1000);
  }

  updateTime() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    const now = new Date();
    const hourMinute = dateFormat(now, 'h:MM');
    const dayOfWeek = DAYS_OF_WEEK[dateFormat(now, 'N')];
    const date = dateFormat(now, 'mmmm d');
    return (
      <ul className='Time'>
        <li className='hour-minute'>{hourMinute}</li>
        <li className="day-and-date">
          <div className='day-of-week'>{dayOfWeek}</div>
          <div className='date'>{date}</div>
        </li>
      </ul>
    );
  }
}
export default Time;
