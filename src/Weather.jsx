import React, {Component} from 'react';
import Icon from './Icon.jsx';

export default class Weather extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="Weather">
        <ul className="weather-items">
          <li className="temp">
            <span className="degrees">60<span className="degree">°</span></span>
            <Icon />
          </li>
          <li className="summary">Partly cloudy until tomorrow morning</li>
          <li className="precipitation">
            <span className="percentage">5%</span>
          </li>
        </ul>
      </div>
    );
  }
}
