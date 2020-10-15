import React from "react";
import { useSelector } from 'react-redux';
import { selectedWeather } from "../../state";
import DataDisplay from "./DataDisplay";
import Temprature from "./Temprature";

//Build weather details component. It should show the current Date, City Name, Current time & temperature details. 
//“Begin with Static Data and later bind with JSON dynamic data”
export default function WeatherDetail({ showForecast }) {
  const weather = useSelector(selectedWeather);
  if (!weather) {
    return <div></div>
  }
  const { currentdate, currenttime, forecast, name: city } = weather;

  const currentWeather = forecast.filter(x => x.Date === currentdate)[0];
  console.log(forecast, currentdate, currenttime);
  return (
    <div className="weather-tile">
      <div>
        <DataDisplay label="Current Date" value={currentdate} />
        <br />
        <DataDisplay label="City Name:" value={city} />
        <br />
        <DataDisplay label="Current time" value={currenttime} />
      </div>
      <br />
      {currentWeather && <Temprature {...currentWeather} />}
      <br />
      {showForecast && <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Time</td>
            <td>Temprature</td>
            <td>Feels</td>
          </tr>
        </thead>
        <tbody>
          {forecast.filter(x => x.Date !== currentdate).map((f, i) => <tr key={i}>
            <td>{f.Date}</td>
            <td>{f.Time}</td>
            <td>{f.temprature}</td>
            <td>{f.feels}</td>
          </tr>)}
        </tbody>
      </table>}
    </div>)
}