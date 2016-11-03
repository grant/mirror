/**
 * Fetches weather data.
 *
 * There should be 500 free API calls per day.
 * @see https://github.com/InitialState/wunderground-sensehat/wiki/Part-1.-How-to-Use-the-Wunderground-API
 */
export default class WeatherFetcher {
  /**
   * Fetches real weather data
   */
  static fetch(cb) {
    // We use a CORS proxy because the API doesn't allow CORS.
    const CORS_PROXY = 'https://crossorigin.me/';
		const WEATHER_API_URL = 'http://api.wunderground.com/api/ac079d5b3e302ce9/conditions/q/CA/San_Francisco.json';
		fetch(CORS_PROXY + WEATHER_API_URL)
			.then(jsonData => jsonData.json())
			.then(json => {
				this.setState({
					weather: this.getParsedWeather(json)
				});
			});
  }

  /**
   * Fetches demo data.
   */
  static fetchDemo(cb) {
    cb({
      "image":{
        "url":"http://icons.wxug.com/graphics/wu2/logo_130x80.png",
        "title":"Weather Underground",
        "link":"http://www.wunderground.com"
      },
      "display_location":{
        "full":"San Francisco, CA",
        "city":"San Francisco",
        "state":"CA",
        "state_name":"California",
        "country":"US",
        "country_iso3166":"US",
        "zip":"94102",
        "magic":"1",
        "wmo":"99999",
        "latitude":"37.77999878",
        "longitude":"-122.41999817",
        "elevation":"60.0"
      },
      "observation_location":{
        "full":"SOMA, San Francisco, California",
        "city":"SOMA, San Francisco",
        "state":"California",
        "country":"US",
        "country_iso3166":"US",
        "latitude":"37.778488",
        "longitude":"-122.408005",
        "elevation":"23 ft"
      },
      "estimated":{

      },
      "station_id":"KCASANFR131",
      "observation_time":"Last Updated on November 2, 7:56 PM PDT",
      "observation_time_rfc822":"Wed, 02 Nov 2016 19:56:01 -0700",
      "observation_epoch":"1478141761",
      "local_time_rfc822":"Wed, 02 Nov 2016 19:56:03 -0700",
      "local_epoch":"1478141763",
      "local_tz_short":"PDT",
      "local_tz_long":"America/Los_Angeles",
      "local_tz_offset":"-0700",
      "weather":"Partly Cloudy",
      "temperature_string":"61.3 F (16.3 C)",
      "temp_f":61.3,
      "temp_c":16.3,
      "relative_humidity":"69%",
      "wind_string":"Calm",
      "wind_dir":"North",
      "wind_degrees":-9999,
      "wind_mph":0,
      "wind_gust_mph":0,
      "wind_kph":0,
      "wind_gust_kph":0,
      "pressure_mb":"1022",
      "pressure_in":"30.17",
      "pressure_trend":"0",
      "dewpoint_string":"51 F (11 C)",
      "dewpoint_f":51,
      "dewpoint_c":11,
      "heat_index_string":"NA",
      "heat_index_f":"NA",
      "heat_index_c":"NA",
      "windchill_string":"NA",
      "windchill_f":"NA",
      "windchill_c":"NA",
      "feelslike_string":"61.3 F (16.3 C)",
      "feelslike_f":"61.3",
      "feelslike_c":"16.3",
      "visibility_mi":"10.0",
      "visibility_km":"16.1",
      "solarradiation":"0",
      "UV":"0.0",
      "precip_1hr_string":"0.00 in ( 0 mm)",
      "precip_1hr_in":"0.00",
      "precip_1hr_metric":" 0",
      "precip_today_string":"0.00 in (0 mm)",
      "precip_today_in":"0.00",
      "precip_today_metric":"0",
      "icon":"partlycloudy",
      "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "forecast_url":"http://www.wunderground.com/US/CA/San_Francisco.html",
      "history_url":"http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCASANFR131",
      "ob_url":"http://www.wunderground.com/cgi-bin/findweather/getForecast?query=37.778488,-122.408005",
      "nowcast":""
    });
  }
}
