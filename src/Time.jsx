import React, {Component} from 'react';

class Time extends Component {
  render() {
    return (
      <ul className="Time">
        <li className="hour-minute">11:33</li>
        <li className="day-of-week">Friday</li>
        <li className="date">January 29</li>
      </ul>
    );
  }
}
export default Time;
