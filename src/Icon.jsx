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

const PropTypes = {
  // The id/name of the icon
  name: React.PropTypes.string,
};

// Icons are from http://graphicburger.com/61-outlined-weather-icons/
export default class Icon extends Component {
  render() {
    let weatherName = this.props.name;
    if (USE_UNICODE_ICONS) {
      return <span className="weather-icon">{WEATHER_ICON[weatherName]}</span>
    } else {
      return <img src={`images/${weatherName}.svg`}/>;
    }
  }

  /**
   * Returns the icon name converted from wunderground to our icon set.
   * @param wundergroundIconName
   * @see https://www.wunderground.com/weather/api/d/docs?d=resources/icon-sets&MR=1
   */
  static getIconNameFromWundergroundIconName(wundergroundIconName) {
    if (!wundergroundIconName) {
      return null;
    }

    // Prefixes the icon array with `nt_`
    let plusNT = (iconArray) => {
      return iconArray.concat(iconArray.map(icon => 'nt_' + icon));
    };

    const CLOUD_ICONS = plusNT(['cloudy', 'fog', 'hazy', 'cloudy']);
    const SUN_ICONS = plusNT(['clear', 'sunny']);
    const PARTIAL_SUN_ICONS = plusNT(['mostlycloudy', 'mostlysunny', 'partlycloudy']);
    const RAIN_ICONS = plusNT(['chancerain', 'rain']);
    const THUNDERSTORM_ICONS = plusNT(['chancetstorms', 'tstorms']);
    const SNOW_ICONS = plusNT(['chanceflurries', 'chancesleet', 'chancesnow', 'flurries', 'sleet', 'snow']);

    // Please excuse the forEach
    const iconMap = {};
    CLOUD_ICONS.forEach(k => iconMap[k] = 'cloud');
    SUN_ICONS.forEach(k => iconMap[k] = 'sun');
    PARTIAL_SUN_ICONS.forEach(k => iconMap[k] = 'partial_sun');
    RAIN_ICONS.forEach(k => iconMap[k] = 'rain');
    THUNDERSTORM_ICONS.forEach(k => iconMap[k] = 'thunderstorms');
    SNOW_ICONS.forEach(k => iconMap[k] = 'snow');

    return iconMap[wundergroundIconName];
  }
}

Icon.PropTypes = PropTypes;