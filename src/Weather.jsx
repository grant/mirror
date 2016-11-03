import React, {Component} from 'react';
import Icon from './Icon.jsx';
import WeatherFetcher from './WeatherFetcher.jsx';

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      weather: {
        feelslike_f: -1,
      },
    };
  }

  componentDidMount() {
    this.fetchWeather(weather => {
      this.setState({
        loading: false,
        weather,
      })
    });
  }

  render() {
    const degrees = Math.round(this.state.weather.feelslike_f);
    const weather = this.state.weather.weather;
    // Map from wunderground to our icon names.
    const iconName = Icon.getIconNameFromWundergroundIconName(this.state.weather.icon);

    return (
      <div className="Weather">
        <ul className="weather-items">
          <li className="temp">
            <span className="degrees">{degrees}
              <span className="degree">°</span>
            </span>
            <Icon name={iconName}/>
          </li>
          <li className="summary">{weather}</li>
          <li className="precipitation">
            <span className="percentage">5%</span>
          </li>
        </ul>
      </div>
    );
  }

  /**
   * Returns a parsed version of the weather.
   *
   */
  getParsedWeather(wundergroundResponse) {
    // Don't do any parsing for now.
    return wundergroundResponse;
  }

  /**
   * Fetches the weather data from wunderground.
   */
  fetchWeather(cb) {
    var that = this;
    WeatherFetcher.fetchDemo(json => {
      that.setState({
        weather: this.getParsedWeather(json)
      });
    });
  }
}
