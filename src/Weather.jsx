import React, {Component} from 'react';

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        <ul className="weather-items">
          <li className="temp">
            <span className="degrees">60°</span>
            <img src="foo.png" alt="" className="weather-icon"/>
          </li>
          <li className="summary">Partly cloudy until tomorrow morning</li>
          <li className="precipitation">
            <img src="rain.png" alt="" className="precipitation-icon"/>
            <span className="percentage">5%</span>
          </li>
        </ul>
      </div>
    );
  }
}
export default Weather;
