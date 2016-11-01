import React, {Component} from 'react';

const USE_UNICODE_ICONS = true;
const WEATHER_ICON = Object.freeze({
  sun: '☀',
  partial_sun: '⛅',
  rain: '☔',
  thunderstorms: '⛈', // ⛈
  cloud: '☁',
  snow: '☃',
});

// Icons are from http://graphicburger.com/61-outlined-weather-icons/
export default class Icon extends Component {
  render() {
    let weatherName = 'cloud';
    if (USE_UNICODE_ICONS) {
      return <span className="weather-icon">{WEATHER_ICON[weatherName]}</span>
    } else {
      return <img src={`images/${weatherName}.svg`} />;
    }
  }

  getPrecipitationIcon() {
    return (
      <span>rain</span>
    );
  }
}