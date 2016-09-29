import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => 1.8 * ( temp - 273) + 52);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;
    
    return (
     <tr key={name}>
       <td><GoogleMap lon={lon} lat={lat} /></td>
       <td><Chart data={temps} style={{stroke: "#990000", strokeWidth: "1", fill: "#ededed",fillOpacity: ".25" }} units="F" /></td>
       <td><Chart data={pressures} style={{stroke: "#009900", strokeWidth: "1", fill: "#ededed",fillOpacity: ".25" }} units="hPa"/></td>
       <td><Chart data={humidities} style={{stroke: "#000099", strokeWidth: "1", fill: "#ededed",fillOpacity: ".25" }}  units="%"/></td>
     </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
